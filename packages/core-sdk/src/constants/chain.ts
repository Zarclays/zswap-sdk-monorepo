import { ChainId } from '../enums'
import { ChainKey } from '../enums'
import { arbitrum, Chain, fantom, fantomTestnet, meter,meterTestnet, celoAlfajores, mantleTestnet, mantle, 
  scroll, scrollSepolia,sepolia,cronos,cronosTestnet, 
  coreDao, 
  base} from '@wagmi/core/chains';



export const CHAIN_KEY: { [chainId: number]: ChainKey } = {
  [ChainId.ETHEREUM]: ChainKey.ETHEREUM,
  [ChainId.ROPSTEN]: ChainKey.ROPSTEN,
  [ChainId.RINKEBY]: ChainKey.RINKEBY,
  [ChainId.GÖRLI]: ChainKey.GÖRLI,
  [ChainId.KOVAN]: ChainKey.KOVAN,
  [ChainId.MATIC]: ChainKey.MATIC,
  [ChainId.MATIC_TESTNET]: ChainKey.MATIC_TESTNET,
  [ChainId.FANTOM]: ChainKey.FANTOM,
  [ChainId.FANTOM_TESTNET]: ChainKey.FANTOM_TESTNET,
  [ChainId.XDAI]: ChainKey.XDAI,
  [ChainId.BSC]: ChainKey.BSC,
  [ChainId.BSC_TESTNET]: ChainKey.BSC_TESTNET,
  [ChainId.ARBITRUM]: ChainKey.ARBITRUM,
  [ChainId.ARBITRUM_TESTNET]: ChainKey.ARBITRUM_TESTNET,
  [ChainId.MOONBEAM_TESTNET]: ChainKey.MOONBEAM_TESTNET,
  [ChainId.AVALANCHE]: ChainKey.AVALANCHE,
  [ChainId.AVALANCHE_TESTNET]: ChainKey.AVALANCHE_TESTNET,
  [ChainId.HECO]: ChainKey.HECO,
  [ChainId.HECO_TESTNET]: ChainKey.HECO_TESTNET,
  [ChainId.HARMONY]: ChainKey.HARMONY,
  [ChainId.HARMONY_TESTNET]: ChainKey.HARMONY_TESTNET,
  [ChainId.OKEX]: ChainKey.OKEX,
  [ChainId.OKEX_TESTNET]: ChainKey.OKEX_TESTNET,
  [ChainId.CELO]: ChainKey.CELO,
  [celoAlfajores.id]: ChainKey.ALFAJORES,
  [ChainId.PALM]: ChainKey.PALM,
  [ChainId.PALM_TESTNET]: ChainKey.PALM_TESTNET,
  [ChainId.MOONRIVER]: ChainKey.MOONRIVER,
  [ChainId.FUSE]: ChainKey.FUSE,
  [ChainId.TELOS]: ChainKey.TELOS,
  [ChainId.MOONBEAM]: ChainKey.MOONBEAM,
  [ChainId.OPTIMISM]: ChainKey.OPTIMISM,
  [ChainId.KAVA]: ChainKey.KAVA,
  [ChainId.METIS]: ChainKey.METIS,
  [ChainId.ARBITRUM_NOVA]: ChainKey.ARBITRUM_NOVA,
  [ChainId.BOBA_AVAX]: ChainKey.BOBA_AVAX,
  [ChainId.HARDHAT]: ChainKey.HARDHAT,

  [meter.id]: ChainKey.METER,
  [meterTestnet.id]: ChainKey.METER_TESTNET,

  [mantle.id]: ChainKey.MANTLE,
  [mantleTestnet.id]: ChainKey.MANTLE_TESTNET,

  [cronos.id]: ChainKey.CRONOS,
  [cronosTestnet.id]: ChainKey.CRONOS_TESTNET,

  [scroll.id]: ChainKey.SCROLL,
  [scrollSepolia.id]: ChainKey.SCROLL_SEPOLIA,

  [coreDao.id]: ChainKey.CORE,
  [ChainId.CORE_TESTNET]: ChainKey.CORE_TESTNET,

  [sepolia.id]: ChainKey.SEPOLIA,


  [ChainId.DCHAIN_TESTNET]: ChainKey.DCHAIN_TESTNET,

  [ChainId.BASE]: ChainKey.BASE,
  [ChainId.BASE_SEPOLIA]: ChainKey.BASE_SEPOLIA,

  [ChainId.OP_BNB]: ChainKey.OP_BNB,
  [ChainId.OP_BNB_TESTNET]: ChainKey.OP_BNB_TESTNET,

  [ChainId.AURORA]:ChainKey.AURORA,
  [ChainId.AURORA_TESTNET]:ChainKey.AURORA_TESTNET,
  [ChainId.NEO_X]:ChainKey.NEO_X,
  [ChainId.NEO_X_TESTNET]:ChainKey.NEO_X_TESTNET,
}
