import { Link } from 'react-router-dom';

export const TerminosYCondiciones = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Términos y Condiciones
        </h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>ProductosCR</strong>, bajo el nombre comercial de **Corporación Evidence de Régimen Simplificado**, propiedad de Marco Vinicio Jiménez Castro, establece los siguientes términos y condiciones para el uso de su sitio web.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Declaraciones Generales</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El <strong>USUARIO</strong> que desee acceder y/o usar el sitio web 
            <a href="https://www.productoscr.com" className="text-blue-600 dark:text-blue-400 underline">
                www.productoscr.com
            </a>,
            declara expresamente haber leído y aceptado este <strong>CONTRATO DE TÉRMINOS DE USO</strong>, junto con todas las demás políticas y principios que rigen el sitio. Todo lo anterior tiene carácter obligatorio y vinculante entre <strong>ProductosCR</strong> y el <strong>USUARIO</strong>. Si no está de acuerdo, no podrá utilizar el sitio web.
            </p>



          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. Definiciones</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>ProductosCR:</strong> Plataforma virtual que comercializa productos físicos y tangibles propios o de terceros (denominados PROVEEDORES).
            </li>
            <li>
              <strong>USUARIO:</strong> Persona física mayor de edad que navega el sitio web y/o crea una cuenta para realizar compras.
            </li>
            <li>
              <strong>PRODUCTO:</strong> Bien físico/tangible comercializado en 
              <a href="https://www.productoscr.com" className="text-blue-600 dark:text-blue-400 underline"> www.productoscr.com</a>.
            </li>
            <li>
              <strong>NÚMERO DE ORDEN:</strong> Código único que identifica la compra realizada por el usuario.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Responsabilidad</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Los encargados del sitio web {" "}
                <a href="https://www.productoscr.com" className="text-blue-600 dark:text-blue-400 underline">
                    www.productoscr.com {" "}
                </a> 
                han verificado la existencia del PROVEEDOR y sus PRODUCTOS, quien a su vez es el responsable por la existencia, calidad, exactitud, veracidad, seguridad y legalidad de los PRODUCTOS.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>ProductosCR</strong> se compromete a indicar el precio, garantía, disponibilidad y características en cada PRODUCTO comercializado en el sitio web, así como los términos y condiciones establecidas, que se consideren de importancia y establecidos en la Ley 7472 Promoción de Competencia y Defensa efectiva del Consumidor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                La descripción, restricciones, condiciones y observaciones establecidas por el PROVEEDOR para cada PRODUCTO son vinculantes para el USUARIO y formarán parte íntegra de este CONTRATO DE TÉRMINOS Y CONDICIONES DE USO.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                El USUARIO reconoce y acepta que la descripción de los PRODUCTOS ofertados en <strong>ProductosCR</strong> se publica de acuerdo con los datos, imágenes o videos facilitados por el PROVEEDOR, localizados en recursos en línea o creados internamente por <strong>ProductosCR</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>ProductosCR</strong> pone a disposición del USUARIO el correo electrónico 
                <a href="mailto:info@productoscr.com" className="text-blue-600 dark:text-blue-400 underline">
                {" "}info-sells@productoscr.com{" "}
                </a> 
                para consultas, sugerencias, comentarios y/o quejas relacionadas con el funcionamiento y gestión del sistema, con el fin de optimizar su funcionamiento.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Con el mayor alcance permitido por la legislación aplicable, el USUARIO entiende y acuerda que ni <strong>ProductosCR</strong> ni cualquiera de sus subsidiarias o afiliadas o terceros proveedores de contenido serán responsables por cualquier daño directo, indirecto, incidental, relativos a o resultantes de su uso o su incapacidad de usar este sitio o cualquier otro sitio que el USUARIO accediera a través de una conexión a partir de este sitio. Esto incluye daños por errores, omisiones, interrupciones, defectos, atrasos, virus informáticos, lucro cesante, pérdida de datos, acceso no autorizado y alteración de sus transmisiones y datos, y otras pérdidas tangibles e intangibles.
                </p>


          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Cuentas de Usuario</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Para solicitar una orden y agregar productos al carrito, el registro en <strong>ProductosCR</strong> es obligatorio. Sin embargo, acceder y navegar por las ofertas del sitio es gratuito.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            La cuenta de usuario es única, personal e intransferible. El USUARIO se compromete a mantener su información actualizada, ya que esta será utilizada para realizar envíos y notificaciones.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Métodos de Pago</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Efectivo con opción ContraEntrega (pedidos superiores a ₡15,000).</li>
            <li>SINPE Móvil.</li>
            <li>Transferencia bancaria a cuentas en BAC San José y Banco Promerica.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Actualmente no aceptamos pagos con tarjetas de crédito/débito, pero esta opción estará disponible próximamente.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Envíos y Devoluciones</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Pedidos superiores a ₡35,000: Envío gratuito a todo el país.</li>
            <li>Pedidos inferiores a ₡35,000:
              <ul className="list-circle list-inside ml-4">
                <li>Dentro del GAM: ₡2,800.</li>
                <li>Fuera del GAM: ₡3,500.</li>
              </ul>
            </li>
            <li>Productos en stock nacional: Entrega en 1-3 días hábiles.</li>
            <li>Envíos internacionales: Entrega en 14-21 días hábiles.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            Los productos defectuosos de fábrica tienen garantía de un mes. Para más información, contáctanos directamente.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">7. Privacidad y Seguridad</h2>
          <p className="text-gray-700 dark:text-gray-300">
            La información personal del usuario será tratada con confidencialidad y no se compartirá con terceros. Los datos serán utilizados únicamente para procesar pedidos y enviar promociones. Para más detalles, consulta nuestra 
            
            <Link to="/Politica-De-Privacidad" className=" text-blue-600 dark:text-blue-400  hover:underline"> <strong>Política de Privacidad</strong></Link>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">8. Propiedad Intelectual</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Todo el contenido del sitio web <strong>ProductosCR</strong>, incluyendo textos, imágenes y videos, es propiedad exclusiva de la empresa y está protegido por las leyes de propiedad intelectual. Está prohibido su uso para fines comerciales sin autorización previa.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">9. Modificaciones del Contrato</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>ProductosCR</strong> se reserva el derecho de modificar estos términos y condiciones en cualquier momento, sin previo aviso. Las actualizaciones serán aplicables desde el momento de su publicación en el sitio web.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">10. Contacto</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Para consultas, sugerencias o quejas, contáctanos al correo 
            <a href="mailto:info-sells@productoscr.com" className="text-blue-600 dark:text-blue-400 underline"> info-sells@productoscr.com</a>.
          </p>


        </div>
      </div>
    </section>
  );
};
