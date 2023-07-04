pragma solidity ^0.5.0;

contract HealthGuard {
    address public constitution;
    string public patientName;
    uint256 public dob;
    string public medicalCondition;
    string public treatment;
    uint256 public treatmentDate;
    string public doctorName;
    string public labResults;
    string public medicationDosage;

    struct HealthRecord {
        string patientName;
        uint256 dob;
        string medicalCondition;
        string treatment;
        uint256 treatmentDate;
        string doctorName;
        string labResults;
        string medicationDosage;
    }

    mapping(address=>bool) public normalClients;

    uint public numberNormalClients;

    HealthRecord[] public healthRecords;


    modifier constitutionOwnerOnly() {
        require(msg.sender == constitution);
        _;
    }

    modifier normalClientOnly() {
        require(normalClients[msg.sender]);
        _;
    }

    constructor(
        address creator,
        string memory _patientName,
        uint256 _dob,
        string memory _medicalCondition,
        string memory _treatment,
        uint256 _treatmentDate,
        string memory _doctorName,
        string memory _labResults,
        string memory _medicationDosage
    ) public {
        constitution = creator;
        patientName = _patientName;
        dob = _dob;
        medicalCondition = _medicalCondition;
        treatment = _treatment;
        treatmentDate = _treatmentDate;
        doctorName = _doctorName;
        labResults = _labResults;
        medicationDosage = _medicationDosage;
    }

    function createHealthGuard(
        string memory _patientName,
        uint256 _dob,
        string memory _medicalCondition,
        string memory _treatment,
        uint256 _treatmentDate,
        string memory _doctorName,
        string memory _labResults,
        string memory _medicationDosage
    ) public constitutionOwnerOnly {
        HealthRecord memory newHealthRecord = HealthRecord({
            patientName: _patientName,
            dob: _dob,
            medicalCondition: _medicalCondition,
            treatment: _treatment,
            treatmentDate: _treatmentDate,
            doctorName: _doctorName,
            labResults: _labResults,
            medicationDosage: _medicationDosage
        });
        healthRecords.push(newHealthRecord);
    }

    function getHealthRecordCount() public view returns (uint)
    {
        return healthRecords.length;
    }
}