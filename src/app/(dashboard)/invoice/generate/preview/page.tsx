"use client"
import InvoicePreview from '@/page/invoice/components/preview-invoice'
import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
      <div>
          <PDFViewer>
               <InvoicePreview />
        </PDFViewer>
         
    </div>
  )
}

export default page