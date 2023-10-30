import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  //Apartir de aqui se empieza la funcion de Editar
  const [infoUpdate, setInfoUpdate] = useState()

  const baseUrl = 'https://users-backend-dev-dbrd.3.us-1.fl0.io/users'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users)

  return (
    <div>
      <div className='container-crud'>
      <h1 className='title'>U<span>sers Crud</span></h1>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
      />
      </div>
      <div className='container-card'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
