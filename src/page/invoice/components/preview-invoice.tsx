"use client"
import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet, renderToFile } from '@react-pdf/renderer';

type Props = {}

const InvoicePreview = (props: Props) => {
  return (
      <Document>
          <Page size="A4">
            <View>
                <Text>Section #1</Text>
            </View>
            <View>
                <Text>Section #2</Text>
            </View>
            </Page>
    </Document>
  )
}

renderToFile(<InvoicePreview />, `${__dirname}/my-doc.pdf`);

export default InvoicePreview;



