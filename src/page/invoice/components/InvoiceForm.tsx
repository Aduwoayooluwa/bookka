"use client"
import { PostRequest } from '@/api/apiHandler';
import { Input } from '@/components/ui/input';
import { InvoiceData } from '@/types/invoice-types';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {nanoid} from "nanoid"
import { getSStorage } from '@/lib/sStorage';
import { useRouter } from 'next/navigation';

type Props = {
};



const InvoiceForm = ({
}: Readonly<Props>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InvoiceData>();

  const businessDetails = (getSStorage("businessDetails"))
  const customerDetails = (getSStorage("customerInv"));

  const invoiceGenerationData = { ...businessDetails, ...customerDetails }
  console.log(invoiceGenerationData);

  // router from useRouter
  const router = useRouter();

  const onSubmit: SubmitHandler<InvoiceData> = data => {
      console.log(data);
    sessionStorage.setItem('invoiceData', JSON.stringify(data));
    
    // pass the data and invoice id. nanoid will generate random unique ids. 
    return PostRequest("api/create-invoice",
      { ...data, ...businessDetails, ...customerDetails, invoiceNumber: `INVC${nanoid()}` }).then(() => {
            router.push("/invoice/generate/preview")
      })
  };


  return (
    <div className="container mx-auto p-4 md:p-20">
      <p className="text-2xl font-semibold mb-4">Invoice Generation Form</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* <div>
          <label htmlFor="customerName" className="block mb-2 text-sm font-medium">Invoice Id</label>
          <Input id="customerName" type="text" {...register('customerName', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.customerName && <span className="text-red-500 text-xs">Invoice Id is required</span>}
        </div> */}

        <div>
          <label htmlFor="invoiceDate" className="block mb-2 text-sm font-medium">Invoice Date</label>
          <Input id="invoiceDate" type="date" {...register('invoiceDate', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.invoiceDate && <span className="text-red-500 text-xs">Invoice Date is required</span>}
        </div>
        
        <div>
          <label htmlFor="dueDate" className="block mb-2 text-sm font-medium">Due Date</label>
          <Input id="dueDate" type="date" {...register('dueDate', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.dueDate && <span className="text-red-500 text-xs">Due Date is required</span>}
        </div>
        

            
        {/* <div className="flex gap-4">
          <div>
            <label htmlFor="quantity" className="block mb-2 text-sm font-medium">Quantity</label>
            <Input id="quantity" type="number" {...register('quantity', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
            {errors.quantity && <span className="text-red-500 text-xs">Quantity is required</span>}
          </div>

          <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium">Price</label>
            <Input id="price" type="number" step="0.01" {...register('price', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
            {errors.price && <span className="text-red-500 text-xs">Price is required</span>}
          </div>
        </div> */}

        <div className="flex items-center space-x-0 md:space-x-6 space-y-6 md:space-y-0 flex:col md:flex-row">
           <div>
              <label htmlFor="extraNote" className="block mb-2 text-sm font-medium">Extra Note</label>
              <textarea id="extraNote" {...register('extraNote', { required: false })} className="border border-gray-300 p-2 rounded w-full" />
           
          </div>
          
           <div>
              <label htmlFor="termsAndConditions" className="block mb-2 text-sm font-medium">Terms and Conditions</label>
              <textarea id="termsAndConditions" {...register('termsAndConditions', { required: false })} className="border border-gray-300 p-2 rounded w-full" />
             
            </div>


        </div>
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit & Generate</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
