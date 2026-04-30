"user client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/dist/server/api-utils";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const ModelUpdateUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const { name, photo: image }  = data
        const { data:res, error } = await authClient.updateUser({
            name,
            image
        });
        console.log(error,res);
        if (!error) {
            toast.success("Update success")
            document.getElementById('my_modal_4').close();
        }
        else if (error) {
            toast.error("Update failed")
        }
    };

    return (
        <div className="mt-4">
            <button
                className="btn btn-primary flex items-center gap-2"
                onClick={() => document.getElementById('my_modal_4').showModal()}
            >
                <BiEdit size={18} />
                Edit Profile
            </button>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-full max-w-md rounded-xl shadow-xl">

                    <h3 className="font-semibold text-lg text-center mb-4">
                        Update Profile
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div>
                            <label className="label">
                                <p className="label-text">Your Name</p>
                            </label>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                            />

                            <p className="text-red-500 text-sm mt-1">
                                {errors.name?.message}
                            </p>

                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                {...register("photo", { required: "Photo URL is required" })}
                                type="text"
                                placeholder="Enter photo URL"
                                className="input input-bordered w-full"
                            />

                            <p className="text-red-500 text-sm mt-1">
                                {errors.photo?.message}
                            </p>

                        </div>

                        <div className="modal-action flex justify-between items-center">

                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={() => document.getElementById('my_modal_4').close()}
                            >
                                Cancel
                            </button>

                            <button  type="submit" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ModelUpdateUser;