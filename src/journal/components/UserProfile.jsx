export const UserProfile = () => {
  return (
    <article className="flex items-center gap-3 ml-5 mt-5">
      <img
        className="rounded-full border w-10 h-10 object-cover object-top"
        src="/about.webp"
        alt="user profile"
      />
      <div>
        <h2>Carlos Arancibia</h2>
        <span className="text-sm text-gray-400">Journal Member</span>
      </div>
    </article>
  );
};
