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

interface ICurationInterface extends ethers.utils.Interface {
  functions: {
    "burn(bytes32,uint256,uint256)": FunctionFragment;
    "collect(bytes32,uint256)": FunctionFragment;
    "curationTaxPercentage()": FunctionFragment;
    "getCurationPoolSignal(bytes32)": FunctionFragment;
    "getCurationPoolTokens(bytes32)": FunctionFragment;
    "getCuratorSignal(address,bytes32)": FunctionFragment;
    "isCurated(bytes32)": FunctionFragment;
    "mint(bytes32,uint256,uint256)": FunctionFragment;
    "setCurationTaxPercentage(uint32)": FunctionFragment;
    "setDefaultReserveRatio(uint32)": FunctionFragment;
    "setMinimumCurationDeposit(uint256)": FunctionFragment;
    "signalToTokens(bytes32,uint256)": FunctionFragment;
    "tokensToSignal(bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "curationTaxPercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurationPoolSignal",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurationPoolTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCuratorSignal",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCurated",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurationTaxPercentage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultReserveRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumCurationDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalToTokens",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToSignal",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "curationTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurationPoolSignal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurationPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCuratorSignal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isCurated", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurationTaxPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultReserveRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumCurationDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalToTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToSignal",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICuration extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICurationInterface;

  functions: {
    burn(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    collect(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "collect(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    curationTaxPercentage(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "curationTaxPercentage()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    getCurationPoolSignal(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getCurationPoolSignal(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getCurationPoolTokens(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getCurationPoolTokens(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getCuratorSignal(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getCuratorSignal(address,bytes32)"(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isCurated(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isCurated(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    mint(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCurationTaxPercentage(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCurationTaxPercentage(uint32)"(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setDefaultReserveRatio(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDefaultReserveRatio(uint32)"(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMinimumCurationDeposit(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMinimumCurationDeposit(uint256)"(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    signalToTokens(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "signalToTokens(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    tokensToSignal(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "tokensToSignal(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  burn(
    _subgraphDeploymentID: BytesLike,
    _signalIn: BigNumberish,
    _tokensOutMin: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(bytes32,uint256,uint256)"(
    _subgraphDeploymentID: BytesLike,
    _signalIn: BigNumberish,
    _tokensOutMin: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  collect(
    _subgraphDeploymentID: BytesLike,
    _tokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "collect(bytes32,uint256)"(
    _subgraphDeploymentID: BytesLike,
    _tokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  curationTaxPercentage(overrides?: CallOverrides): Promise<number>;

  "curationTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

  getCurationPoolSignal(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCurationPoolSignal(bytes32)"(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurationPoolTokens(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCurationPoolTokens(bytes32)"(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCuratorSignal(
    _curator: string,
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCuratorSignal(address,bytes32)"(
    _curator: string,
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isCurated(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isCurated(bytes32)"(
    _subgraphDeploymentID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mint(
    _subgraphDeploymentID: BytesLike,
    _tokensIn: BigNumberish,
    _signalOutMin: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(bytes32,uint256,uint256)"(
    _subgraphDeploymentID: BytesLike,
    _tokensIn: BigNumberish,
    _signalOutMin: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurationTaxPercentage(
    _percentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCurationTaxPercentage(uint32)"(
    _percentage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setDefaultReserveRatio(
    _defaultReserveRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDefaultReserveRatio(uint32)"(
    _defaultReserveRatio: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMinimumCurationDeposit(
    _minimumCurationDeposit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMinimumCurationDeposit(uint256)"(
    _minimumCurationDeposit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  signalToTokens(
    _subgraphDeploymentID: BytesLike,
    _signalIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "signalToTokens(bytes32,uint256)"(
    _subgraphDeploymentID: BytesLike,
    _signalIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensToSignal(
    _subgraphDeploymentID: BytesLike,
    _tokensIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "tokensToSignal(bytes32,uint256)"(
    _subgraphDeploymentID: BytesLike,
    _tokensIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  callStatic: {
    burn(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "burn(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collect(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "collect(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    curationTaxPercentage(overrides?: CallOverrides): Promise<number>;

    "curationTaxPercentage()"(overrides?: CallOverrides): Promise<number>;

    getCurationPoolSignal(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurationPoolSignal(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurationPoolTokens(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurationPoolTokens(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCuratorSignal(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCuratorSignal(address,bytes32)"(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCurated(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isCurated(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mint(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "mint(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    setCurationTaxPercentage(
      _percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCurationTaxPercentage(uint32)"(
      _percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDefaultReserveRatio(
      _defaultReserveRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDefaultReserveRatio(uint32)"(
      _defaultReserveRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumCurationDeposit(
      _minimumCurationDeposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMinimumCurationDeposit(uint256)"(
      _minimumCurationDeposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalToTokens(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "signalToTokens(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensToSignal(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "tokensToSignal(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    burn(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    collect(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "collect(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    curationTaxPercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "curationTaxPercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurationPoolSignal(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurationPoolSignal(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurationPoolTokens(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurationPoolTokens(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCuratorSignal(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCuratorSignal(address,bytes32)"(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCurated(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isCurated(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCurationTaxPercentage(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCurationTaxPercentage(uint32)"(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setDefaultReserveRatio(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDefaultReserveRatio(uint32)"(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMinimumCurationDeposit(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMinimumCurationDeposit(uint256)"(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    signalToTokens(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "signalToTokens(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensToSignal(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokensToSignal(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      _tokensOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    collect(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "collect(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    curationTaxPercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "curationTaxPercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurationPoolSignal(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurationPoolSignal(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurationPoolTokens(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurationPoolTokens(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCuratorSignal(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCuratorSignal(address,bytes32)"(
      _curator: string,
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCurated(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCurated(bytes32)"(
      _subgraphDeploymentID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(bytes32,uint256,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      _signalOutMin: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCurationTaxPercentage(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCurationTaxPercentage(uint32)"(
      _percentage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setDefaultReserveRatio(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDefaultReserveRatio(uint32)"(
      _defaultReserveRatio: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMinimumCurationDeposit(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMinimumCurationDeposit(uint256)"(
      _minimumCurationDeposit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    signalToTokens(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "signalToTokens(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _signalIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensToSignal(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokensToSignal(bytes32,uint256)"(
      _subgraphDeploymentID: BytesLike,
      _tokensIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
