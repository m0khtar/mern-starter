import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <NavBar />
      <Container style={{ marginTop: "7em" }} maxWidth={false}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
