import React, { useState } from "react";

import { Rate } from "antd";

// export default function score() {
//   const [value, setValue] = useState(2);

//   function handleChange(num: number) {
//     setValue(num);
//   }

//   return (
//     <>
//       <Rate onChange={handleChange} value={value} />
//       console.log(value)
//       {alert(`${value}+점`)}
//       <div>{value}</div>
//     </>
//   );
// }
export default function Score() {
  const [value, setValue] = useState(0);

  function handleChange(star: number) {
    setValue(star);
  }
  if (typeof window !== "undefined") {
    alert(`${value}점`);
  }
  return (
    <>
      <Rate onChange={handleChange} value={value} />
    </>
  );
}
