import NavBar from '../components/NavBar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {

    return (
        <div className={styles.content}>
            <NavBar /> 
            { children }
        </div>
    )
}

export default Layout
