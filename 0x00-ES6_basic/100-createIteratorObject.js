export default function createIteratorObject(report) {
  const employees = [];
  for (const department in report.employees) {
    if (Object.prototype.hasOwnProperty.call(report.employees, department)) {
      employees.push(...report.employees[department]);
    }
  }
  return employees[Symbol.iterator]();
}
