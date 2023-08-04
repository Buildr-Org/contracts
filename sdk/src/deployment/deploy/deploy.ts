import { deployContract, deployContractAndSave } from './contract'
import {
  deployContractWithProxy,
  deployContractWithProxyAndSave,
  deployContractImplementationAndSave,
} from './proxy'
import { DeployType } from '../types/deploy'

import type { DeployData, DeployResult } from '../types/deploy'
import type { Signer } from 'ethers'
import type { AddressBook } from '../address-book'

export const deploy = async (
  type: DeployType,
  sender: Signer,
  contractData: DeployData,
  addressBook?: AddressBook,
  proxyData?: DeployData,
): Promise<DeployResult> => {
  switch (type) {
    case DeployType.Deploy:
      console.info(`Deploying contract ${contractData.name}...`)
      return await deployContract(sender, contractData)
    case DeployType.DeployAndSave:
      console.info(`Deploying contract ${contractData.name} and saving to address book...`)
      validateAddressBook(addressBook)
      return await deployContractAndSave(sender, contractData, addressBook)
    case DeployType.DeployWithProxy:
      console.info(`Deploying contract ${contractData.name} with proxy ...`)
      validateAddressBook(addressBook)
      validateProxyData(proxyData)
      // TODO - for some reason proxyData's type is not being narrowed down to DeployData
      // so we force non-null assertion
      return await deployContractWithProxy(sender, contractData, addressBook, proxyData!)
    case DeployType.DeployWithProxyAndSave:
      console.info(
        `Deploying contract ${contractData.name} with proxy and saving to address book...`,
      )
      validateAddressBook(addressBook)
      validateProxyData(proxyData)
      // TODO - for some reason proxyData's type is not being narrowed down to DeployData
      // so we force non-null assertion
      return await deployContractWithProxyAndSave(sender, contractData, addressBook, proxyData!)
    case DeployType.DeployImplementationAndSave:
      console.info(
        `Deploying contract ${contractData.name} implementation and saving to address book...`,
      )
      validateAddressBook(addressBook)
      validateProxyData(proxyData)
      // TODO - for some reason proxyData's type is not being narrowed down to DeployData
      // so we force non-null assertion
      return await deployContractImplementationAndSave(
        sender,
        contractData,
        addressBook,
        proxyData!,
      )
    default:
      throw new Error('Please provide the correct option for deploy type')
  }
}

function validateAddressBook(addressBook: AddressBook | undefined): void {
  if (!addressBook) {
    throw new Error('Address book not provided!')
  }
}

function validateProxyData(proxyData: DeployData | undefined): void {
  if (!proxyData) {
    throw new Error('Proxy data not provided!')
  }
}
