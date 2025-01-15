import React, { createContext, FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { baseAxiosClient } from "./libs/requestClient.ts";
import { useNavigate } from "react-router-dom";

interface AuthContext {
    user: RedactedUser | null;
    refresh_token: string | null;
    access_token: string | null;
    setUser: (user: RedactedUser | null) => void;
    setTokens: (access_token: string | null, refresh_token: string | null) => void;
}

export const AuthContext = createContext<AuthContext>({
    user: null,
    refresh_token: null,
    access_token: null,
    setUser: () => {
    },
    setTokens: () => {
    },
});

interface Props {
    children: React.ReactNode;
}

interface NewTokens {
    access_token: string;
    refresh_token: string;
}

let API_SERVER = import.meta.env.VITE_API_URL
if (!API_SERVER) {
    API_SERVER = "http://localhost:3000"
}


export const AuthContextProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<RedactedUser | null>(null);
    const [currentAccessToken, setCurrentAccessToken] = useState<string | null>(null);
    const [currentRefreshToken, setCurrentRefreshToken] = useState<string | null>(null);
    const [isFirstMount, setIsFirstMount] = useState(true);
    const navigate = useNavigate();

    const setTokens = useCallback((newAccessToken: string | null, newRefreshToken: string | null) => {
        let isRefreshing = false;
        let failedQueue: Array<{
            resolve: (value: string | null | PromiseLike<string>) => void,
            reject: (reason?: string) => void
        }> = [];

        const processQueue = (error: string | null, token: string | null = null) => {
            failedQueue.forEach(prom => {
                if (error) {
                    prom.reject(error);
                } else {
                    prom.resolve(token);
                }
            });

            failedQueue = [];
        };

        if (typeof window === 'object') {
            if (newAccessToken) {
                setCurrentAccessToken(newAccessToken);
                sessionStorage.setItem('access_token', newAccessToken);
                baseAxiosClient.interceptors.request.clear()
                baseAxiosClient.interceptors.request.use(config => {
                    config.headers.Authorization = `Bearer ${newAccessToken}`;
                    return config;
                });
            } else {
                sessionStorage.removeItem('access_token');
            }

            if (newRefreshToken) {
                setCurrentRefreshToken(newRefreshToken);
                baseAxiosClient.interceptors.response.clear()
                baseAxiosClient.interceptors.response.use(response => response, async error => {
                    const originalRequest = error.config;
                    if (error.response?.status === 403 && !originalRequest._retry) {
                        if (isRefreshing) {
                            try {
                                const token = await new Promise((resolve, reject) => {
                                    failedQueue.push({ resolve, reject });
                                });
                                originalRequest.headers.Authorization = `Bearer ${token}`;
                                return await baseAxiosClient(originalRequest);
                            } catch (reason_1) {
                                return Promise.reject(reason_1);
                            }
                        }

                        originalRequest._retry = true;
                        isRefreshing = true;

                        const localAxiosClient = axios.create({
                            baseURL: `${API_SERVER}`,
                            headers: {
                                'Authorization': `Bearer ${newRefreshToken}`,
                                'Content-Type': 'application/json',
                            },
                            withCredentials: true
                        });

                        try {
                            try {
                                const { data } = await localAxiosClient.post('/auth/refresh');
                                setTokens(data.access_token, data.refresh_token);
                                processQueue(null, data.access_token);
                                originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
                                return await baseAxiosClient(originalRequest);
                            } catch (error_2) {
                                processQueue(error_2, null);
                                return await Promise.reject(error_2);
                            }
                        } finally {
                            isRefreshing = false;
                        }
                    }

                    return Promise.reject(error);
                });
                localStorage.setItem('refresh_token', newRefreshToken)
            } else {
                localStorage.removeItem('refresh_token');
            }
        }
    }, []);

    const getNewTokens = useCallback(async (refreshToken: string | null): Promise<void> => {
        if (refreshToken) {
            const localAxiosClient = axios.create({
                baseURL: `${API_SERVER}`,
                headers: {
                    'Authorization': `Bearer ${refreshToken}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            const r = await localAxiosClient.post('/auth/refresh')
            const { access_token, refresh_token }: NewTokens = r.data
            return new Promise((resolve) => {
                setTokens(access_token, refresh_token);
                setTimeout(resolve, 0);
            });
        } else {
            throw Error("No refresh token")
        }
    }, [setTokens])


    const setUserInfo = useCallback((user_info: string | RedactedUser) => {
        if (typeof window === 'object') {
            if (typeof user_info === "string") {
                setUser(JSON.parse(user_info));
                localStorage.setItem('user_info', user_info)
            } else {
                setUser(user_info);
                localStorage.setItem('user_info', JSON.stringify(user_info));
            }

        }

    }, []);


    useEffect(() => {
        const authenticateUser = async () => {
            const storedUser = localStorage.getItem('user_info');
            const storedAccessToken = sessionStorage.getItem('access_token');
            const storedRefreshToken = localStorage.getItem('refresh_token');

            if (typeof window === 'object') {
                if (storedUser) setUserInfo(storedUser);
                if (!storedRefreshToken && !storedAccessToken) {
                    navigate("/app/users")
                } else if (!storedAccessToken) {
                    if (isFirstMount) {
                        navigate("/login")
                    } else {
                        getNewTokens(storedRefreshToken).catch(async () => {
                            navigate("/login")
                        });
                    }
                } else {
                    setTokens(storedAccessToken, storedRefreshToken);
                }
                setIsFirstMount(false);
            }
        }
        authenticateUser().then(() => {
        })
    }, [getNewTokens, isFirstMount, setTokens, setUserInfo]);


    return (
        <AuthContext.Provider value={{
            user,
            access_token: currentAccessToken,
            refresh_token: currentRefreshToken,
            setUser,
            setTokens,
        }}>
            {children}
        </AuthContext.Provider>
    );
};