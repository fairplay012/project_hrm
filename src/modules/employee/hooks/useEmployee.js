import { useState } from "react";

export const useEmployee = () => {
  const [form, setForm] = useState();
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeFilter = ({ key, value }) => {
    return setForm({ ...form, [key]: value });
  };
  return {
    filter: form,
    onChangeFilter,
    employee,
    setEmployee,
    loading,
    setLoading,
  };
};
