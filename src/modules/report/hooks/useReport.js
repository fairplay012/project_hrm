import { useState } from "react";

export const useReport = () => {
  const [form, setForm] = useState();
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeFilter = ({ key, value }) => {
    return setForm({ ...form, [key]: value });
  };
  return {
    filter: form,
    onChangeFilter,
    report,
    setReport,
    loading,
    setLoading,
  };
};
