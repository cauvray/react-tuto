import { getById } from '../../utils/users'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()
    const user = getById(id as string) // implement getByID
    console.log(user)

    return <div className="p-6">{/* //TODO call component */}</div>
}
export default Edit
