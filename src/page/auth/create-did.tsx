"use client"
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
    DialogTrigger,
  
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { PostRequest } from "@/api/apiHandler";

export default function CreateDid() {
    const [generatedDid, setGeneratedDid] = useState<string>("")

    async function onGenerateDid() {
        return await PostRequest("auth/create-did").then((res) => {
            console.log(res)
            setGeneratedDid(res?.userDid)
            
        })
    }

    return (
        <Dialog>
            <DialogTrigger>You don&apos;t have a DID? Click here to generate one</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Generate your Own DID</DialogTitle>
                    <DialogDescription className="p-3">
                        <textarea value={generatedDid} readOnly className="outline-none p-3 border border-gray.500 w-full h-[200px] overflow-auto" placeholder="Your Generated DID will appeear here..">
                            
                        </textarea>
                        

                    <Button onClick={onGenerateDid}>Generate</Button>
                    
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}