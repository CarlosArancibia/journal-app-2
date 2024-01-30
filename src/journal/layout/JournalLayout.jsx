import { PropTypes } from 'prop-types';
import { NotesList } from '../components/NotesList';
import { UserProfile } from '../components/UserProfile';
import { Header } from '../components/Header';
import { useSelector } from 'react-redux';

export const JournalLayout = ({ children }) => {
  const { isOpenSidebar } = useSelector((state) => state.journal);
  return (
    <div className="h-screen w-full bg-[#222] grid grid-cols-10 relative">
      <Header />
      <aside
        className={`fixed md:static min-w-56 md:col-span-2 bg-[#333] md:bg-[#3335] h-screen z-50 md:block overflow-hidden duration-700 ${
          isOpenSidebar ? 'left-0' : 'left-[-490px]'
        }`}
      >
        <UserProfile />
        <NotesList />
      </aside>
      <main className="col-span-10 md:col-span-8 p-7 md:px-12 mt-12 md:mt-0">{children}</main>
    </div>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
