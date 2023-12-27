import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
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
