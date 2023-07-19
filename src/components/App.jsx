
import { NavLink, Routes , Route } from "react-router-dom";
import Home from "pages/Home";

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movies">Movie</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<>Movies</>} />
          <Route path="*" element={<>NotFound</>} />
        </Routes>
      </main>
    </>
  );
};
