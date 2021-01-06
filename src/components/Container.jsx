import style from '../../styles/style.module.css';

function Container({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Container;
