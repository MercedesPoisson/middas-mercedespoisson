interface InputProps {
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded hover:border-gray-400 focus:border-gray-500 transition duration-150 ease-in-out"
        name={name}
      ></input>
    </div>
  );
};

export default Input;
