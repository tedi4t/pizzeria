module.exports = ( env ) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', ''),
        port: env.int('DATABASE_PORT', 0),
        database: env('DATABASE_NAME', ''),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        ssl: { "rejectUnauthorized": false },
      },
      options: { ssl: true, },
    },
  },
});