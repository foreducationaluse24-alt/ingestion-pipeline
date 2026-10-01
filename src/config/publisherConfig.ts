
export interface PublisherConfig {
  concurrency: number;
  minDelayMs: number;
}

const defaultConfig: PublisherConfig = {
  concurrency: 1,
  minDelayMs: 0,
};

export const publisherConfig: Record<string, PublisherConfig> = {
  "freepressjournal.in": {
    concurrency: 1,
    minDelayMs: 2000,
  },

  "bbc.com": {
    concurrency: 5,
    minDelayMs: 0,
  },

  "thehindu.com": {
    concurrency: 1,
    minDelayMs: 0,
  },
};

export function getPublisherConfig(domain: string): PublisherConfig {
  return publisherConfig[domain] ?? defaultConfig;
}