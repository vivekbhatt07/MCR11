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
      <div className="flex min-h-screen gap-2">
        <div className="basis-2/12 h-full">
          <Sidebar />
        </div>
        <div className="flex flex-col gap-7 w-full px-4">
          <div className="w-full h-[98vh] pt-[2vh]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
