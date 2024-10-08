/**
 * Retrieves ids from a list of students.
 * @param {{ id: Number, firstName: String, location: String
 *
 * @returns the list of students.
 */
export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    return studentList.map((student) => student.id);
  }
  return [];
}
