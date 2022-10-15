import { PageHeader } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import EmployeeFilter from "../components/EmployeeFilter";
import EmployeeTable from "../components/EmployeeTable";
import { useEmployee } from "../hooks/useEmployee";
import { getAllEmployee, getEmployeeByParams } from "../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function ReportList() {
  const { filter, onChangeFilter, employee, setEmployee, loading, setLoading } =
    useEmployee();
  const getData = async (params) => {
    try {
      setLoading(true);
      const { data } = !params
        ? await getAllEmployee()
        : await getEmployeeByParams(params);
      setEmployee(data);
    } catch (error) {
      MySwal.fire("Error");
    }
    setLoading(false);
  };
  const onSubmit = async () => {
    try {
      getData(filter);
    } catch (error) {
      MySwal.fire("Error");
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <Container>
        <PageHeader onBack={() => null} title="Report" />
        <EmployeeFilter
          filter={filter}
          onChangeFilter={onChangeFilter}
          onSubmit={onSubmit}
        />
        <EmployeeTable
          filter={filter}
          onChangeFilter={onChangeFilter}
          employee={employee}
          getData={getData}
          loading={loading}
          setLoading={setLoading}
        />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: block;
  flex: 1;
  padding: 20px;
`;
