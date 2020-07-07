module.exports = {
    servers: {
        one: {
            host: '51.105.52.99',
            username: 'bob',
        }
    },
    app: {
        name: 'BigDipper',
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
            ROOT_URL: 'https://explorer.int.testnet.enigma.co',
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
        domains: 'explorer.int.testnet.enigma.co',
        ssl: {
            // Enable let's encrypt to create free certificates.
            // The email is used by Let's Encrypt to notify you when the
            // certificates are close to expiring.
            letsEncryptEmail: 'itzik@enigma.co',
            forceSSL: false
        }
    }
};
