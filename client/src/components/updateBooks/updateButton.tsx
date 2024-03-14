import { FaEdit } from "react-icons/fa";

const UpdateButton = ({ bookId }: { bookId: string }) => {
    
    const handleUpdateClick = () => {
        window.location.href = `/libro/${bookId}`;
    };
    
    return (
        <div onClick={handleUpdateClick}>
            <FaEdit className="text-2xl text-middasdarkgreen cursor-pointer p-1" />   
        </div>
    );    
}

export default UpdateButton;