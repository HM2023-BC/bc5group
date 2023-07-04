// pragma solidity ^0.5.0;

// import "./Constitution.sol";

// contract ConstitutionCreator {
//   address[] public constitutions;

//   function createConstitution(
//         string memory _medicalFacilityName,
//         string memory _medicalFacilityAddress,
//         string memory _medicalFacilityContact,
//         string memory _medicalProfessionalName,
//         uint256 _medicalProfessionalLicense
//     ) public {
//         address newConstitution = address (new Constitution(
//             msg.sender,
//             _medicalFacilityName,
//             _medicalFacilityAddress,
//             _medicalFacilityContact,
//             _medicalProfessionalName,
//             _medicalProfessionalLicense
//     ));
//     constitutions.push(newConstitution);
//   }  

// function getDeployedConstitutions() public view returns (address[] memory) {
//     return constitutions;
//   }
// }