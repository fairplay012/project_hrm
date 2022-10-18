import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeList from "./modules/employee/view/EmployeeList";
import ReportList from "./modules/report/view/ReportList";
import PraiseList from "./modules/praise/view/PraiseList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/report" element={<ReportList />}></Route>
        <Route path="/employee" element={<EmployeeList />}></Route>
        <Route path="/praise" element={<PraiseList />}></Route>
        <Route path="/discipline" element={<EmployeeList />}></Route>
        <Route path="/appoint" element={<EmployeeList />}></Route>
        <Route path="/dismissed" element={<EmployeeList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
