import { BigNumber } from '@ethersproject/bignumber'
import { Pair, Token } from '@zarclays/zswap-core-sdk'
import { findMultiRouteExactOut as TinesFindMultiRouteExactOut, MultiRoute, RToken } from '@zarclays/zswap-tines'
import { Pool } from '../entities/Pool'
import { convertPoolOrPairtoRPool } from './convertPoolOrPairtoRPool'

export function findMultiRouteExactOut(
  from: Token,
  to: Token,
  amountIn: BigNumber | number,
  pools: (Pool | Pair)[],
  baseToken: Token,
  gasPrice: number
): MultiRoute {
  return TinesFindMultiRouteExactOut(
    from as RToken,
    to as RToken,
    amountIn,
    pools.map(convertPoolOrPairtoRPool),
    baseToken as RToken,
    gasPrice
  )
}
