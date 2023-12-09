"use client"
import { PostRequest } from '@/api/apiHandler';
import { Input } from '@/components/ui/input';
import { InvoiceData } from '@/types/invoice-types';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {nanoid} from "nanoid"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

type Props = {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
};

const BusinessDetails= ({
    setCurrentStep
}: Readonly<Props>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InvoiceData>();

  const onSubmit: SubmitHandler<InvoiceData> = data => {
      console.log(data);
    sessionStorage.setItem('businessDetails', JSON.stringify(data));
    // move to the next step
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4 md:p-20">
      <p className="text-2xl font-semibold mb-4">Business Details Form</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label htmlFor="businessName" className="block mb-2 text-sm font-medium">Business Name</label>
          <Input id="businessName" type="text" {...register('businessName', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.businessName && <span className="text-red-500 text-xs">Business name is required</span>}
        </div>
        
        <div>
          <label htmlFor="businessEmail" className="block mb-2 text-sm font-medium">Business Email</label>
          <Input id="businessEmail" type="email" {...register('businessEmail', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.businessEmail && <span className="text-red-500 text-xs">Business email is required</span>}
        </div>
        
        <div>
          <label htmlFor="businessPhoneNumber" className="block mb-2 text-sm font-medium">Phone Number</label>
          <Input id="businessPhoneNumber" type="tel" min={0} {...register('businessPhoneNumber', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.businessPhoneNumber && <span className="text-red-500 text-xs">Phone number is required</span>}
        </div>
              
        <div>
            <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your Country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>All Countries</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                </SelectGroup>
            </SelectContent>
            </Select>
        </div>
        
        <div>
          <label htmlFor="businessAddress" className="block mb-2 text-sm font-medium">Business Address</label>
          <Input id="businessAddress" type="text" {...register('businessAddress', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.businessAddress && <span className="text-red-500 text-xs">Business address is required</span>}
        </div>



        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium">City</label>
          <Input id="city" {...register('businessCity', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.businessCity && <span className="text-red-500 text-xs">City is required</span>}
        </div>


    
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </form>
    </div>
  );
};

export default BusinessDetails;
