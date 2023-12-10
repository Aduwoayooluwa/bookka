// components/FeaturesSection.tsx
import { motion } from "framer-motion";
import "../index.css";

const features = [
  {
    title: "Instant Invoice Creation",
    description:
      "Create and dispatch professional invoices with ease and speed.",
    icon: "/icons/invoice_icon.png",
  },
  {
    title: "Effortless Expense Management",
    description:
      "Track all business expenses with precision for optimal financial control.",
    icon: "/icons/bookkeeping_icon.png",
  },
  {
    title: "Comprehensive Financial Insights",
    description:
      "Gain valuable insights through detailed, user-friendly financial reports.",
    icon: "/icons/expense_icon.png",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-12 bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your finances
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
            {features.map((feature, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex  mt-16  mx-auto items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <img
                    src={feature?.icon}
                    alt={`${feature?.title} icon`}
                    className="h-6 w-6"
                  />
                </div>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-bg mx-auto mt-8 bg-slate-100 rounded-xl"
                >
                  <dt className="">
                    <h3 className="text-center text-2xl mt-16 font-medium text-gray-900">
                      {feature.title}
                    </h3>
                  </dt>
                  <dd className="mt-6 text-lg text-center text-gray-500 ">
                    {feature.description}
                  </dd>
                </motion.div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
