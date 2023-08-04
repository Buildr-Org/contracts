import { loadGraphNetworkContracts } from '../deployments'
import { GraphChainId } from '../src'

const chains: GraphChainId[] = [1, 5, 42161, 421613]

for (const chain of chains) {
  const contracts = loadGraphNetworkContracts('addresses.json', chain)
  Object.keys(contracts).map((c) => console.log(c, contracts[c].address))
}
