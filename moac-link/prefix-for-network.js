module.exports = function (network) {
  const net = parseInt(network)
  
  let prefix
  switch (net) {
    case 1: // main net
      prefix = ''
      break
    case 3: // ropsten test net
      prefix = 'ropsten.'
      break
    case 4: // rinkeby test net
      prefix = 'rinkeby.'
      break
    case 42: // kovan test net
      prefix = 'kovan.'
      break
    case 99: // MOAC main net
      prefix = 'http://explorer.moac.io'
      break
    case 101: // MOAC test net
      prefix = 'http://testnet.moac.io:3000'
      break
    default:
      prefix = ''
  }
  return prefix
}