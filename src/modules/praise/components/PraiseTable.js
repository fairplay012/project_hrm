import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { deletePraise } from "../utils/api";

export default function PraiseTable({
  praise,
  getData,
  loading,
  setLoading,
}) {
  const handleDeletePraise = async (id) => {
    try {
      setLoading(true);
      await deletePraise(id);
      getData();
    } catch (error) {}
    setLoading(false);
  };
  const columns = [
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => <div>{date}</div>,
    },
    {
      title: "Employee",
      key: "employee",
      dataIndex: "employee",
      render: (employee) => <div>{employee}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button block>Edit</Button>
            <Button onClick={() => handleDeletePraise(record.id)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={praise} loading={loading} />;
}
