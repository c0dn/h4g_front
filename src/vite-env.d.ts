/// <reference types="vite/client" />

interface RedactedUser {
    uuid: string;
    name: string;
    email: string;
    role: string;
    active: boolean
}

interface LoginResponse {
    user: RedactedUser;
    access_token: string;
    refresh_token: string;
}

interface DetailedUser {
    uuid: string;
    resident_id: string;
    email: string;
    name: string;
    phone: string;
    balance: number;
    dob: string;
    school: string;
}

interface CreateUserRequest {
    resident_id: string;
    email: string;
    name: string;
    phone: string;
    role: string;
    address: {
        bunk: string;
        floor: number;
        unit: number;
    };
    dob: string;
    school: string;
}


interface UpdateUserRequest {
    resident_id?: string;
    email?: string;
    name?: string;
    phone?: string;
    role?: string;
    address?: {
        bunk: string;
        floor: number;
        unit: number;
    };
    dob?: string;
    school?: string;
}