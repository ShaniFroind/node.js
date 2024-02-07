const events = require('events');
const eventEmitter = new events.EventEmitter();
const fs = require('fs')
const fcPromises = require('fs').promises;
const path = require('path');
const { cwd } = require('process');
const logEvvents = async (messege) => {
    const dateEvent = `${new Date()}`;
    const logItem = `${dateEvent}/t the emmited ${messege}`;
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fcPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fcPromises.appendFile(path.join(__dirname, 'logs', 'events.txt'), logItem);
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = logEvvents;