import React from "react";
import SearchInput from "../common/searchInput";
import type { Option } from "../../constants/filterOptions";

type FilterOptionsProps = {
    options: Option[];
    selectedValues: string[];
    onSelectionChange: (code: string, checked: boolean) => void;
    searchKeyword: string;
    onSearchChange: (value: string) => void;
    onSearchClear: () => void;
};

const FilterOptions: React.FC<FilterOptionsProps> = ({
    options,
    selectedValues,
    onSelectionChange,
    searchKeyword,
    onSearchChange,
    onSearchClear,
}) => {
    const filteredOptions = options.filter(
        (option) =>
            option.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
            option.code.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <section className="p-4">
            {/* Search Input */}
            <div className="relative mb-4">
                <SearchInput
                    onChange={onSearchChange}
                    onClear={onSearchClear}
                    value={searchKeyword}
                    placeholder="Cari ..."
                />
            </div>

            {/* Options List */}
            <div className="space-y-2 max-h-48 overflow-y-auto">
                {filteredOptions.map((option) => (
                    <label
                        key={option.code}
                        className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                        <input
                            type="checkbox"
                            name={option.name}
                            checked={selectedValues.includes(option.code)}
                            onChange={(e) =>
                                onSelectionChange(option.code, e.target.checked)
                            }
                            className="w-4 h-4 bg-white accent-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                            {option.name} ({option.code})
                        </span>
                    </label>
                ))}
            </div>
        </section>
    );
};

export default FilterOptions;
