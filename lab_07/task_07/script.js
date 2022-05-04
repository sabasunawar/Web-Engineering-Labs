class Member {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  printSalary = () => {
    console.log(`Salary of ${this.name} is = PKR ${this.salary}`);
  };
}
class Employee extends Member {
  constructor(name, age, salary, department) {
    super(name, age, salary);
    this.department = department;
  }
}

const emp1 = new Employee("Saba", 10, 100, "Web Developer");
emp1.printSalary();
const emp2 = new Employee("Hareem", 20, 200, "Mobile Developer");
emp2.printSalary();
const emp3 = new Employee("Ayesha", 30, 300, "AI Expert");
emp3.printSalary();
