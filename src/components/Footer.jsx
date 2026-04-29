import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

                <div>
                    <h2 className="text-xl font-semibold text-white mb-3">About Qurbani</h2>
                    <p className="text-sm leading-relaxed">
                        Qurbani is a trusted platform that helps you easily find and buy healthy sacrificial animals for Eid-ul-Adha.
                        We connect buyers with reliable sellers, ensuring fair prices, transparency, and proper animal care.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Email: sohan.explorer@gmail.com</li>
                        <li>Phone: +880 1516-555163</li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
                    <div className="flex gap-4 text-2xl">
                        <Link href=" https://facebook.com/rizbeahamedsohan" target="_blank">
                            <FaFacebook className="hover:text-blue-500 transition" />
                        </Link>
                        <Link href="https://github.com/sohan24-dev" target="_blank">
                            <FaGithub className="hover:text-blue-400 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sohan-dev25" target="_blank">
                            <FaLinkedin className="hover:text-blue-400 transition" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © 2026 Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;