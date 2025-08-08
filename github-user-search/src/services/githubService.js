import axios from 'axios';

export const searchUsers = async ({ username = '', location = '', minRepos = '', page = 1 }) => {
  try {
    
    let query = '';

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    
    const searchResponse = await axios.get('https://api.github.com/search/users', {
      params: {
        q: query.trim(),
        per_page: 10,
        page,
      },
    });

    const basicUsers = searchResponse.data.items;

    
    const detailedUsers = await Promise.all(
      basicUsers.map(async (user) => {
        const detailResponse = await axios.get(`https://api.github.com/users/${user.login}`);
        return detailResponse.data;
      })
    );

    return {
      users: detailedUsers,
      totalCount: searchResponse.data.total_count,
    };
  } catch (error) {
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded. Try again later.');
    }
    throw new Error('Failed to search users.');
  }
};
