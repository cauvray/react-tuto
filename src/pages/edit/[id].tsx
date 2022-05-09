import { getById } from '../../utils/users'
import { useParams } from 'react-router-dom'
const Edit = () => {
    const { id } = useParams()
    const user = getById(id as string)
    console.log(user)

    return <div>TODO EDIT</div>
}
export default Edit
