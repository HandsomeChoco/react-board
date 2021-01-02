import style from '../styles/style.module.css';
import { IoMdClose } from 'react-icons/io';
import { useGlobalState, useGlobalDispatch } from '../reducer/GlobalContext';

function SideBar() {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const { ui } = state;

  const { visible } = ui.sideBar;

  return (
    <section
      className={
        visible ? style.sideBar : `${style.sideBar} ${style.hiddenSideBar}`
      }
    >
      <div className={style.closeSideBarIcon}>
        <IoMdClose
          onClick={() => {
            dispatch({ type: 'ON_TOGGLE_SIDEBAR' });
          }}
        />
      </div>

      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </section>
  );
}

export default SideBar;
