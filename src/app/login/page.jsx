"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io";
import { toast } from "react-toastify";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    // console.log(errors);
    const onSubmit = async (data) => {
        const { email, password } = data
        // console.log( email, name, password,photo );
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(error);
        if (error) {
            alert(`${error.message}`)
        }
        else if (res) {
            alert("Login successful!");
        }
    }
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-4 flex-col">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-5">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-700">
                        Login
                    </h2>

                    <fieldset className="space-y-1">
                        <legend className="text-sm font-medium text-gray-600">
                            Enter Your Email
                        </legend>
                        <input
                            {...register('email', { required: "Email field is required" })}
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.email?.message}
                        </p>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <legend className="text-sm font-medium text-gray-600">
                            Enter your Password
                        </legend>
                        <input
                            {...register('password', { required: "Password field is required" })}
                            type="password"
                            placeholder="Enter your Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                        <p className="text-red-500 text-sm">
                            {errors.password?.message}
                        </p>
                    </fieldset>

                    <button
                        type="submit"
                        className="w-full btn bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-center">
                    Don't have an account?
                    <Link className="text-red-400 text-xl font-semibold ml-1" href={"/register"}>
                        Sign up here
                    </Link>
                </p>
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-500 text-sm">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <button onClick={googleSignIn} className="btn flex items-center justify-center gap-3 w-full border-slate-500 py-2 rounded-lg">
                    <IoLogoGoogle className="text-slate-500 text-2xl" />
                    <span className="font-medium">Login with Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;