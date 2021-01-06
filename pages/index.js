import Block from '../src/components/Block';
import BoardItem from '../src/components/BoardItem';
import TextTitle from '../src/components/TextTitle';
import style from '../styles/style.module.css';

const arr = [
  {
    text: '123',
  },
  {
    text: '456',
  },
  {
    text: '789',
  },
];

function Index() {
  return (
    <>
      <Block>
        <TextTitle tag="h2" text="최신 글" />
        <BoardItem arr={arr} />
      </Block>
      <Block flex={1} classname={style.wrapper}>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="리액트 게시판" />
          <BoardItem arr={arr} />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="넥스트 게시판" />
          <BoardItem arr={arr} />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="노드js 게시판" />
          <BoardItem arr={arr} />
        </Block>
      </Block>
    </>
  );
}

export default Index;
