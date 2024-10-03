import { useState } from "react";
import AdSection from "./AdSection";
import Creations from "./Creations";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import DrawerTab from "./DrawerTab";
import useMediaQuery from "@mui/material/useMediaQuery";
function App() {
  const matches = useMediaQuery("(min-width: 1280px)");
  const lg = useMediaQuery("(min-width: 768px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      lg ||
      (event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift"))
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="app">
      {!lg && (
        <DrawerTab
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          toggleDrawer={toggleDrawer}
        />
      )}
      <NavBar lg={lg} toggleDrawer={toggleDrawer} />
      <Home matches={matches} />
      <AdSection matches={matches} />
      <Creations matches={matches} lg={lg} />
      <Footer matches={matches} />
    </div>
  );
}

export default App;
