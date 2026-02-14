import React from "react";

function Child({ func }) {
  func();
  console.log("Chid is rendered");
  return <div>child</div>;
}
export default React.memo(Child);
