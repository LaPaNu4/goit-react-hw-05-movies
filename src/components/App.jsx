
import { NavLink, Routes , Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Home from "pages/Home";
// import MovieDetails from "pages/MovieDetails";
// import Movies from "pages/Movies";
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

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
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<>NotFound</>} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
