import { useDispatch, useSelector } from 'react-redux';
import { startSignOut } from '../../store/auth/thunks';

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { displayName, photoURL } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(startSignOut());
  };

  return (
    <article className="flex items-center gap-3 mx-5 my-5 h-[7vh]">
      <img
        className="rounded-full border w-10 h-10 object-cover object-top"
        src={photoURL ?? '/default-profile.svg'}
        alt="user profile"
      />
      <div className="flex-1 overflow-hidden">
        <h2 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
          {displayName ?? 'Unknown'}
        </h2>
        <p className="text-xs text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
          Journal Member
        </p>
      </div>
      <button onClick={onLogout}>
        <i className={`bx ${displayName ? 'bx-log-out' : 'bx-log-in'} text-2xl hidden md:inline`}></i>
      </button>
    </article>
  );
};
