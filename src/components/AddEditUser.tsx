import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const navigate = useNavigate()

    const onSubmit = () => {
        //TODO
    }

    return (
        <div className="mx-96 flex flex-col">
            <label className="mb-2 flex items-center justify-between">
                FirstName
                <input
                    className=" appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="text"
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                LastName
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="text"
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                Age
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="number"
                />
            </label>

            <label className="mb-2 flex items-center justify-between">
                Email
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="email"
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                Gender
                <select className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <button
                className="mt-4 cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700
"
                onClick={onSubmit}
            >
                Submit
            </button>
        </div>
    )
}
export default AddUser
