// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract SBT {

    struct Soul {
        string identity;
        string url;
        // amount donated
        uint256 score;
        uint256 timestamp;
    }

    mapping (address => Soul) private souls;
    mapping (address => mapping (address => Soul)) soulProfiles;
    mapping (address => address[]) private profiles;

    string public name;
    string public ticker;
    address public operator;
    bytes32 private zeroHash = 0x918d5359431a7007dec0d4722530b0726c0e1010a959bd8b871a6a5d6337144a;
    
    event Mint(address _soul);
    event Burn(address _soul);
    event Update(address _soul);
    event SetProfile(address _profiler, address _soul);
    event RemoveProfile(address _profiler, address _soul);

    constructor(string memory _name, string memory _ticker) {
      name = _name;
      ticker = _ticker;
      operator = msg.sender;
    }

    function mint(address _soul, Soul memory _soulData) external {
        require(keccak256(bytes(souls[_soul].identity)) == zeroHash, "Soul already exists");
        require(msg.sender == operator, "Only operator can mint new souls");
        souls[_soul] = _soulData;
        emit Mint(_soul);
    }

    function burn(address _soul) external {
        require(msg.sender == _soul || msg.sender == operator, "Only users and issuers have rights to delete their data");
        delete souls[_soul];
        for (uint i=0; i<profiles[_soul].length; i++) {
            address profiler = profiles[_soul][i];
            delete soulProfiles[profiler][_soul];
        }
        emit Burn(_soul);
    }

    function update(address _soul, Soul memory _soulData) external {
        require(msg.sender == operator, "Only operator can update soul data");
        require(keccak256(bytes(souls[_soul].identity)) != zeroHash, "Soul does not exist");
        souls[_soul] = _soulData;
        emit Update(_soul);
    }

    function hasSoul(address _soul) external view returns (bool) {
        if (keccak256(bytes(souls[_soul].identity)) == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    function getSoul(address _soul) external view returns (Soul memory) {
        return souls[_soul];
    }

    /**
     * Profiles are used by 3rd parties and individual users to store data.
     * Data is stored in a nested mapping relative to msg.sender
     * By default they can only store data on addresses that have been minted
     */
    function setProfile(address _soul, Soul memory _soulData) external {
        require(keccak256(bytes(souls[_soul].identity)) != zeroHash, "Cannot create a profile for a soul that has not been minted");
        soulProfiles[msg.sender][_soul] = _soulData;
        profiles[_soul].push(msg.sender);
        emit SetProfile(msg.sender, _soul);
    }

    function getProfile(address _profiler, address _soul) external view returns (Soul memory) {
        return soulProfiles[_profiler][_soul];
    }

    function listProfiles(address _soul) external view returns (address[] memory) {
        return profiles[_soul];
    }

    function hasProfile(address _profiler, address _soul) external view returns (bool) {
        if (keccak256(bytes(soulProfiles[_profiler][_soul].identity)) == zeroHash) {
            return false;
        } else {
            return true;
        }
    }

    function removeProfile(address _profiler, address _soul) external {
        require(msg.sender == _soul, "Only users have rights to delete their profile data");
        delete soulProfiles[_profiler][msg.sender];
        emit RemoveProfile(_profiler, _soul);
    }
}