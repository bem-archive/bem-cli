var version = require('../package.json').version;

exports.error = function () {
    console.error('bem-cli: The bem command line interface. (%s)\n', version);
    console.error('Fatal error: Unable to find local bem.\n');
    console.error('If you\'re seeing this message bem hasn\'t been installed locally to your project.');
    console.error('Run npm install bem, or check your package.json file.');
};
