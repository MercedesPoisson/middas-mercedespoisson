import Image from "next/image"


const MiddasLogo = () => {
    return (
      <div >
        <div className="flex flex-row items-center leading-none text-white">
          <Image 
          src='/images/middas.png' 
          alt="Logo Middas"
          width={150}
          height={110}
          className="hidden md:block"
          />
          <Image 
          src='/images/middas.png' 
          alt="Logo Middas"
          width={100}
          height={80}
          className="block md:hidden"
          />
       
        </div>
      </div>
    );
  }
  
  export default MiddasLogo;
  