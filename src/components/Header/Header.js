import GeneralContainer from "../GeneralContainer/GeneralContainer";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <GeneralContainer>
      <div className={classes.container}>
        <div className={classes.header}>
          <div class={classes.content}>
            <div>
              <h2>Heading</h2>
              <h4>Sub Heading</h4>
            </div>
            <div className={classes.para}>
              <p>
                Lorem kasjdnkjasndkjankj nsakj ndkajsnkdjnaskj ndkjasnk jnsakj
                ndaksjn dkjasnkjdnkas laskdlasdlk lkasj lkasj lksaj lkasj lkjas
                lkasj lkdj laksj laksj lkaj lkajds
              </p>
            </div>
            <div className={classes.buttons}>
              <a href="">LINK 1</a>
              <a href="">LINK 2</a>
            </div>
          </div>

          <div>
            <ul class={classes.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </GeneralContainer>
  );
};

export default Header;
