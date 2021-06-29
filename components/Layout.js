import NavBar from '../components/NavBar'
import styles from '../styles/Layout.module.css'
import Floater from '../components/Floater'

const Layout = ({ children }) => {

    return (
        <div className={styles.content}>
            <NavBar /> 
            { children }
        </div>
    )
}

export default Layout
