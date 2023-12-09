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
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const CustomerDetails: React.FC<Props> = ({ setCurrentStep }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InvoiceData>();

  const onSubmit: SubmitHandler<InvoiceData> = data => {
      console.log(data);
    sessionStorage.setItem('customerInv', JSON.stringify(data));
    
      // move to the nezt step. Invoice
      setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto p-4 md:p-20">
      <p className="text-lg font-semibold mb-4">Invoice Generation Form</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label htmlFor="customerName" className="block mb-2 text-sm font-medium">Customer Name</label>
          <Input id="customerName" type="text" {...register('customerName', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.customerName && <span className="text-red-500 text-xs">Customer name is required</span>}
        </div>
        
        <div>
          <label htmlFor="customerEmail" className="block mb-2 text-sm font-medium">Customer Email</label>
          <Input id="customerEmail" type="email" {...register('customerEmail', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.customerEmail && <span className="text-red-500 text-xs">Customer email is required</span>}
        </div>
              
         <div>
          <label htmlFor="customerPhonenumber" className="block mb-2 text-sm font-medium">Phone Number</label>
          <Input id="customerPhonenumber" type="tel" min={0} {...register('customerPhonenumber', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.customerPhonenumber && <span className="text-red-500 text-xs">Phone number is required</span>}
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
          <label htmlFor="customerAddress" className="block mb-2 text-sm font-medium">Customer Address</label>
          <Input id="customerAddress" type="text" {...register('customerAddress', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.customerAddress && <span className="text-red-500 text-xs">Customer address is required</span>}
        </div>
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
      </form>
    </div>
  );
};

export default CustomerDetails;
