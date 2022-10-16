import classes from './Card.module.css'

const Card = props => {
    return <div className={classes.container}>
    <div className={classes.card}>
      <div className={classes.imgBx}>
        
      </div>
      <div className={classes.contentBx}>
        <h2 className={classes.heading}>Heading</h2>
        <div className={classes.content2}>
          <h3>SubHeading</h3>
            <a href="https://google.com">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
}

export default Card;