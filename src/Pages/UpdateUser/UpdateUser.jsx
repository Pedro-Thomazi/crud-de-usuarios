import styles from './UpdateUser.module.css'

// Hooks
import { useFetch } from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

// image
import userImage from '../../images/foto-usuario.webp'


const UpdateUser = () => {
  const [userData, setUserData] = useState([])

  // user
  const [name, setName] = useState(userData.name)
  const [profession, setProfession] = useState(userData.profession)
  const [age, setAge] = useState(userData.age)

  // id user
  const { id } = useParams()

  // url user
  const url = `http://localhost:9001/users/${id}`

  const { httpConfig } = useFetch(url)

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
      })
      .catch(err => console.log(err))

  }, [id, url])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {
      name,
      age,
      profession
    }

    httpConfig(user, 'PATCH')

    alert('Usuário atualizado com sucesso!')
    console.log(user)
  }


  return (
    <div className={styles.updateUser}>
      <h2>Update de Usuário</h2>
      <h3>{userData.name}</h3>
      <img src={userImage} alt="Foto-usuário" />
      <form onSubmit={handleSubmit} className={styles.updateUserForm}>
        <label htmlFor="email">
          <span>E-mail:</span>
          <input type="email" disabled placeholder={userData.email} />
        </label>
        <label htmlFor="name">
          <span>Nome:</span>
          <input type="text"
            onChange={(e) => setName(e.target.value)}
            value={name || ''} placeholder={userData.name} />
        </label>
        <label htmlFor="age">
          <span>Idade:</span>
          <input type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age || ''} placeholder={userData.age} />
        </label>
        <label htmlFor="profession">
          <span>Profição:</span>
          <input type="profession"
            onChange={(e) => setProfession(e.target.value)}
            value={profession || ''} placeholder={userData.profession} />
        </label>

        <input className={styles.btn} type="submit" value='Atualizar' />
      </form>
    </div>
  )
}

export default UpdateUser