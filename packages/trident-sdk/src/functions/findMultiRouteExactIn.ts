import { BigNumber } from '@ethersproject/bignumber'
import { Pair, Token } from '@zarclays/zswap-core-sdk'
import { MultiRoute, RToken, findMultiRouteExactIn as TinesFindMultiRouteExactIn } from '@zarclays/zswap-tines'
import { Pool } from '../entities/Pool'
import { convertPoolOrPairtoRPool } from './convertPoolOrPairtoRPool'

export function findMultiRouteExactIn(
  from: Token,
  to: Token,
  amountIn: BigNumber | number,
  pools: (Pool | Pair)[],
  baseToken: Token,
  gasPrice: number
): MultiRoute {
  return TinesFindMultiRouteExactIn(
    from as RToken,
    to as RToken,
    amountIn,
    pools.map(convertPoolOrPairtoRPool),
    baseToken as RToken,
    gasPrice
  )
}
