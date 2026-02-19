module.exports = {
  apps: [
    {
      name: 'iwah_deals',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 8003,
      },
      max_memory_restart: '800M',
      autorestart: true,
      watch: false,
    },
  ],
};
