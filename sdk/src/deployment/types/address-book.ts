import type { DeployResult } from './deploy'

// TODO: doc this

// JSON format:
// {
//   "<CHAIN_ID>": {
//     "<CONTRACT_NAME>": {}
//     ...
//    }
// }
export type AddressBookJson<
  ChainId extends string = string,
  ContractName extends string = string,
> = Record<ChainId, Record<ContractName, AddressBookEntry>>

export type AddressBookEntry = {
  address: string
  constructorArgs?: Array<string>
  initArgs?: Array<string>
  proxy?: boolean
  implementation?: AddressBookEntry
} & Partial<Omit<DeployResult, 'contract'>>
