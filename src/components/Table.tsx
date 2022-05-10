import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import ModalLayout from './ModalLayout'

const Table = ({ users, deleteUser }: any) => {
    const navigate = useNavigate()

    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(users[0])

    const onClose = () => {
        setOpenDeleteModal(false)
    }

    const onDelete = (id: string) => {
        deleteUser(id)
        setOpenDeleteModal(false)
    }

    return (
        <>
            <div className="shadow-md">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-blue-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="px-6 py-3">FirtName</th>
                            <th className="px-6 py-3">LastName</th>
                            <th className="px-6 py-3">Age</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Gender</th>
                            <th className="px-6 py-3">Is active</th>
                            <th className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 1) Afficher la liste des users */}
                        {/* 2) Ajouter sur chaque ligne un boutton Edit */}
                        {/* 3) Ajouter sur chaque ligne un boutton Delete SI l'attribut de l'utilisateur isActive est ) true */}
                        {/* 4) Style : Si l'utilsateur est une femme, afficher le genre en violet, si c'est un homme, afficher le genre en vert */}

                        {users.map((user: any) => (
                            <tr key={user._id}>
                                <td className="p-4">{user.firstName}</td>
                                <td className="p-4">{user.lastName}</td>
                                <td className="p-4">{user.age}</td>
                                <td className="p-4">{user.email}</td>
                                <td
                                    className={`p-4 ${
                                        user.gender === 'male'
                                            ? 'text-green-500'
                                            : 'text-purple-500'
                                    }`}
                                >
                                    {user.gender}
                                </td>
                                <td className="p-4">
                                    {user.isActive.toString()}
                                </td>
                                <td
                                    className="cursor-pointer p-4 text-blue-500"
                                    onClick={() => {
                                        navigate(`/edit/${user._id}`)
                                    }}
                                >
                                    Edit
                                </td>
                                {user.isActive && (
                                    <td
                                        className="cursor-pointer p-4 text-blue-500"
                                        onClick={() => {
                                            setSelectedUser(user)
                                            setOpenDeleteModal(true)
                                        }}
                                    >
                                        Delete
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {openDeleteModal && (
                <ModalLayout>
                    <DeleteModal
                        onClose={onClose}
                        onDelete={onDelete}
                        id={selectedUser._id}
                    >
                        Do you really want to delete{' '}
                        {selectedUser.firstName + ' ' + selectedUser.lastName}
                    </DeleteModal>
                </ModalLayout>
            )}
        </>
    )
}
export default Table
