"use client"
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CreateDid from "./create-did";
import { PostRequest } from "@/api/apiHandler"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation";
import { ssSave } from "@/lib/sStorage";
import Link from "next/link";

export default function Login({ setCurrentStep}: Readonly<{setCurrentStep: React.Dispatch<React.SetStateAction<number>>}>) {

  const [inputDid, setInputDid] = useState("");
  const [inputDetails, setInputDetails] = useState({
    userDid: "nothing here",
    signedVcJwt: ""
  })
  const { toast } = useToast(); 
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

function handleDidChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setInputDetails({...inputDetails, [name]: value})
    setInputDid(value);
  }


  async function onAccessAccount() {
    if (inputDetails.signedVcJwt === "" || inputDetails.userDid === "") {
      toast({
         title: "Chief Rest!",
          description: "Fill the fields"
        });
      return;
    }
 
    setIsLoading(true);
    try {
       const response = await PostRequest("auth/validate-user", inputDetails)
       toast({
          description: response.message,
        });
      setCurrentStep((prev) => prev + 1);
      setIsLoading(false)
    }
    catch (error: any) {
      setIsLoading(false)
      toast({
          title: "Ah! Something went wrong!",
          description: error.message,
        });
    }
    
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your DID below to Access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span  className="bg-background px-2 text-muted-foreground">
              Access Account 
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Enter Signed JWT</Label>
          <Input value={inputDetails.signedVcJwt} required onChange={handleDidChange} id="pivateKey" type="text" name="signedVcJwt" placeholder="Enter Signed JWT" />
        </div>
      
      </CardContent>
      <CardFooter className="flex-col">
        <div className="w-full my-3">
          <Button onClick={onAccessAccount} className={`w-full ${isLoading && "bg-gray-700 text-white"}`}>{isLoading ? "Verifying Details.." : "Access account"}</Button>
        </div>

        <Link className="text-sm" href="/register">No account yet? Click here to create one</Link>
      </CardFooter>

    </Card>
  )
}