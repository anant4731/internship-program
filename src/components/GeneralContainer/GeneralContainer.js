import classes from './GeneralContainer.module.css'
const GeneralContainer = props =>{
    return <div className={classes.container}>{props.children}</div>
}
export default GeneralContainer