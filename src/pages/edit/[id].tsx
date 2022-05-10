import { getById } from '../../utils/users'
import { useParams } from 'react-router-dom'
import AddEditUser from '../../components/AddEditUser'

const Edit = () => {
    const { id } = useParams()
    const user = getById(id as string)
    console.log(user)

    return (
        <div className="p-6">
            <AddEditUser userToEdit={user}></AddEditUser>
        </div>
    )
}
export default Edit
