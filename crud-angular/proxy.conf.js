const PROXY_CONFIG = [{
    context: ["/api"],
    target: "http://localhost:8080",
    secure: false, //falso pq não estou fazendo uso de SSL(https) de forma local
    logLevel: "debug",
}, ];

module.exports = PROXY_CONFIG;
