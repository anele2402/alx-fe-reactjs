import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [lastSearchParams, setLastSearchParams] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setUsers([]);
    await fetchUserData(1);
  };

  const fetchUserData = async (pageToFetch) => {
    setLoading(true);
    setError(null);

    const searchParams = {
      username,
      location,
      minRepos,
      page: pageToFetch,
    };

    try {
      const { users: fetchedUsers, totalCount } = await searchUsers(searchParams);

      setUsers((prev) => (pageToFetch === 1 ? fetchedUsers : [...prev, ...fetchedUsers]));
      setTotalCount(totalCount);
      setLastSearchParams(searchParams);
      setPage(pageToFetch);
    } catch (err) {
      setError(err.message || 'Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    await fetchUsers(nextPage);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 flex flex-col gap-4"
      >
        <label className="block">
          <span className="text-gray-700">Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="e.g., octocat"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Location</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Berlin"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Minimum Repositories</span>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g., 10"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50"
          >
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
              <p className="text-sm text-gray-600">{user.location || 'Location not available'}</p>
              <p className="text-sm">Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {!loading && users.length < totalCount && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
