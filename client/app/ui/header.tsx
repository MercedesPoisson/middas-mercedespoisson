import NavBar from "./navBar";

const Header = () => {
    return (
      <div  className="sticky top-0 z-10 bg-white shadow-md">
        <div className="h-16 px-4 flex items-center font-sans">
        soy el header
        <NavBar />
        </div>
        
      </div>
    );
  }
  
  export default Header;
  