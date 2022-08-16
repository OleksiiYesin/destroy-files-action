const core = require('@actions/core');
const fs = require('fs');
const fsExtra = require('fs-extra');

const dir = core.getInput('dir', {default: './'});

async function run() {
    await fs.readdir(dir, (err, files) => {
        if(err) throw err
        core.info(`You can delete files ${files}`);
        // fsExtra.emptyDirSync(dir);
    })
}

run();