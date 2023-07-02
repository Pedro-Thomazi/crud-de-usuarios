import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.linkTopo} href="#topo">Voltar ao Topo</a>
        <div>
          <hr />
          <NavLink to='/'> <i className="bi bi-people"></i>Listar</NavLink>
          <NavLink to='/cadastre'> <i className="bi bi-person-add"></i>Cadastrar</NavLink>
        </div>
    </nav>
  )
}

export default Navbar