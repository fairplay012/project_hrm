import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function ReportFilter({ filter, onChangeFilter, onSubmit }) {
  return (
    <Form onFinish={onSubmit}>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item name={`startDate`} label={`Start Date`}>
            <Input
              value={filter?.startDate}
              placeholder="Start Date"
              onChange={(e) =>
                onChangeFilter({ key: "startDate", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name={`endDate`} label={`End Date`}>
            <Input
              value={filter?.endDate}
              placeholder="End Date"
              onChange={(e) =>
                onChangeFilter({ key: "endDate", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name={`des`} label={`Description`}>
            <Input
              value={filter?.endDate}
              placeholder="Description"
              onChange={(e) =>
                onChangeFilter({ key: "des", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col>
          <Button htmlType="submit" type="primary">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
