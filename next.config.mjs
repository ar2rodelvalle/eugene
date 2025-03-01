let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const defaultConfig = {
  output: 'export', // Enable static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

mergeConfig(defaultConfig, userConfig);

function mergeConfig(config, userConfig) {
  if (!userConfig) {
    return;
  }
  for (const key in userConfig) {
    if (typeof config[key] === 'object' && !Array.isArray(config[key])) {
      config[key] = {
        ...config[key],
        ...userConfig[key],
      };
    } else {
      config[key] = userConfig[key];
    }
  }
}

export default defaultConfig;
