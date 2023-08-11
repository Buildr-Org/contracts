import yargs, { Argv } from 'yargs'

import * as sdk from '../../sdk/src/deployment'
import { loadEnv, CLIArgs, CLIEnvironment } from '../env'
import { confirm } from '../helpers'

export const deploy = async (cli: CLIEnvironment, cliArgs: CLIArgs): Promise<void> => {
  // Ensure action
  const sure = await confirm(
    `Are you sure to deploy ${cliArgs.contract}}?`,
    cliArgs.skipConfirmation,
  )
  if (!sure) return

  await sdk.deploy(
    cliArgs.type,
    cli.wallet,
    { name: cliArgs.contract, args: cliArgs.init },
    cli.addressBook,
    { name: 'GraphProxyAdmin', opts: { buildAcceptTx: cliArgs.buildTx } },
  )
}

export const deployCommand = {
  command: 'deploy',
  describe: 'Deploy contract',
  builder: (yargs: Argv): yargs.Argv => {
    return yargs
      .option('x', {
        alias: 'init',
        description: 'Init arguments as comma-separated values',
        type: 'string',
        requiresArg: true,
      })
      .option('c', {
        alias: 'contract',
        description: 'Contract name to deploy',
        type: 'string',
        requiresArg: true,
        demandOption: true,
      })
      .option('t', {
        alias: 'type',
        description: 'Choose deploy, deploy-save, deploy-with-proxy, deploy-with-proxy-save',
        type: 'string',
        requiresArg: true,
        demandOption: true,
      })
      .option('b', {
        alias: 'build-tx',
        description: 'Build the acceptProxy tx and print it. Then use tx data with a multisig',
        default: false,
        type: 'boolean',
      })
  },
  handler: async (argv: CLIArgs): Promise<void> => {
    return deploy(await loadEnv(argv), argv)
  },
}
