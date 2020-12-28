import style from '../styles/style.module.css';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

function TopBar() {
  return (
    <header className={style.headerBar}>
      <FaBars />
      <Image src="/nextjs-logo.svg" width={90} height={50} />
      <Image src="/react-logo.svg" width={60} height={50} />
      <Image src="/nodejs-logo.svg" width={100} height={50} />
      This is top bar
    </header>
  );
}

export default TopBar;
