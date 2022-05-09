import { useState } from 'react'
import Table from '../components/Table'
import { getAll } from '../utils/users'

function App() {
    const allUsers = getAll()
    const [users, setUsers] = useState(allUsers)
    console.log(users)

    return (
        <div className="h-screen w-screen p-6">
            <div className="mb-10 flex gap-4 ">
                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    // onClick={}
                >
                    Add user
                </button>
                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    // onClick={}
                >
                    Display users under age 31
                </button>
            </div>

            <Table></Table>
        </div>
    )
}

export default App
