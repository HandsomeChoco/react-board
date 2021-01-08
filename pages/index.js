import Block from '../src/components/Block';
import BoardItem from '../src/components/BoardItem';
import Button from '../src/components/Button';
import TextTitle from '../src/components/TextTitle';
import style from '../styles/style.module.css';

const arr = [
  {
    text: '123',
    src: '/nextjs',
  },
  {
    text: '456',
    src: '/nextjs',
  },
  {
    text: '789',
    src: '/nextjs',
  },
];

const _style = {
  buttonText: '전체보기',
  bgColor: '#0071e3',
  textColor: '#ffffff',
  width: '100%',
};

// style 은 import 한 스타일, _style 은 이 페이지에서만 재사용할 객체

function IndexButton({ onClick }) {
  if (onClick === undefined || null || '') {
    console.warn(`you didn't pass any event handler`);
  }
  return (
    <Button
      text={_style.buttonText}
      bgColor={_style.bgColor}
      textColor={_style.textColor}
      classname={style.indexPageBtn}
      width={_style.width}
      onClick={() => onClick}
    />
  );
}

function Index() {
  return (
    <>
      <Block>
        <TextTitle tag="h2" text="최신 글" />
        <BoardItem arr={arr} />
        <IndexButton />
      </Block>
      <Block flex={1} classname={style.wrapper}>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="리액트 게시판" />
          <BoardItem arr={arr} />
          <IndexButton />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="넥스트 게시판" />
          <BoardItem arr={arr} />
          <IndexButton />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="노드js 게시판" />
          <BoardItem arr={arr} />
          <IndexButton />
        </Block>
      </Block>
    </>
  );
}

export default Index;
