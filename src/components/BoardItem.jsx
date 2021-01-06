import style from '../../styles/style.module.css';

function Item({ text }) {
  return <li>{text}</li>;
}

function BoardItem({ arr }) {
  return (
    <div className={style.boardItem}>
      {arr.map((v, i) => (
        <Item key={i} text={v.text} />
      ))}
    </div>
  );
}

export default BoardItem;
