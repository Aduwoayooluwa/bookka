// pages/index.tsx
import SummaryCard from './components/SummaryCard';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import { Transaction } from '../../../types/bookeeping-transaction-type';
import { Button } from '@/components/ui/button';

const mockTransactions: Transaction[] = [
    {
        id: '1',
        description: 'Freelance Payment',
        amount: 1200.00,
        type: 'income',
        date: '2023-12-10',
        category: 'Work'
    },
    {
        id: '2',
        description: 'Grocery Shopping',
        amount: 150.50,
        type: 'expense',
        date: '2023-12-12',
        category: 'Food'
    },
    {
        id: '3',
        description: 'Monthly Rent',
        amount: 800.00,
        type: 'expense',
        date: '2023-12-01',
        category: 'Housing'
    },
    {
        id: '4',
        description: 'Gym Membership',
        amount: 60.00,
        type: 'expense',
        date: '2023-12-05',
        category: 'Health'
    },
    {
        id: '5',
        description: 'Sold Laptop',
        amount: 450.00,
        type: 'income',
        date: '2023-12-07',
        category: 'Miscellaneous'
    }
];


const Bookkeeping: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SummaryCard title="Total Income" amount={15000} color="green" />
                <SummaryCard title="Total Expense" amount={5000} color="red" />
                <SummaryCard title="Net Balance" amount={10000} color="blue" />
            </div>


            <div className="md:col-span-2 mt-7 ">
                <TransactionList transactions={mockTransactions} />
            </div>
            
        </div>
    );
};

export default Bookkeeping;
