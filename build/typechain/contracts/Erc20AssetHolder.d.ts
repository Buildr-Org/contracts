/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface Erc20AssetHolderInterface extends ethers.utils.Interface {
  functions: {
    "AdjudicatorAddress()": FunctionFragment;
    "Token()": FunctionFragment;
    "assetOutcomeHashes(bytes32)": FunctionFragment;
    "claim(bytes32,bytes,bytes,bytes32)": FunctionFragment;
    "claimAll(bytes32,bytes,bytes)": FunctionFragment;
    "deposit(bytes32,uint256,uint256)": FunctionFragment;
    "holdings(bytes32)": FunctionFragment;
    "setAssetOutcomeHash(bytes32,bytes32)": FunctionFragment;
    "transfer(bytes32,bytes,bytes32)": FunctionFragment;
    "transferAll(bytes32,bytes)": FunctionFragment;
    "transferAllAdjudicatorOnly(bytes32,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "AdjudicatorAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assetOutcomeHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAll",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "holdings", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAssetOutcomeHash",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAll",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAllAdjudicatorOnly",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "AdjudicatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetOutcomeHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "holdings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAssetOutcomeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAllAdjudicatorOnly",
    data: BytesLike
  ): Result;

  events: {
    "AssetTransferred(bytes32,bytes32,uint256)": EventFragment;
    "Deposited(bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
}

export class Erc20AssetHolder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc20AssetHolderInterface;

  functions: {
    AdjudicatorAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "AdjudicatorAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    Token(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "Token()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    assetOutcomeHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "assetOutcomeHashes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    claim(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(bytes32,bytes,bytes,bytes32)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimAll(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimAll(bytes32,bytes,bytes)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deposit(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(bytes32,uint256,uint256)"(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    holdings(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "holdings(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setAssetOutcomeHash(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAssetOutcomeHash(bytes32,bytes32)"(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transfer(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(bytes32,bytes,bytes32)"(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferAll(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferAll(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferAllAdjudicatorOnly(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferAllAdjudicatorOnly(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  AdjudicatorAddress(overrides?: CallOverrides): Promise<string>;

  "AdjudicatorAddress()"(overrides?: CallOverrides): Promise<string>;

  Token(overrides?: CallOverrides): Promise<string>;

  "Token()"(overrides?: CallOverrides): Promise<string>;

  assetOutcomeHashes(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "assetOutcomeHashes(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  claim(
    guarantorChannelId: BytesLike,
    guaranteeBytes: BytesLike,
    allocationBytes: BytesLike,
    destination: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(bytes32,bytes,bytes,bytes32)"(
    guarantorChannelId: BytesLike,
    guaranteeBytes: BytesLike,
    allocationBytes: BytesLike,
    destination: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimAll(
    guarantorChannelId: BytesLike,
    guaranteeBytes: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimAll(bytes32,bytes,bytes)"(
    guarantorChannelId: BytesLike,
    guaranteeBytes: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deposit(
    destination: BytesLike,
    expectedHeld: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(bytes32,uint256,uint256)"(
    destination: BytesLike,
    expectedHeld: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  holdings(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "holdings(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAssetOutcomeHash(
    channelId: BytesLike,
    assetOutcomeHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAssetOutcomeHash(bytes32,bytes32)"(
    channelId: BytesLike,
    assetOutcomeHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transfer(
    fromChannelId: BytesLike,
    allocationBytes: BytesLike,
    destination: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(bytes32,bytes,bytes32)"(
    fromChannelId: BytesLike,
    allocationBytes: BytesLike,
    destination: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferAll(
    channelId: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferAll(bytes32,bytes)"(
    channelId: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferAllAdjudicatorOnly(
    channelId: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferAllAdjudicatorOnly(bytes32,bytes)"(
    channelId: BytesLike,
    allocationBytes: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    AdjudicatorAddress(overrides?: CallOverrides): Promise<string>;

    "AdjudicatorAddress()"(overrides?: CallOverrides): Promise<string>;

    Token(overrides?: CallOverrides): Promise<string>;

    "Token()"(overrides?: CallOverrides): Promise<string>;

    assetOutcomeHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "assetOutcomeHashes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    claim(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(bytes32,bytes,bytes,bytes32)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAll(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "claimAll(bytes32,bytes,bytes)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(bytes32,uint256,uint256)"(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    holdings(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "holdings(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetOutcomeHash(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "setAssetOutcomeHash(bytes32,bytes32)"(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transfer(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "transfer(bytes32,bytes,bytes32)"(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferAll(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferAll(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferAllAdjudicatorOnly(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferAllAdjudicatorOnly(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AssetTransferred(
      channelId: BytesLike | null,
      destination: BytesLike | null,
      amount: null
    ): EventFilter;

    Deposited(
      destination: BytesLike | null,
      amountDeposited: null,
      destinationHoldings: null
    ): EventFilter;
  };

  estimateGas: {
    AdjudicatorAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "AdjudicatorAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    Token(overrides?: CallOverrides): Promise<BigNumber>;

    "Token()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetOutcomeHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "assetOutcomeHashes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(bytes32,bytes,bytes,bytes32)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimAll(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimAll(bytes32,bytes,bytes)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deposit(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deposit(bytes32,uint256,uint256)"(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    holdings(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "holdings(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetOutcomeHash(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAssetOutcomeHash(bytes32,bytes32)"(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transfer(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(bytes32,bytes,bytes32)"(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferAll(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferAll(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferAllAdjudicatorOnly(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferAllAdjudicatorOnly(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AdjudicatorAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "AdjudicatorAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    Token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "Token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetOutcomeHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assetOutcomeHashes(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(bytes32,bytes,bytes,bytes32)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimAll(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimAll(bytes32,bytes,bytes)"(
      guarantorChannelId: BytesLike,
      guaranteeBytes: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deposit(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(bytes32,uint256,uint256)"(
      destination: BytesLike,
      expectedHeld: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    holdings(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "holdings(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAssetOutcomeHash(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAssetOutcomeHash(bytes32,bytes32)"(
      channelId: BytesLike,
      assetOutcomeHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transfer(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(bytes32,bytes,bytes32)"(
      fromChannelId: BytesLike,
      allocationBytes: BytesLike,
      destination: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferAll(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferAll(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferAllAdjudicatorOnly(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferAllAdjudicatorOnly(bytes32,bytes)"(
      channelId: BytesLike,
      allocationBytes: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
