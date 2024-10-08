/**
 * Retrieves an array of student objects that are located in a specific city.
 *
 * @param {Array} students - An array of student objects, each containing:
 *    - {number} id - The student's unique identifier.
 *    - {string} firstName - The student's first name.
 *    - {string} location - The city where the student is located.
 * @param {string} city - The name of the city to filter students by.
 *
 * @returns {Array} An array of students who are located in the specified city.
 */

export default function getStudentIdsSum(studentList) {
  if (studentList instanceof Array) {
    return studentList.reduce(
      (accumulator, student) => accumulator.id || accumulator + student.id,
      0,
    );
  }
  return 0;
}
