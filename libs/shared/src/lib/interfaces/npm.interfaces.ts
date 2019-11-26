export interface NpmSearch {
  total: number;
  results: Result[];
}

export interface Result {
  package: Package;
  score: Score;
  searchScore: number;
}

export interface DownloadCounts {
  [lib: string]: number;
}
export interface StatParams {
  name: string;
  from: string;
  until: string;
}
export interface Package {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: Links;
  author: Author;
  publisher: Publisher;
  maintainers: Publisher[];
}
export interface Author {
  name: string;
  email: string;
  url?: string;
  username: string;
}
// export interface Package {
//   analyzedAt: string;
//   collected: Collected;
//   evaluation: Evaluation;
//   score: Score;
// }

export interface Collected {
  metadata: Metadata;
  npm: Npm;
  source: Source;
}

export interface Metadata {
  name: string;
  scope: string;
  version: string;
  description: string;
  date: string;
  publisher: Publisher;
  maintainers: Publisher[];
  links: Links;
  license: string;
  dependencies: { [key: string]: string };
  devDependencies: { [key: string]: string };
  releases: Release[];
  hasTestScript: boolean;
  readme: string;
}

export interface Links {
  npm: string;
}

export interface Publisher {
  username: string;
  email: string;
}

export interface Release {
  from: string;
  to: string;
  count: number;
}

export interface Npm {
  downloads: Release[];
  dependentsCount: number;
  starsCount: number;
}

export interface Source {
  files: Files;
  linters: string[];
  outdatedDependencies: { [key: string]: OutdatedDependency };
}

export interface Files {
  readmeSize: number;
  testsSize: number;
}

export interface OutdatedDependency {
  required: string;
  stable: string;
  latest: string;
}

export interface Evaluation {
  quality: Quality;
  popularity: Popularity;
  maintenance: Maintenance;
}

export interface Maintenance {
  releasesFrequency: number;
  commitsFrequency: number;
  openIssues: number;
  issuesDistribution: number;
}

export interface Popularity {
  communityInterest: number;
  downloadsCount: number;
  downloadsAcceleration: number;
  dependentsCount: number;
}

export interface Quality {
  carefulness: number;
  tests: number;
  health: number;
  branding: number;
}

export interface Score {
  final: number;
  detail: Detail;
}

export interface Detail {
  quality: number;
  popularity: number;
  maintenance: number;
}
