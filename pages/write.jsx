import dynamic from 'next/dynamic';
import Block from '../src/components/Block';
import Button from '../src/components/Button';

const Wysiwyg = dynamic(() => import('../src/components/Quill'), {
  loading: () => <div>loading...</div>,
  ssr: false,
});

function Write() {
  return (
    <Block>
      <Wysiwyg />
      <Button text="등록" />
    </Block>
  );
}

export default Write;
