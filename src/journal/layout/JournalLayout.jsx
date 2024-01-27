import { PropTypes } from 'prop-types';
import { NotesList } from '../components/NotesList';
import { UserProfile } from '../components/UserProfile';

export const JournalLayout = ({ children }) => {
  return (
    <div className="h-screen w-full bg-[#222] grid grid-cols-10">
      <aside className="col-span-2 bg-[#3335] h-screen hidden md:block over overflow-hidden">
        <UserProfile />
        <NotesList />
      </aside>
      <main className="col-span-10 md:col-span-8 p-7 px-12">{children}</main>
    </div>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
