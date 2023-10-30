// 4
const UserCard = ({ user, deleteUser, setInfoUpdate }) => {

    const handleDelete = () => {
        deleteUser( user.id )
    }

    const handleEdit = () => {
        setInfoUpdate(user)
    }
  return (
    <article className="card">
        <h3 className="title-card">#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
        <ul className="list">
            <li className="list-1"><span>Email: </span><span>{user.email}</span></li>
            <li className="list-1"><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
        <div className="btn">
        <button className="btn-card" onClick={handleDelete}>Delete</button>
        <button className="btn-card" onClick={handleEdit}>Edit</button>
        </div>
    </article>
  )
}

export default UserCard