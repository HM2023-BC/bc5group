// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract HealthGuard {

    enum Gender{ Male, Female, NonBinary}

    struct HealthRecord {
        string patientName;
        uint256 dob; // Date of Birth as UNIX timestamp
        Gender gender; // 0 for male, 1 for female, 
        string medicalCondition;
        string treatment;
        string doctor;
        uint256 treatmentDate; // Treatment date as UNIX timestamp
        string labResults;
        string medicationDosage;
    }

    mapping(address => HealthRecord[]) private records;
    mapping(address => mapping(address => bool)) private accessPermissions;

    /*
    In diesem Smart Contract gibt es eine Struktur HealthRecord, 
    die verschiedene Teile eines Gesundheitsberichts repräsentiert. 
    Der Smart Contract verwaltet eine Sammlung von HealthRecords für jeden Benutzer, 
    indem er eine mapping von der Ethereum-Adresse des Benutzers zu einem Array von HealthRecords verwendet.
    */
    function addHealthRecord(
        string memory _patientName,
        uint256 _dob,
        Gender _gender,
        string memory _medicalCondition,
        string memory _treatment,
        string memory _doctor,
        uint256 _treatmentDate,
        string memory _labResults,
        string memory _medicationDosage
    ) public {
        HealthRecord memory newRecord = HealthRecord({
            patientName: _patientName, 
            dob: _dob, 
            gender: _gender, 
            medicalCondition: _medicalCondition, 
            treatment: _treatment,
            doctor: _doctor,
            treatmentDate: _treatmentDate,
            labResults: _labResults,
            medicationDosage: _medicationDosage
        });

        records[msg.sender].push(newRecord);
    }

    /*
        Zusätzlich verwaltet der Smart Contract eine mapping von Ethereum-Adressen zu weiteren mappings, 
        die festhalten, welche Benutzer Zugriff auf die Gesundheitsdaten anderer Benutzer haben. 
        Die Funktionen grantAccess und revokeAccess ermöglichen es Benutzern, anderen Benutzern den Zugriff auf ihre Daten zu gewähren oder zu entziehen.
    */
    function grantAccess(address _to) public {
        accessPermissions[msg.sender][_to] = true;
    }

    function revokeAccess(address _from) public {
        accessPermissions[msg.sender][_from] = false;
    }

    /*
    Die Funktion viewHealthRecord ermöglicht es autorisierten Benutzern, die Gesundheitsdaten eines anderen Benutzers zu betrachten. 
    Sie verwendet die require-Funktion, um sicherzustellen, dass der anfragende Benutzer die entsprechenden Berechtigungen hat.
    */
    function viewHealthRecord(address _of, uint _index) public view returns (string memory, string memory, string memory) {
        require(accessPermissions[_of][msg.sender] == true, "You do not have access to view this record");
        HealthRecord memory recordToView = records[_of][_index];
        return (recordToView.medicalCondition, recordToView.treatment, recordToView.doctor);
    }
}
