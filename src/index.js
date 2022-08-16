const core = require('@actions/core');
const fs = require('fs');
const fsExtra = require('fs-extra');

async function run() {
    try {
        const dir = core.getInput('dir', {default: './'});
        await fs.readdir(dir, (err, files) => {
            core.info(`You can delete: ${files}`);
            fsExtra.emptyDirSync(dir);
        })
    }
    catch(e) {
        core.error('Failed during deleting files');
        throw e;
    }
}

run();