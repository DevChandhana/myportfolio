import React from "react";
import "./App.css";
//components
import Navbar from "./components/navbar/index";
import Banner from "./components/banner/index";
import PageLoader from "./components/pageload";
import About from "./components/about";
function App() {
  const [timer, setTimer] = React.useState(true);
  React.useEffect(() => {
    timeOut();
    // eslint-disable-next-line
  }, []);
  const timeOut = () => {
    setTimeout(() => {
      setTimer(!timer);
    }, 5000);
  };
  return (
    <div className="scrollbar-hide">
      {timer ? (
        <PageLoader />
      ) : (
        <>
          <div className=" flex justify-center">
            <Navbar />
          </div>
          <Banner />
          <About />
        </>
      )}
    </div>
  );
}

export default App;
