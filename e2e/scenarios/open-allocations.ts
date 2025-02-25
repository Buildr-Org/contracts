// ### Scenario description ###
// Common protocol actions > Set up indexers: stake and open allocations
// This scenario will open several allocations. See fixtures for details.
// Run with:
//    npx hardhat e2e:scenario open-allocations --network <network> --graph-config config/graph.<network>.yml

import hre from 'hardhat'
import { allocateFrom, stake } from '../lib/staking'
import { fundAccountsETH, fundAccountsGRT } from '../lib/accounts'
import { getIndexerFixtures } from './fixtures/indexers'
import { getGraphOptsFromArgv } from '../lib/helpers'

async function main() {
  const graphOpts = getGraphOptsFromArgv()
  const graph = hre.graph(graphOpts)
  const indexerFixtures = getIndexerFixtures(await graph.getTestAccounts())

  const deployer = await graph.getDeployer()
  const indexers = indexerFixtures.map((i) => i.signer.address)
  const indexerETHBalances = indexerFixtures.map((i) => i.ethBalance)
  const indexerGRTBalances = indexerFixtures.map((i) => i.grtBalance)

  // == Fund participants
  console.log('\n== Fund indexers')
  await fundAccountsETH(deployer, indexers, indexerETHBalances)
  await fundAccountsGRT(deployer, indexers, indexerGRTBalances, graph.contracts.GraphToken)

  // == Stake
  console.log('\n== Staking tokens')

  for (const indexer of indexerFixtures) {
    await stake(graph.contracts, indexer.signer, indexer.stake)
  }

  // == Open allocations
  console.log('\n== Open allocations')

  for (const indexer of indexerFixtures) {
    for (const allocation of indexer.allocations) {
      await allocateFrom(
        graph.contracts,
        indexer.signer,
        allocation.signer,
        allocation.subgraphDeploymentId,
        allocation.amount,
      )
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
