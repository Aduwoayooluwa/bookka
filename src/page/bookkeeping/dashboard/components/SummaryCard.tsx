import React from 'react';
import { motion } from 'framer-motion';

interface SummaryCardProps {
    title: string;
    amount: number;
    color: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, amount, color }) => {
    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`bg-${color}-100 p-4 rounded-md shadow-md`}
        >
            <h2 className={`text-${color}-800 font-bold`}>{title}</h2>
            <p className="text-lg">${amount.toLocaleString()}</p>
        </motion.div>
    );
};

export default SummaryCard;

