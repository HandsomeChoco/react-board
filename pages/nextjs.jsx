import Block from '../src/components/Block';
import TextTitle from '../src/components/TextTitle';
import BoardItem from '../src/components/BoardItem';
import Button from '../src/components/Button';
import { arr } from './index';
import Select from '../src/components/Select';

const listSize = [
  { id: 1, text: 5, default: true },
  { id: 2, text: 10, default: false },
];

function Nextjs() {
  return (
    <Block>
      <TextTitle tag="h2" text="Next 게시판이에요" />
      <BoardItem arr={arr} />
      <Block>
        <Button text="글쓰기" />
        <Select items={listSize} name="listSize" />
      </Block>
    </Block>
  );
}

export default Nextjs;
