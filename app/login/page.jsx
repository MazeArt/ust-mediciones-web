"use client";
import { useState, useRef, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Header from "../Components/Header";
import {
  EyeClosedIcon,
  EyeOpenIcon,
  AIEPClosedEyeIcon,
  AIEPOpenEyeIcon,
} from "../Components/UI/icons";

export default function Login() {
  // Initialize the Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const formRef = useRef();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sessionDetected, setSessionDetected] = useState(false); // New state for session detection

  // Check if a session is already logged in
  useEffect(() => {
    const checkUserSession = async () => {
      const session = await supabase.auth.getSession();
      console.log("this is session", session);
      if (session.data.session) {
        console.log("Session detected");
        setSessionDetected(true);
        setLoading(true);
        router.push("/avatar"); // Redirect to /avatar if user is logged in
      } else {
        console.log("No session detected");
        setSessionDetected(false);
      }
    };

    checkUserSession();
  }, [router]);

  const signIn = async (event) => {
    const formData = new FormData(formRef.current);
    event.preventDefault(); // Add this line to prevent form from submitting

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("creds:", email, password);

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("No session detected");
    setSessionDetected(false);

    console.log("user st 1 :", data);

    if (error) {
      console.log(error.message);
      //setErrorMessage(error.message);
      setLoading(false);
      if (error.message.includes(`Invalid login credentials`)) {
        setErrorMessage(`Credenciales Inválidas, intenta nuevamente`);
      }
    } else {
      console.log("user:", data.user.id);
      // Redirect to the avatar page after successful login
      router.push("/avatar/");
    }
  };

  //   Password Handle Functions
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <div
      className="divMadre flex flex-col items-center justify-center min-h-screen"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#033333",
      }}
    >
      <Header />
      <div>
        <h1 className="text-4xl text-white font-bold p-20">
          BIENVENIDO A LA EXPERIENCIA VIRTUAL DE MEDICIONES
        </h1>
      </div>
      <div className="divCuerpo flex items-start justify-center w-full h-full p-30">
        <div className="cajalogin mx-auto w-full p-6 bg-white rounded-lg max-w-2xl">
          <div>
            <h2 className="text-left text-2xl font-extrabold text-gray-900">
              Ingresa a tu cuenta
            </h2>
          </div>
          {sessionDetected && (
            <div className="text-center text-green-500 font-semibold">
              Sesión Activa Detectada, Ingresando...
            </div>
          )}

          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}

          <form className="mt-3 space-y-6" ref={formRef} onSubmit={signIn}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm flex flex-col sm:flex-row gap-5">
              {/* Email */}
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="aiep-input-title">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="aiep-input-field"
                  placeholder="Ingresa tu Email"
                />
              </div>
              {/* Clave */}
              <div className="flex flex-col w-full">
                <label htmlFor="celular" className="aiep-input-title">
                  Clave
                </label>
                <div className="relative w-full">
                  <input
                    className="aiep-input-field"
                    name="password"
                    placeholder="Ingresa tu Clave"
                    minLength="6"
                    required
                    type={isPasswordVisible ? "text" : "password"}
                    onFocus={handlePasswordFocus}
                    onBlur={handlePasswordBlur}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center text-sm leading-4 text-form-gray px-3"
                  >
                    {isPasswordVisible ? (
                      <AIEPOpenEyeIcon />
                    ) : (
                      <AIEPClosedEyeIcon />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 pt-2">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-aiep focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm font-normal text-blue-aiep"
                >
                  Recordarme
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading && (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12c0-4.418 3.582-9 8-9 0 0 1-2 2-2 0 5-2 11-2 11s3 0 3 5-3 5-3 5-2-2-2-2c-4.418 0-8-4.582-8-10z"
                    ></path>
                  </svg>
                )}
                <span className={loading ? "opacity-75" : "opacity-100"}>
                  {loading ? "Iniciando" : "Iniciar sesión"}
                </span>
              </button>
            </div>
          </form>

          <hr className="items-center border-gray-300 mx-4 mt-4" />
          <div className="pt-5 text-sm text-center">
            <a
              href=".\recuperar-clave"
              className="items-center aiep-input-title text-sm"
            >
              ¿Olvidaste tu clave?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
