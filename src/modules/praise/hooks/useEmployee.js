import { useState } from "react";

export const usePraise = () => {
  const [form, setForm] = useState();
  const [praise, setPraise] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeFilter = ({ key, value }) => {
    return setForm({ ...form, [key]: value });
  };
  return {
    filter: form,
    onChangeFilter,
    praise,
    setPraise,
    loading,
    setLoading,
  };
};
