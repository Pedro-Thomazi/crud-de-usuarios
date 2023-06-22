// Route
import { Route, Routes } from 'react-router-dom'

// Css
import styles from './Main.module.css'

// Components
import Cadastre from '../../Pages/Cadastre/Cadastre'
import List from '../../Pages/List/List'
import UpdateUser from '../../Pages/UpdateUser/UpdateUser'

const Main = () => {
  return (
    <main className={styles.main}>
        <Routes>
            <Route path='/' element={<List />} />
            <Route path='/cadastre' element={<Cadastre />} />
            <Route path={`/update/:id`} element={<UpdateUser />} />
        </Routes>
    </main>
  )
}

export default Main