import { sepolia} from "@wagmi/core";
import { cronos, cronosTestnet,celoAlfajores, mantle, meter, scroll,mantleTestnet ,meterTestnet, base, baseSepolia,  } from "@wagmi/core/chains";


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
  ALFAJORES=44787,
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

  METER=82,
  METER_TESTNET=83,

  MANTLE= 5000,
  MANTLE_TESTNET=5001,

  CRONOS= 25,
  CRONOS_TESTNET=338 ,

  SCROLL= 534352 ,
  SCROLL_SEPOLIA=534351 ,

  SEPOLIA=11155111,

  CORE=1116,
  CORE_TESTNET=1115,

  DCHAIN_TESTNET = 2713017997578000,

  FRAXTAL_TESTNET = 2522,
  FRAXTAL = 252,

  OPEN_CAMPUS = 656476,

  BASE=8453,
  BASE_SEPOLIA=84532,

  OP_BNB=204,
  OP_BNB_TESTNET=5611,

  AURORA_TESTNET = 1313161555,
  AURORA=1313161554,

  NEO_X_TESTNET = 12227332,
  NEO_X=47763 ,

  MORPH_TESTNET = 2810,
  MORPH=-1,

}
