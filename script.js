const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {

  for (let i = 0; i < data.length; i++) {
    if (data[i].profession == "developer") {
      console.log(data[i]);

    }
  }
}

// 2. Add Data
let flag = 0;
function addData() {

  data.push({
    name: "imran", age: 25, profession: "developer"
  });



}

// 3. Remove Admins
function removeAdmin() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession == "admin") {
      delete data[i];
    }
  }
  // data.splice(1, 1);
  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [{ name: "john1", age: 23, profession: "developer" },
  { name: "janes", age: 24, profession: "admin" },
  ];

  const ans = data.concat(data2);
  console.log(ans);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  let len = data.length;
  for (let i = 0; i < len; i++) {
    sum += data[i].age;
  }
  let res = sum / len;
  console.log(res);
}

// 6. Age Check
function checkAgeAbove25() {
  let c = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      c++;
    }
  }
  if (c > 0) {
    console.log("Yes There is at least one person whose age is above 25");
  }
  else {
    console.log("No, There is no any person whose age is above 25");
  }
}

// 7. Unique Professions
let count = 0;
function uniqueProfessions() {
  let uniqueProfessions = [...new Set(data.map((element) => element.profession)),];
  console.log(uniqueProfessions);
  count = uniqueProfessions.length;
}

// 8. Sort by Age
function sortByAge() {

  data.sort(function (a, b) {

    if (a.age > b.age) {

      return 3; // 3 is a positive number
    }
    if (a.age < b.age) {

      return -10;
    }
    if (a.age === b.age) {
      return 0;
    }
  });
  console.log(data)
}


// 9. Update Profession
function updateJohnsProfession() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == "john") {
      data[i].profession = "manager";
      break;
    }
  }
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let developer = 0;
  let admin = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession == "developer") {
      developer++;
    }
    else if (data[i].profession == "admin") {
      admin++;
    }
  }
  console.log("total developer", developer);
  console.log("total admin", admin);

}
