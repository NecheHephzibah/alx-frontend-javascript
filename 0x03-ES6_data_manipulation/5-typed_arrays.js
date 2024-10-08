/**
 * Creates a new ArrayBuffer of a specified length and inserts an Int8 value at a given position.
 * 
 * @param {number} length - The length of the ArrayBuffer in bytes.
 * @param {number} position - The position within the buffer where the Int8 value will be set.
 * @param {number} value - The Int8 value to set at the specified position.
 * 
 * @returns {DataView} A DataView representing the ArrayBuffer with the updated Int8 value.
 * 
 * @throws {Error} If the position is outside the bounds of the ArrayBuffer, throws "Position outside range".
 */

export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const view = new DataView(buf);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
