'use client';

import { useRouter } from "next/navigation";
import Container from "../Container";
import { IconButton } from "../IconButton";
import { IoMdHome, IoMdSettings } from "react-icons/io";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="fixed w-full z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <div className="flex flex-row justify-center items-center gap-8">
                    <IconButton icon={IoMdHome} onClick={() => router.push('/')} />
                    <IconButton icon={IoMdSettings} onClick={() => router.push('/settings')} />
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;