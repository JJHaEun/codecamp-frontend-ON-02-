import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import React from "react";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {};

const App: React.FC = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} picker="month" />
  </Space>
);

export default App;
