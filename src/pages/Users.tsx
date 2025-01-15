import {Heading} from "../components/heading"
import {useAuth} from "../hooks/useAuth.ts";
import {baseAxiosClient} from "../libs/requestClient.ts";
import {useMutation, useQuery} from "@tanstack/react-query";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import {Strong, Text} from "../components/text.tsx";
import {useState} from "react";

/*const users = [
    {
        residentId: 'A532-001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234 5678',
        balance: 50000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2005-06-15',
        school: 'Ang Mo Kio Secondary School'
    },
    {
        residentId: 'A532-002',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '9876 5432',
        balance: 75000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2006-03-22',
        school: 'Bukit Panjang Secondary School'
    },
    {
        residentId: 'A532-003',
        name: 'Robert Brown',
        email: 'robert.brown@example.com',
        phone: '4562 8901',
        balance: 20000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2004-11-30',
        school: 'Clementi Town Secondary School'
    },
    {
        residentId: 'A532-004',
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        phone: '3216 5498',
        balance: 100000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2005-09-12',
        school: 'Dunman Secondary School'
    },
    {
        residentId: 'A532-005',
        name: 'Michael Johnson',
        email: 'michael.johnson@example.com',
        phone: '6543 2109',
        balance: 35000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2006-01-05',
        school: 'Evergreen Secondary School'
    },
    {
        residentId: 'A532-006',
        name: 'Sophia Lee',
        email: 'sophia.lee@example.com',
        phone: '7890 1234',
        balance: 90000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2004-08-27',
        school: 'Fuhua Secondary School'
    },
    {
        residentId: 'A532-007',
        name: 'Daniel Wilson',
        email: 'daniel.wilson@example.com',
        phone: '0123 4567',
        balance: 65000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2005-04-19',
        school: 'Geylang Methodist Secondary School'
    },
    {
        residentId: 'A532-008',
        name: 'Olivia Martinez',
        email: 'olivia.martinez@example.com',
        phone: '5678 9012',
        balance: 40000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2006-07-08',
        school: 'Hougang Secondary School'
    },
    {
        residentId: 'A532-009',
        name: 'William Taylor',
        email: 'william.taylor@example.com',
        phone: '8901 2345',
        balance: 15000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2004-02-14',
        school: 'Jurong Secondary School'
    },
    {
        residentId: 'A532-010',
        name: 'Isabella Anderson',
        email: 'isabella.anderson@example.com',
        phone: '2345 6789',
        balance: 80000,
        image: '/src/img/profile-photo.jpg',
        dateOfBirth: '2005-12-03',
        school: 'Kranji Secondary School'
    }
];*/

export default function Users() {
    const {access_token, logout} = useAuth();
    const [errorText, setErrorText] = useState<string | null>(null);

    const navigate = useNavigate();
    const usersReq = useQuery({
        queryKey: ["users"],
        staleTime: 30,
        queryFn: async () => {
            try {
                const res = await baseAxiosClient.get('/users/')
                const data: DetailedUser[] = res.data;
                return data;
            } catch (err) {
                if (err instanceof AxiosError) {
                    if (err.response?.status == 403) {
                        logout()
                        navigate("/login")
                    }
                }
                throw err;
            }
        },
        enabled: !!access_token
    })


    const createUserHandle = useMutation({
        mutationFn: async (userData: CreateUserRequest): Promise<DetailedUser> => {
            try {
                const response = await baseAxiosClient.post("/users/", userData);
                return response.data;
            } catch (err) {
                if (err instanceof AxiosError) {
                    if (err.response?.status === 400) {
                        setErrorText("Invalid user data");
                    }
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
                if (err instanceof AxiosError) {
                    if (err.response?.status === 400) {
                        setErrorText("Invalid update data");
                    }
                }
                throw err;
            }
        },
    });


    /*
        createUserHandle.mutate({
            resident_id: "user1",
            email: "user1@gmail.com",
            name: "Dylan",
            phone: "89371827",
            role: "User",
            address: {
                bunk: "Topaz",
                floor: 3,
                unit: 290
            },
            dob: "04032002",
            school: "Xinghua Primary School"
        });
    */


/*
    updateUserHandle.mutate({
        uuid: "user-uuid-here",
        data: {
            name: "New Name",
            email: "newemail@example.com"
            // ... other optional fields
        }
    });
*/


    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <Heading>Users</Heading>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Resident ID
                                </th>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Date of Birth
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    School
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Balance
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">View</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {usersReq.isError ? (
                                <div className="flex items-center justify-center">
                                    <Text><Strong>Session expired or account disabled, restart the app!</Strong></Text>
                                </div>
                            ) : usersReq.data ? (
                                usersReq.data?.length < 1 ? (
                                    <div className="flex items-center justify-center">
                                        <p className="sm:text-sm/5 text-base/4 text-red-500">No users found</p>
                                    </div>
                                ) : (
                                    usersReq.data.map((user) => (
                                        <tr key={user.uuid}>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-900">{user.resident_id}</td>
                                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                                <div className="flex items-center">
                                                    <div className="size-11 shrink-0">
                                                        <img src="/src/img/profile-photo.jpg" alt=""
                                                             className="size-11 rounded-full"/>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{user.name}</div>
                                                        <div className="mt-1 text-gray-500">{user.email}</div>
                                                        <div className="mt-1 text-gray-500">{user.phone}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{user.dob}</td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{user.school}</td>
                                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{user.balance}</td>
                                            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    View<span className="sr-only">, {user.name}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                )
                            ) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}