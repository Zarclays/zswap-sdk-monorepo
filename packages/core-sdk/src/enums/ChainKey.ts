import { arbitrum, Chain, fantom, fantomTestnet, meter,meterTestnet, celoAlfajores,scroll,mantleTestnet, scrollSepolia } from '@wagmi/core/chains';

export enum ChainKey {
  ARBITRUM = 'arbitrum',
  ARBITRUM_TESTNET = 'arbitrum-testnet',
  AVALANCHE = 'avalanche',
  AVALANCHE_TESTNET = 'avalance-testnet',
  BSC = 'bsc',
  BSC_TESTNET = 'bsc-testnet',
  CELO = 'celo',
  ALFAJORES = 'alfajores',
  ETHEREUM = 'ethereum',
  FANTOM = 'fantom',
  FANTOM_TESTNET = 'fantom-testnet',
  FUSE = 'fuse',
  GANACHE='ganache',
  GÖRLI = 'goerli',
  HARDHAT = 'hardhat',
  HARMONY = 'harmony',
  HARMONY_TESTNET = 'harmony-testnet',
  HECO = 'heco',
  HECO_TESTNET = 'heco-testnet',
  KOVAN = 'kovan',
  ROPSTEN = 'ropsten',
  MATIC = 'polygon',
  MATIC_TESTNET = 'matic-testnet',
  MOONBEAM_TESTNET = 'moonbeam-testnet',
  MOONRIVER = 'moonriver',
  OKEX = 'okex',
  OKEX_TESTNET = 'okex-testnet',
  PALM = 'palm',
  PALM_TESTNET = 'palm-testnet',
  RINKEBY = 'rinkeby',
  TELOS = 'telos',
  XDAI = 'xdai',
  MOONBEAM = 'moonbeam',
  OPTIMISM = 'optimism',
  KAVA = 'kava',
  METIS = 'metis',
  ARBITRUM_NOVA = 'arbitrum-nova',
  BOBA_AVAX = 'boba-avax',

  METER = "meter",
  METER_TESTNET = "meter-testnet",

  MANTLE = "mantle",
  MANTLE_TESTNET="mantle-testnet",

  CRONOS = "cronos",
  CRONOS_TESTNET="cronos-testnet",

  SCROLL="scroll",
  SCROLL_SEPOLIA="scroll-sepolia",

  SEPOLIA="sepolia",

  CORE="core",
  CORE_TESTNET="core-testnet",

  DCHAIN_TESTNET="dchain-testnet",

  FRAXTAL="fraxtal",

  FRAXTAL_TESTNET="fraxtal_testnet",

  OPEN_CAMPUS="open_campus",

  BASE="base",

  BASE_SEPOLIA="base_sepolia",

  OP_BNB="op_bnb",
  OP_BNB_TESTNET="op_bnb_testnet",

  AURORA_TESTNET="aurora_testnet",
  AURORA="aurora",

  NEO_X_TESTNET="neo_x_testnet",
  NEO_X="neo_x",

  MORPH_TESTNET="morph_testnet",
  MORPH="morph",


}
