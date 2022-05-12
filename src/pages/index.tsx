import { getAll } from '../utils/users'
import { useNavigate } from 'react-router-dom'

function App() {
    const navigate = useNavigate()

    const allUsers = getAll()

    return (
        <div className="h-screen w-screen p-6">
            <div className="mb-10 flex gap-4 ">
                <button className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700">
                    Add user
                </button>
                <button className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700">
                    Show all users
                </button>
                <button className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700">
                    Display users under age 31
                </button>

                <button className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700">
                    Display user ages in months
                </button>
            </div>
            {/* //TODO: call table */}
        </div>
    )
}

export default App
