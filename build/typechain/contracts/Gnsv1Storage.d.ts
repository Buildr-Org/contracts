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

interface Gnsv1StorageInterface extends ethers.utils.Interface {
  functions: {
    "addressCache(bytes32)": FunctionFragment;
    "bondingCurve()": FunctionFragment;
    "controller()": FunctionFragment;
    "erc1056Registry()": FunctionFragment;
    "graphAccountSubgraphNumbers(address)": FunctionFragment;
    "nameSignals(address,uint256)": FunctionFragment;
    "ownerTaxPercentage()": FunctionFragment;
    "setController(address)": FunctionFragment;
    "subgraphs(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressCache",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bondingCurve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "erc1056Registry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "graphAccountSubgraphNumbers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nameSignals",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerTaxPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "subgraphs",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bondingCurve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "erc1056Registry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "graphAccountSubgraphNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nameSignals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "subgraphs", data: BytesLike): Result;

  events: {
    "ParameterUpdated(string)": EventFragment;
    "SetController(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
}

export class Gnsv1Storage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Gnsv1StorageInterface;

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

    bondingCurve(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "bondingCurve()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
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

    erc1056Registry(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "erc1056Registry()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    graphAccountSubgraphNumbers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "graphAccountSubgraphNumbers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    nameSignals(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      vSignal: BigNumber;
      nSignal: BigNumber;
      subgraphDeploymentID: string;
      reserveRatio: number;
      disabled: boolean;
      withdrawableGRT: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: boolean;
      5: BigNumber;
    }>;

    "nameSignals(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      vSignal: BigNumber;
      nSignal: BigNumber;
      subgraphDeploymentID: string;
      reserveRatio: number;
      disabled: boolean;
      withdrawableGRT: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: boolean;
      5: BigNumber;
    }>;

    ownerTaxPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "ownerTaxPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    subgraphs(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "subgraphs(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addressCache(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  bondingCurve(overrides?: CallOverrides): Promise<string>;

  "bondingCurve()"(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  erc1056Registry(overrides?: CallOverrides): Promise<string>;

  "erc1056Registry()"(overrides?: CallOverrides): Promise<string>;

  graphAccountSubgraphNumbers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "graphAccountSubgraphNumbers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nameSignals(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    vSignal: BigNumber;
    nSignal: BigNumber;
    subgraphDeploymentID: string;
    reserveRatio: number;
    disabled: boolean;
    withdrawableGRT: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: string;
    3: number;
    4: boolean;
    5: BigNumber;
  }>;

  "nameSignals(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    vSignal: BigNumber;
    nSignal: BigNumber;
    subgraphDeploymentID: string;
    reserveRatio: number;
    disabled: boolean;
    withdrawableGRT: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: string;
    3: number;
    4: boolean;
    5: BigNumber;
  }>;

  ownerTaxPercentage(overrides?: CallOverrides): Promise<number>;

  "ownerTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

  setController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  subgraphs(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "subgraphs(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    bondingCurve(overrides?: CallOverrides): Promise<string>;

    "bondingCurve()"(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    erc1056Registry(overrides?: CallOverrides): Promise<string>;

    "erc1056Registry()"(overrides?: CallOverrides): Promise<string>;

    graphAccountSubgraphNumbers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "graphAccountSubgraphNumbers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nameSignals(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      vSignal: BigNumber;
      nSignal: BigNumber;
      subgraphDeploymentID: string;
      reserveRatio: number;
      disabled: boolean;
      withdrawableGRT: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: boolean;
      5: BigNumber;
    }>;

    "nameSignals(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      vSignal: BigNumber;
      nSignal: BigNumber;
      subgraphDeploymentID: string;
      reserveRatio: number;
      disabled: boolean;
      withdrawableGRT: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: boolean;
      5: BigNumber;
    }>;

    ownerTaxPercentage(overrides?: CallOverrides): Promise<number>;

    "ownerTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    subgraphs(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "subgraphs(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
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

    bondingCurve(overrides?: CallOverrides): Promise<BigNumber>;

    "bondingCurve()"(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    erc1056Registry(overrides?: CallOverrides): Promise<BigNumber>;

    "erc1056Registry()"(overrides?: CallOverrides): Promise<BigNumber>;

    graphAccountSubgraphNumbers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "graphAccountSubgraphNumbers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nameSignals(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "nameSignals(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerTaxPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "ownerTaxPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    subgraphs(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "subgraphs(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
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

    bondingCurve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bondingCurve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc1056Registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc1056Registry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    graphAccountSubgraphNumbers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "graphAccountSubgraphNumbers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nameSignals(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nameSignals(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerTaxPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ownerTaxPercentage()"(
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

    subgraphs(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "subgraphs(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
