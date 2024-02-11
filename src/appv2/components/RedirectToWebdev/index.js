import { Routes, Route,NavLink } from 'react-router-dom';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import './App.css';
import Appv2 from './appv2/Appv2';

function App() {
  return (
    <>
      <section>
            <NavLink exact='true' activeclassname="active" to="webdev" className="about-link">
                Web dev <HiOutlineDesktopComputer/>
            </NavLink>
      </section>
      <Appv2 />
    </>
  );
}

export default App;
