import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { baseAxiosClient } from "../libs/requestClient";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sessionUid = localStorage.getItem("reset_session_uid");
  const resetToken = localStorage.getItem("reset_token");

  const finishPasswordReset = useMutation({
    mutationFn: async () => {
      if (!sessionUid || !resetToken) {
        throw new Error("Missing session or token");
      }
      try {
        await baseAxiosClient.post(
          `/auth/password-reset/${sessionUid}?token=${resetToken}`,
          {
            password: newPassword,
            confirm_password: confirmPassword,
          }
        );
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 400) {
            setErrorText("Invalid password format");
          }
        }
        throw err;
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorText("Passwords do not match");
      return;
    }
    setIsLoading(true);
    setErrorText(null);

    finishPasswordReset.mutate(undefined, {
      onSuccess: () => {
        setIsLoading(false);
        // Clear stored reset data
        localStorage.removeItem("reset_session_uid");
        localStorage.removeItem("reset_token");
        navigate("/login");
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 h-screen">
        <div className="flex flex-1 flex-col px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24" style={{ flex: 0.3 }}>
          <div className="flex mt-5 h-full flex-col justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                src="/src/img/logo2.png"
                alt="Logo"
                className="mx-auto"
              />
              <div className="flex">
                <div className="w-0.5 h-55 bg-gray-500"></div>
                <p className="text-gray-600 hover:text-gray-700 ml-5 text-sm">
                  Please enter your new password.
                  For security reasons, your password must meet the folowing requirements:
                  <li className="mt-4">Contain upper and lower case letters</li>
                  <li>Contain numbers</li>
                  <li>At least 8 characters in length</li>
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="new-password" className="block text-base font-medium text-gray-900">
                    New Password
                  </label>
                  <div className="mb-4 relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      id="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="size-6">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                      </svg>

                    </button>
                  </div>
                  <label htmlFor="confirm-password" className="block text-base font-medium text-gray-900">
                    Confirm New Password
                  </label>
                  <div className="mb-8 relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      id="confirm-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="size-6">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                      </svg>

                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !newPassword || !confirmPassword}
                    className="mt-4 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-base font-normal text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm
                  </button>
                </div>
              </form>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="mt-2 mb-6 flex w-full justify-center border border-gray-200 rounded-md bg-white  px-3 py-1.5 text-base font-normal text-black shadow-sm hover:bg-zinc-100"
              >
                Cancel
              </button>
              {errorText && (
                <p className="text-center text-sm text-red-600 mt-2">{errorText}</p>
              )}
              <p className="text-center text-gray-500 font-normal text-xs">By continuing, you confirm that such access complies with your account's security policy.</p>
            </div>
          </div>
        </div>
        <div className="relative w-0 flex-1 hidden lg:block" style={{ flex: 0.7 }}>
          <img
            alt=""
            src="/src/img/mwh2.jpeg?auto=format&fit=crop&w=1908&q=80"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
