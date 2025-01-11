'use client';
import React, {createContext, FC, useCallback, useEffect, useState} from "react";
import {retrieveLaunchParams} from "@tma.js/sdk";
import axios from "axios";
import {baseAxiosClient} from "./libs/requestClient.ts";

interface AuthContext {
    user: RedactedUser | null;
    refresh_token: string | null;
    access_token: string | null;
}

export const AuthContext = createContext<AuthContext>({
    user: null,
    refresh_token: null,
    access_token: null,
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


export const AuthContextProvider: FC<Props> = ({children}) => {
    const [user, setUser] = useState<RedactedUser | null>(null);
    const [currentAccessToken, setCurrentAccessToken] = useState<string | null>(null);
    const [currentRefreshToken, setCurrentRefreshToken] = useState<string | null>(null);
    const [isUserNew, setIsUserNew] = useState<boolean | null>(null);
    const [isFirstMount, setIsFirstMount] = useState(true);


    return (
        <AuthContext.Provider value={{
            user,
            access_token: currentAccessToken,
            refresh_token: currentRefreshToken,
        }}>
            {children}
        </AuthContext.Provider>
    );
};