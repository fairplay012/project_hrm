import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function EmployeeFilter({ filter, onChangeFilter, onSubmit }) {
  return (
    <Form onFinish={onSubmit}>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item name={`name`} label={`Name`}>
            <Input
              value={filter?.name}
              placeholder="Name"
              onChange={(e) =>
                onChangeFilter({ key: "name", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item name={`sex`} label={`Sex`}>
            <Select
              value={filter?.sex}
              onChange={(e) => onChangeFilter({ key: "sex", value: e })}
            >
              <Option value="male">Nam</Option>
              <Option value="female">Nữ</Option>
            </Select>
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
