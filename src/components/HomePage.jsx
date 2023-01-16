import { lazy, Suspense } from 'react';
import ErrorBoundary from '../SafeComponent';

const HomeLazy = lazy(() => import("home/homepage"))
const PokemonLazy = lazy(() => import("home/pokemonitem"))
const AppPokeLazy = lazy(() => import("home/appPoke"))

const HomePage = () => {
  return (
    <div className='text-white text-2xl'>
      <ErrorBoundary>
        <Suspense fallback="">
          <HomeLazy />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default HomePage;
