const core = require('@actions/core');
const fs = require('fs');
const { Console } = require('console');
const fsExtra = require('fs-extra');

async function deleteFiles() {
    try {
        
        const dir = './content';
        const logPath = `${process.env.HOME}/script.log`;

        const logger = new Console({
            stdout: fs.createWriteStream(`${logPath}`),
            stderr: fs.createWriteStream("stderr"),
        });
        function prepareLog() {
            logger.log(`[LOG] Log path: ${logPath}`);
            logger.log(`[LOG] terraform directory: ${dir}`);
            logger.log(`[LOG] Destroying files from ${dir}`);
        }

        await fs.readdir(dir, (err, files) => {
            if (files.length != 0) {
                prepareLog();
                fsExtra.emptyDirSync(dir);
                logger.log(`[LOG] ${files} was destroyed!`);
            } else {
                core.notice(`${dir} is empty!`)
            }
        })
    }
    catch(e) {
        core.error('Failed during deleting files');
        throw e;
    }
}

deleteFiles();