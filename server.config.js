const servor = require('servor');

const instance = servor({
  root: './public',
  fallback: 'index.html',
  module: false,
  static: false,
  reload: true,
  inject: '',
  port: 7357,
});

/**
 * Note:
 * Terminal styles: https://simplernerd.com/js-console-colors/
 * For colors, refer to https://i.stack.imgur.com/KWC1w.png
 */
const color = (text, color = 76) => {
  return `\x1b[1;38;5;${color}m${text}\x1b[0m`;
};

const u = (text) => {
  return `\x1b[1;4m${text}\x1b[0m`;
};

instance.then(({ url, protocol, ips, port }) => {
  console.log('\n');
  console.log(`${color("Server running.")}`);
  console.log(`Listening port: ${port}`);
  console.log('----------------------------------');
  console.log(`${u('Local:')} ${url}`);
  console.log(`${u('Network:')} ${protocol}://${ips}:${port}`);
  console.log('\n');
});