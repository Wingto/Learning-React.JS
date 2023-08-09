import "./styles.css";
import HomeNav from "./component/HomeNav";
import ListHeader from "./component/ControlList";
import { Container, Box } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <div>
        <Container maxWidth="lg">
          {/* Use the HomeNavContainer class to apply the styles */}
          <Container className="HomeNavContainer">
            <h1>HyCloud</h1>
            <HomeNav />
          </Container>
        </Container>
      </div>
      <Container maxWidth="lg">
        <ListHeader />
      </Container>
    </div>
  );
}
