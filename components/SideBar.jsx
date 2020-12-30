import style from '../styles/style.module.css';
import { IoMdClose } from 'react-icons/io';
import { useGlobalState, useGlobalDispatch } from '../reducer/GlobalContext';

const hide = {
  width: '0px',
  padding: '0px',
};

const show = {
  width: '320px',
  padding: '8px',
};

function SideBar() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const { ui } = state;

  const { visible } = ui.sideBar;

  return (
    <section className={style.sideBar} style={visible ? show : hide}>
      <div className={style.closeSideBarIcon}>
        <IoMdClose
          onClick={() => {
            dispatch({ type: 'ON_TOGGLE_SIDEBAR' });
          }}
        />
      </div>

      <div></div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </section>
  );
}

export default SideBar;
