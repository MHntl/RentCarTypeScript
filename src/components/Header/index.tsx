import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Header = (): JSX.Element => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center  px-6 py-4 sm:px-16">
        <Link to={"/"}>
          <img width={50} src="/bmw.png" alt="" />
        </Link>
        <CustomButton
          title="Sign-Up"
          btnType="button"
          designs="min-w-[130px]"
        />
      </nav>
    </header>
  );
};
export default Header;
