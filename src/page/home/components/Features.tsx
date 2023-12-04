// components/FeaturesSection.tsx
import { motion } from 'framer-motion';

const features = [
  { title: 'Easy Invoice Generation', description: 'Generate and send invoices in seconds.', icon: '/icons/invoice_icon.png' },
  { title: 'Expense Tracking', description: 'Keep track of your expenses effortlessly.', icon: '/icons/bookkeeping_icon.png' },
  { title: 'Financial Reporting', description: 'Access detailed financial reports for better decision-making.', icon: '/icons/expense_icon.png' },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your finances
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <img src={feature?.icon} alt={`${feature?.title} icon`} className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
