// SPDX-License-Identifier: GPL-2.0-or-later

pragma solidity >=0.7.0 <0.9.0;

import { IERC20Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

interface IGraphCurationToken is IERC20Upgradeable {
    function initialize(address _owner) external;

    function burnFrom(address _account, uint256 _amount) external;

    function mint(address _to, uint256 _amount) external;
}
