 "use client"
 import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import Google from "@/public/google.svg"
import Image from "next/image";
import Github from '@/public/github.svg'
export function GoogleAuthButton(){
    const {pending} = useFormStatus()

    return(
        <>
        {
            pending? (
                <Button disabled variant="outline" className="w-full"> 
                <Loader2 className=" size-4 mr-2 animate-spin" /> Please Wait
                </Button>
            ):(
                <Button variant="outline"  className=" w-full gap-8 font-semibold ">
                    <Image src={Google} alt="Google" className=" size-8 " />
                    Sign In With Google</Button>
            )
        }
        </>
    )
}



export function GithubAuthButton(){
    const {pending} = useFormStatus()

    return(
        <>
        {
            pending? (
                <Button disabled variant="outline" className="w-full"> 
                <Loader2 className=" size-4 mr-2 animate-spin" /> Please Wait
                </Button>
            ):(
                <Button variant="outline"  className=" w-full gap-8 font-semibold ">
                     <Image src={Github} alt="Github" className=" size-8" />
                    Sign In With Github</Button>
            )
        }
        </>
    )
}