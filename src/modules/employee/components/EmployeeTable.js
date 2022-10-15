import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { deleteEmployee } from "../utils/api";

export default function EmployeeTable({
  employee,
  getData,
  loading,
  setLoading,
}) {
  const handleDeleteEmployee = async (id) => {
    try {
      setLoading(true);
      await deleteEmployee(id);
      getData();
    } catch (error) {}
    setLoading(false);
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      render: (sex) => <div>{SVGTextElement}</div>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => <div>{address}</div>,
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
      render: (phone) => <div>{phone}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button block>Edit</Button>
            <Button onClick={() => handleDeleteEmployee(record.id)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={employee} loading={loading} />;
}
