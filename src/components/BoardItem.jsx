import Link from 'next/link';
import style from '../../styles/style.module.css';

function Item({ text, src }) {
  return (
    <li>
      <Link href={src}>
        <a style={{ textDecoration: 'none' }}>{text}</a>
      </Link>
    </li>
  );
}

function BoardItem({ arr }) {
  return (
    <div className={style.boardItem}>
      {arr.map((v, i) => (
        <Item key={i} text={v.text} src={v.src} />
      ))}
    </div>
  );
}

export default BoardItem;
