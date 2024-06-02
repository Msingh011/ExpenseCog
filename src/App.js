import "./App.css";
import Sidebar from "./component/Sidebar";
import TopHeader from "./component/TopHeader";
import Dashboard from "./view/Dashboard";

function App() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <Sidebar />
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            <TopHeader />
            <Dashboard/>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
