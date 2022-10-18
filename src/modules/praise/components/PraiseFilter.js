import { Button, Col, Form, Input, Row, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function PraiseFilter({ filter, onChangeFilter, onSubmit }) {
  return (
    <Form onFinish={onSubmit}>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item content={`content`} label={`Content`}>
            <Input
              value={filter?.content}
              placeholder="Content"
              onChange={(e) =>
                onChangeFilter({ key: "content", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item date={`date`} label={`Date`}>
            <Input
              value={filter?.content}
              placeholder="Date"
              onChange={(e) =>
                onChangeFilter({ key: "date", value: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item employee={`employee`} label={`Employee`}>
            <Input
              value={filter?.employee}
              placeholder="Employee"
              onChange={(e) =>
                onChangeFilter({ key: "employee", value: e.target.value })
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
