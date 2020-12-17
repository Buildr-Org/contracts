/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IAssetHolder } from "./IAssetHolder";

export class IAssetHolderFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAssetHolder {
    return new Contract(address, _abi, signerOrProvider) as IAssetHolder;
  }
}

const _abi = [
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
  }
];
