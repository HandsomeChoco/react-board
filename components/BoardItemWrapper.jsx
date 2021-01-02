import style from '../styles/style.module.css';

function Item({ text }) {
  return <li>{text}</li>;
}

function BoardItemWrapper({ arr }) {
  return (
    <div className={style.boardItemWrapper}>
      {arr.map((v, i) => (
        <Item key={i} text={v.text} />
      ))}
    </div>
  );
}

export default BoardItemWrapper;
