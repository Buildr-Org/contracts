import { providers, Signer } from 'ethers'

import { AddressBook, loadContracts } from '../../src/deployment'
import { GraphChainId, isGraphChainId, isGraphL1ChainId } from '../../src/chain'
import { assertObject } from '../../src/utils/assertions'

import {
  GraphNetworkL1ContractNameList,
  GraphNetworkL2ContractNameList,
  GraphNetworkSharedContractNameList,
  isGraphNetworkContractName,
} from './contract-list'

import { assertGraphNetworkAddressBook } from './address-book'
import { GraphNetworkContractName } from './contract-list'

// Get contract types from built artifacts
// TODO: this needs to be imported from published npm package once we make the sdk a standalone package
import { EpochManager } from '../../../build/types/EpochManager'
import { DisputeManager } from '../../../build/types/DisputeManager'
import { Staking } from '../../../build/types/Staking'
import { ServiceRegistry } from '../../../build/types/ServiceRegistry'
import { Curation } from '../../../build/types/Curation'
import { RewardsManager } from '../../../build/types/RewardsManager'
import { GNS } from '../../../build/types/GNS'
import { GraphProxyAdmin } from '../../../build/types/GraphProxyAdmin'
import { GraphToken } from '../../../build/types/GraphToken'
import { Controller } from '../../../build/types/Controller'
import { BancorFormula } from '../../../build/types/BancorFormula'
import { IENS } from '../../../build/types/IENS'
import { AllocationExchange } from '../../../build/types/AllocationExchange'
import { SubgraphNFT } from '../../../build/types/SubgraphNFT'
import { GraphCurationToken } from '../../../build/types/GraphCurationToken'
import { SubgraphNFTDescriptor } from '../../../build/types/SubgraphNFTDescriptor'
import { L1GraphTokenGateway } from '../../../build/types/L1GraphTokenGateway'
import { L2GraphToken } from '../../../build/types/L2GraphToken'
import { L2GraphTokenGateway } from '../../../build/types/L2GraphTokenGateway'
import { BridgeEscrow } from '../../../build/types/BridgeEscrow'

export interface GraphNetworkContracts {
  EpochManager: EpochManager
  DisputeManager: DisputeManager
  Staking: Staking
  ServiceRegistry: ServiceRegistry
  Curation: Curation
  RewardsManager: RewardsManager
  GNS: GNS
  GraphProxyAdmin: GraphProxyAdmin
  GraphToken: GraphToken
  Controller: Controller
  BancorFormula: BancorFormula
  IENS?: IENS
  AllocationExchange: AllocationExchange
  SubgraphNFT: SubgraphNFT
  SubgraphNFTDescriptor: SubgraphNFTDescriptor
  GraphCurationToken: GraphCurationToken

  // Only L1
  L1GraphTokenGateway?: L1GraphTokenGateway
  BridgeEscrow?: BridgeEscrow

  // Only L2
  L2GraphToken?: L2GraphToken
  L2GraphTokenGateway?: L2GraphTokenGateway
}

export function assertGraphNetworkContracts(
  contracts: unknown,
  chainId: GraphChainId,
): asserts contracts is GraphNetworkContracts {
  assertObject(contracts)

  // Allow loading contracts not defined in GraphNetworkContractNameList but raise a warning
  const contractNames = Object.keys(contracts)
  if (!contractNames.every((c) => isGraphNetworkContractName(c))) {
    console.warn(
      `Loaded invalid GraphNetworkContract: ${contractNames.filter(
        (c) => !isGraphNetworkContractName(c),
      )}`,
    )
  }

  // Assert that all shared GraphNetworkContracts were loaded
  for (const contractName of GraphNetworkSharedContractNameList) {
    if (!contracts[contractName]) {
      throw new Error(`Missing GraphNetworkContract ${contractName} for chainId ${chainId}`)
    }
  }

  // Assert that L1/L2 specific GraphNetworkContracts were loaded
  const layerSpecificContractNames = isGraphL1ChainId(chainId)
    ? GraphNetworkL1ContractNameList
    : GraphNetworkL2ContractNameList
  for (const contractName of layerSpecificContractNames) {
    if (!contracts[contractName]) {
      throw new Error(`Missing GraphNetworkContract ${contractName} for chainId ${chainId}`)
    }
  }
}

export function loadGraphNetworkContracts(
  addressBookPath: string,
  chainId: number,
  signerOrProvider?: Signer | providers.Provider,
): GraphNetworkContracts {
  if (!isGraphChainId(chainId)) {
    throw new Error(`ChainId not supported: ${chainId}`)
  }
  const addressBook = new AddressBook(addressBookPath, chainId)
  assertGraphNetworkAddressBook(addressBook.addressBook)

  const contracts = loadContracts<GraphNetworkContractName>(addressBook, signerOrProvider, true)
  assertGraphNetworkContracts(contracts, chainId)

  return contracts
}
