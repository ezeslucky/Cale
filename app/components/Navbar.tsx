import Image from 'next/image';

import Link from "next/link";
import Logo from  "@/public/logo.svg"
export function Navbar(){
    return(
        <div className=" flex py-5 items-center justify-normal">
            <Link href="/">
            <Image src={Logo} alt="logo" className="size-10" />
           
            
            </Link>

        </div>
    )
}