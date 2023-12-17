// types.ts
export interface Transaction {
    id: string; // Unique identifier for the transaction
    description: string; // Description of the transaction
    amount: number; // Monetary amount of the transaction
    type: 'income' | 'expense';
    date: string; // Date of the transaction (ISO format)
    category?: string;
}
