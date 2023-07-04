pragma solidity ^0.5.0;

import "./HealthGuard.sol";

contract ConstitutionCreator {
  address[] public healthGuards;

  function createConstitution(
        string memory patientName,
        uint256 dob,
        string memory medicalCondition,
        string memory treatment,
        uint256 treatmentDate,
        string memory doctorName,
        string memory labResults,
        string memory medicationDosage
    ) public {
        address newHealthGuard = address (new HealthGuard(
            msg.sender,
            patientName,
            dob,
            medicalCondition,
            treatment,
            treatmentDate,
            doctorName,
            labResults,
            medicationDosage
    ));
    healthGuards.push(newHealthGuard);
  }  

function getDeployedConstitutions() public view returns (address[] memory) {
    return healthGuards;
  }
}


// pragma solidity ^0.5.0;

// import "./HealthGuard.sol";

// contract Constitution {
//     address public administrator;
//     string public medicalFacilityName;
//     string public medicalFacilityAddress;
//     string public medicalFacilityContact;
//     string public medicalProfessionalName;
//     uint256 public medicalProfessionalLicense;

//     struct ConstitutionStruct {
//         string medicalFacilityName;
//         string medicalFacilityAddress;
//         string medicalFacilityContact;
//         string medicalProfessionalName;
//         uint256 medicalProfessionalLicense;
//         address[] healthGuards;
//     }

//     ConstitutionStruct[] public constitutions;

//     modifier administratorOnly() {
//         require(msg.sender == administrator, "Only the administrator can perform this action");
//         _;
//     }

//     constructor(
//         address creator,
//         string memory _medicalFacilityName,
//         string memory _medicalFacilityAddress,
//         string memory _medicalFacilityContact,
//         string memory _medicalProfessionalName,
//         uint256 _medicalProfessionalLicense
//     ) public {
//         administrator = creator;
//         medicalFacilityName = _medicalFacilityName;
//         medicalFacilityAddress = _medicalFacilityAddress;
//         medicalFacilityContact = _medicalFacilityContact;
//         medicalProfessionalName = _medicalProfessionalName;
//         medicalProfessionalLicense = _medicalProfessionalLicense;
//     }

//     function createConstitution(
//         string memory _medicalFacilityName,
//         string memory _medicalFacilityAddress,
//         string memory _medicalFacilityContact,
//         string memory _medicalProfessionalName,
//         uint256 _medicalProfessionalLicense
//     ) public administratorOnly {
//         ConstitutionStruct memory newConstitution = ConstitutionStruct({
//             medicalFacilityName: _medicalFacilityName,
//             medicalFacilityAddress: _medicalFacilityAddress,
//             medicalFacilityContact: _medicalFacilityContact,
//             medicalProfessionalName: _medicalProfessionalName,
//             medicalProfessionalLicense: _medicalProfessionalLicense,
//             healthGuards: new address[](0)
//         });
//         constitutions.push(newConstitution);
//     }

//     function addHealthGuard(
//         uint256 constitutionIndex,
//         address healthGuardAddress
//     ) public administratorOnly {
//         require(constitutionIndex < constitutions.length, "Invalid constitution index");
//         constitutions[constitutionIndex].healthGuards.push(healthGuardAddress);
//     }

//     function getConstitutionCount() public view returns (uint) {
//         return constitutions.length;
//     }

//     function getHealthGuardCount(uint256 constitutionIndex) public view returns (uint) {
//         require(constitutionIndex < constitutions.length, "Invalid constitution index");
//         return constitutions[constitutionIndex].healthGuards.length;
//     }

//     function getConstitutions() public view returns (address[] memory) {
//         address[] memory addresses = new address[](constitutions.length);
//         for (uint256 i = 0; i < constitutions.length; i++) {
//             addresses[i] = address(this);
//         }
//         return addresses;
//     }
// }
