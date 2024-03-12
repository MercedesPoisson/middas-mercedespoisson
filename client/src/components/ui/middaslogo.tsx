import Logo from "../../util/middas.png";

const MiddasLogo = () => {
  return (
    <div>
      <div className="flex flex-row items-center leading-none text-white">
        <img
          src={Logo}
          alt="Logo Middas"
          width={150}
          height={110}
          className="hidden md:block"
        />
        <img
          src={Logo}
          alt="Logo Middas"
          width={100}
          height={80}
          className="block md:hidden"
        />
      </div>
    </div>
  );
};

export default MiddasLogo;
