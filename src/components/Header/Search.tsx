import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Search() {
    return (
        <div className="flex items-center gap-2 rounded-sm border border-gray-300 bg-white ">
            <input type="text" placeholder="¿Que quieres escuchar?" className="p-2 w-52 outline-none placeholder:text-gray-400" />
            <button className="cursor-pointer p-2">
                <MagnifyingGlassIcon className="w-7 aspect-square mr-2" />
            </button>
        </div>
    );
}
