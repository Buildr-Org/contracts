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

interface StakingV1StorageInterface extends ethers.utils.Interface {
  functions: {
    "addressCache(bytes32)": FunctionFragment;
    "allocations(address)": FunctionFragment;
    "alphaDenominator()": FunctionFragment;
    "alphaNumerator()": FunctionFragment;
    "assetHolders(address)": FunctionFragment;
    "channelDisputeEpochs()": FunctionFragment;
    "controller()": FunctionFragment;
    "curationPercentage()": FunctionFragment;
    "delegationParametersCooldown()": FunctionFragment;
    "delegationPools(address)": FunctionFragment;
    "delegationRatio()": FunctionFragment;
    "delegationTaxPercentage()": FunctionFragment;
    "delegationUnbondingPeriod()": FunctionFragment;
    "maxAllocationEpochs()": FunctionFragment;
    "minimumIndexerStake()": FunctionFragment;
    "operatorAuth(address,address)": FunctionFragment;
    "protocolPercentage()": FunctionFragment;
    "rebates(uint256)": FunctionFragment;
    "setController(address)": FunctionFragment;
    "slashers(address)": FunctionFragment;
    "stakes(address)": FunctionFragment;
    "subgraphAllocations(bytes32)": FunctionFragment;
    "thawingPeriod()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressCache",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "allocations", values: [string]): string;
  encodeFunctionData(
    functionFragment: "alphaDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "alphaNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetHolders",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "channelDisputeEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "curationPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegationParametersCooldown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegationPools",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "delegationRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegationTaxPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delegationUnbondingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxAllocationEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumIndexerStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operatorAuth",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebates",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "slashers", values: [string]): string;
  encodeFunctionData(functionFragment: "stakes", values: [string]): string;
  encodeFunctionData(
    functionFragment: "subgraphAllocations",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "thawingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addressCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alphaDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "alphaNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetHolders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "channelDisputeEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "curationPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationParametersCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegationUnbondingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAllocationEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumIndexerStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorAuth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slashers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subgraphAllocations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "thawingPeriod",
    data: BytesLike
  ): Result;

  events: {
    "ParameterUpdated(string)": EventFragment;
    "SetController(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
}

export class StakingV1Storage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StakingV1StorageInterface;

  functions: {
    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    allocations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      indexer: string;
      subgraphDeploymentID: string;
      tokens: BigNumber;
      createdAtEpoch: BigNumber;
      closedAtEpoch: BigNumber;
      collectedFees: BigNumber;
      effectiveAllocation: BigNumber;
      accRewardsPerAllocatedToken: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
    }>;

    "allocations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      indexer: string;
      subgraphDeploymentID: string;
      tokens: BigNumber;
      createdAtEpoch: BigNumber;
      closedAtEpoch: BigNumber;
      collectedFees: BigNumber;
      effectiveAllocation: BigNumber;
      accRewardsPerAllocatedToken: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
    }>;

