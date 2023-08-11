import { utils, BigNumber, Wallet, Overrides, providers } from 'ethers'
import { Argv } from 'yargs'

import { logger } from './logging'
import { defaultOverrides } from './defaults'

import {
  loadGraphNetworkContracts,
  GraphNetworkContracts,
  GraphNetworkAddressBook,
} from '../sdk/deployments/network'

const { formatEther } = utils

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type CLIArgs = { [key: string]: any } & Argv['argv']

export interface CLIEnvironment {
  balance: BigNumber
  chainId: number
  nonce: number
  walletAddress: string
  wallet: Wallet
  addressBook: GraphNetworkAddressBook
  contracts: GraphNetworkContracts
  argv: CLIArgs
}

export const displayGasOverrides = (): Overrides => {
  const r = { gasPrice: 'auto', gasLimit: 'auto', ...defaultOverrides }
  if (r['gasPrice']) {
    r['gasPrice'] = r['gasPrice'].toString()
  }
  return r
}

export const loadEnv = async (argv: CLIArgs, wallet?: Wallet): Promise<CLIEnvironment> => {
  if (!wallet) {
    wallet = Wallet.fromMnemonic(argv.mnemonic, `m/44'/60'/0'/0/${argv.accountNumber}`).connect(
      new providers.JsonRpcProvider(argv.providerUrl),
    )
  }

  const balance = await wallet.getBalance()
  const chainId = (await wallet.provider.getNetwork()).chainId
  const nonce = await wallet.getTransactionCount()
  const walletAddress = await wallet.getAddress()
  const addressBook = new GraphNetworkAddressBook(argv.addressBook, chainId)
  // TODO: dont use throwOnFailure=false
  const contracts = loadGraphNetworkContracts(argv.addressBook, chainId, wallet, false)

  logger.info(`Preparing contracts on chain id: ${chainId}`)
  logger.info(
    `Connected Wallet: address=${walletAddress} nonce=${nonce} balance=${formatEther(balance)}\n`,
  )
  logger.info(`Gas settings: ${JSON.stringify(displayGasOverrides())}`)

  return {
    balance,
    chainId,
    nonce,
    walletAddress,
    wallet,
    addressBook,
    contracts,
    argv,
  }
}
