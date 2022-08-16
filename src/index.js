const core = require('@actions/core');
const fs = require('fs');
const fsExtra = require('fs-extra');

const dir = core.getInput('dir', {default: './'});

async function run() {
    try {
        await fs.readdir(dir, (err, files) => {
            if(err) throw err
            core.info(`You can delete: ${files}`);
            // fsExtra.emptyDirSync(dir);
        })
    }
    catch(e) {
        core.error('Failed during deleting files');
        throw e;
    }
}

run();