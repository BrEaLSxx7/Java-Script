/* global Console, registry1, registry2, registry3, registry4 */

//Punto 27
function men() {
  var menu = Number(prompt("Menu\n\
1. Personal information \n\
2. Family reference \n\
3. Work reference \n\
4. Professional profile description \n\
5. Print Resume \n\
0. Exit the program"));
  return menu;
}

function PersonalInformation() {
  var registry1 = {
    name: "",
    address: "",
    phone: "",
    gmail: ""
  };
  registry1.name = prompt("Enter your name:");
  registry1.address = prompt("Enter your address:");
  registry1.phone = prompt("Enter your phone: ");
  registry1.gmail = prompt("Enter your gmail:");
  return registry1;
}

function FamilyReference() {
  var registry2 = {
    name: "",
    phone: ""
  };
  registry2.name = prompt("Enter your name:");
  registry2.phone = prompt("Enter your phone:");
  return registry2;
}
function WorkReference() {
  var registry3 = {
    name: "",
    phone: "",
    address: ""
  };
  registry3.name = prompt("Enter your name:");
  registry3.phone = prompt("Enter your phone:");
  registry3.address = prompt("Enter your address:");
  return registry3;
}
function ProfessionalProfile() {
  var registry4 = {
    profile: ""
  };
  registry4.profile = prompt("Enter your profile");
  return registry4;
}
function print(registry1, registry2, registry3, registry4) {
  console.log("PERONAL INFORMATION");
  console.log("Name: " + registry1.name);
  console.log("Phone: " + registry1.phone);
  console.log("Address: " + registry1.address);
  console.log("Gmail: " + registry1.gamil);
  console.log("FAMILY REFERENCE");
  console.log("Name: " + registry2.name);
  console.log("Phone: " + registry2.phone);
  console.log("WORK REFERENCE");
  console.log("Name: " + registry3.name);
  console.log("Phone: " + registry3.phone);
  console.log("Address: " + registry3.address);
  console.log("PROFESSIONAL PROFILE DESCRIPTION");
  console.log("Profile: " + registry4.profile);
}

while (menu !== 0) {
  var menu = men();
  switch (menu) {
    case 1:
      var reg1 = PersonalInformation();
      break;
    case 2:
      reg2 = FamilyReference();
      break;
    case 3:
      reg3 = WorkReference();
      break;
    case 4:
      reg4 = ProfessionalProfile();
      break;
    case 5:
      print(reg1, reg2, reg3, reg4);
      break;
    case 0:
      console.log("Bye");
      break;
    default:
      alert("enter other option");
      break;
  }
}