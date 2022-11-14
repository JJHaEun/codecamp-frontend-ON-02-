import React, { useState } from "react";

import { Rate } from "antd";

const desc = ["1점", "2점", "3점", "4점", "5점"];

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  return (
    <>
      <div>
        <Rate tooltips={desc} onChange={setValue} value={value} />
      </div>
      <div>
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </div>
    </>
  );
};

export default App;
