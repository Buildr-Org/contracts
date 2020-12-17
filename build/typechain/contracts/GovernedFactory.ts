/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Governed } from "./Governed";

export class GovernedFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Governed> {
    return super.deploy(overrides || {}) as Promise<Governed>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Governed {
    return super.attach(address) as Governed;
  }
  connect(signer: Signer): GovernedFactory {
    return super.connect(signer) as GovernedFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governed {
    return new Contract(address, _abi, signerOrProvider) as Governed;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "NewOwnership",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "NewPendingOwnership",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "governor",
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
    name: "pendingGovernor",
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
    inputs: [
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061030e806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630c340a241461005157806379ba509714610075578063e3056a341461007f578063f2fde38b14610087575b600080fd5b6100596100ad565b604080516001600160a01b039092168252519081900360200190f35b61007d6100bc565b005b6100596101cb565b61007d6004803603602081101561009d57600080fd5b50356001600160a01b03166101da565b6000546001600160a01b031681565b6001546001600160a01b0316158015906100e057506001546001600160a01b031633145b610131576040805162461bcd60e51b815260206004820152601f60248201527f43616c6c6572206d7573742062652070656e64696e6720676f7665726e6f7200604482015290519081900360640190fd5b60008054600180546001600160a01b038082166001600160a01b03198086168217808855931690935560405193811694929391169184917f0ac6deed30eef60090c749850e10f2fa469e3e25fec1d1bef2853003f6e6f18f9190a36001546040516001600160a01b03918216918316907f76563ad561b7036ae716b9b25cb521b21463240f104c97e12f25877f2235f33d90600090a35050565b6001546001600160a01b031681565b6000546001600160a01b03163314610232576040805162461bcd60e51b815260206004820152601660248201527513db9b1e4811dbdd995c9b9bdc8818d85b8818d85b1b60521b604482015290519081900360640190fd5b6001600160a01b038116610284576040805162461bcd60e51b815260206004820152601460248201527311dbdd995c9b9bdc881b5d5cdd081899481cd95d60621b604482015290519081900360640190fd5b600180546001600160a01b038381166001600160a01b03198316179283905560405191811692169082907f76563ad561b7036ae716b9b25cb521b21463240f104c97e12f25877f2235f33d90600090a3505056fea264697066735822122011621a9b185d27896985a273f0fbc62929f8ae63f2ffd11f925227a9e504727164736f6c63430007040033";
