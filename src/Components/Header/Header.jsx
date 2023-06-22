import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header id='topo' className={styles.header}>
            <h1>
                <Link to='/'>Cadastro de Usuarios</Link>
            </h1>
        </header>
    )
}

export default Header