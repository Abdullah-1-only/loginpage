"use client";
import React from "react";

const User = () => {
  const user = {
    name: "Ansari",
    avatar: "https://via.placeholder.com/150",
    email: "ansari@gmail.com",
    stats: {
      posts: 34,
      followers: 1200,
      following: 150,
    },
    recentActivities: [
      "Liked a post about Web Development",
      "Started following @JaneDoe",
      "Commented on 'React vs Angular'",
      "Uploaded a new profile picture",
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-white shadow rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-violet-500"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>
            <button className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-500">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-6 bg-white shadow rounded-lg max-w-4xl mx-auto p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.stats.posts}
          </h2>
          <p className="text-gray-500">Posts</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.stats.followers}
          </h2>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {user.stats.following}
          </h2>
          <p className="text-gray-500">Following</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="mt-6 bg-white shadow rounded-lg max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <ul className="space-y-3">
          {user.recentActivities.map((activity, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-violet-500 text-white rounded-full">
                {index + 1}
              </div>
              <p className="text-gray-600">{activity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
