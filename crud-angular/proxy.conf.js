const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false, //falso, pois não estou utilizando o protocolo SSL
    logLevel: 'debug'
}];

module.exports = PROXY_CONFIG;