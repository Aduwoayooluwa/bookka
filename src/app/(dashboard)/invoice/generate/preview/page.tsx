"use client"
import InvoicePreview from '@/page/invoice/components/preview-invoice'
import React from 'react'
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import html2canvas from "html2canvas";

type Props = {}

const page = (props: Props) => {
  
  const createPDF = async () => {   
    const pdf = new jsPDF("portrait", "pt", "a4"); 
    const data = await html2canvas(document.querySelector("#pdf")!);
    const img = data.toDataURL("image/png");  
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };
  
  return (
    <div className='w-full p-10 md:p-20'>
      <h1 className='text-5xl text-center font-medium'>Invoice preview</h1>
       <div>
        <Button onClick={createPDF}>Download</Button>
      </div>
      <div id="pdf">
        <InvoicePreview />    
      </div>
    </div>
  )
}

export default page