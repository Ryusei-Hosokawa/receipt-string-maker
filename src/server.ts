import index from './index.html';

const server = Bun.serve({
    hostname: '127.0.0.1',
    port: 0,
    routes: {
        '/': index,
    },
    development: true,
});

console.log(`Local: ${server.url.href}`);
