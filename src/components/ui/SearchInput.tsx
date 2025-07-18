import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "../../utils/cn";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: (e: React.FormEvent) => void;
    onClear: (e: React.FormEvent) => void;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
    disabled?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    onSearch,
    onClear,
    placeholder = "Search articles...",
    className,
    autoFocus = false,
    disabled = false,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <form
            onSubmit={onSearch}
            className={cn("group mb-5 flex gap-3", className)}
        >
            <div
                className={cn(
                    "relative flex items-center flex-grow",
                    "border-2 rounded-2xl transition-all duration-300",
                    "bg-white/80 backdrop-blur-sm",
                    isFocused
                        ? "border-blue-500 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 hover:border-gray-300",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
            >
                <Search
                    className={cn(
                        "absolute left-4 w-5 h-5 transition-colors duration-200",
                        isFocused ? "text-blue-500" : "text-gray-400"
                    )}
                />

                <input
                    type="text"
                    name="search-form"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    className={cn(
                        "w-full pl-12 pr-12 py-2 text-lg",
                        "bg-transparent border-none outline-none",
                        "placeholder-gray-400 text-gray-900",
                        "font-medium",
                        disabled && "cursor-not-allowed"
                    )}
                />

                {value && onClear && (
                    <button
                        type="button"
                        onClick={onClear}
                        disabled={disabled}
                        className={cn(
                            "absolute right-2 p-1 rounded-full",
                            "text-gray-400 hover:text-gray-600",
                            "transition-colors duration-200",
                            "hover:bg-gray-100",
                            disabled && "cursor-not-allowed"
                        )}
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
            <button
                type="submit"
                disabled={disabled || !value.trim()}
                className={cn(
                    "p-2 rounded-xl w-20",
                    "transition-all duration-200",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    value.trim() && !disabled
                        ? "bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                )}
            >
                <Search className="w-5 h-5 mx-auto" />
            </button>
        </form>
    );
};

export default SearchInput;
