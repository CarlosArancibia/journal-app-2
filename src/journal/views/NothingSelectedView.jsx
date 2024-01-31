import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NothingSelectedView = () => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <article className="h-full flex animate__animated animate__fadeIn animate__faster justify-center items-center relative">
      <div className="text-center m-auto">
        {displayName ? (
          <h4 className="m-auto text-2xl">Select or create an entry</h4>
        ) : (
          <Link to={'/auth/login'}>
            <i className="bx bx-log-in text-7xl pulse cursor-pointer text-gray-400"></i>
            <p className="text-xl text-center text-gray-400">Sign in to save your notes</p>
          </Link>
        )}
      </div>
    </article>
  );
};
