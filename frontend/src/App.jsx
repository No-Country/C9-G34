import { BottomNavigationBar, Loader } from "./components";
import AllRoutes from "./routes/AllRoutes";
import Aos from "aos";

// CSS
import "./App.css";

// --------------------------------------------------------------------

Aos.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

export default function App() {
  return (
    <>
      <Loader />
      <AllRoutes />
      <BottomNavigationBar />
    </>
  );
}
