import type { CapacitorConfig } from '@capacitor/cli';

const remoteUrl = (process.env.CAP_SERVER_URL || '').trim();

const config: CapacitorConfig = {
  appId: 'com.tune.ai',
  appName: 'Tune',
  webDir: 'dist',
  server: remoteUrl
    ? {
        url: remoteUrl,
        cleartext: remoteUrl.startsWith('http://'),
        allowNavigation: [new URL(remoteUrl).hostname],
      }
    : undefined,
  android: {
    allowMixedContent: false,
  },
};

export default config;
