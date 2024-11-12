import React from 'react';

export const GiftWrappingPlans = () => {
  const plans = [
    {
      size: "Extra Small (XS)",
      price: "1000",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
    {
      size: "Small (SM)",
      price: "1500",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
    {
      size: "Medium (MD)",
      price: "1800",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
    {
      size: "Large (LG)",
      price: "2200",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
    {
      size: "Extra Large (XL)",
      price: "2600",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
    {
      size: "Double Extra Large (2XL)",
      price: "3000",
      delivery: "2-3 días",
      features: [
        "Envoltorio personalizado",
        "Entrega en 2-3 días",
        "Solicitud personalizada por WhatsApp",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Plan {plan.size}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white mb-7">
              <span className="text-3xl font-semibold">₡</span>
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/unidad</span>
            </div>
            <ul className="space-y-5 my-7">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-700 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg py-2.5"
            >
               {plan.size}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

