import Lottie from "react-lottie";
import Loader from "../../assets/loader.json";
const PageLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };
  return (
    <div className="h-screen w-screen bg-black">
      <Lottie options={defaultOptions} height="90%" width="90%" />
    </div>
  );
};
export default PageLoader;
