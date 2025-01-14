import { Button } from '../components/button'

export default function Profile() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
            <div className="mx-auto space-y-8 sm:space-y-10">
                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900">Personal Info</h2>
                    <p className="mt-1 text-sm/6 text-gray-500">
                        Account details, including name, date of birth, school of study
                    </p>

                    <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Resident ID</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">RES123456</div>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full Name</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">John XXX</div>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date of Birth</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">15 March 1995</div>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">School</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">Hello Secondary School</div>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900">Credit Balance</h2>
                    <p className="mt-1 text-sm/6 text-gray-500">View your current credit balance</p>

                    <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Current Balance</dt>
                            <dd className="mt-1 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">$250.00</div>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Last Transaction</dt>
                            <dd className="mt-1 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">-$50.00 (Meal Plan Purchase - Jan 12, 2025)</div>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900">Contact Info</h2>
                    <p className="mt-1 text-sm/6 text-gray-500">Update and manage your email address and phone number.</p>
                    <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email Address</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">xxxx@example.com</div>
                                <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Update
                                </button>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Phone Number</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">+65 1234 5678</div>
                                <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Update
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>

                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900">Account</h2>
                    <p className="mt-1 text-sm/6 text-gray-500">Change minimart login password</p>
                    <dl className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                        <div className="py-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Password</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div></div>
                                <Button color="red" href="/change-password">
                                    Change Password
                                </Button>
                            </dd>
                        </div>
                        <div className="py-6 sm:flex">
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div></div>
                                <Button color="red" href="/app">
                                    Logout
                                </Button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}