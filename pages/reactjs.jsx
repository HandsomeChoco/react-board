import Block from '../src/components/Block';
import TextTitle from '../src/components/TextTitle';
import BoardItem from '../src/components/BoardItem';
import { arr } from './index';

function React() {
  return (
    <Block>
      <TextTitle tag="h2" text="React 게시판이에요" />
      <BoardItem arr={arr} />
    </Block>
  );
}

export default React;
