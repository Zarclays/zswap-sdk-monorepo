import { keccak256, pack } from '@ethersproject/solidity'

import { INIT_CODE_HASH } from '../constants'
import { Token } from '../entities/Token'
import { getCreate2Address } from '@ethersproject/address'

export const computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB,
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
}): string => {
  
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  if(!INIT_CODE_HASH[token0.chainId]){
    throw new Error(`INIT CODE HASH NOT Set for ${token0.chainId}`)
  }
  return getCreate2Address(
    factoryAddress,
    keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
    INIT_CODE_HASH[token0.chainId]
  )
}
