import { DatePicker, Space } from "antd";
import moment from "moment";
import React, { useState } from "react";

const dateFormat = "YYYY/MM/DD";

export default function Date() {
  return (
    <>
      <Space direction="vertical" size={12}>
        <DatePicker
          defaultValue={moment("2023/01/01", dateFormat)}
          format={dateFormat}
        />
      </Space>

      <div>{dateFormat}</div>
    </>
  );
}
