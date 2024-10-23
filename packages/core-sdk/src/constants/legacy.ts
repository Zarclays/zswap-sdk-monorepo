import { ChainId } from '../enums/ChainId'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.ETHEREUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ROPSTEN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.RINKEBY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.GÖRLI]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.KOVAN]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.FANTOM]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.FANTOM_TESTNET]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.MATIC]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MATIC_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.XDAI]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BSC]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BSC_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ARBITRUM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONBEAM_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.AVALANCHE]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.AVALANCHE_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HECO]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HECO_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HARMONY]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HARMONY_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.OKEX]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.OKEX_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.CELO]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.ALFAJORES]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  
  [ChainId.PALM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONRIVER]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.FUSE]: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5',
  [ChainId.TELOS]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MOONBEAM]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.ARBITRUM_NOVA]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BOBA_AVAX]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.HARDHAT]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.GANACHE]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.SCROLL_SEPOLIA]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.CORE_TESTNET]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.CORE]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',

  [ChainId.DCHAIN_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.SEPOLIA]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',

  [ChainId.MANTLE_TESTNET]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.MANTLE]: '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',

  [ChainId.BASE]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.BASE_SEPOLIA]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',

  [ChainId.FRAXTAL_TESTNET]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.FRAXTAL]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.OPEN_CAMPUS]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',

  [ChainId.OP_BNB]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.OP_BNB_TESTNET]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',

  [ChainId.AURORA]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
  [ChainId.AURORA_TESTNET]: '0x19d41a8f49455471c18c657c0f62a50157aa41f66184294c43d15b5a0f69e39e',
}
