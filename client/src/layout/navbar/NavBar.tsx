import NavBarMenuItems from "./NavBarMenuItems";
import NavBarLogo from "./NavBarLogo";
import NavBarSettings from "./NavBarSettings";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavBarLogo />
          <NavBarMenuItems />
          <NavBarSettings />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
