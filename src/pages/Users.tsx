import { Heading } from "../components/heading"

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
        <div >
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-autolg:px-4">
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
              href=""
                    >
                        Add User...
            </Button>
          </div>

                </div>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-1 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full ">
              <div className="mb-2">
              </div>
                            <theadclassName="border border-t-0 border-x-0">
                            <tr>
                                <th scope="col" className="py-3 lg:px-4 text-left text-medium font-semibold text-gray-900">
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
                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 px-2">
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
                                    usersReq.data.map((user, index) => (
                                        <tr key={user.uuid}
                                          className={index % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                  >
                    <td className="whitespace-nowrap py-2 text-sm lg:px-4 text-gray-900">{user.resident_id}</td>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm sm:pl-0">
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
                                            <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">{user.dob}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">{user.school}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500">{user.balance}</td>
                                            <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                <button
                        href="/"
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
                                    ))
                                )
                            ) : null}
                            </tbody>
                        <tfoot>
                <tr>
                  <td colSpan="6" className=" py-3 text-sm text-gray-600">
                    <div className="flex justify-between items-center">
                      <p className="px-3.5">Showing 1 to 8 out of 20 results</p>
                      <div className="flex items-center gap-2">
                        <button className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-medium">
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
                          {[1, 2, 3, "...", 5].map((page, index) => (
                            <button
                              key={index}
                              className={`px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-blue-600 rounded-md ${typeof page === "number" ? "cursor-pointer" : "cursor-default"
                                }`}
                              disabled={typeof page !== "number"}
                            >
                              {page}
                            </button>
                          ))}
                        </div>
                        <button className="inline-flex items-center p-4 text-sm text-zinc-500 hover:text-zinc-900 font-lg">
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

)
}