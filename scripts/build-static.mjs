import { spawnSync } from 'node:child_process';
import process from 'node:process';

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const result = spawnSync(command, ['next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, ALZA_DEPLOY_TARGET: 'static' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
