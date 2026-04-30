"use client"

import ModelUpdateUser from "@/components/ModelUpdateUser";
import { authClient } from "@/lib/auth-client"
import Image from "next/image";

const Profile = () => {
    const {
        data: session,
    } = authClient.useSession()
    const user = session?.user
    return (
        <div className="min-h-[40vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg transition-all">

                <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-gray-200">
                        <Image
                            src={user?.image || "/default-user.png"}
                            alt="User Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <h2 className="text-lg sm:text-xl text-center md:text-2xl font-semibold text-gray-800">
                    {user?.name || "Guest User"}
                </h2>

            <div className="flex justify-center">
                <ModelUpdateUser></ModelUpdateUser>
            </div>
            </div>
        </div>
    );
};

export default Profile;