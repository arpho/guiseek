const toURI = (str: string) => {
  return encodeURIComponent(str);
};

export const npmstat = {
  api: 'https://npm-stat.com/api/download-counts',
  author: (name: string, from: string, until: string) => {
    return `${npmstat.api}?author=${toURI(name)}&from=${from}&until=${until}`;
  },
  package: (name: string, from: string, until: string) => {
    return `${npmstat.api}?package=${toURI(name)}&from=${from}&until=${until}`;
  }
};

export const npm = {
  api: 'https://api.npms.io/v2',
  byAuthor: (name: string) => {
    return `${npm.api}/search?q=author:${toURI(name)}`;
    // return `${npm.api}/search?q=author:${toURI(name)}+not:unstable`;
  },
  byPackage: (name: string) => {
    return `${npm.api}/package/${toURI(name)}`;
  },
  token: ''
};
