const fs = require('fs');
const path = require('path');

const logsDirectoryPath = path.join(__dirname, 'Logs');

// Remove Log files
if (fs.existsSync(logsDirectoryPath)) {
    const filesToRemove = fs.readdirSync(logsDirectoryPath);
    console.log('Files to delete:');
    filesToRemove.forEach(file => {
        const filePath = path.join(logsDirectoryPath, file);
        console.log(filePath);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsDirectoryPath);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
