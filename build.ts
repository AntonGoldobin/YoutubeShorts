/**
 * Remove old files, copy front-end ones.
 */
import fs from 'fs-extra';
import logger from 'jet-logger';
import childProcess from 'child_process';


/**
 * Start
 */
(async () => {
  try {
    // Remove current build
    await remove('./dist/');
    // Copy front-end files
    await copy('./src/public', './dist/public');
    await copy('./src/views', './dist/views');
    await copy('./src/posting-base/downloaded-files', './dist/posting-base/downloaded-files');
    // Copy back-end files
    await exec('tsc --build tsconfig.prod.json', './');
  } catch (err) {
    logger.err(err);
  }
})();

/**
 * Remove file
 */
function remove(loc: string): Promise<void> {
  return new Promise((res: any, rej: any) => {
    return fs.remove(loc, (err: unknown) => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Copy file.
 */
function copy(src: string, dest: string): Promise<void> {
  return new Promise((res: any, rej: any) => {
    return fs.copy(src, dest, (err:unknown) => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res: any, rej: any) => {
    return childProcess.exec(cmd, {cwd: loc}, (err:unknown, stdout: any, stderr: any) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return (!!err ? rej(err) : res());
    });
  });
}
