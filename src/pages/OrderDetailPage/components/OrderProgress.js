// src/components/OrderProgress.js
import React from "react";

export const OrderProgress = ({ status }) => {
  const steps = [
    { name: "Pendiente", icon: "bi bi-hourglass-split" },
    { name: "Procesado", icon: "bi bi-receipt" },
    { name: "Enviado", icon: "bi bi-truck" },
    { name: "Completado", icon: "bi bi-check-circle" },
  ];

  const canceledStep = { name: "Cancelado", icon: "bi bi-x-circle" };
  const currentIndex = steps.findIndex((step) => step.name === status);

  return (
    <div className="flex items-center justify-center my-6">
      <ol className="flex items-center w-full max-w-4xl">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`flex items-center w-full ${
              index < currentIndex
                ? "text-blue-600"
                : "text-gray-500"
            }`}
          >
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 ${
                index <= currentIndex
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              <i className={step.icon}></i>
            </span>
            
            {/* Línea divisoria, solo si no es el último paso */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  index < currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            )}
          </li>
        ))}

        {/* Estado de cancelado */}
        {status === canceledStep.name && (
          <li className="flex items-center w-full">
            <span className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full lg:h-12 lg:w-12 text-white">
              <i className={canceledStep.icon}></i>
            </span>
            <span className="ml-2 text-red-600 font-semibold">
              {canceledStep.name}
            </span>
          </li>
        )}
      </ol>
    </div>
  );
};
