
const SelectSize = ({ selectedSize, setSelectedSize, handleSizeSelection }) => {
    return (
        <div className="flex justify-start items-start font-serif font-extrabold mt-2">
            {/* Button for size S */}
            <button
                className={`mr-2 px-4 py-2 border border-gray-400 shadow-lg ${selectedSize === 'S' ? 'bg-green-600 text-white' : ''
                    }`}
                onClick={() => handleSizeSelection('S')}
            >
                S
            </button>

            {/* Button for size L */}
            <button
                className={`mr-2 px-4 py-2 border border-gray-400 shadow-lg ${selectedSize === 'L' ? 'bg-green-600 text-white' : ''
                    }`}
                onClick={() => handleSizeSelection('L')}
            >
                L
            </button>

            {/* Button for size XL */}
            <button
                className={`mr-2 px-4 py-2 border border-gray-400 shadow-lg ${selectedSize === 'XL' ? 'bg-green-600 text-white' : ''
                    }`}
                onClick={() => handleSizeSelection('XL')}
            >
                XL
            </button>

            {/* Button for size XXL */}
            <button
                className={`px-4 py-2 border border-gray-400 shadow-lg ${selectedSize === 'XXL' ? 'bg-green-600 text-white' : ''
                    }`}
                onClick={() => handleSizeSelection('XXL')}
            >
                XXL
            </button>
        </div>
    );
};

export default SelectSize;