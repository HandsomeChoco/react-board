import style from '../styles/style.module.css';
import { FaBars } from 'react-icons/fa';

function TopBar() {
  return (
    <header className={style.headerBar}>
      <FaBars />
      This is top bar
    </header>
  );
}

export default TopBar;
