
const QuanntityUpdate = ({ quantity, handleIncrement, handleDecrement }) => {
    return (
        <div className="flex items-center">
            <button
                onClick={() => handleDecrement()}
                className="w-8 h-8 flex justify-center items-center bg-green-500 px-2 py-1 rounded-l font-serif font-extrabold text-xl text-white"
            >
                -
            </button>
            <input
                type="text"
                value={quantity}
                className="w-16 h-8 text-center border border-green-500 font-bold"
                readOnly
            />
            <button
                onClick={() => handleIncrement()}
                className="w-8 h-8 flex justify-center items-center bg-green-500 px-2 py-1 rounded-r font-serif font-extrabold text-xl text-white"
            >
                +
            </button>
        </div>
    );
};

export default QuanntityUpdate;