import { useState } from 'react'
import { addUser, updateUser } from '../utils/users'

import { useNavigate } from 'react-router-dom'

const AddUser = ({ userToEdit }: any) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(
        userToEdit
            ? userToEdit
            : {
                  firstName: '',
                  lastName: '',
                  age: 0,
                  email: '',
                  gender: '',
                  isActive: true,
              }
    )

    const onSubmit = () => {
        // On laisse ici ou on fait passer dans les parents ?
        if (userToEdit) {
            updateUser(userToEdit._id, user)
        } else {
            const res = { ...user, _id: Math.random().toString(16).slice(2) }
            addUser(res)
        }

        navigate('/')
    }

    return (
        <div className="mx-96 flex flex-col">
            <label className="mb-2 flex items-center justify-between">
                FirstName
                <input
                    className=" appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="text"
                    value={user.firstName}
                    onChange={(e) => {
                        setUser({ ...user, firstName: e.target.value })
                    }}
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                LastName
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="text"
                    value={user.lastName}
                    onChange={(e) => {
                        setUser({ ...user, lastName: e.target.value })
                    }}
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                Age
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="number"
                    value={user.age}
                    onChange={(e) => {
                        setUser({ ...user, age: Number(e.target.value) })
                    }}
                />
            </label>

            <label className="mb-2 flex items-center justify-between">
                Email
                <input
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    type="email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
            </label>
            <label className="mb-2 flex items-center justify-between">
                Gender
                <select
                    className="appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={user.gender}
                    onChange={(e) => {
                        setUser({ ...user, gender: e.target.value })
                    }}
                >
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
