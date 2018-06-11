module.exports = {
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  coverageDirectory: './__coverage__/',
  coverageReporters: ['html', 'json', 'text'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
};
