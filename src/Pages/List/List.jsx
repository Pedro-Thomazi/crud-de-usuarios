import styles from './List.module.css'

// Foto usuario
import userPhoto from '../../images/foto-usuario.webp'

// Hooks
import { useState } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'

// URL
const url = 'http://localhost:9001/users/'

const List = () => {
  const [users, setUsers] = useState([])

  // Hook
  const { data: people, httpConfig } = useFetch(url)

  // Deletar usuario
  const deletedUser = async (id) => {
    httpConfig(id, 'DELETE')
  }

  console.log(users)
  return (
    <div className={styles.bodyList}>
      <h2>Usuários cadastrados</h2>
      <div className={styles.usersList}>
        <ul className={styles.list}>
          {people && people.map((user) => (
            <li key={user.id} className={styles.user}>
              <img src={userPhoto} alt="Foto Usuario" />
              <hr />
              <p>Nome: {user.name}</p>
              <p>E-mail: {user.email}</p>
              <p>Idade: {user.age}</p>
              <p>Profição: {user.profession}</p>
              <hr />
              <div className={styles.buttons}>
                  <Link className={styles.btnUpdate} to={`/update/${user.id}`}>Alterar</Link>
                  <button onClick={() => deletedUser(user.id)} className={styles.btnDeleted}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default List