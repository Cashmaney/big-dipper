module.exports = {
    servers: {
        one: {
            host: 'val1.goz.enigma.co',
            username: 'ubuntu',
        }
    },
    app: {
        name: 'GozBigDipper',
        path: '../',
        docker: {
            image: 'abernix/meteord:node-12-base',
        },
        servers: {
            one: {}
        },
        buildOptions: {
            serverOnly: true
        },
        env: {
            ROOT_URL: 'https://goz.enigma.co',
            MONGO_URL: 'mongodb://localhost/meteor'
        }
    },
    mongo: {
        version: '3.4.1',
        servers: {
            one: {}
        }
    },
    proxy: {
        domains: 'goz.enigma.co',
        ssl: {
            // Enable let's encrypt to create free certificates.
            // The email is used by Let's Encrypt to notify you when the
            // certificates are close to expiring.
            letsEncryptEmail: 'itzik@keytango.io',
            forceSSL: true
        }
    }
};
