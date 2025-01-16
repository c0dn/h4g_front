import {useMemo, useState} from "react";
import {AxiosError} from "axios";
import {baseAxiosClient} from "../libs/requestClient.ts";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts";

export default function Login() {
    const [residentID, setResidentID] = useState("");
    const [password, setPassword] = useState("");
    const [errorText, setErrorText] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const {login} = useAuth();

    const loginHandle = useMutation({
        mutationFn: async ({residentID, password}: {
            residentID: string,
            password: string
        }): Promise<LoginResponse> => {
            try {
                const response = await baseAxiosClient.post("/auth/login", {
                    resident_id: residentID,
                    password: password,
                });
                return response.data;
            } catch (err) {
                if (err instanceof AxiosError) {
                    if (err.response?.status === 401) {
                        setErrorText("Invalid resident ID or password");
                    }
                }
                throw err;
            }
        },
    });

    const isFormValid = useMemo(() => {
        return residentID !== '' && password !== '';
    }, [residentID, password]);

    const handleLogin = () => {
        setIsLoading(true);
        loginHandle.mutate(
            {residentID, password},
            {
                onSuccess: async (data) => {
                    await login({
                        access_token: data.access_token,
                        refresh_token: data.refresh_token,
                    }, data.user)
                    navigate('/app');
                    setIsLoading(false);
                },
                onError: () => {
                    setIsLoading(false);
                }
            }
        )
    }

    return (
        <div className="flex min-h-full flex-1 h-screen">
            <div className="flex flex-1 flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="flex flex-col items-center mt-20">
                    <img
                        alt="Muhammadiyah Welfare Home"
                        src="/src/img/logo2.png"
                        className="h-25 w-auto mx-auto"
                    />
                </div>
                <div className="mt-10 mx-auto w-full h-full max-w-sm lg:w-96">
                    <h2 className="mb-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin()
                        }} className="space-y-6">
                            <div>
                                <label htmlFor="resident-id" className="block text-sm/6 font-medium text-gray-900">
                                    Resident ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="resident-id"
                                        onChange={(e) => setResidentID(e.currentTarget.value)}
                                        value={residentID}
                                        required
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                        value={password}
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm/6">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading || !isFormValid}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    alt=""
                    src="/src/img/mwh.jpg?auto=format&fit=crop&w=1908&q=80"
                    className="absolute inset-0 size-full object-cover"
                />
            </div>
        </div>
    )
}