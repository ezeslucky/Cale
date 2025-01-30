import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.svg"
import Github from '@/public/github.svg'
import Google from "@/public/google.svg"
export function AuthModel (){
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" font-bold">Try For Free</Button>
            </DialogTrigger>
            <DialogContent className=" sm:max-w-[360px]">
            <DialogTitle></DialogTitle>
<DialogHeader className=" flex  items-center gap-2 flex-row justify-center">
    <Image src={Logo} alt=" logo" className=" size-10" />
    <h4 className=' text-3xl font-semibold'>
                Ca<span className='text-primary'>Le</span>
            </h4>
</DialogHeader>

<div className=" flex flex-col mt-5  gap-3">
    <Button className=" gap-8 font-semibold">  <Image src={Google} alt="Google" className=" size-8 " /> Sign In With Google</Button>
    <Button className=" gap-8 font-semibold"> <Image src={Github} alt="Github" className=" size-8" />Sign In With Github</Button>
</div>
            </DialogContent>
        </Dialog>
    )
}