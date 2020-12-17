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

interface ITestRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "register(bytes32,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {};
}

export class ITestRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITestRegistrarInterface;

  functions: {
    register(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(bytes32,address)"(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  register(
    label: BytesLike,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(bytes32,address)"(
    label: BytesLike,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    register(
      label: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(bytes32,address)"(
      label: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    register(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(bytes32,address)"(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    register(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(bytes32,address)"(
      label: BytesLike,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
