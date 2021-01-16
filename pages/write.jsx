import dynamic from 'next/dynamic';
import Block from '../src/components/Block';

const Editor = dynamic(() => import('../src/components/Draft'), {
  loading: () => <div>loading...</div>,
  ssr: false,
});

function Write() {
  return (
    <Block>
      <Editor />
    </Block>
  );
}

export default Write;
