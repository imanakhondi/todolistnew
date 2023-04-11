
import styles from "./footer.module.css";
const Footer = ({clickHandler,modal}) => {
   
  
  return (
    <div className={styles.container}>
      <button onClick={clickHandler} >{modal?"close":"add"}</button>      
    </div>
  );
};

export default Footer;
