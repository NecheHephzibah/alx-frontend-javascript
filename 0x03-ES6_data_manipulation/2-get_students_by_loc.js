/**
 * Retrieves array of objects who are located in a specific city..
 * @param {{ id: Number, firstName: String, location: String
 * @returns The list of students.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
