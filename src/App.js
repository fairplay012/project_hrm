import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeList from "./modules/employee/view/EmployeeList";
import ReportList from "./modules/report/view/ReportList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/report" element={<ReportList />}></Route>
        <Route path="/employee" element={<EmployeeList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
