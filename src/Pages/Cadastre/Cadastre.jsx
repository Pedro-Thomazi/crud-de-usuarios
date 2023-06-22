import styles from './Cadastre.module.css'

// Hooks
import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'

const Cadastre = () => {
  // Url Backend
  const url = 'https://json-server-crud.vercel.app/users'


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [age, setAge] = useState('')
  // const [photoUser, setPhotoUser] = useState('')

  const { httpConfig } = useFetch(url)

  // // Usuario Completo
  const [users, setUsers] = useState([])

  // Nome
  const handleName = (e) => {
    setName(e.target.value)
  }

  // Idade
  const handleAge = (e) => {
    setAge(e.target.value)
  }

  // Email
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  // Profição
  const handleProfession = (e) => {
    setProfession(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      age,
      profession,
      // photoUser
    }

    httpConfig(user, 'POST')

    console.log(user)
    // console.log(photoUser)

    setName('')
    setEmail('')
    setAge('')
    setProfession('')
    // setPhotoUser('')


    alert('Cadastrado com sucesso!')
  }

  console.log(users)

  return (
    <div className={styles.bodyForm}>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit} className={styles.form}>

        <label htmlFor='name'>
          <span>Nome:</span>
          <input type="text"
            required
            onChange={handleName}
            value={name} />
        </label>

        <label htmlFor='age'>
          <span>Idade:</span>
          <input type="number"
            required
            onChange={handleAge}
            value={age} />
        </label>

        <label htmlFor='email'>
          <span>E-mail:</span>
          <input type="email"
            onChange={handleEmail}
            value={email} />
        </label>

        <label htmlFor='profession'>
          <span>Profição:</span>
          <input type="text"
            required
            onChange={handleProfession}
            value={profession} />
        </label>

        {/* <label htmlFor='photoUser'>
          <span>Sua Foto:</span>
          <input type="file"
            name='photoUser'
            required
            onChange={(e) => setPhotoUser(e.target.files[0])} />
        </label> */}



        <input className={styles.btn} type="submit" value='Cadastrar' />
      </form>
    </div>
  )
}

export default Cadastre





// https://www.youtube.com/watch?v=6YTw3pf6U2c
