export default function Loading() {
    return (
        <>
            <div className="overflow-x-hidden overflow-y-auto px-4 md:px-8">
                <div className="w-full bg-gray-800 text-white mx-auto">
                    <div className="flex gap-3">
                        <div className="size-6" />
                        <div className="flex flex-col">
                            <p className="text-lg font-bold"></p>
                            <p className="text-sm"></p>
                        </div>
                    </div>
                    <div />
                    <div className="bg-gray-900 grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-3">
                        <div className="mb-4"></div>
                        <div className="mb-4"></div>
                        <div className="mb-4"></div>
                        <div className="mb-4"></div>
                        <div className="mb-4 sm:col-span-2"></div>
                    </div>
                    <div>
                        <div className="flex gap-4 items-center w-full">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}