import { Button, Space, Table, Tag } from "antd";
import React from "react";
import {  deleteReport } from "../utils/api";

export default function ReportTable({
  report,
  getData,
  loading,
  setLoading,
}) {
  const handleDeleteReport = async (id) => {
    try {
      setLoading(true);
      await deleteReport(id);
      getData();
    } catch (error) {}
    setLoading(false);
  };
  const columns = [
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Description",
      key: "des",
      dataIndex: "des",
      render: (des) => <div>{des}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button block>Edit</Button>
            <Button onClick={() => handleDeleteReport(record.id)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={report} loading={loading} />;
}
