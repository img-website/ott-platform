import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="w-1/3">
                <Input
                    classNames={{
                        base: "max-w-full !bg-transparent hover:!bg-transparent",
                        mainWrapper: "h-full !bg-gray-500/20 hover:!bg-gray-500/20 rounded-xl",
                        input: "text-small !text-white",
                        inputWrapper: "h-full font-normal text-gray-200 !bg-gray-500/20 hover:!bg-gray-500/20",
                    }}
                    placeholder="Type to search..."
                    size="lg"
                    startContent={<IoSearch size={18} />}
                    type="search"
                />
            </div>
            <div className="w-auto">
                <div className="flex gap-2">

                </div>
            </div>
        </div>
    )
}

export default Navbar