import { useDispatch, useSelector } from 'react-redux';
import { startSignOut } from '../../store/auth/thunks';
import { setOpenSidebar } from '../../store/journal/journalSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const { isOpenSidebar } = useSelector((state) => state.journal);

  const onLogout = () => {
    dispatch(startSignOut());
  };

  const onOpenSidebar = () => {
    dispatch(setOpenSidebar());
  };

  return (
    <header className="md:hidden col-span-10 max-h-12 bg-[#3335] shadow-md fixed left-0 right-0">
      <div className="flex justify-between h-12 px-7 items-center">
        <button onClick={onLogout}>
          <i className={`bx ${displayName ? 'bx-log-out' : 'bx-log-in'} text-2xl`}></i>
        </button>
        <h1 className="text-xl">JournaLife</h1>
        <button className="flex" onClick={onOpenSidebar}>
          <i className={`bx ${isOpenSidebar ? 'bx-x' : 'bx-menu'} text-3xl`}></i>
        </button>
      </div>
    </header>
  );
};
