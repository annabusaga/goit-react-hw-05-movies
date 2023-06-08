import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
// import Layout from './Layout/Layout';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
// import Cast from './Cast/Cast';

// import Home from './Home/Home';

const Home = lazy(() => import('../../pages/Home/Home'));
const Layout = lazy(() => import('../Layout/Layout'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Movies = lazy(() => import('../../pages/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
