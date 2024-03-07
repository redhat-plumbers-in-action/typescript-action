import { expect, test } from 'vitest';

import * as process from 'process';
import * as cp from 'child_process';
import * as path from 'path';

import action from '../src/action';
import { CustomOctokit } from '../src/octokit';

test('throws invalid number', async () => {
  const input = parseInt('foo', 10);
  await expect(action({} as CustomOctokit, input)).rejects.toThrow(
    'milliseconds not a number'
  );
});

test('wait 500 ms', async () => {
  const start = new Date();
  await action({} as CustomOctokit, 500);
  const end = new Date();
  var delta = Math.abs(end.getTime() - start.getTime());
  expect(delta).toBeGreaterThan(450);
});

// shows how the runner will run a javascript action with env / stdout protocol
test.skip('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500';
  const np = process.execPath;
  const ip = path.join(__dirname, '..', 'dist', 'index.js');
  const options: cp.ExecFileSyncOptions = {
    env: process.env,
  };
  console.log(cp.execFileSync(np, [ip], options).toString());
});
