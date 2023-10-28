/* eslint-disable react/prop-types */
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <button
      style={generateStyles(type)}
      className={`px-5 py-3 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
