const dotenv = require('dotenv');
const https = require('https');
const app = require('./app');
const { mongoConnect } = require('./services/mongo');

dotenv.config({ path: './.env' });

const port = Number(process.env.PORT) || 3000;

const server = https.createServer(app);

async function startServer() {
    await mongoConnect();
    //     await loadPlanetsData();
    //     await loadLaunchData();

    server.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}
startServer();
