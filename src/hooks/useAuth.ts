import {useContext} from "react";
import {AuthContext} from "../UserContext.tsx";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthContextProvider');
    }

    const login = async (tokens: { access_token: string, refresh_token: string }, userInfo: RedactedUser) => {
        context.setTokens(tokens.access_token, tokens.refresh_token);
        context.setUser(userInfo);
    };

    const logout = () => {
        context.setTokens(null, null);
        context.setUser(null);
    };

    return {
        user: context.user,
        refresh_token: context.refresh_token,
        access_token: context.access_token,
        login,
        logout
    };
};