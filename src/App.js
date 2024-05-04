
import { React, useEffect } from "react";
import HomePage from "./components/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
