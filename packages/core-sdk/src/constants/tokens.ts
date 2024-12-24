import { ChainTokenMap, TokenMap } from '../types'
import { ZSWAPTOKEN_ADDRESS, USDC_ADDRESS, USD_ADDRESS, WETH9_ADDRESS, WNATIVE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'

export const USDC: TokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, USDC_ADDRESS[ChainId.ETHEREUM], 6, 'USDC', 'USD Coin'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, USDC_ADDRESS[ChainId.ROPSTEN], 6, 'USDC', 'USD Coin'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, USDC_ADDRESS[ChainId.KOVAN], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, USDC_ADDRESS[ChainId.MATIC], 6, 'USDC', 'USD Coin'),
  [ChainId.MATIC_TESTNET]: new Token(ChainId.MATIC_TESTNET, USDC_ADDRESS[ChainId.MATIC_TESTNET], 6, 'USDC', 'USD Coin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, USDC_ADDRESS[ChainId.FANTOM], 6, 'USDC', 'USD Coin'),
  [ChainId.BSC]: new Token(ChainId.BSC, USDC_ADDRESS[ChainId.BSC], 18, 'USDC', 'USD Coin'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, USDC_ADDRESS[ChainId.HARMONY], 6, 'USDC', 'USD Coin'),
  [ChainId.HECO]: new Token(ChainId.HECO, USDC_ADDRESS[ChainId.HECO], 6, 'USDC', 'USD Coin'),
  [ChainId.OKEX]: new Token(ChainId.OKEX, USDC_ADDRESS[ChainId.OKEX], 18, 'USDC', 'USD Coin'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, USDC_ADDRESS[ChainId.XDAI], 6, 'USDC', 'USD Coin'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, USDC_ADDRESS[ChainId.ARBITRUM], 6, 'USDC', 'USD Coin'),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, USDC_ADDRESS[ChainId.MOONRIVER], 6, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, USDC_ADDRESS[ChainId.AVALANCHE], 6, 'USDC', 'USD Coin'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, USDC_ADDRESS[ChainId.FUSE], 6, 'USDC', 'USD Coin'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, USDC_ADDRESS[ChainId.TELOS], 6, 'USDC', 'USD Coin'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, USDC_ADDRESS[ChainId.MOONBEAM], 6, 'USDC', 'USD Coin'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, USDC_ADDRESS[ChainId.OPTIMISM], 6, 'USDC', 'USD Coin'),
  [ChainId.KAVA]: new Token(ChainId.KAVA, USDC_ADDRESS[ChainId.KAVA], 6, 'USDC', 'USD Coin'),
  [ChainId.METIS]: new Token(ChainId.METIS, USDC_ADDRESS[ChainId.METIS], 6, 'USDC', 'USD Coin'),
  [ChainId.ARBITRUM_NOVA]: new Token(ChainId.ARBITRUM_NOVA, USDC_ADDRESS[ChainId.ARBITRUM_NOVA], 6, 'USDC', 'USD Coin'),

  [ChainId.SCROLL]: new Token(ChainId.SCROLL, USDC_ADDRESS[ChainId.SCROLL], 6, 'USDC', 'USD Coin'),
  [ChainId.SCROLL_SEPOLIA]: new Token(ChainId.SCROLL_SEPOLIA, USDC_ADDRESS[ChainId.SCROLL_SEPOLIA], 6, 'USDC', 'USD Coin'),
  [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, USDC_ADDRESS[ChainId.SEPOLIA], 6, 'USDC', 'USD Coin')
}

export const USD: TokenMap = {
  ...USDC,
  [ChainId.CELO]: new Token(ChainId.CELO, USD_ADDRESS[ChainId.CELO], 18, 'cUSD', 'Celo Dollar'),
  [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, USD_ADDRESS[ChainId.ALFAJORES], 18, 'cUSD', 'Celo Dollar'),

  [ChainId.CORE]: new Token(ChainId.CORE, USD_ADDRESS[ChainId.CORE], 18, 'USDT', 'Tether (USDT)'),
  [ChainId.CORE_TESTNET]: new Token(ChainId.CORE_TESTNET, USD_ADDRESS[ChainId.CORE_TESTNET], 18, 'USDT', 'Tether (USDT)'),

  [ChainId.METER]: new Token(ChainId.METER, USD_ADDRESS[ChainId.METER], 6, 'USDT', 'Wrapped USDT From Ethereum on Meter'),
  [ChainId.METER_TESTNET]: new Token(ChainId.METER_TESTNET, USD_ADDRESS[ChainId.METER_TESTNET], 6, 'USDT', 'Wrapped USDT From Ethereum on Meter'),

  // [ChainId.DCHAIN_TESTNET]: new Token(ChainId.METER_TESTNET, USD_ADDRESS[ChainId.METER_TESTNET], 6, 'USDT', 'Tether (USDT)'),
}

