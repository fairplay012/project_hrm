import { PageHeader } from "antd";
import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import PraiseFilter from "../components/PraiseFilter";
import PraiseTable from "../components/PraiseTable";
import { usePraise } from "../hooks/useEmployee";
import { getAllPraise, getPraiseByParams } from "../utils/api";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function PraiseList() {
  const { filter, onChangeFilter, praise, setPraise, loading, setLoading } =
    usePraise();
  const getData = async (params) => {
    try {
      setLoading(true);
      const { data } = !params
        ? await getAllPraise()
        : await getPraiseByParams(params);
      setPraise(data);
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
        <PageHeader onBack={() => null} title="Praise" />
        <PraiseFilter
          filter={filter}
          onChangeFilter={onChangeFilter}
          onSubmit={onSubmit}
        />
        <PraiseTable
          filter={filter}
          onChangeFilter={onChangeFilter}
          praise={praise}
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
