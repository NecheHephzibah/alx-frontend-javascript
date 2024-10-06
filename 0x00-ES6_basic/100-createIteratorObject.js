export default function createIteratorObject(report) {
  const all_employees = [];
  for (const department in report.all_employees) {
    if (Object.prototype.hasOwnProperty.call(report.all_employees, department)) {
      all_employees.push(...report.all_employees[department]);
    }
  }
  return all_employees[Symbol.iterator]();
}
