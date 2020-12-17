/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { DisputeManagerV1Storage } from "./DisputeManagerV1Storage";

export class DisputeManagerV1StorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DisputeManagerV1Storage> {
    return super.deploy(overrides || {}) as Promise<DisputeManagerV1Storage>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DisputeManagerV1Storage {
    return super.attach(address) as DisputeManagerV1Storage;
  }
  connect(signer: Signer): DisputeManagerV1StorageFactory {
    return super.connect(signer) as DisputeManagerV1StorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisputeManagerV1Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DisputeManagerV1Storage;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "param",
        type: "string"
      }
    ],
    name: "ParameterUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "controller",
        type: "address"
      }
    ],
    name: "SetController",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "addressCache",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "arbitrator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "contract IController",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "disputes",
    outputs: [
      {
        internalType: "address",
        name: "indexer",
        type: "address"
      },
      {
        internalType: "address",
        name: "fisherman",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "relatedDisputeID",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "fishermanRewardPercentage",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "minimumDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address"
      }
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "slashingPercentage",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061036c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636cc6cde11161005b5780636cc6cde11461011f57806392eefe9b14610143578063dc675a651461016b578063f77c47911461018857610088565b806311be19971461008d578063458af6fc146100dc578063636bfbab146100fd57806369666a4914610117575b600080fd5b6100aa600480360360208110156100a357600080fd5b5035610190565b604080516001600160a01b03958616815293909416602084015282840191909152606082015290519081900360800190f35b6100e46101c4565b6040805163ffffffff9092168252519081900360200190f35b6101056101d0565b60408051918252519081900360200190f35b6100e46101d6565b6101276101ea565b604080516001600160a01b039092168252519081900360200190f35b6101696004803603602081101561015957600080fd5b50356001600160a01b03166101f9565b005b6101276004803603602081101561018157600080fd5b5035610264565b61012761027f565b60106020526000908152604090208054600182015460028301546003909301546001600160a01b0392831693919092169184565b600f5463ffffffff1681565b600e5481565b600f54640100000000900463ffffffff1681565b600d546001600160a01b031681565b6000546001600160a01b03163314610258576040805162461bcd60e51b815260206004820152601960248201527f43616c6c6572206d75737420626520436f6e74726f6c6c657200000000000000604482015290519081900360640190fd5b6102618161028e565b50565b6001602052600090815260409020546001600160a01b031681565b6000546001600160a01b031681565b6001600160a01b0381166102e2576040805162461bcd60e51b815260206004820152601660248201527510dbdb9d1c9bdb1b195c881b5d5cdd081899481cd95d60521b604482015290519081900360640190fd5b600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f4ff638452bbf33c012645d18ae6f05515ff5f2d1dfb0cece8cbf018c60903f709181900360200190a15056fea2646970667358221220e5b6307c2e694bdbea4a8c4a85177efa7059ae7e89a9d5889635f1f7700fe5f764736f6c63430007040033";
