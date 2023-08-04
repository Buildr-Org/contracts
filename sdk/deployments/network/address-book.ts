import { isGraphChainId } from '../../src/chain'
import { AddressBookJson } from '../../src/deployment'
import { assertObject } from '../../src/utils/assertions'
import { GraphNetworkContractName, isGraphNetworkContractName } from './contract-list'

export type GraphNetworkAddressBookJson = AddressBookJson<string, GraphNetworkContractName>

// Asserts the provided object is a valid address book
// Logs warnings for unsupported chain ids or invalid contract names
// TODO: should we enforce json format here and throw instead of just logging?
export function assertGraphNetworkAddressBook(
  json: unknown,
): asserts json is GraphNetworkAddressBookJson {
  assertObject(json)

  for (const chainId of Object.keys(json)) {
    // Validate chain id
    if (!isGraphChainId(parseInt(chainId)))
      console.warn(`Chain id ${chainId} is not supported by the Graph Network`)

    // Validate contract names
    const contractList = json[chainId]
    assertObject(contractList)

    const contractNames = Object.keys(contractList)
    if (!contractNames.every((c) => isGraphNetworkContractName(c))) {
      console.error(
        `Detected invalid GraphNetworkContract in address book: ${contractNames.filter(
          (c) => !isGraphNetworkContractName(c),
        )}, for chainId ${chainId}`,
      )
    }
  }
}
