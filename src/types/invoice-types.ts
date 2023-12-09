export interface Items {
    name: string,
    price: number
    quantity: number
}

export type InvoiceData = {
    customerName: string;
    customerEmail: string;
    businessCity: string;
    businessCountry: string
    totalPrice: number
    items: Items[]
    businessName: string
    country: string
    city: string
    businessPhoneNumber: string
    businessEmail: string
    customerAddress: string
    businessAddress: string
    customerPhonenumber: string
    invoiceDate: any
    dueDate: any
    extraNote?: string
    termsAndConditions?: string
    customerCountry: string
};