import Image from "next/image";

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account in just a few easy steps.',
    icon: '/icons/sign_up.png',
  },
  {
    title: 'Create Your First Invoice',
    description: 'Easily generate and customize your invoices.',
    icon: '/icons/invoice_black.png',
  },
  {
    title: 'Track Your Expenses',
    description: 'Keep track of your expenses and financial health.',
    icon: '/icons/expense_black.png',
  },

];

const HowItWorksSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-blue-600 text-center font-semibold text-sm md:text-lg">
          How It Works
        </h2>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <Image width={100} height={100} src={step.icon} alt={step.title} className="mx-auto h-12 w-12 text-gray-400" />
                <dt className="mt-5 text-lg leading-6 font-medium text-gray-900">{step.title}</dt>
                <dd className="mt-2 text-base text-gray-500">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;