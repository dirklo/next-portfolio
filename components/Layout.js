import NavBar from '../components/NavBar'
import styles from '../styles/Layout.module.css'
import Floater from '../components/Floater'

const Layout = ({ children }) => {

    function createFloaters(numFloaters) {
        const floaterDataObjects = []
        for (let i = 0; i < numFloaters; i++) {
            let floaterData = {
                index: i,
            }
            floaterDataObjects.push(floaterData)
        }
        return (
            floaterDataObjects
        )
    }

    return (
        <div className={styles.content}>
            <NavBar /> 
            { children }
        </div>
    )
}

export default Layout
