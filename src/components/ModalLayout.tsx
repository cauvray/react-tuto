const ModalLayout = ({ children }: any) => {
    return (
        <>
            <div className="fixed inset-0 z-50  flex cursor-default items-center justify-center bg-gray-500 bg-opacity-75 antialiased transition-opacity">
                <div
                    style={{ maxHeight: '95%' }}
                    className={`min-h-60 mx-auto flex w-full flex-col justify-center rounded-lg shadow-xl sm:w-5/6 lg:w-1/2 `}
                >
                    <div
                        className={`rounded-md border-b border-b-gray-200 bg-white`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLayout
