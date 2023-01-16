import { Outlet } from 'react-router-dom';
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-900 py-5 flex items-center justify-center gap-[25px]">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
