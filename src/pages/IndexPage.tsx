import {useAuth} from "../hooks/useAuth.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function IndexPage() {
    const { access_token, refresh_token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!access_token || !refresh_token) {
            navigate('/login');
        } else {
            navigate('/app');
        }
    });

    return <div></div>;
}