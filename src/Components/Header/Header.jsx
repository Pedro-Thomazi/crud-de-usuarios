import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header id='topo' className={styles.header}>
            <h1>
                <Link to='/'>Cadastro de Usuarios</Link>
            </h1>
            <div className={styles.links}>
                <Link to='/'> <i className="bi bi-people"></i>Listar</Link>
                <Link to='/cadastre'> <i className="bi bi-person-add"></i>Cadastrar</Link>
            </div>
        </header>
    )
}

export default Header