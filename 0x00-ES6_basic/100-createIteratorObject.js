export default function createIteratorObject(report) {
  return (function* _() {
    for (const eachDepartment of Object.values(report.allEmployees)) {
      for (const employee of eachDepartment) {
        yield employee;
      }
    }
  }());
}
