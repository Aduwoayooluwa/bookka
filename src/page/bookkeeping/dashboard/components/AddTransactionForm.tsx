import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PostRequest } from '@/api/apiHandler';
import { useToast } from '@/components/ui/use-toast';


const AddTransactionForm = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('income');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const { toast } = useToast();


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.random().toString(36).substr(2, 9), 
            description,
            amount: parseFloat(amount),
            type,
            date,
            category
        };

        try {
            const response = await PostRequest("save-bookkeepping", newTransaction)
            toast({
                title: "Saved",
                description: response?.message
            })
        }
        catch (error) {
            toast({
                title: "Error",
                description: "Ah! chief an Error occured"
            })
        }
        console.log(newTransaction);

        setDescription('');
        setAmount('');
        setType('income');
        setDate('');
        setCategory('');
    };


    return (
        <Dialog>
            <DialogTrigger className='bg-blue-600 text-white hover:bg-blue-800 font-medium p-2 text-sm rounded-lg'>Add Transaction</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add a Transaction</DialogTitle>
                    <DialogDescription>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md w-full mb-2"
                            />
                            <input
                                type="number"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md w-full mb-2"
                            />
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                                className="border border-gray-300 p-2 rounded-md w-full mb-2"
                            >
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md w-full mb-2"
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border border-gray-300 p-2 rounded-md w-full mb-4"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-md w-full"
                            >
                                Add Transaction
                            </button>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddTransactionForm;
