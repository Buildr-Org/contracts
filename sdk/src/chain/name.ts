import { isGraphChainName, isGraphL1ChainName, isGraphL2ChainName } from './guards'
import { ChainList, GraphChainName, GraphL1ChainName, GraphL2ChainName } from '../types/chain'

/** A list of all L1 chain names supported by the protocol */
export const l1ChainNames: GraphL1ChainName[] = ChainList.map((c) => c.l1.name)
/** A list of all L2 chain names supported by the protocol */
export const l2ChainNames: GraphL2ChainName[] = ChainList.map((c) => c.l2.name)
/** A list of all chain names supported by the protocol */
export const chainNames: GraphChainName[] = [...l1ChainNames, ...l2ChainNames]

/**
 * Gets the L2 chain name that corresponds to the given L1 chain name
 * @param name The L1 chain name
 * @returns The L2 chain name
 *
 * @throws Error if the given chain name is not a valid L1 chain name
 */
export const l1ToL2Name = (name: string): GraphChainName => {
  if (!isGraphL1ChainName(name)) throw new Error(`Invalid L1 chain name: ${name}`)
  const pair = ChainList.find((cp) => cp.l1.name === name)
  return pair.l2.name
}
/**
 * Gets the L1 chain name that corresponds to the given L2 chain name
 * @param name The L2 chain name
 * @returns The L1 chain name
 *
 * @throws Error if the given chain name is not a valid L2 chain name
 */
export const l2ToL1Name = (name: string): GraphChainName => {
  if (!isGraphL2ChainName(name)) throw new Error(`Invalid L2 chain name: ${name}`)
  const pair = ChainList.find((cp) => cp.l2.name === name)
  return pair.l1.name
}
/**
 * Gets the counterpart chain name to the given L1 or L2 chain name
 * @param chainId The chain name
 * @returns The counterpart chain name
 *
 * @throws Error if the given chain name is not a valid chain name
 */
export const counterpartName = (name: string): GraphChainName => {
  if (!isGraphChainName(name)) throw new Error(`Invalid chain name: ${name}`)
  return isGraphL1ChainName(name) ? l1ToL2Name(name) : l2ToL1Name(name)
}
