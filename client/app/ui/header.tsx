import Image from "next/image";

const Header = () => {
    return (
      <div  className="sticky top-0 z-10 shadow-md bg-middasdarkgreen text-notwhite">
        <div className="h-16 px-4 flex items-center font-sans">
          <Image 
          src='/images/middas.png' 
          alt="Logo Middas"
          width={100}
          height={80}
          className="hidden md:block"
          />
          <Image 
          src='/images/middas.png' 
          alt="Logo Middas"
          width={80}
          height={60}
          className="block md:hidden"
          />
        soy el header
        </div>
        
      </div>
    );
  }
  
  export default Header;
  