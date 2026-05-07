const { spawnSync } = require('child_process');

function runCommand(command, args, message) {
if (message) {
console.log(message);
}

const result = spawnSync(command, args, {
stdio: 'inherit',
cwd: __dirname,
shell: true
});

return result.status || 0;
}

if (process.platform == 'win32') {
const prebuildStatus = runCommand('prebuild-install', ['-r', 'napi'], 'Trying to install prebuilt addon');
if (prebuildStatus === 0) {
process.exit(0);
}

const msvs2022Status = runCommand('node-gyp', ['rebuild', '--msvs_version=2022'], 'Prebuild not available, trying local build with MSVS 2022');
if (msvs2022Status === 0) {
process.exit(0);
}

const msvs2019Status = runCommand('node-gyp', ['rebuild', '--msvs_version=2019'], 'MSVS 2022 build failed, retrying with MSVS 2019');
if (msvs2019Status !== 0) {
console.error('Failed to install native addon.');
console.error('Check prebuild download/network access, Node.js compatibility, and Visual Studio Build Tools (Desktop development for C++) for MSVS 2022/2019.');
}

process.exit(msvs2019Status);
}
