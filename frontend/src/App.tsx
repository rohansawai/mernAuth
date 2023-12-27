import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
