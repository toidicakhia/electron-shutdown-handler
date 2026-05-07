const { spawnSync } = require('child_process');

if (process.platform == 'win32') {
	console.log('Building addon');
	const status = spawnSync('npm', ['run', 'install:win32'], {
		stdio: 'inherit',
		cwd: __dirname,
		shell: true
	});

	if (status.status !== 0) {
		console.error('Failed to install native addon using MSVS 2022/2019. Ensure Visual Studio Build Tools with Desktop development for C++ are installed.');
	}

	process.exit(status.status || 0);
}
