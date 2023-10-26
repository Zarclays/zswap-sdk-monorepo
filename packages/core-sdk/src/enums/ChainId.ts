import { sepolia } from "@wagmi/core";
import { cronos, cronosTestnet,celoAlfajores, mantle, meter, scroll,mantleTestnet ,meterTestnet, scrollSepolia } from "@wagmi/core/chains";


export enum ChainId {
  ETHEREUM = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  CELO = 42220,
  ALFAJORES=celoAlfajores.id,
  PALM = 11297108109,
  PALM_TESTNET = 11297108099,
  MOONRIVER = 1285,
  FUSE = 122,
  TELOS = 40,
  HARDHAT = 31337,
  GANACHE = 1337,
  MOONBEAM = 1284,
  OPTIMISM = 10,
  KAVA = 2222,
  METIS = 1088,
  ARBITRUM_NOVA = 42170,
  BOBA_AVAX = 43288,

  METER=meter.id,
  METER_TESTNET=meterTestnet.id,

  MANTLE= mantle.id,
  MANTLE_TESTNET=mantleTestnet.id,

  CRONOS= cronos.id,
  CRONOS_TESTNET=cronosTestnet.id,

  SCROLL= scroll.id,
  SCROLL_SEPOLIA=scrollSepolia.id,

  SEPOLIA=sepolia.id


}
