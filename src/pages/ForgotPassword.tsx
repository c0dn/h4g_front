import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { baseAxiosClient } from "../libs/requestClient";
import { useNavigate } from "react-router-dom";

interface InitPasswordResetResponse {
  session_uid: string;
}

export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const initPasswordReset = useMutation({
    mutationFn: async (phone: string): Promise<InitPasswordResetResponse> => {
      try {
        const response = await baseAxiosClient.post("/auth/password-reset", {
          phone: phone,
        });
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 400) {
            setErrorText("Invalid phone number");
          }
        }
        throw err;
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorText(null);

    initPasswordReset.mutate(phone, {
      onSuccess: (data) => {
        setIsLoading(false);
        // Store session_uid and navigate to OTP verification
        localStorage.setItem("reset_session_uid", data.session_uid);
        navigate("/reset-password");
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
              <div className="flex items-center">
                <div className="w-0.5 h-14 bg-gray-500"></div>
                <p className="text-gray-600 hover:text-gray-700 ml-5 text-sm">
                  Please enter your phone number. You will receive an SMS message with instructions on how to reset your password.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-base font-medium text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2 mb-8">
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Enter your phone number"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errorText && (
                      <p className="mt-2 text-sm text-red-600">{errorText}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !phone}
                    className="mt-4 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-base font-normal text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset Password
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="mt-2 flex w-full justify-center border border-gray-200 rounded-md bg-white px-3 py-1.5 text-base font-normal text-black shadow-sm hover:bg-zinc-100"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-center text-gray-500 font-normal text-xs">By continuing, you confirm that such access complies with your account's security policy.</p>
              </form>
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
