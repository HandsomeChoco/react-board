import Block from '../src/components/Block';
import BoardItem from '../src/components/BoardItem';
import TextTitle from '../src/components/TextTitle';
import { arr } from './index';

function New() {
  return (
    <Block>
      <TextTitle tag="h2" text="최신 글 목록"></TextTitle>
      <BoardItem arr={arr} />
    </Block>
  );
}

export default New;
