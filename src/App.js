import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header, WhatsAppButton } from './components';


function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
