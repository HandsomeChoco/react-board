import Block from '../components/Block';
import BoardItem from '../components/BoardItem';
import TextTitle from '../components/TextTitle';

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
    <Block>
      <TextTitle tag="h2" text="최신 글" />
      <BoardItem arr={arr} />
    </Block>
  );
}

export default Index;
