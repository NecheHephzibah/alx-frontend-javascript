import ClassRoom from './0-classroom.js'

/**
 * This file imports the class {@link ClassRoom} from 0-classroom.js
 * @returns an array of 3 {@link ClassRoom}.
 */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
