import classes from './InitiativeCard.module.css'
import projetsImg from '../../assets/images/projects.jpg'
const InitiativeCard = props => {
    return <div className={classes.container}>
        <div className={classes.img}>
            <img src={projetsImg} alt='project'/>
        </div>
        <div className={classes.content}>
            <h5>Projects</h5>
            <p>Explore our Projets and Initiatives for education leaders and youth.</p>
        </div>
    </div>
}

export default InitiativeCard;