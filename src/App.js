import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomeComp from "./containers/Homepage/HomeComp";
import Github from "./layouts/HomepageUI/Github/Github";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Preloader from "./utils/Preloader/Preloader";

function App() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 3000);
  }, []);
  return (
    <>
      {!mounted && <Preloader />}
      {mounted && (
        <>
          <Navbar open={open} setOpen={setOpen} />
          <Switch>
            <Route exact path="/" component={HomeComp} />
            <Route exact path="/github" component={Github} />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
