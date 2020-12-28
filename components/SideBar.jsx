import style from '../styles/style.module.css';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const hide = {
  width: '0px',
  padding: '0px',
};

const show = {
  width: '320px',
  padding: '8px',
};

function SideBar() {
  const [show, setShow] = useState({ visible: false });
  const { visible } = show;

  const showSideBar = () => setShow({ visible: !visible });

  return (
    <section className={style.sideBar} style={visible ? show : hide}>
      <div className={style.closeSideBarIcon}>
        <IoMdClose onClick={showSideBar} />
      </div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </section>
  );
}

export default SideBar;
