const UserCard = ({ user }) => {
  return (
    <>
      <div className="rounded-xl border border-gray-200 bg-gray-100 mb-3 p-4">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src={user.avatar}
            className="size-16 rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-medium text-black">{user.name}</h3>
            <h4 className="text-md font-sm text-black">{user.email}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
