import React from "react";
import { Sidebar } from "../../Components";

const PageContainer = (props) => {
  const { className = "", children, label, extra } = props;
  const classes =
    "min-h-screen mx-auto bg-[#fff] relative max-w-[1280px]" + className;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
    gap: "16px",
  };

  // style={gridStyle}

  return (
    <div className={classes}>
      <div className="flex min-h-screen gap-2">{children}</div>
    </div>
  );
};

export default PageContainer;
