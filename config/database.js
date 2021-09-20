module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-52-7-159-155.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d85irpskedu5th"),
        username: env("DATABASE_USERNAME", "wmivnptjwfwwiq"),
        password: env("DATABASE_PASSWORD", "b41eb16eb87c905e0c56d335b7ea9c83b3a2deef81bb292f2663809104ce80fd"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});
