const { spawnSync } = require('child_process');

if (process.platform == 'win32') {
	console.log('Building addon');
	const status = spawnSync('npm', ['run', 'install:win32'], {
		stdio: 'inherit',
		cwd: __dirname,
		shell: true
	});

	if (status.status !== 0) {
		console.error('Failed to install native addon.');
		console.error('Troubleshooting: check prebuild download/network access, Node.js compatibility, and Visual Studio Build Tools (Desktop development for C++) for MSVS 2022/2019.');
	}

	process.exit(status.status || 0);
}
