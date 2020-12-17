/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { GrtAssetHolder } from "./GrtAssetHolder";

export class GrtAssetHolderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _AdjudicatorAddress: string,
    _TokenAddress: string,
    _Controller: string,
    overrides?: Overrides
  ): Promise<GrtAssetHolder> {
    return super.deploy(
      _AdjudicatorAddress,
      _TokenAddress,
      _Controller,
      overrides || {}
    ) as Promise<GrtAssetHolder>;
  }
  getDeployTransaction(
    _AdjudicatorAddress: string,
    _TokenAddress: string,
    _Controller: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _AdjudicatorAddress,
      _TokenAddress,
      _Controller,
      overrides || {}
    );
  }
  attach(address: string): GrtAssetHolder {
    return super.attach(address) as GrtAssetHolder;
  }
  connect(signer: Signer): GrtAssetHolderFactory {
    return super.connect(signer) as GrtAssetHolderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GrtAssetHolder {
    return new Contract(address, _abi, signerOrProvider) as GrtAssetHolder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_AdjudicatorAddress",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "_TokenAddress",
        type: "address"
      },
      {
        internalType: "contract IController",
        name: "_Controller",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "destination",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "AssetTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "destination",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountDeposited",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationHoldings",
        type: "uint256"
      }
    ],
    name: "Deposited",
    type: "event"
  },
  {
    inputs: [],
    name: "AdjudicatorAddress",
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
    name: "Controller",
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
    inputs: [],
    name: "Token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "approveAll",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "assetOutcomeHashes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "guarantorChannelId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "guaranteeBytes",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "allocationBytes",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "destination",
        type: "bytes32"
      }
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "guarantorChannelId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "guaranteeBytes",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "allocationBytes",
        type: "bytes"
      }
    ],
    name: "claimAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "destination",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "expectedHeld",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "holdings",
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
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "assetOutcomeHash",
        type: "bytes32"
      }
    ],
    name: "setAssetOutcomeHash",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "contract IStaking",
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
        name: "fromChannelId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "allocationBytes",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "destination",
        type: "bytes32"
      }
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "allocationBytes",
        type: "bytes"
      }
    ],
    name: "transferAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "allocationBytes",
        type: "bytes"
      }
    ],
    name: "transferAllAdjudicatorOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200290638038062002906833981016040819052620000349162000079565b60008054600380546001600160a01b03199081166001600160a01b039687161790915590811694841694851781169094179055600480549093169116179055620000e5565b6000806000606084860312156200008e578283fd5b83516200009b81620000cc565b6020850151909350620000ae81620000cc565b6040850151909250620000c181620000cc565b809150509250925092565b6001600160a01b0381168114620000e257600080fd5b50565b61281180620000f56000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a3c041a11161008c578063ae9ee18c11610066578063ae9ee18c146101a6578063c2412676146101c6578063f1c9caf2146101ce578063ff860976146101e1576100ea565b8063a3c041a11461016b578063a3c863a31461017e578063aa5f66551461019e576100ea565b8063380d0c08116100c8578063380d0c081461012a5780634cf088d914610132578063646793561461015057806394ddd76614610158576100ea565b8063022cbbe8146100ef578063278f2ab8146101045780632e36b7f814610117575b600080fd5b6101026100fd366004611f23565b6101f4565b005b6101026101123660046120b0565b61026c565b610102610125366004611f23565b610426565b610102610466565b61013a61050f565b60405161014791906121b6565b60405180910390f35b61013a6105b6565b610102610166366004612032565b6105c5565b610102610179366004611f6c565b6106ab565b61019161018c366004611f02565b610733565b6040516101479190612256565b61013a610771565b6101b96101b4366004611eea565b610780565b6040516101479190612261565b61013a610792565b6101026101dc366004611fbc565b6107a1565b6101b96101ef366004611eea565b610884565b6000546001600160a01b031633146102275760405162461bcd60e51b815260040161021e90612546565b60405180910390fd5b6102678383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061089692505050565b505050565b61027583610bdc565b156102925760405162461bcd60e51b815260040161021e90612383565b6000838152600160205260408120548311156102c05760405162461bcd60e51b815260040161021e906122b6565b6102ca8383610be3565b600085815260016020526040902054106102f65760405162461bcd60e51b815260040161021e90612451565b600084815260016020526040902054610319906103138585610be3565b90610c44565b6003546040516323b872dd60e01b81529192506001600160a01b0316906323b872dd9061034e903390309086906004016121ca565b602060405180830381600087803b15801561036857600080fd5b505af115801561037c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a09190611eca565b6103bc5760405162461bcd60e51b815260040161021e906123c9565b6000848152600160205260409020546103d59082610be3565b600085815260016020526040908190208290555185917fb39477ecc06c5293391f8b73168b655d9c1310af93dbbf043187d79f881bbb8f9161041891859161276d565b60405180910390a250505050565b6102278383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c8692505050565b6003546001600160a01b031663095ea7b361047f61050f565b6000196040518363ffffffff1660e01b815260040161049f9291906121ee565b602060405180830381600087803b1580156104b957600080fd5b505af11580156104cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f19190611eca565b61050d5760405162461bcd60e51b815260040161021e906125e0565b565b60048054604051637bb20d2f60e11b81526000926001600160a01b039092169163f7641a5e91610561917f1df41cd916959d1163dc8f0671a666ea8a3e434c13e40faef527133b5d1670349101612261565b60206040518083038186803b15801561057957600080fd5b505afa15801561058d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b19190611dd7565b905090565b6004546001600160a01b031681565b6106058686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ced92505050565b61060d611d62565b610619858701876120db565b905061065f816000015185858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c8692505050565b6106a2878286868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250889250610d50915050565b50505050505050565b6106eb8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c8692505050565b61072d8484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508692506111be915050565b50505050565b600080546001600160a01b0316331461075e5760405162461bcd60e51b815260040161021e90612546565b61076883836115b9565b50600192915050565b6000546001600160a01b031681565b60016020526000908152604090205481565b6003546001600160a01b031681565b6107e18585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ced92505050565b6107e9611d62565b6107f5848601866120db565b905061083b816000015184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c8692505050565b61087c868285858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506115f792505050565b505050505050565b60026020526000908152604090205481565b6060818060200190518101906108ac9190611dfe565b60008481526001602052604081205482519293509181808080805b885181101561094457876108da57610944565b8881815181106108e657fe5b60200260200101516020015194508488101561091c5760019687019693508792506109118584610c44565b91506000975061093c565b60019687019661092d908790610c44565b95506109398886610c44565b97505b6001016108c7565b5060008a81526001602052604090208790558415610aa7576060856001600160401b038111801561097457600080fd5b506040519080825280602002602001820160405280156109ae57816020015b61099b611d7a565b8152602001906001900390816109935790505b50905060005b86811015610a3a57896109db826109d58a8e51610c4490919063ffffffff16565b90610be3565b815181106109e557fe5b60200260200101518282815181106109f957fe5b6020026020010181905250848015610a0f575080155b15610a325782828281518110610a2157fe5b602002602001015160200181815250505b6001016109b4565b50604080518082018252600081529051602080830191610a5c91859101612207565b60408051601f19818403018152918152915251610a7c91906020016126ee565b60408051601f19818403018152918152815160209283012060008e8152600290935291205550610ab7565b60008a8152600260205260408120555b6000805b87811015610bce57848015610ad95750610ad6886001610c44565b81145b15610ae657839150610b01565b898181518110610af257fe5b60200260200101516020015191505b610b218a8281518110610b1057fe5b602002602001015160000151610bdc565b15610b5457610b4f610b498b8381518110610b3857fe5b602002602001015160000151611b34565b83611b37565b610b88565b81600160008c8481518110610b6557fe5b602090810291909101810151518252810191909152604001600020805490910190555b898181518110610b9457fe5b6020026020010151600001518c6000805160206127bc83398151915284604051610bbe9190612261565b60405180910390a3600101610abb565b505050505050505050505050565b60a01c1590565b600082820183811015610c3d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000610c3d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611ccb565b6040805180820182526000815260208082018490529151610ca792016126ee565b60408051601f1981840301815291815281516020928301206000858152600290935291205414610ce95760405162461bcd60e51b815260040161021e90612625565b5050565b6040805180820182526001815260208082018490529151610d0e92016126ee565b60408051601f1981840301815291815281516020928301206000858152600290935291205414610ce95760405162461bcd60e51b815260040161021e9061230b565b606082806020019051810190610d669190611dfe565b6000868152600160205260408120549192508080805b886020015151811015610e775784610da65760405162461bcd60e51b815260040161021e9061258d565b600089602001518281518110610db857fe5b60200260200101519050600092505b8651831015610e625780878481518110610ddd57fe5b6020026020010151600001511415610e57576000878481518110610dfd57fe5b602002602001015160200151905080871015610e315788821415610e28578695508590039350610e62565b60009650610e51565b88821415610e4457945060009350610e62565b610e4e8782610c44565b96505b50610e62565b600190920191610dc7565b8415610e6e5750610e77565b50600101610d7c565b5060008311610e985760405162461bcd60e51b815260040161021e9061226a565b6000898152600160205260409020805484900390558115610fdd57606085516001600160401b0381118015610ecc57600080fd5b50604051908082528060200260200182016040528015610f0657816020015b610ef3611d7a565b815260200190600190039081610eeb5790505b50905060005b8651811015610f7257868181518110610f2157fe5b6020026020010151828281518110610f3557fe5b602002602001018190525082811415610f6a5783828281518110610f5557fe5b60200260200101516020018181525050610f72565b600101610f0c565b50604080518082018252600081529051602080830191610f9491859101612207565b60408051601f19818403018152918152915251610fb491906020016126ee565b60408051601f1981840301815291815281516020928301208b5160009081526002909352912055505b816111525784516001141561100b5787516000908152600260205260408082208290558a8252812055611152565b606060018651036001600160401b038111801561102757600080fd5b5060405190808252806020026020018201604052801561106157816020015b61104e611d7a565b8152602001906001900390816110465790505b50905060005b828110156110a25786818151811061107b57fe5b602002602001015182828151811061108f57fe5b6020908102919091010152600101611067565b50600182015b86518110156110e7578681815181106110bd57fe5b60200260200101518260018303815181106110d457fe5b60209081029190910101526001016110a8565b5060408051808201825260008152905160208083019161110991859101612207565b60408051601f1981840301815291815291525161112991906020016126ee565b60408051601f1981840301815291815281516020928301208b5160009081526002909352912055505b61115b86610bdc565b156111775761117261116c87611b34565b84611b37565b61118c565b60008681526001602052604090208054840190555b85896000805160206127bc833981519152856040516111ab9190612261565b60405180910390a3505050505050505050565b6060828060200190518101906111d49190611dfe565b6000858152600160205260408120549192508080805b85518210156112a657846112105760405162461bcd60e51b815260040161021e90612400565b600086838151811061121e57fe5b60200260200101516020015190508787848151811061123957fe5b602002602001015160000151141561127c57808610156112625760009594508481039350611276565b935060009250836112738682610c44565b95505b506112a6565b8086101561128d576000955061129a565b6112978682610c44565b95505b506001909101906111ea565b600084116112c65760405162461bcd60e51b815260040161021e9061269e565b600089815260016020526040902080548590039055606083156113da57606087516001600160401b03811180156112fc57600080fd5b5060405190808252806020026020018201604052801561133657816020015b611323611d7a565b81526020019060019003908161131b5790505b50905060005b88518110156113b55788818151811061135157fe5b602002602001015182828151811061136557fe5b60200260200101819052508989828151811061137d57fe5b60200260200101516000015114156113ad578582828151811061139c57fe5b602002602001015160200181815250505b60010161133c565b50806040516020016113c79190612207565b6040516020818303038152906040529150505b836114eb57606060018851036001600160401b03811180156113fb57600080fd5b5060405190808252806020026020018201604052801561143557816020015b611422611d7a565b81526020019060019003908161141a5790505b50905060005b848110156114765788818151811061144f57fe5b602002602001015182828151811061146357fe5b602090810291909101015260010161143b565b50600184015b88518110156114bb5788818151811061149157fe5b60200260200101518260018303815181106114a857fe5b602090810291909101015260010161147c565b5080516114c757600192505b806040516020016114d89190612207565b6040516020818303038152906040529150505b81156115055760008a81526002602052604081205561154c565b604080518082018252600081526020808201849052915161152692016126ee565b60408051601f19818403018152918152815160209283012060008d815260029093529120555b61155588610bdc565b156115715761156c61156689611b34565b86611b37565b611586565b60008881526001602052604090208054860190555b878a6000805160206127bc833981519152876040516115a59190612261565b60405180910390a350505050505050505050565b600082815260026020526040902054156115e55760405162461bcd60e51b815260040161021e9061250f565b60009182526002602052604090912055565b60008381526001602090815260409091205482519091606091611621919085018101908501611dfe565b9050606081516001600160401b038111801561163c57600080fd5b50604051908082528060200260200182016040528015611666578160200160208202803683370190505b50825190915060005b8660200151518110156117c05784611686576117c0565b60008760200151828151811061169857fe5b6020026020010151905060005b85518110156117b657866116b8576117b6565b8581815181106116c457fe5b6020026020010151600001518214156117ae5760008682815181106116e557fe5b602002602001015160200151905060008111156117ac5780881061175d5761170d8882610c44565b9750600087838151811061171d57fe5b6020908102919091018101510152611736856001610c44565b94508086838151811061174557fe5b602002602001018181510191508181525050506117b6565b6117678189610c44565b87838151811061177357fe5b602002602001015160200181815250508786838151811061179057fe5b60200260200101818151019150818152505060009750506117b6565b505b6001016116a5565b505060010161166f565b5060005b83518110156118af57846117d7576118af565b60008482815181106117e557fe5b602002602001015160200151905060008111156118a65780861061185c5761180d8682610c44565b9550600085838151811061181d57fe5b6020908102919091018101510152611836836001610c44565b92508084838151811061184557fe5b6020026020010181815101915081815250506118a6565b6118668187610c44565b85838151811061187257fe5b602002602001015160200181815250508584838151811061188f57fe5b602002602001018181510191508181525050600095505b506001016117c4565b5060008781526001602052604090208490556060811561191d57816001600160401b03811180156118df57600080fd5b5060405190808252806020026020018201604052801561191957816020015b611906611d7a565b8152602001906001900390816118fe5790505b5090505b6000805b855181101561198457600086828151811061193857fe5b602002602001015160200151111561197c5785818151811061195657fe5b602002602001015183838151811061196a57fe5b60209081029190910101526001909101905b600101611921565b5082811461198e57fe5b8215611a01576040805180820182526000815290516020808301916119b591869101612207565b60408051601f198184030181529181529152516119d591906020016126ee565b60408051601f1981840301815291815281516020928301208a5160009081526002909352912055611a1b565b600089815260026020526040808220829055895182528120555b60005b8551811015611b28576000858281518110611a3557fe5b60200260200101511115611b2057611a52868281518110610b1057fe5b15611a8757611a82611a69878381518110610b3857fe5b868381518110611a7557fe5b6020026020010151611b37565b611ace565b848181518110611a9357fe5b602002602001015160016000888481518110611aab57fe5b602090810291909101810151518252810191909152604001600020805490910190555b858181518110611ada57fe5b6020026020010151600001518a6000805160206127bc833981519152878481518110611b0257fe5b6020026020010151604051611b179190612261565b60405180910390a35b600101611a1e565b50505050505050505050565b90565b6000611b4161050f565b6040516378eb06b360e11b81529091506001600160a01b0382169063f1d60d6690611b709086906004016121b6565b60206040518083038186803b158015611b8857600080fd5b505afa158015611b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc09190611eca565b15611c2b5760405163469e080560e11b81526001600160a01b03821690638d3c100a90611bf39085908790600401612756565b600060405180830381600087803b158015611c0d57600080fd5b505af1158015611c21573d6000803e3d6000fd5b5050505050610ce9565b60035460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90611c5d90869086906004016121ee565b602060405180830381600087803b158015611c7757600080fd5b505af1158015611c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611caf9190611eca565b6102675760405162461bcd60e51b815260040161021e906124c5565b60008184841115611d5a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d1f578181015183820152602001611d07565b50505050905090810190601f168015611d4c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60408051808201909152600081526060602082015290565b604080518082019091526000808252602082015290565b60008083601f840112611da2578182fd5b5081356001600160401b03811115611db8578182fd5b602083019150836020828501011115611dd057600080fd5b9250929050565b600060208284031215611de8578081fd5b81516001600160a01b0381168114610c3d578182fd5b60006020808385031215611e10578182fd5b82516001600160401b0380821115611e26578384fd5b818501915085601f830112611e39578384fd5b8151611e4c611e478261279e565b61277b565b818152848101908486016040808502870188018b1015611e6a578889fd5b8896505b84871015611ebb5780828c031215611e84578889fd5b80518181018181108882111715611e9757fe5b82528251815288830151898201528452600196909601959287019290810190611e6e565b50909998505050505050505050565b600060208284031215611edb578081fd5b81518015158114610c3d578182fd5b600060208284031215611efb578081fd5b5035919050565b60008060408385031215611f14578081fd5b50508035926020909101359150565b600080600060408486031215611f37578081fd5b8335925060208401356001600160401b03811115611f53578182fd5b611f5f86828701611d91565b9497909650939450505050565b60008060008060608587031215611f81578081fd5b8435935060208501356001600160401b03811115611f9d578182fd5b611fa987828801611d91565b9598909750949560400135949350505050565b600080600080600060608688031215611fd3578081fd5b8535945060208601356001600160401b0380821115611ff0578283fd5b611ffc89838a01611d91565b90965094506040880135915080821115612014578283fd5b5061202188828901611d91565b969995985093965092949392505050565b6000806000806000806080878903121561204a578081fd5b8635955060208701356001600160401b0380821115612067578283fd5b6120738a838b01611d91565b9097509550604089013591508082111561208b578283fd5b5061209889828a01611d91565b979a9699509497949695606090950135949350505050565b6000806000606084860312156120c4578283fd5b505081359360208301359350604090920135919050565b600060208083850312156120ed578182fd5b82356001600160401b0380821115612103578384fd5b9084019060408287031215612116578384fd5b60405160408101818110838211171561212b57fe5b604052823581528383013582811115612142578586fd5b80840193505086601f840112612156578485fd5b82359150612166611e478361279e565b82815284810190848601868502860187018a1015612182578788fd5b8795505b848610156121a4578035835260019590950194918601918601612186565b50948201949094529695505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b602080825282518282018190526000919060409081850190868401855b8281101561224957815180518552860151868501529284019290850190600101612224565b5091979650505050505050565b901515815260200190565b90815260200190565b6020808252602c908201527f5f636c61696d207c2067756172616e746f72206166666f726473203020666f7260408201526b103232b9ba34b730ba34b7b760a11b606082015260800190565b60208082526035908201527f4465706f736974207c20686f6c64696e67735b64657374696e6174696f6e5d206040820152741a5cc81b195cdcc81d1a185b88195e1c1958dd1959605a1b606082015260800190565b60208082526052908201527f4173736574486f6c646572207c207375626d69747465642067756172616e746560408201527f654279746573206461746120646f6573206e6f74206d617463682073746f72656060820152710c840c2e6e6cae89eeae8c6dedaca90c2e6d60731b608082015260a00190565b60208082526026908201527f43616e6e6f74206465706f73697420746f2065787465726e616c2064657374696040820152653730ba34b7b760d11b606082015260800190565b60208082526018908201527f436f756c64206e6f74206465706f736974204552433230730000000000000000604082015260600190565b60208082526031908201527f5f7472616e73666572207c2066726f6d4368616e6e656c206166666f7264732060408201527018103337b9103232b9ba34b730ba34b7b760791b606082015260800190565b6020808252604e908201527f4465706f736974207c20686f6c64696e67735b64657374696e6174696f6e5d2060408201527f616c7265616479206d65657473206f722065786365656473206578706563746560608201526d1912195b19080ac8185b5bdd5b9d60921b608082015260a00190565b6020808252602a908201527f4752544173736574486f6c6465723a207472616e7366657272696e6720746f6b604082015269195b9cc819985a5b195960b21b606082015260800190565b6020808252601b908201527f4f7574636f6d65206861736820616c7265616479206578697374730000000000604082015260600190565b60208082526027908201527f4f6e6c7920746865204e6974726f41646a7564696361746f72206973206175746040820152661a1bdc9a5e995960ca1b606082015260800190565b60208082526033908201527f5f636c61696d207c2067756172616e746f724368616e6e656c206166666f7264604082015272399018103337b9103232b9ba34b730ba34b7b760691b606082015260800190565b60208082526025908201527f4752544173736574486f6c6465723a20546f6b656e20617070726f76616c2066604082015264185a5b195960da1b606082015260800190565b60208082526053908201527f4173736574486f6c646572207c207375626d697474656420616c6c6f6361746960408201527f6f6e4279746573206461746120646f6573206e6f74206d617463682073746f726060820152720cac840c2e6e6cae89eeae8c6dedaca90c2e6d606b1b608082015260a00190565b60208082526030908201527f5f7472616e736665722066726f6d4368616e6e656c20616c6c6f63617465732060408201526f18103a37903232b9ba34b730ba34b7b760811b606082015260800190565b6000602080835260ff84511681840152808401516040808501528051806060860152835b8181101561272e57828101840151868201608001528301612712565b8181111561273f5784608083880101525b50601f01601f191693909301608001949350505050565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b6040518181016001600160401b038111828210171561279657fe5b604052919050565b60006001600160401b038211156127b157fe5b506020908102019056fe1f6b1af341c61650d8ef5dd2094a77e44ce0568e1acb98baa6007033de9009b7a26469706673582212208b04d8ae0272a60cab7ca9c5d84f18f91ba0664208a3d2e20dd02aa7b764160764736f6c63430007040033";
