import { useEffect } from "react"
import { useForm } from "react-hook-form"

// 2
    const FormUser = ({ createUser, infoUpdate, updateUser,   setInfoUpdate }) => {

    const { handleSubmit, register, reset } = useForm()

    // Para rellenar el formulario o ejecutar un codigo cuando cambia infoUpdate
    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = data => {
        if (infoUpdate) {
            // Update
            updateUser(infoUpdate.id, data)
            setInfoUpdate()
        } else {
            // Create
            createUser(data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
        <div>
            <label className="form-label" htmlFor="first_name">First_name</label>
            <input className="form-input" {...register('first_name')} type="text" id="first_name"/>
        </div>
        <div>
            <label className="form-label" htmlFor="last_name">Last_name</label>
            <input className="form-input" {...register('last_name')} type="text" id="last_name"/>
        </div>
         <div>
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" {...register('email')} type="email" id="email"/>
        </div>
        <div>
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-input" {...register('password')} type="password" id="password"/>
        </div>
        <div>
            <label className="form-label" htmlFor="birthday">Birthday</label>
            <input className="form-input" {...register('birthday')} type="date" id="birthday"/>
        </div>
        <button className="btn-crud">{infoUpdate ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUser