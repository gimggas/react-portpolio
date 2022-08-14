//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./pages/Main.css";
import Main from "./pages/Main";
import Sub from "./pages/Sub";
import Detail from "./pages/Detail";
import Search from "./components/Search";
import Login from "./components/Login";
import Shoppingbasket from "./components/Shoppingbasket";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand
              onClick={() => {
                navigate("/");

                // navigate(1);
                // navigate(-1);
                // pagination
              }}
            >
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/Sub");
                }}
              >
                모든 커피
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/Detail");
                }}
              >
                스프링 블렌드
              </Nav.Link>
            </Nav>

            <Search />
            <Login />
            <Shoppingbasket />
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Sub" element={<Sub />} />
          <Route path="/Detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
