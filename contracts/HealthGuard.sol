// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract HealthGuard {

    struct HealthRecord {
        string medicalCondition;
        string treatment;
        string doctor;
    }

    mapping(address => HealthRecord[]) private records;
    mapping(address => mapping(address => bool)) private accessPermissions;

    function addHealthRecord(string memory _medicalCondition, string memory _treatment, string memory _doctor) public {
        HealthRecord memory newRecord = HealthRecord({medicalCondition: _medicalCondition, treatment: _treatment, doctor: _doctor});
        records[msg.sender].push(newRecord);
    }

    function grantAccess(address _to) public {
        accessPermissions[msg.sender][_to] = true;
    }

    function revokeAccess(address _from) public {
        accessPermissions[msg.sender][_from] = false;
    }

    function viewHealthRecord(address _of, uint _index) public view returns (string memory, string memory, string memory) {
        require(accessPermissions[_of][msg.sender] == true, "You do not have access to view this record");
        HealthRecord memory recordToView = records[_of][_index];
        return (recordToView.medicalCondition, recordToView.treatment, recordToView.doctor);
    }
}
