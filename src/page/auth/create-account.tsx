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

export default function CreateAccount() {

  const [inputDid, setInputDid] = useState("");
  const [inputDetails, setInputDetails] = useState({
    userDid: "",
    fullName: ""
  })

  // monitor if  signed JWT is created or not
  const [isSignedJwtGenerated, setIsSignedJwtGenerated] = useState(false);
  // save the generated signed JWT VC
  const [signedJwtGeneratedVC, setSignedJwtGeneratedVC] = useState("")

  const { toast } = useToast(); 
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)

function handleDidChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setInputDetails({...inputDetails, [name]: value})
    setInputDid(value);
  }


  async function onAccessAccount() {
    if (inputDetails.fullName === "" || inputDetails.userDid === "") {
      toast({
         title: "Chief Rest!",
          description: "Fill the fields"
        });
      return;
    }
 
    setIsLoading(true);
    try {
       const response = await PostRequest("auth/auth-did", inputDetails)
      ssSave("userDid", inputDetails.userDid);
      toast({
         title: response.message,
          description: response.description,
      });
      console.log(response)
      if (response.staus !== 400) {
        setIsSignedJwtGenerated(true);
        setSignedJwtGeneratedVC(response?.signedVcJwt);
        setIsLoading(false);
      }
    }
    catch (error: any) {
      setIsLoading(false)
      toast({
          title: "Ah! No vex boss. Error Occured!",
          description: error.message,
        });
    }
    
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>
          Enter your Details below to Access your account
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
          <Label htmlFor="email">Full Name</Label>
          <Input value={inputDetails.fullName} required onChange={handleDidChange} id="fullName" type="text" name="fullName" placeholder="Enter Full Name" />

          <Label className="mt-3" htmlFor="email">DID</Label>
          <Input value={inputDetails.userDid} required onChange={handleDidChange} id="did" type="text" name="userDid" placeholder="Enter DID" />

        </div>
      
      </CardContent>
      <CardFooter className="flex-col">
        <div className="w-full my-3">
          <Button onClick={onAccessAccount} className={`w-full ${isLoading && "bg-gray-700 text-white"}`}>{isLoading ? "Verifying DID.." : "Access account"}</Button>
        </div>

        {
          isSignedJwtGenerated && (
            <div>
              <p className="text-sm font-semibold mt-4">Hello Boss, your generated Signed VC.</p>
              <Link className="mb-4 mt-1 text-sm text-blue-600" href="/auth">Kindly proceed to login here</Link>
              <textarea className="text-xs p-3 w-full h-[250px]" readOnly>
                { signedJwtGeneratedVC ?? ""}
            </textarea>
            </div>
          )
        }

      {
          !isSignedJwtGenerated && (
            <CreateDid /> 
        )
      }
      </CardFooter>

    </Card>
  )
}