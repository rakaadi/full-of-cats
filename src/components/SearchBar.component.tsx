import { SearchProps } from "../types"

export default function SearchBar({ value, handleChange }: SearchProps) {
    return (
        <div className="h-10 w-75 lg:w-2/5 mx-auto my-0 lg:my-4 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input value={value} onChange={handleChange}
                type="search" name="search" id="search" placeholder="Search a cat breed..."
                className="text-sm lg:text-base appearance-none w-full outline-none focus:outline-none active:outline-none" />
        </div>
    )
}