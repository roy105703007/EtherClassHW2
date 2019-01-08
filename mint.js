const fs = require('fs')
const Web3 = require('web3')

let web3 = new Web3('http://localhost:8545')

const abi = JSON.parse(fs.readFileSync('./contract/Bank_sol_Bank.abi').toString())
const address = fs.readFileSync('./address.txt').toString()

let bank = new web3.eth.Contract(abi, address)



web3.eth.getAccounts().then(function (accounts) {

    // accounts[0] mint 3 * 10^18 coins
    let coin = web3.utils.toBN('3e18')
    bank.methods.mint(Web3.utils.toHex(coin)).send({
        from: accounts[0],
        gas: 3400000,
    }).then(function (receipt) {
        console.log(receipt)
    });

})

