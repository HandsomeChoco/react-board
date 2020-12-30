import style from '../styles/style.module.css';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import { useGlobalState, useGlobalDispatch } from '../reducer/GlobalContext';
const imgs = [
  {
    id: 1,
    src: '/nextjs-logo.svg',
    width: 90,
    height: 50,
    alt: 'Next.js',
    /* prettier-ignore */
    title: '리액트 서버 사이드 렌더링과 라우팅을 간편하게 할 수 있는 프레임워크 입니다.',
  },
  {
    id: 2,
    src: '/react-logo.svg',
    width: 60,
    height: 50,
    alt: 'React.js',
    title: 'SPA 라이브러리 입니다.',
  },
  {
    id: 3,
    src: '/nodejs-logo.svg',
    width: 100,
    height: 50,
    alt: 'Node.js',
    title: '크로미움 V8 엔진 기반 자바스크립트 런타임 환경 입니다.',
  },
];

function Logo({ src, width, height, alt, title }) {
  return (
    <Image src={src} width={width} height={height} alt={alt} title={title} />
  );
}

function TopBar() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  return (
    <header className={style.headerBar}>
      <FaBars
        onClick={() => {
          dispatch({ type: 'ON_TOGGLE_SIDEBAR' });
        }}
      />
      {imgs.map((logo) => (
        <Logo
          key={logo.id}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={logo.alt}
          title={logo.title}
        />
      ))}
    </header>
  );
}

export default TopBar;
