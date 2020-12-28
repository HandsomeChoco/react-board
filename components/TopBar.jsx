import style from '../styles/style.module.css';
import { FaBars } from 'react-icons/fa';
import Image from 'next/image';

const imgs = [
  {
    src: '/nextjs-logo.svg',
    width: 90,
    height: 50,
    alt: 'Next.js',
    title: '리액트 서버 사이드 렌더링 프레임워크 입니다.',
  },
  {
    src: '/react-logo.svg',
    width: 60,
    height: 50,
    alt: 'React.js',
    title: 'SPA 제작 프론트엔드 라이브러리 입니다.',
  },
  {
    src: '/nodejs-logo.svg',
    width: 100,
    height: 50,
    alt: 'Node.js',
    title: '크로미움 V8 자바스크립트 런타임 입니다.',
  },
];

function Logo({ src, width, height, alt, title }) {
  return (
    <Image src={src} width={width} height={height} alt={alt} title={title} />
  );
}
function TopBar() {
  return (
    <header className={style.headerBar}>
      <FaBars />
      {imgs.map((logo) => (
        <Logo
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
