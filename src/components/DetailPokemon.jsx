import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../SafeComponent";
const DetailPokemonLazy = lazy(() => import("home/detailpokemon"))

const DetailPokemon = () => {
  return (
    <div className='text-white text-2xl'>
      <div className="bg-slate-900 py-5 flex items-center justify-between px-5">
        <Link className="w-1/3" to={"/"}>
          <div className="text-[30px] cursor-pointer">Back</div>
        </Link>
        <div className="text-3xl text-center text-amber-400">Detail Pokemon</div>
        <div className="w-1/3"></div>
      </div>
      <ErrorBoundary>
        <Suspense fallback="">
          <DetailPokemonLazy />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default DetailPokemon;
