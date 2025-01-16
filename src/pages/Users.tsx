import {Heading} from "../components/heading";
import {useAuth} from "../hooks/useAuth";
import {useQuery, useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {Button} from '../components/button'
import {useMemo, useState} from "react";
import {baseAxiosClient} from "../libs/requestClient";
import {Strong, Text} from "../components/text.tsx";

export default function Users() {
    const {access_token, logout} = useAuth();
    const [errorText, setErrorText] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const navigate = useNavigate();

    const usersReq = useQuery({
        queryKey: ["users"],
        staleTime: 30,
        queryFn: async () => {
            try {
                const res = await baseAxiosClient.get('/users/')
                return res.data as DetailedUser[];
            } catch (err) {
                if (err instanceof AxiosError && err.response?.status === 403) {
                    logout();
                    navigate("/login");
                }
                throw err;
            }
        },
        enabled: !!access_token
    });

    const createUserHandle = useMutation({
        mutationFn: async (userData: CreateUserRequest): Promise<DetailedUser> => {
            try {
                const response = await baseAxiosClient.post("/users/", userData);
                return response.data;
            } catch (err) {
                if (err instanceof AxiosError && err.response?.status === 400) {
                    setErrorText("Invalid user data");
                }
                throw err;
            }
        },
    });

    const updateUserHandle = useMutation({
        mutationFn: async ({uuid, data}: { uuid: string, data: UpdateUserRequest }): Promise<void> => {
            try {
                await baseAxiosClient.patch(`/users/${uuid}`, data);
            } catch (err) {
                if (err instanceof AxiosError && err.response?.status === 400) {
                    setErrorText("Invalid update data");
                }
                throw err;
            }
        },
    });

    return (
        <div>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto lg:px-4">
                    <Heading>Users</Heading>
                </div>
                <div className="flex w-full justify-end items-center px-4 py-2">
                    <div className="flex relative w-1/5 bg-gray-100 rounded-lg mr-2">
                        <input
                            type="text"
                            placeholder="Search user..."
                            className="w-full bg-transparent py-1 pl-10 text-medium font-normal text-gray-900 focus:outline-none"
                        />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -left-0.5 top-1/2 transform -translate-y-1/2 h-5 w-5 ml-2 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m1.9-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <Button
                            color="blue"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Add User...
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-6 flow-root">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full">
                            <thead className="border border-t-0 border-x-0">
                            <tr>
                                <th scope="col"
                                    className="py-3 lg:px-4 text-left text-medium font-semibold text-gray-900">
                                    Resident ID
                                </th>
                                <th scope="col"
                                    className="py-3 pl-4 pr-3 text-left text-medium font-semibold text-gray-900 sm:pl-0">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-medium font-semibold text-gray-900">
                                    Date of Birth
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-medium font-semibold text-gray-900">
                                    School
                                </th>
                                <th scope="col" className="px-3 py-3 text-left text-medium font-semibold text-gray-900">
                                    Balance
                                </th>
                                <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">View</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 px-2">
                            {usersReq.isError ? (
                                <tr>
                                    <td colSpan={6}>
                                        <div className="flex items-center justify-center">
                                            <Text><Strong>Session expired or account disabled, restart the app!</Strong></Text>
                                        </div>
                                    </td>
                                </tr>
                            ) : usersReq.data?.length === 0 ? (
                                <tr>
                                    <td colSpan={6}>
                                        <div className="flex items-center justify-center">
                                            <p className="sm:text-sm/5 text-base/4 text-red-500">No users found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                <>
                                    {useMemo(() => {
                                        if (!usersReq.data) return null;
                                        const startIndex = (currentPage - 1) * itemsPerPage;
                                        const paginatedData = usersReq.data.slice(startIndex, startIndex + itemsPerPage);
                                        return paginatedData.map((user, index) => (
                                            <tr key={user.uuid} className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                                                <td className="whitespace-nowrap py-2 text-sm lg:px-4 text-gray-900">
                                                    {user.resident_id}
                                                </td>
                                                <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0">
                                                    <div className="flex items-center">
                                                        <div className="size-11 shrink-0">
                                                            <img
                                                                src="/src/img/profile-photo.jpg"
                                                                alt=""
                                                                className="size-11 rounded-full"
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">{user.name}</div>
                                                            <div className="mt-1 text-gray-500">{user.email}</div>
                                                            <div className="mt-1 text-gray-500">{user.phone}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">
                                                    {user.dob}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">
                                                    {user.school}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">
                                                    {user.balance}
                                                </td>
                                                <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <button
                                                        className="inline-flex items-center text-zinc-500 hover:text-zinc-900 p-4"
                                                        aria-label={`View details of ${user.name}`}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="2"
                                                            stroke="currentColor"
                                                            className="w-5 h-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">{`, ${user.name}`}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ));
                                    }, [usersReq.data, currentPage, itemsPerPage])}
                                </>
                            )}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={6} className="py-3 text-sm text-gray-600">
                                    <div className="flex justify-between items-center">
                                        <p className="px-3.5">
                                            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, usersReq.data?.length || 0)} to{' '}
                                            {Math.min(currentPage * itemsPerPage, usersReq.data?.length || 0)} out of{' '}
                                            {usersReq.data?.length || 0} results
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 mr-2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                                    />
                                                </svg>
                                            </button>
                                            <div className="flex items-center gap-1">
                                                {(() => {
                                                    const totalPages = Math.ceil((usersReq.data?.length || 0) / itemsPerPage);
                                                    let pages = [];
                                                    
                                                    if (totalPages <= 5) {
                                                        pages = Array.from({length: totalPages}, (_, i) => i + 1);
                                                    } else {
                                                        if (currentPage <= 3) {
                                                            pages = [1, 2, 3, '...', totalPages];
                                                        } else if (currentPage >= totalPages - 2) {
                                                            pages = [1, '...', totalPages - 2, totalPages - 1, totalPages];
                                                        } else {
                                                            pages = [1, '...', currentPage, '...', totalPages];
                                                        }
                                                    }

                                                    return pages.map((page, index) => (
                                                        <button
                                                            key={index}
                                                            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                                                                page === currentPage
                                                                    ? 'bg-blue-600 text-white'
                                                                    : 'text-zinc-500 hover:text-white hover:bg-blue-600'
                                                            } ${typeof page === "number" ? "cursor-pointer" : "cursor-default"}`}
                                                            disabled={typeof page !== "number"}
                                                            onClick={() => typeof page === "number" && setCurrentPage(page)}
                                                        >
                                                            {page}
                                                        </button>
                                                    ));
                                                })()}
                                            </div>
                                            <button
                                                onClick={() => setCurrentPage(prev => prev + 1)}
                                                disabled={currentPage >= Math.ceil((usersReq.data?.length || 0) / itemsPerPage)}
                                                className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="w-5 h-5 ml-2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
