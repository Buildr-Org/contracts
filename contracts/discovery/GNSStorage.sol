// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity ^0.7.6;
pragma abicoder v2;

import { Managed } from "../governance/Managed.sol";

import { IEthereumDIDRegistry } from "./erc1056/IEthereumDIDRegistry.sol";
import { IGNS } from "./IGNS.sol";
import { ISubgraphNFT } from "./ISubgraphNFT.sol";

/**
 * @title GNSV1Storage
 * @notice This contract holds all the storage variables for the GNS contract, version 1
 */
abstract contract GNSV1Storage is Managed {
    // -- State --

    /// Percentage of curation tax that must be paid by the owner, in parts per hundred.
    uint32 public ownerTaxPercentage;

    /// Bonding curve formula.
    address public bondingCurve;

    /// @dev Stores what subgraph deployment a particular legacy subgraph targets.
    /// A subgraph is defined by (graphAccountID, subgraphNumber).
    /// A subgraph can target one subgraph deployment (bytes32 hash).
    /// (graphAccountID, subgraphNumber) => subgraphDeploymentID
    mapping(address => mapping(uint256 => bytes32)) internal legacySubgraphs;

    /// Every time an account creates a subgraph it increases a per-account sequence ID.
    /// account => seqID
    mapping(address => uint256) public nextAccountSeqID;

    /// Stores all the signal deposited on a legacy subgraph.
    /// (graphAccountID, subgraphNumber) => SubgraphData
    mapping(address => mapping(uint256 => IGNS.SubgraphData)) public legacySubgraphData;

    /// @dev [DEPRECATED] ERC-1056 contract reference.
    ///  This contract was used for managing identities.
    IEthereumDIDRegistry private __DEPRECATED_erc1056Registry;
}

/**
 * @title GNSV2Storage
 * @notice This contract holds all the storage variables for the GNS contract, version 2
 */
abstract contract GNSV2Storage is GNSV1Storage {
    /// Stores the account and seqID for a legacy subgraph that has been migrated.
    /// Use it whenever a legacy (v1) subgraph NFT was claimed to maintain compatibility.
    /// Keep a reference from subgraphID => (graphAccount, subgraphNumber)
    mapping(uint256 => IGNS.LegacySubgraphKey) public legacySubgraphKeys;

    /// Store data for all NFT-based (v2) subgraphs.
    /// subgraphID => SubgraphData
    mapping(uint256 => IGNS.SubgraphData) public subgraphs;

    /// Contract that represents subgraph ownership through an NFT
    ISubgraphNFT public subgraphNFT;
}

/**
 * @title GNSV3Storage
 * @notice This contract holds all the storage variables for the base GNS contract, version 3.
 * @dev Note that this is the first version that includes a storage gap - if adding
 * future versions, make sure to move the gap to the new version and
 *  reduce the size of the gap accordingly.
 */
abstract contract GNSV3Storage is GNSV2Storage {
    /// Data for subgraph migration from L1 to L2, some fields will be empty or set differently on each layer
    mapping(uint256 => IGNS.SubgraphL2MigrationData) public subgraphL2MigrationData;
    /// Address of the counterpart GNS contract (L1GNS/L2GNS)
    address public counterpartGNSAddress;
    /// @dev Gap to allow adding variables in future upgrades (since L1GNS and L2GNS have their own storage as well)
    uint256[50] private __gap;
}
