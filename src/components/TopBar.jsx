import style from '../../styles/style.module.css';
import { FaBars } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

import { useGlobalState, useGlobalDispatch } from '../reducer/GlobalContext';
const imgs = [
  {
    id: 1,
    src: '/nextjs-logo.svg',
    width: '90',
    height: 50,
    alt: 'Next.js',
    /* prettier-ignore */
    title: '리액트 서버 사이드 렌더링과 라우팅을 간편하게 할 수 있는 프레임워크 입니다.\n클릭하면 Next 게시판으로 이동합니다.',
    href: 'https://nextjs.org/',
  },
  {
    id: 2,
    src: '/react-logo.svg',
    width: '60',
    height: 50,
    alt: 'React.js',
    title:
      '페이스북에서 만든 SPA 제작 라이브러리 입니다.\n클릭하면 React 게시판으로 이동합니다.',
    href: 'https://ko.reactjs.org/',
  },
  {
    id: 3,
    src: '/nodejs-logo.svg',
    width: '100',
    height: 50,
    alt: 'Node.js',
    title:
      '크로미움 V8 엔진 기반 자바스크립트 런타임 환경 입니다.\n클릭하면 Node 게시판으로 이동합니다.',
    href: 'https://nodejs.org/ko/',
  },
];

function Logo({ src, width, height, alt, title }) {
  return (
    <Image src={src} width={width} height={height} alt={alt} title={title} />
  );
}

function onToggleSideBar() {
  return 'ON_TOGGLE_SIDEBAR';
}

function TopBar() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  return (
    <header className={style.headerBar}>
      <div>
        <FaBars
          className={`${style.icon} ${style.faBars}`}
          onClick={() => {
            dispatch({ type: onToggleSideBar() });
          }}
        />
        {imgs.map((logo) => (
          <Link href={logo.href} key={logo.id}>
            <a>
              <Logo
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                title={logo.title}
              />
            </a>
          </Link>
        ))}
      </div>
      <div>
        <input
          type="search"
          placeholder="검색"
          className={style.sideBarSearch}
        />
        <BiUserCircle className={`${style.icon} ${style.biUserCircle}`} />
      </div>
    </header>
  );
}

export default TopBar;
