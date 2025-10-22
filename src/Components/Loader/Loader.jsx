import { PropagateLoader } from "react-spinners";
import icon from "../../assets/icon.png";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="pb-10 animate-bounce">
        <img className="w-[50px] h-[50px]" src={icon} alt="" />
      </div>
      <PropagateLoader color="#0B9444"></PropagateLoader>
    </div>
  );
};

export default Loader;
