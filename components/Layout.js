import NavBar from '../components/NavBar'
import styles from '../styles/Layout.module.css'
import Floater from '../components/Floater'

const Layout = ({ children }) => {

    function createFloaters(numFloaters) {
        const randomSize = () => Math.floor(Math.random() * 100 + 50)
        const randomSpeed = () => Math.floor(Math.random() * 20 + 10)
        const randomLocation = () => Math.floor(Math.random() * 100)

        const floaterDataObjects = []
        for (let i = 0; i < numFloaters; i++) {
            let floaterData = {
                size: randomSize(),
                travelSpeed: randomSpeed(),
                spinSpeed: randomSpeed(),
                location: randomLocation()
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
            { createFloaters(4).map((floaterData, index) => 
                <Floater 
                    key={index}
                    size={floaterData.size}
                    travelSpeed={floaterData.travelSpeed}
                    spinSpeed={floaterData.spinSpeed}
                    location={floaterData.location}
                />
            )}
        </div>
    )
}

export default Layout
