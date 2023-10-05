const fs = require('fs');
const path = require('path');

const logsDirectoryPath = path.join(__dirname, 'Logs');

// Create Log files
if (!fs.existsSync(logsDirectoryPath)) {
    fs.mkdirSync(logsDirectoryPath);
}

process.chdir(logsDirectoryPath);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const content = `Content of log file ${i}`;
    fs.writeFileSync(fileName, content);
    console.log(`Created file: ${fileName}`);
}

console.log('Log files created.');
