import server from './App';

server.listen(process.env.APP_PORT, () =>
  console.log(`Server Listening on port ${process.env.APP_PORT}`)
);
