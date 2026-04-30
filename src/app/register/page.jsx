"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io";

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    // console.log(errors);
    const onSubmit = async (data) => {
        const { email, name, password, photo } = data
        // console.log( email, name, password,photo );
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        // console.log(error);
        if (error) {
            alert(`${error.message}`)
        }
        else if (res) {
            alert("Registration successful!");
            router.push("/");
        }
    }
    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className=" min-h-[80vh] flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4">
            <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl  p-5 sm:p-8 rounded-xl shadow-md space-y-4 sm:space-y-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-700">
                        Register Form
                    </h2>

                    <fieldset className="space-y-1">
                        <legend className="text-sm sm:text-base font-medium text-gray-600">
                            Enter Your Name
                        </legend>
                        <input
                            {...register('name', { required: "Name field is required" })}
                            type="text"
                            className="input input-bordered w-full text-sm sm:text-base "
                            placeholder="Enter your name"
                        />
                        <p className="text-red-500 text-xs sm:text-sm">
                            {errors.name?.message}
                        </p>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <legend className="text-sm sm:text-base font-medium text-gray-600">
                            Enter Your Email
                        </legend>
                        <input
                            {...register('email', { required: "Email field is required" })}
                            type="email"
                            className="input input-bordered w-full text-sm sm:text-base "
                            placeholder="Enter your Email"
                        />
                        <p className="text-red-500 text-xs sm:text-sm">
                            {errors.email?.message}
                        </p>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <legend className="text-sm sm:text-base font-medium text-gray-600">
                            Photo URL
                        </legend>
                        <input
                            {...register("photo", { required: "Photo field is required" })}
                            type="text"
                            className="input input-bordered w-full text-sm sm:text-base "
                            placeholder="Type here photo url"
                        />
                        <p className="text-red-500 text-xs sm:text-sm">
                            {errors.photo?.message}
                        </p>
                    </fieldset>

                    <fieldset className="space-y-1">
                        <legend className="text-sm sm:text-base font-medium text-gray-600">
                            Enter your Password
                        </legend>
                        <input
                            {...register('password', { required: "Password field is required" })}
                            type="password"
                            className="input input-bordered w-full text-sm sm:text-base "
                            placeholder="Enter your Password"
                        />
                        <p className="text-red-500 text-xs sm:text-sm">
                            {errors.password?.message}
                        </p>
                    </fieldset>

                    <button
                        type="submit"
                        className="btn w-full bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-lg transition"
                    >
                        SignUp
                    </button>
                </form>
                <p className="text-center">
                    Already have an account?
                    <Link className="text-red-400 text-xl font-semibold ml-1" href={"/login"}>
                        Sign in here
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

export default RegisterPage;