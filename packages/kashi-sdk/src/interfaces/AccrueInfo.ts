import { JSBI } from '@zarclays/zswap-core-sdk'

export interface AccrueInfo {
  interestPerSecond: JSBI
  lastAccrued: JSBI
  feesEarnedFraction: JSBI
}
