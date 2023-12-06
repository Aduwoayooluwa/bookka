import "../index.css";

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account in just a few easy steps.',
    icon: '/icons/sign_up.png',
    key: '1',
  },
  {
    title: 'Create Your First Invoice',
    description: 'Easily generate and customize your invoices.',
    icon: '/icons/invoice_black.png',
    key: '2',
  },
  {
    title: 'Track Your Expenses',
    description: 'Keep track of your expenses and financial health.',
    icon: '/icons/expense_black.png',
    key: '3',
  },

];

const HowItWorksSection = () => {
  return (
    <div className="py-12 bg-slate-100 work-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">how it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           
          Three Basic Procedures


          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <img src={step.icon} alt={step.title} className="mx-auto h-12 w-12 text-gray-400" />
                <dt className="mt-5 text-2xl font-medium text-gray-900">{step.title}</dt>
                <dd className="mt-2 text-lg text-gray-500">{step.description}</dd>
                <dd className="text-8xl mt-8 text-black"><h2>{step.key}</h2></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
