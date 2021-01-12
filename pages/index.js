import Block from '../src/components/Block';
import BoardItem from '../src/components/BoardItem';
import Button from '../src/components/Button';
import TextTitle from '../src/components/TextTitle';
import style from '../styles/style.module.css';

export const arr = [
  {
    text: '123',
    src: 'http://nextjs.org',
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

// style 은 import 한 스타일, _style 은 이 페이지에서 사용할 객체

function IndexButton({ onClick }) {
  return (
    <Button
      text={_style.buttonText}
      bgColor={_style.bgColor}
      textColor={_style.textColor}
      classname={style.indexPageBtn}
      width={_style.width}
      onClick={onClick}
    />
  );
}

function reDirectTo(link) {
  if (typeof link !== 'string') {
    throw new Error('link parameter must be an url except domain');
  }
  return (location.href = link + '');
}

function Index() {
  return (
    <>
      <Block>
        <TextTitle tag="h2" text="최신 글" />
        <BoardItem arr={arr} />
        <IndexButton onClick={() => reDirectTo('/new')} />
      </Block>
      <Block flex={1} classname={style.wrapper}>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="리액트 게시판" />
          <BoardItem arr={arr} />
          <IndexButton onClick={() => reDirectTo('/reactjs')} />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="넥스트 게시판" />
          <BoardItem arr={arr} />
          <IndexButton onClick={() => reDirectTo('/nextjs')} />
        </Block>
        <Block classname={style.board}>
          <TextTitle tag="h2" text="노드js 게시판" />
          <BoardItem arr={arr} />
          <IndexButton onClick={() => reDirectTo('/nodejs')} />
        </Block>
      </Block>
    </>
  );
}

export default Index;
