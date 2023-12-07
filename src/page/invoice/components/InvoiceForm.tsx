"use client"
import { PostRequest } from '@/api/apiHandler';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type InvoiceData = {
  customerName: string;
  customerEmail: string;
  description: string;
  quantity: number;
  price: number;
};

type Props = {};

const InvoiceForm: React.FC<Props> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InvoiceData>();

  const onSubmit: SubmitHandler<InvoiceData> = data => {
      console.log(data);
      sessionStorage.setItem('customerInv', JSON.stringify(data));
    //   return PostRequest("api/create-invoice", {
        
    // })
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
          <label htmlFor="description" className="block mb-2 text-sm font-medium">Description</label>
          <textarea id="description" {...register('description', { required: true })} className="border border-gray-300 p-2 rounded w-full" />
          {errors.description && <span className="text-red-500 text-xs">Description is required</span>}
        </div>
        
        <div className="flex gap-4">
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
        </div>
        
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default InvoiceForm;
