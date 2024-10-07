/**
 * Creates an array of student objects with the given id, first name, and location.
 *
 * @returns {Array} An array containing student objects with id, firstName, and location.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
