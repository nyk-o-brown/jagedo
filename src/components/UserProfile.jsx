const UserProfile = () => {
  const user = {
    name: "Derick Sheldrick",
    role: "Construction Worker",
    skills: "Plumbing, Electrical",
    avatar: "https://robohash.org/derrick.png?set=set5", // Dicebear or RoboHash avatar
  };

  const userSkills = user.skills
      .split(",")
      .map(skill => skill.trim().toLowerCase());

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Welcome back, {user.name}</h2>
      <div className="flex items-center space-x-6">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full shadow-md"
        />
        <div>
          <p className="text-lg">Role: {user.role}</p>
          <p className="text-lg font-bold">Skills:<span className="text-green-600"> {user.skills}</span></p>
          <p className="text-gray-500">Profile status: Active</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
