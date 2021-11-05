import NavBar from "components/NavBar";
import Datatable from "components/Datatable";
import Footer from "components/Footer";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="text-primary py-3">
          <h2 className="text-primary">Todas as Vendas</h2>
        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
