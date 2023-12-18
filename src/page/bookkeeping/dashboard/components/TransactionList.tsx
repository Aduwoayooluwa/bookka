import React from 'react';
import { Transaction } from "../../../../types/bookeeping-transaction-type";
import AddTransactionForm from './AddTransactionForm';

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
        <div className="mt-4">
            <div className="flex items-center w-full justify-between">
                <h2 className="font-bold text-xl mb-2">Recent Transactions</h2>
                <AddTransactionForm />
            </div>
            <div className="divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                    <div key={transaction.id} className="py-2">
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                        <p>{transaction.description}</p>
                        <p className={`text-${transaction.type === 'income' ? 'green' : 'red'}-600`}>
                            ${transaction.amount}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
