const{
    Keypair,
} = require("@solana/web3.js")
const wallet = new Keypair()

const publicKey = wallet._keypair.publicKey
const secretKey = wallet._keypair.secretKey

console.log(publicKey)
console.log(secretKey)
