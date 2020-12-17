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

interface ServiceRegistryInterface extends ethers.utils.Interface {
  functions: {
    "acceptProxy(address)": FunctionFragment;
    "acceptProxyAndCall(address,bytes)": FunctionFragment;
    "addressCache(bytes32)": FunctionFragment;
    "controller()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isRegistered(address)": FunctionFragment;
    "register(string,string)": FunctionFragment;
    "registerFor(address,string,string)": FunctionFragment;
    "services(address)": FunctionFragment;
    "setController(address)": FunctionFragment;
    "unregister()": FunctionFragment;
    "unregisterFor(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptProxy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "acceptProxyAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressCache",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerFor",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "services", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unregister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterFor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptProxyAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "services", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unregister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unregisterFor",
    data: BytesLike
  ): Result;

  events: {
    "ParameterUpdated(string)": EventFragment;
    "ServiceRegistered(address,string,string)": EventFragment;
    "ServiceUnregistered(address)": EventFragment;
    "SetController(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ParameterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ServiceUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
}

export class ServiceRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ServiceRegistryInterface;

  functions: {
    acceptProxy(
      _proxy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

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

    initialize(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isRegistered(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isRegistered(address)"(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    register(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(string,string)"(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    registerFor(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerFor(address,string,string)"(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      url: string;
      geohash: string;
      0: string;
      1: string;
    }>;

    "services(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      url: string;
      geohash: string;
      0: string;
      1: string;
    }>;

    setController(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setController(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unregister(overrides?: Overrides): Promise<ContractTransaction>;

    "unregister()"(overrides?: Overrides): Promise<ContractTransaction>;

    unregisterFor(
      _indexer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unregisterFor(address)"(
      _indexer: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptProxy(
    _proxy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "acceptProxy(address)"(
    _proxy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  acceptProxyAndCall(
    _proxy: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "acceptProxyAndCall(address,bytes)"(
    _proxy: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addressCache(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isRegistered(_indexer: string, overrides?: CallOverrides): Promise<boolean>;

  "isRegistered(address)"(
    _indexer: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  register(
    _url: string,
    _geohash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(string,string)"(
    _url: string,
    _geohash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  registerFor(
    _indexer: string,
    _url: string,
    _geohash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerFor(address,string,string)"(
    _indexer: string,
    _url: string,
    _geohash: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  services(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    url: string;
    geohash: string;
    0: string;
    1: string;
  }>;

  "services(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    url: string;
    geohash: string;
    0: string;
    1: string;
  }>;

  setController(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setController(address)"(
    _controller: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unregister(overrides?: Overrides): Promise<ContractTransaction>;

  "unregister()"(overrides?: Overrides): Promise<ContractTransaction>;

  unregisterFor(
    _indexer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unregisterFor(address)"(
    _indexer: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProxy(_proxy: string, overrides?: CallOverrides): Promise<void>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addressCache(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    initialize(_controller: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isRegistered(_indexer: string, overrides?: CallOverrides): Promise<boolean>;

    "isRegistered(address)"(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    register(
      _url: string,
      _geohash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(string,string)"(
      _url: string,
      _geohash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerFor(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerFor(address,string,string)"(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      url: string;
      geohash: string;
      0: string;
      1: string;
    }>;

    "services(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      url: string;
      geohash: string;
      0: string;
      1: string;
    }>;

    setController(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setController(address)"(
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unregister(overrides?: CallOverrides): Promise<void>;

    "unregister()"(overrides?: CallOverrides): Promise<void>;

    unregisterFor(_indexer: string, overrides?: CallOverrides): Promise<void>;

    "unregisterFor(address)"(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ParameterUpdated(param: null): EventFilter;

    ServiceRegistered(
      indexer: string | null,
      url: null,
      geohash: null
    ): EventFilter;

    ServiceUnregistered(indexer: string | null): EventFilter;

    SetController(controller: null): EventFilter;
  };

  estimateGas: {
    acceptProxy(_proxy: string, overrides?: Overrides): Promise<BigNumber>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(_controller: string, overrides?: Overrides): Promise<BigNumber>;

    "initialize(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isRegistered(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isRegistered(address)"(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    register(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(string,string)"(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    registerFor(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerFor(address,string,string)"(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    services(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "services(address)"(
      arg0: string,
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

    unregister(overrides?: Overrides): Promise<BigNumber>;

    "unregister()"(overrides?: Overrides): Promise<BigNumber>;

    unregisterFor(_indexer: string, overrides?: Overrides): Promise<BigNumber>;

    "unregisterFor(address)"(
      _indexer: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProxy(
      _proxy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "acceptProxy(address)"(
      _proxy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    acceptProxyAndCall(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "acceptProxyAndCall(address,bytes)"(
      _proxy: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    addressCache(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addressCache(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _controller: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isRegistered(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isRegistered(address)"(
      _indexer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(string,string)"(
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    registerFor(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerFor(address,string,string)"(
      _indexer: string,
      _url: string,
      _geohash: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    services(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "services(address)"(
      arg0: string,
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

    unregister(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unregister()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    unregisterFor(
      _indexer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unregisterFor(address)"(
      _indexer: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
