import "./App.css";
import { Grid } from "antd";
import Navbar from "./components/Navbar";
import LoginScreen from "./components/LoginScreen";
const { useBreakpoint } = Grid;

function App() {
  const screens = useBreakpoint();
  return (
    <>
      <Navbar screens={screens} />
      <LoginScreen screens={screens} />
    </>
  );
}

export default App;