    alphaDenominator(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "alphaDenominator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    alphaNumerator(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "alphaNumerator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    assetHolders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "assetHolders(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    channelDisputeEpochs(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "channelDisputeEpochs()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    controller(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "controller()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    curationPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "curationPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    delegationParametersCooldown(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "delegationParametersCooldown()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    delegationPools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      cooldownBlocks: number;
      indexingRewardCut: number;
      queryFeeCut: number;
      updatedAtBlock: BigNumber;
      tokens: BigNumber;
      shares: BigNumber;
      0: number;
      1: number;
      2: number;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    "delegationPools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      cooldownBlocks: number;
      indexingRewardCut: number;
      queryFeeCut: number;
      updatedAtBlock: BigNumber;
      tokens: BigNumber;
      shares: BigNumber;
      0: number;
      1: number;
      2: number;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    delegationRatio(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "delegationRatio()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    delegationTaxPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "delegationTaxPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    delegationUnbondingPeriod(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "delegationUnbondingPeriod()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    maxAllocationEpochs(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "maxAllocationEpochs()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    minimumIndexerStake(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "minimumIndexerStake()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    operatorAuth(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "operatorAuth(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    protocolPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "protocolPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    rebates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fees: BigNumber;
      effectiveAllocatedStake: BigNumber;
      claimedRewards: BigNumber;
      unclaimedAllocationsCount: number;
      alphaNumerator: number;
      alphaDenominator: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: number;
      4: number;
      5: number;
    }>;

    "rebates(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fees: BigNumber;
      effectiveAllocatedStake: BigNumber;
      claimedRewards: BigNumber;
      unclaimedAllocationsCount: number;
      alphaNumerator: number;
      alphaDenominator: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: number;
      4: number;
      5: number;
    }>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    slashers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "slashers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    stakes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensStaked: BigNumber;
      tokensAllocated: BigNumber;
      tokensLocked: BigNumber;
      tokensLockedUntil: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    "stakes(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensStaked: BigNumber;
      tokensAllocated: BigNumber;
      tokensLocked: BigNumber;
      tokensLockedUntil: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    subgraphAllocations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "subgraphAllocations(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    thawingPeriod(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "thawingPeriod()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;
  };

  addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addressCache(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  allocations(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    indexer: string;
    subgraphDeploymentID: string;
    tokens: BigNumber;
    createdAtEpoch: BigNumber;
    closedAtEpoch: BigNumber;
    collectedFees: BigNumber;
    effectiveAllocation: BigNumber;
    accRewardsPerAllocatedToken: BigNumber;
    0: string;
    1: string;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
  }>;

  "allocations(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    indexer: string;
    subgraphDeploymentID: string;
    tokens: BigNumber;
    createdAtEpoch: BigNumber;
    closedAtEpoch: BigNumber;
    collectedFees: BigNumber;
    effectiveAllocation: BigNumber;
    accRewardsPerAllocatedToken: BigNumber;
    0: string;
    1: string;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: BigNumber;
    7: BigNumber;
  }>;

  alphaDenominator(overrides?: CallOverrides): Promise<number>;

  "alphaDenominator()"(overrides?: CallOverrides): Promise<number>;

  alphaNumerator(overrides?: CallOverrides): Promise<number>;

  "alphaNumerator()"(overrides?: CallOverrides): Promise<number>;

  assetHolders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "assetHolders(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  channelDisputeEpochs(overrides?: CallOverrides): Promise<number>;

  "channelDisputeEpochs()"(overrides?: CallOverrides): Promise<number>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  curationPercentage(overrides?: CallOverrides): Promise<number>;

  "curationPercentage()"(overrides?: CallOverrides): Promise<number>;

  delegationParametersCooldown(overrides?: CallOverrides): Promise<number>;

  "delegationParametersCooldown()"(overrides?: CallOverrides): Promise<number>;

  delegationPools(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    cooldownBlocks: number;
    indexingRewardCut: number;
    queryFeeCut: number;
    updatedAtBlock: BigNumber;
    tokens: BigNumber;
    shares: BigNumber;
    0: number;
    1: number;
    2: number;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
  }>;

  "delegationPools(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    cooldownBlocks: number;
    indexingRewardCut: number;
    queryFeeCut: number;
    updatedAtBlock: BigNumber;
    tokens: BigNumber;
    shares: BigNumber;
    0: number;
    1: number;
    2: number;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
  }>;

  delegationRatio(overrides?: CallOverrides): Promise<number>;

  "delegationRatio()"(overrides?: CallOverrides): Promise<number>;

  delegationTaxPercentage(overrides?: CallOverrides): Promise<number>;

  "delegationTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

  delegationUnbondingPeriod(overrides?: CallOverrides): Promise<number>;

  "delegationUnbondingPeriod()"(overrides?: CallOverrides): Promise<number>;

  maxAllocationEpochs(overrides?: CallOverrides): Promise<number>;

  "maxAllocationEpochs()"(overrides?: CallOverrides): Promise<number>;

  minimumIndexerStake(overrides?: CallOverrides): Promise<BigNumber>;

  "minimumIndexerStake()"(overrides?: CallOverrides): Promise<BigNumber>;

  operatorAuth(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "operatorAuth(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  protocolPercentage(overrides?: CallOverrides): Promise<number>;

  "protocolPercentage()"(overrides?: CallOverrides): Promise<number>;

  rebates(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    fees: BigNumber;
    effectiveAllocatedStake: BigNumber;
    claimedRewards: BigNumber;
    unclaimedAllocationsCount: number;
    alphaNumerator: number;
    alphaDenominator: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: number;
    4: number;
    5: number;
  }>;

  "rebates(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    fees: BigNumber;
    effectiveAllocatedStake: BigNumber;
    claimedRewards: BigNumber;
    unclaimedAllocationsCount: number;
    alphaNumerator: number;
    alphaDenominator: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: number;
    4: number;
    5: number;
  }>;

  setController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  slashers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "slashers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  stakes(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    tokensStaked: BigNumber;
    tokensAllocated: BigNumber;
    tokensLocked: BigNumber;
    tokensLockedUntil: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  "stakes(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    tokensStaked: BigNumber;
    tokensAllocated: BigNumber;
    tokensLocked: BigNumber;
    tokensLockedUntil: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
  }>;

  subgraphAllocations(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "subgraphAllocations(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  thawingPeriod(overrides?: CallOverrides): Promise<number>;

  "thawingPeriod()"(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    allocations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      indexer: string;
      subgraphDeploymentID: string;
      tokens: BigNumber;
      createdAtEpoch: BigNumber;
      closedAtEpoch: BigNumber;
      collectedFees: BigNumber;
      effectiveAllocation: BigNumber;
      accRewardsPerAllocatedToken: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
    }>;

    "allocations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      indexer: string;
      subgraphDeploymentID: string;
      tokens: BigNumber;
      createdAtEpoch: BigNumber;
      closedAtEpoch: BigNumber;
      collectedFees: BigNumber;
      effectiveAllocation: BigNumber;
      accRewardsPerAllocatedToken: BigNumber;
      0: string;
      1: string;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: BigNumber;
      7: BigNumber;
    }>;

    alphaDenominator(overrides?: CallOverrides): Promise<number>;

    "alphaDenominator()"(overrides?: CallOverrides): Promise<number>;

    alphaNumerator(overrides?: CallOverrides): Promise<number>;

    "alphaNumerator()"(overrides?: CallOverrides): Promise<number>;

    assetHolders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "assetHolders(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    channelDisputeEpochs(overrides?: CallOverrides): Promise<number>;

    "channelDisputeEpochs()"(overrides?: CallOverrides): Promise<number>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    curationPercentage(overrides?: CallOverrides): Promise<number>;

    "curationPercentage()"(overrides?: CallOverrides): Promise<number>;

    delegationParametersCooldown(overrides?: CallOverrides): Promise<number>;

    "delegationParametersCooldown()"(
      overrides?: CallOverrides
    ): Promise<number>;

    delegationPools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      cooldownBlocks: number;
      indexingRewardCut: number;
      queryFeeCut: number;
      updatedAtBlock: BigNumber;
      tokens: BigNumber;
      shares: BigNumber;
      0: number;
      1: number;
      2: number;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    "delegationPools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      cooldownBlocks: number;
      indexingRewardCut: number;
      queryFeeCut: number;
      updatedAtBlock: BigNumber;
      tokens: BigNumber;
      shares: BigNumber;
      0: number;
      1: number;
      2: number;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    delegationRatio(overrides?: CallOverrides): Promise<number>;

    "delegationRatio()"(overrides?: CallOverrides): Promise<number>;

    delegationTaxPercentage(overrides?: CallOverrides): Promise<number>;

    "delegationTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

    delegationUnbondingPeriod(overrides?: CallOverrides): Promise<number>;

    "delegationUnbondingPeriod()"(overrides?: CallOverrides): Promise<number>;

    maxAllocationEpochs(overrides?: CallOverrides): Promise<number>;

    "maxAllocationEpochs()"(overrides?: CallOverrides): Promise<number>;

    minimumIndexerStake(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumIndexerStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    operatorAuth(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "operatorAuth(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    protocolPercentage(overrides?: CallOverrides): Promise<number>;

    "protocolPercentage()"(overrides?: CallOverrides): Promise<number>;

    rebates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fees: BigNumber;
      effectiveAllocatedStake: BigNumber;
      claimedRewards: BigNumber;
      unclaimedAllocationsCount: number;
      alphaNumerator: number;
      alphaDenominator: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: number;
      4: number;
      5: number;
    }>;

    "rebates(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      fees: BigNumber;
      effectiveAllocatedStake: BigNumber;
      claimedRewards: BigNumber;
      unclaimedAllocationsCount: number;
      alphaNumerator: number;
      alphaDenominator: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: number;
      4: number;
      5: number;
    }>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    slashers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "slashers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stakes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensStaked: BigNumber;
      tokensAllocated: BigNumber;
      tokensLocked: BigNumber;
      tokensLockedUntil: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    "stakes(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensStaked: BigNumber;
      tokensAllocated: BigNumber;
      tokensLocked: BigNumber;
      tokensLockedUntil: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }>;

    subgraphAllocations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "subgraphAllocations(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    thawingPeriod(overrides?: CallOverrides): Promise<number>;

    "thawingPeriod()"(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    ParameterUpdated(param: null): EventFilter;

    SetController(controller: null): EventFilter;
  };

  estimateGas: {
    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allocations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "allocations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    alphaDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "alphaDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    alphaNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "alphaNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetHolders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "assetHolders(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    channelDisputeEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "channelDisputeEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    curationPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "curationPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegationParametersCooldown(overrides?: CallOverrides): Promise<BigNumber>;

    "delegationParametersCooldown()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegationPools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "delegationPools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "delegationRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegationTaxPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "delegationTaxPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    delegationUnbondingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "delegationUnbondingPeriod()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxAllocationEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "maxAllocationEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumIndexerStake(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumIndexerStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    operatorAuth(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "operatorAuth(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "protocolPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    rebates(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "rebates(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    slashers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "slashers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stakes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "stakes(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subgraphAllocations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "subgraphAllocations(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    thawingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    "thawingPeriod()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allocations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allocations(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    alphaDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "alphaDenominator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    alphaNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "alphaNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetHolders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assetHolders(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    channelDisputeEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "channelDisputeEpochs()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curationPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "curationPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationParametersCooldown(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegationParametersCooldown()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationPools(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegationPools(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delegationRatio()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationTaxPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegationTaxPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delegationUnbondingPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "delegationUnbondingPeriod()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAllocationEpochs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxAllocationEpochs()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumIndexerStake(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minimumIndexerStake()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    operatorAuth(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "operatorAuth(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "protocolPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebates(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rebates(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    slashers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "slashers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakes(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subgraphAllocations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "subgraphAllocations(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    thawingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "thawingPeriod()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