export const WETH9: TokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, WETH9_ADDRESS[ChainId.ETHEREUM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, WETH9_ADDRESS[ChainId.ROPSTEN], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, WETH9_ADDRESS[ChainId.RINKEBY], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, WETH9_ADDRESS[ChainId.GÖRLI], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, WETH9_ADDRESS[ChainId.KOVAN], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, WETH9_ADDRESS[ChainId.ARBITRUM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ARBITRUM_TESTNET]: new Token(
    ChainId.ARBITRUM_TESTNET,
    WETH9_ADDRESS[ChainId.ARBITRUM_TESTNET],
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.BSC]: new Token(ChainId.BSC, WETH9_ADDRESS[ChainId.BSC], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, WETH9_ADDRESS[ChainId.FANTOM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, WETH9_ADDRESS[ChainId.MATIC], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    WETH9_ADDRESS[ChainId.MATIC_TESTNET],
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.OKEX]: new Token(ChainId.OKEX, WETH9_ADDRESS[ChainId.OKEX], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HECO]: new Token(ChainId.HECO, WETH9_ADDRESS[ChainId.HECO], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, WETH9_ADDRESS[ChainId.HARMONY], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, WETH9_ADDRESS[ChainId.XDAI], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, WETH9_ADDRESS[ChainId.AVALANCHE], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.PALM]: new Token(ChainId.PALM, WETH9_ADDRESS[ChainId.PALM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, WETH9_ADDRESS[ChainId.TELOS], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, WETH9_ADDRESS[ChainId.FUSE], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, WETH9_ADDRESS[ChainId.MOONBEAM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, WETH9_ADDRESS[ChainId.OPTIMISM], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.KAVA]: new Token(ChainId.KAVA, WETH9_ADDRESS[ChainId.KAVA], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.METIS]: new Token(ChainId.METIS, WETH9_ADDRESS[ChainId.METIS], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.ARBITRUM_NOVA]: new Token(
    ChainId.ARBITRUM_NOVA,
    WETH9_ADDRESS[ChainId.ARBITRUM_NOVA],
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.CORE_TESTNET]: new Token(ChainId.CORE_TESTNET, WETH9_ADDRESS[ChainId.CORE_TESTNET], 18, 'wtCore', 'Wrapped tCore'),
  [ChainId.CORE]: new Token(ChainId.CORE, WETH9_ADDRESS[ChainId.CORE], 18, 'wCore', 'Wrapped Core'),


  [ChainId.METER]: new Token(ChainId.METER, WETH9_ADDRESS[ChainId.METER], 18, 'wMTR', 'Wrapped MTR'),
  [ChainId.METER_TESTNET]: new Token(ChainId.METER_TESTNET, WETH9_ADDRESS[ChainId.METER_TESTNET], 18, 'wMTR', 'Wrapped MTR'),

  [ChainId.MANTLE]: new Token(ChainId.MANTLE, WETH9_ADDRESS[ChainId.MANTLE], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MANTLE_TESTNET]: new Token(ChainId.MANTLE_TESTNET, WETH9_ADDRESS[ChainId.MANTLE_TESTNET], 18, 'WETH', 'Wrapped Ether'),

  [ChainId.SCROLL_SEPOLIA]: new Token(ChainId.SCROLL_SEPOLIA, WETH9_ADDRESS[ChainId.SCROLL_SEPOLIA], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.SCROLL]: new Token(ChainId.SCROLL, WETH9_ADDRESS[ChainId.SCROLL], 18, 'WETH', 'Wrapped Ether'),

  [ChainId.DCHAIN_TESTNET]: new Token(ChainId.DCHAIN_TESTNET, WETH9_ADDRESS[ChainId.DCHAIN_TESTNET], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.FRAXTAL]: new Token(ChainId.FRAXTAL, WETH9_ADDRESS[ChainId.FRAXTAL], 18, 'wfrxETH', 'Wrapped frxEther'),
  [ChainId.FRAXTAL_TESTNET]: new Token(ChainId.FRAXTAL_TESTNET, WETH9_ADDRESS[ChainId.FRAXTAL_TESTNET], 18, 'wfrxETH', 'Wrapped frxEther'),
  [ChainId.OPEN_CAMPUS]: new Token(ChainId.OPEN_CAMPUS, WETH9_ADDRESS[ChainId.OPEN_CAMPUS], 18, 'wEDU', 'Wrapped EDU'),

  [ChainId.BASE]: new Token(ChainId.BASE, WETH9_ADDRESS[ChainId.BASE], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.BASE_SEPOLIA]: new Token(ChainId.BASE_SEPOLIA, WETH9_ADDRESS[ChainId.BASE_SEPOLIA], 18, 'WETH', 'Wrapped Ether'),

  [ChainId.AURORA]: new Token(ChainId.AURORA, WETH9_ADDRESS[ChainId.AURORA], 18, 'WETH', 'Wrapped Ether'),
  [ChainId.AURORA_TESTNET]: new Token(ChainId.AURORA_TESTNET, WETH9_ADDRESS[ChainId.AURORA_TESTNET], 18, 'WETH', 'Wrapped Ether'),

  [ChainId.NEO_X]: new Token(ChainId.NEO_X, WETH9_ADDRESS[ChainId.NEO_X], 18, 'WGAS', 'Wrapped Gas'),
  [ChainId.NEO_X_TESTNET]: new Token(ChainId.NEO_X_TESTNET, WETH9_ADDRESS[ChainId.NEO_X_TESTNET], 18, 'WGAS', 'Wrapped Gas'),
}

export const WNATIVE: TokenMap = {
  [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
  [ChainId.ROPSTEN]: WETH9[ChainId.ROPSTEN],
  [ChainId.RINKEBY]: WETH9[ChainId.RINKEBY],
  [ChainId.GÖRLI]: WETH9[ChainId.GÖRLI],
  [ChainId.KOVAN]: WETH9[ChainId.KOVAN],
  [ChainId.OPTIMISM]: WETH9[ChainId.OPTIMISM],
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, WNATIVE_ADDRESS[ChainId.FANTOM], 18, 'WFTM', 'Wrapped FTM'),
  [ChainId.FANTOM_TESTNET]: new Token(
    ChainId.FANTOM_TESTNET,
    WNATIVE_ADDRESS[ChainId.FANTOM_TESTNET],
    18,
    'FTM',
    'Wrapped FTM'
  ),
  [ChainId.MATIC]: new Token(ChainId.MATIC, WNATIVE_ADDRESS[ChainId.MATIC], 18, 'WMATIC', 'Wrapped Matic'),
  [ChainId.MATIC_TESTNET]: new Token(
    ChainId.MATIC_TESTNET,
    WNATIVE_ADDRESS[ChainId.MATIC_TESTNET],
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [ChainId.XDAI]: new Token(ChainId.XDAI, WNATIVE_ADDRESS[ChainId.XDAI], 18, 'WXDAI', 'Wrapped xDai'),
  [ChainId.BSC]: new Token(ChainId.BSC, WNATIVE_ADDRESS[ChainId.BSC], 18, 'WBNB', 'Wrapped BNB'),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    WNATIVE_ADDRESS[ChainId.BSC_TESTNET],
    18,
    'WBNB',
    'Wrapped BNB'
  ),
  [ChainId.ARBITRUM]: WETH9[ChainId.ARBITRUM],
  [ChainId.ARBITRUM_TESTNET]: WETH9[ChainId.ARBITRUM_TESTNET],
  [ChainId.MOONBEAM_TESTNET]: new Token(
    ChainId.MOONBEAM_TESTNET,
    WNATIVE_ADDRESS[ChainId.MOONBEAM_TESTNET],
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, WNATIVE_ADDRESS[ChainId.AVALANCHE], 18, 'WAVAX', 'Wrapped AVAX'),
  [ChainId.AVALANCHE_TESTNET]: new Token(
    ChainId.AVALANCHE_TESTNET,
    WNATIVE_ADDRESS[ChainId.AVALANCHE_TESTNET],
    18,
    'WAVAX',
    'Wrapped AVAX'
  ),
  [ChainId.HECO]: new Token(ChainId.HECO, WNATIVE_ADDRESS[ChainId.HECO], 18, 'WHT', 'Wrapped HT'),
  [ChainId.HECO_TESTNET]: new Token(
    ChainId.HECO_TESTNET,
    WNATIVE_ADDRESS[ChainId.HECO_TESTNET],
    18,
    'WHT',
    'Wrapped HT'
  ),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, WNATIVE_ADDRESS[ChainId.HARMONY], 18, 'WONE', 'Wrapped ONE'),
  [ChainId.HARMONY_TESTNET]: new Token(
    ChainId.HARMONY_TESTNET,
    WNATIVE_ADDRESS[ChainId.HARMONY_TESTNET],
    18,
    'WONE',
    'Wrapped ONE'
  ),
  [ChainId.OKEX]: new Token(ChainId.OKEX, WNATIVE_ADDRESS[ChainId.OKEX], 18, 'WOKT', 'Wrapped OKExChain'),
  [ChainId.OKEX_TESTNET]: new Token(
    ChainId.OKEX_TESTNET,
    WNATIVE_ADDRESS[ChainId.OKEX_TESTNET],
    18,
    'WOKT',
    'Wrapped OKExChain'
  ),
  [ChainId.CELO]: new Token(ChainId.CELO, WNATIVE_ADDRESS[ChainId.CELO], 18, 'CELO', 'Celo'),
  [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, WNATIVE_ADDRESS[ChainId.ALFAJORES], 18, 'CELO', 'Celo'),

  [ChainId.PALM]: new Token(ChainId.PALM, WNATIVE_ADDRESS[ChainId.PALM], 18, 'WPALM', 'Wrapped Palm'),
  [ChainId.MOONRIVER]: new Token(
    ChainId.MOONRIVER,
    WNATIVE_ADDRESS[ChainId.MOONRIVER],
    18,
    'WMOVR',
    'Wrapped Moonriver'
  ),
  [ChainId.FUSE]: new Token(ChainId.FUSE, WNATIVE_ADDRESS[ChainId.FUSE], 18, 'WFUSE', 'Wrapped Fuse'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, WNATIVE_ADDRESS[ChainId.TELOS], 18, 'WTLOS', 'Wrapped Telos'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, WNATIVE_ADDRESS[ChainId.MOONBEAM], 18, 'WGLMR', 'Wrapped Glimmer'),
  [ChainId.KAVA]: new Token(ChainId.KAVA, WNATIVE_ADDRESS[ChainId.KAVA], 18, 'WKAVA', 'Wrapped Kava'),
  [ChainId.METIS]: new Token(ChainId.METIS, WNATIVE_ADDRESS[ChainId.METIS], 18, 'WMETIS', 'Wrapped Metis'),
  [ChainId.ARBITRUM_NOVA]: WETH9[ChainId.ARBITRUM_NOVA],
  [ChainId.BOBA_AVAX]: new Token(ChainId.BOBA_AVAX, WNATIVE_ADDRESS[ChainId.BOBA_AVAX], 18, 'WBOBA', 'Wrapped Boba'),
  [ChainId.SCROLL_SEPOLIA]: WETH9[ChainId.SCROLL_SEPOLIA],

  [ChainId.METER]: WETH9[ChainId.METER],
  [ChainId.METER_TESTNET]: WETH9[ChainId.METER_TESTNET],

  [ChainId.CORE]: WETH9[ChainId.CORE],
  [ChainId.CORE_TESTNET]: WETH9[ChainId.CORE_TESTNET],
  [ChainId.DCHAIN_TESTNET]: WETH9[ChainId.DCHAIN_TESTNET],

  [ChainId.FRAXTAL]: WETH9[ChainId.FRAXTAL],
  [ChainId.FRAXTAL_TESTNET]: WETH9[ChainId.FRAXTAL_TESTNET],

  [ChainId.OPEN_CAMPUS]: WETH9[ChainId.OPEN_CAMPUS],

  [ChainId.BASE]: WETH9[ChainId.BASE],
  [ChainId.BASE_SEPOLIA]: WETH9[ChainId.BASE_SEPOLIA],

  [ChainId.AURORA]: WETH9[ChainId.AURORA],
  [ChainId.AURORA_TESTNET]: WETH9[ChainId.AURORA_TESTNET],

  [ChainId.NEO_X]: new Token(ChainId.NEO_X, WNATIVE_ADDRESS[ChainId.NEO_X], 18, 'wGAS', 'Wrapped GAS'),
  [ChainId.NEO_X_TESTNET]: new Token(ChainId.NEO_X_TESTNET, WNATIVE_ADDRESS[ChainId.NEO_X_TESTNET], 18, 'wGAS', 'Wrapped GAS'),
}

export const SUSHI: ChainTokenMap = {
  [ChainId.ETHEREUM]: new Token(ChainId.ETHEREUM, ZSWAPTOKEN_ADDRESS[ChainId.ETHEREUM], 18, 'ZSwap', 'ZSwap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, ZSWAPTOKEN_ADDRESS[ChainId.ROPSTEN], 18, 'ZSwap', 'ZSwap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, ZSWAPTOKEN_ADDRESS[ChainId.RINKEBY], 18, 'ZSwap', 'ZSwap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, ZSWAPTOKEN_ADDRESS[ChainId.GÖRLI], 18, 'ZSwap', 'ZSwap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, ZSWAPTOKEN_ADDRESS[ChainId.KOVAN], 18, 'ZSwap', 'ZSwap'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, ZSWAPTOKEN_ADDRESS[ChainId.MATIC], 18, 'ZSwap', 'ZSwap'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, ZSWAPTOKEN_ADDRESS[ChainId.FANTOM], 18, 'ZSwap', 'ZSwap'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, ZSWAPTOKEN_ADDRESS[ChainId.XDAI], 18, 'ZSwap', 'ZSwap'),
  [ChainId.BSC]: new Token(ChainId.BSC, ZSWAPTOKEN_ADDRESS[ChainId.BSC], 18, 'ZSwap', 'ZSwap'),
  [ChainId.ARBITRUM]: new Token(ChainId.ARBITRUM, ZSWAPTOKEN_ADDRESS[ChainId.ARBITRUM], 18, 'ZSwap', 'ZSwap'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, ZSWAPTOKEN_ADDRESS[ChainId.AVALANCHE], 18, 'ZSwap', 'ZSwap'),
  [ChainId.OKEX]: new Token(ChainId.OKEX, ZSWAPTOKEN_ADDRESS[ChainId.OKEX], 18, 'ZSwap', 'ZSwap'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, ZSWAPTOKEN_ADDRESS[ChainId.HARMONY], 18, 'ZSwap', 'ZSwap'),
  [ChainId.HECO]: new Token(ChainId.HECO, ZSWAPTOKEN_ADDRESS[ChainId.HECO], 18, 'ZSwap', 'ZSwap'),
  [ChainId.CELO]: new Token(ChainId.CELO, ZSWAPTOKEN_ADDRESS[ChainId.CELO], 18, 'ZSwap', 'ZSwap'),
  [ChainId.MOONRIVER]: new Token(ChainId.MOONRIVER, ZSWAPTOKEN_ADDRESS[ChainId.MOONRIVER], 18, 'ZSwap', 'ZSwap'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, ZSWAPTOKEN_ADDRESS[ChainId.FUSE], 18, 'ZSwap', 'ZSwap'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, ZSWAPTOKEN_ADDRESS[ChainId.TELOS], 18, 'ZSwap', 'ZSwap'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, ZSWAPTOKEN_ADDRESS[ChainId.MOONBEAM], 18, 'ZSwap', 'ZSwap'),
  [ChainId.KAVA]: new Token(ChainId.KAVA, ZSWAPTOKEN_ADDRESS[ChainId.KAVA], 18, 'ZSwap', 'ZSwap'),
  [ChainId.METIS]: new Token(ChainId.METIS, ZSWAPTOKEN_ADDRESS[ChainId.METIS], 18, 'ZSwap', 'ZSwap'),
  [ChainId.GANACHE]: new Token(ChainId.GANACHE, ZSWAPTOKEN_ADDRESS[ChainId.GANACHE], 18, 'ZSwap', 'ZSwap'),

  [ChainId.ALFAJORES]: new Token(ChainId.ALFAJORES, ZSWAPTOKEN_ADDRESS[ChainId.ALFAJORES], 18, 'ZSwap', 'ZSwap'),

  [ChainId.SCROLL_SEPOLIA]: new Token(ChainId.SCROLL_SEPOLIA, ZSWAPTOKEN_ADDRESS[ChainId.SCROLL_SEPOLIA], 18, 'ZSwap', 'ZSwap'),

  
}
