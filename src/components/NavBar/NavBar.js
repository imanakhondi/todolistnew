import styles from "./navBar.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const NavBar = ({ totalItems, totalsItems, percentage }) => {
  // const percentage = 66;
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <div className={styles.desc}>
        <h2> My Task :</h2>
        <span>
          {totalItems} of {totalsItems} tasks
        </span>
      </div>
    </div>
  );
};

export default NavBar;
