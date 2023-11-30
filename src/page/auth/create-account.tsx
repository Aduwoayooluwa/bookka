"use client"

// import { Icons } from "@/components/other/icons"
import { Button } from "@/components/ui/button"
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

export default function CreateAccount() {
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
            <span className="bg-background px-2 text-muted-foreground">
              Access Account 
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">DID</Label>
          <Input id="did" type="text" placeholder="Enter DID" />
        </div>
      
      </CardContent>
      <CardFooter>
        <Button className="w-full">Access account</Button>
      </CardFooter>
    </Card>
  )
}