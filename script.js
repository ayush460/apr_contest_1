/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developers = arr.map((employee) => {
        if (employee.profession === "developer") {
          return employee;
        }
      });
      console.log(developers);
    }
    PrintDeveloperbyMap();
  
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let developers = [];
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log(developers);
  }
  PrintDeveloperbyForEach();
  
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  addData();
  
  
  function removeAdmin() {
    //Write your code here, just console.log
let filteredArr = arr.filter((employee) => employee.profession !== "admin");
    console.log(filteredArr);
  }
  removeAdmin();
  
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArray = [
        { id: 4, name: "Emily", age: "22", profession: "developer" },
        { id: 5, name: "James", age: "23", profession: "marketing" },
        { id: 6, name: "Alex", age: "21", profession: "designer" }
      ];
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
    }
    concatenateArray();
  