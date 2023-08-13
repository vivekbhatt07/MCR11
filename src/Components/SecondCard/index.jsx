import { Link } from "react-router-dom";
import { useData } from "../../Context";

const SecondCard = ({ children, label }) => {
  const { dispatch } = useData();
  return (
    <Link
      className="flex flex-col items-center p-4 gap-3 rounded-md min-h-[150px] justify-center bg-[#eee]"
      to="/products"
      onClick={(e) => {
        dispatch({ type: "FILTER_BY_CATEGORY", payload: children });
      }}
    >
      <div
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        }}
      >
        <span className="text-3xl">{label}</span>
      </div>
    </Link>
  );
};

export default SecondCard;
