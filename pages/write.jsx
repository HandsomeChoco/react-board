import dynamic from 'next/dynamic';
import Block from '../src/components/Block';

const Wysiwyg = dynamic(() => import('../src/components/Editor'), {
  loading: () => <div>loading...</div>,
  ssr: false,
});

function Write() {
  return (
    <Block>
      <Wysiwyg />
    </Block>
  );
}

export default Write;
