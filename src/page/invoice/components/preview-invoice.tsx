// pages/invoice.tsx

import { getSStorage } from '@/lib/sStorage';
import type { NextPage } from 'next';
import Head from 'next/head';


const InvoicePage: NextPage = () => {
  const businessDetails = getSStorage("businessDetails");
  const customerDetails = getSStorage("customerInv");
  const invoiceDetails = getSStorage("invoiceData");


  return (
    <div className="bg-white  pt-8">
      <Head>
        <title>Invoice</title>
      </Head>
     
      <div className="invoice-container relative mx-auto border border-gray-300">
        <header className="border-b border-gray-300 p-4">
          <h1 className="text-2xl font-bold">Invoice</h1>
        </header>

        <div className="p-4">
          {/* Invoice Header */}
          <div className="flex justify-between mb-8">
            <div>
              <h2 className="font-bold text-lg">{businessDetails?.businessName}</h2>
              <p>{businessDetails?.businessAddress}</p>
              <p>{businessDetails?.businessCity}</p>
              <p>{businessDetails?.businessCountry || "Nigeria"}</p>
            </div>
            <div>
              <p>{invoiceDetails?.invoiceNumber}</p>
              <p>{new Date().toDateString()}</p>
            </div>
          </div>

          {/* Invoice Body */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-2">Bill To:</h3>
            <p>{ customerDetails?.customerName}</p>
            <p>{ customerDetails?.customerEmail}</p>
            <p>{customerDetails?.customerAddress}</p>
            <p>{customerDetails?.customerCity}</p>
            <p>{customerDetails?.customerCountry || "Nigeria"}</p>
          </div>

          {/* Invoice Table */}
          <div className="mb-8">
            <table className="w-full border-collapse table md:block">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Item</th>
                  <th className="border border-gray-300 p-2">Quantity</th>
                  <th className="border border-gray-300 p-2">Price</th>
                  <th className="border border-gray-300 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
              {/* the rows */}
                <tr>
                  <td className="border border-gray-300 p-2">Service/Product</td>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2">$100.00</td>
                  <td className="border border-gray-300 p-2">$100.00</td>
                </tr>
                {/* ... more items ... */}
              </tbody>
            </table>
          </div>

          {/* Invoice total */}
          <div className="flex justify-end mb-20">
            <div className="w-1/3">
              <p className="font-bold">Subtotal: $100.00</p>
              <p className="font-bold">Tax (10%): $10.00</p>
              <p className="font-bold">Total: $110.00</p>
            </div>
          </div>

         
        </div>
         {/* footer */}
      <footer className="absolute  bottom-0 bg-blue-600 text-white p-4 w-full">
              <h2 className='text-center font-semibold'>Invoice Generated with Bookka</h2>
      </footer>
      </div>
    </div>
  );
};

export default InvoicePage;
