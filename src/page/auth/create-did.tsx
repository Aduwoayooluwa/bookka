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
    const [generatedDid, setGeneratedDid] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const [didMessage, setDidMessage] = useState("") // message state managing if the did is generated....

    async function onGenerateDid() {
        setIsLoading(true);
        setDidMessage("Generating your did. Please be patient...")
        try {
            const response = await PostRequest("auth/create-did");   
            console.log(response);
            setGeneratedDid(response?.userDid);
            
            setIsLoading(false)
            setDidMessage(response?.message)

        }
        catch (error) {
            setIsLoading(false);
        }
    }

    return (
        <Dialog>
            <DialogTrigger>You don&apos;t have a DID? Click here to generate one</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Generate your Own DID</DialogTitle>
                    <DialogDescription className="p-3">
                        <p className="text-xs text-gray-600 md:text-sm">Copy the generated DID, close the modal and paste it on the Access Account page.</p>
                        <textarea value={generatedDid} readOnly className="outline-none p-3 border border-gray.500 w-full h-[200px] overflow-auto" placeholder="Your Generated DID will appeear here..">
                            
                        </textarea>
                        
                        <p className="text-green-600 text-xs p-2">{ didMessage}</p>

                        <Button disabled={isLoading} onClick={onGenerateDid}>{ isLoading ? "Generating.." : "Generate"}</Button>
                    
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}