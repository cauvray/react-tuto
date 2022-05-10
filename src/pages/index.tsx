import { useState } from 'react'
import Table from '../components/Table'
import { getAll } from '../utils/users'
import { useNavigate } from 'react-router-dom'

function App() {
    const navigate = useNavigate()

    const allUsers = getAll()
    const [users, setUsers] = useState(allUsers)

    const resetUser = () => {
        setUsers(allUsers)
    }

    const filterByAge = () => {
        const filteredusers = users.filter((user: any) => user.age <= 30)
        setUsers(filteredusers)
    }

    const convertAgeInMonth = () => {
        const mappedUsers = users.map((user: any) => {
            return { ...user, age: user.age * 12 }
        })
        setUsers(mappedUsers)
    }

    return (
        <div className="h-screen w-screen p-6">
            <div className="mb-10 flex gap-4 ">
                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    onClick={() => {
                        navigate('/add')
                    }}
                >
                    Add user
                </button>
                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    onClick={resetUser}
                >
                    Show all users
                </button>
                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    onClick={filterByAge}
                >
                    Display users under age 31
                </button>

                <button
                    className="cursor-pointer rounded-lg border bg-blue-500 px-4 py-2 text-center text-white shadow-md duration-300 hover:bg-blue-700"
                    onClick={convertAgeInMonth}
                >
                    Display user ages in months
                </button>
            </div>

            <Table users={users}></Table>
        </div>
    )
}

export default App
