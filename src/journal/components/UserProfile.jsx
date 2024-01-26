import { useDispatch, useSelector } from 'react-redux';
import { startSignOut } from '../../store/auth/thunks';

export const UserProfile = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(startSignOut());
  };

  return (
    <article className="flex items-center gap-3 mx-5 mt-5 ">
      <img
        className="rounded-full border w-10 h-10 object-cover object-top"
        src="/about.webp"
        alt="user profile"
      />
      <div className="flex-1">
        <h2 className="text-sm">{displayName}</h2>
        <span className="text-xs text-gray-400">Journal Member</span>
      </div>
      <button onClick={onLogout}>
        <i className="bx bx-log-out text-2xl"></i>
      </button>
    </article>
  );
};
