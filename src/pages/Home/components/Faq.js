import { Accordion } from "./Accordion";

export const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "¿Quiénes somos?",
      answer: "Somos una empresa 100% costarricense enfocada en la atención al cliente, brindando el mejor servicio posible y ayudando a las empresas costarricenses a ofrecer productos de alta calidad."
    },
    {
      id: 2,
      question: "¿Cómo se realiza la entrega?",
      answer: "Realizamos entregas en la Gran Área Metropolitana (GAM) en un plazo de 1 a 3 días hábiles. Para envíos fuera del GAM, utilizamos el servicio de Correos de Costa Rica. Si tu pedido supera los 35,000 colones, el envío es gratuito. En caso contrario, el costo del envío es de 3,200 colones."
    },
    {
      id: 3,
      question: "¿Cuánto cuesta el envío?",
      answer: "El envío es gratuito a partir de compras superiores a 35,000 colones. En caso de no superar ese monto, el costo de envío es de 3,200 colones."
    },
    {
      id: 4,
      question: "¿Cómo puedo realizar el pago?",
      answer: "Aceptamos pagos contraentrega con SINPE Móvil, transferencias bancarias, tarjetas de débito, crédito, y PayPal."
    },
    {
      id: 5,
      question: "¿Qué tipo de garantía ofrecen?",
      answer: "Ofrecemos una garantía por defectos de fábrica durante el primer mes después de la compra."
    },
    {
      id: 6,
      question: "¿Realizan envíos internacionales?",
      answer: "Sí, los envíos internacionales tardan aproximadamente de 2 a 3 semanas en llegar a la puerta de su casa, con todos los impuestos incluidos."
    }
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Preguntas Frecuentes
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordion key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
