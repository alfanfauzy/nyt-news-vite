import { Search, X } from "lucide-react";

type SearchInputProps = {
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
    onClear: () => void;
};

const SearchInput = (props: SearchInputProps) => {
    const {
        value,
        onClear,
        onChange,
        placeholder = "Cari nama barang...",
    } = props;

    return (
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            {value && (
                <button
                    onClick={onClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default SearchInput;
