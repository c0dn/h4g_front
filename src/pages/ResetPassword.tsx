import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {baseAxiosClient} from "../libs/requestClient.ts";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const session_uid = localStorage.getItem('reset_session_uid');

  const verifyOtpHandle = useMutation({
    mutationFn: async (otp: string) => {
      if (!session_uid) {
        throw new Error("Missing session");
      }

      try {
        const response = await baseAxiosClient.post("/auth/password-reset/otp", {
          session_uid: session_uid,
          otp: otp
        });
        return response.data;
      } catch (err) {
        if (err instanceof AxiosError) {
          if (err.response?.status === 400) {
            setErrorText("Invalid OTP");
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
    
    verifyOtpHandle.mutate(otp, {
      onSuccess: (data) => {
        // Store reset token for the final step
        localStorage.setItem('reset_token', data.reset_token);
        navigate('/change-password');
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
      }
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
                  Please enter the verification code sent to your phone number.
                </p>
              </div>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="otp" className="block text-base font-medium text-gray-900">
                    Verification Code
                  </label>
                  <div className="mt-2 mb-8">
                    <input
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      placeholder="Enter verification code"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  {errorText && (
                    <p className="mt-2 text-sm text-red-600">{errorText}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading || !otp}
                    className="mt-4 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-base font-normal text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Verify Code
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className="mt-2 flex w-full justify-center border border-gray-200 rounded-md bg-white px-3 py-1.5 text-base font-normal text-black shadow-sm hover:bg-zinc-100"
                  >
                    Back
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
