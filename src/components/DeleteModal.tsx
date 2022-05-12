const DeleteModal = ({ children }: any) => {
    return (
        <>
            <div className="flex-auto justify-center px-5 text-center">
                <h2 className="py-4 text-xl font-bold ">Delete</h2>
                <div className="px-8 text-sm text-gray-500">{children}</div>
            </div>
            <div className="mt-2 space-x-4 p-3 text-center md:block">
                <button
                    // onClick={}
                    className="cursor-pointer rounded-lg border bg-gray-800 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-gray-700"
                >
                    Cancel
                </button>
                <button
                    // onClick={}
                    className="cursor-pointer rounded-lg border bg-red-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </>
    )
}
export default DeleteModal
