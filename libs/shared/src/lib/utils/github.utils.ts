export const github = {
  user: 'guiseek',
  client_id: 'e471267cc295bcd61662',
  client_secret: '28b32965e10f54dda0071b44a871b0344b69177d',
  api: 'https://api.github.com',

  repositories: () => {
    return `${github.api}/users/${github.user}/repos`
  }
};
