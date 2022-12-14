import { PageHeader } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import ReportFilter from "../components/ReportFilter";
import ReportTable from "../components/ReportTable";
import { useReport } from "../hooks/useReport";
import { getAllReport, getReportByParams } from "../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function ReportList() {
  const { filter, onChangeFilter, report, setReport, loading, setLoading } =
  useReport();
  const getData = async (params) => {
    try {
      setLoading(true);
      const { data } = !params
        ? await getAllReport()
        : await getReportByParams(params);
        setReport(data);
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
        <ReportFilter
          filter={filter}
          onChangeFilter={onChangeFilter}
          onSubmit={onSubmit}
        />
        <ReportTable
          filter={filter}
          onChangeFilter={onChangeFilter}
          report={report}
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
