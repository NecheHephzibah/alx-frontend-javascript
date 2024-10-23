import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resp) => {
    const arr = [];
    for (const item of resp) {
      arr.push({ status: item.status, resp: item.resp || item.reason });
    }
    return arr;
  });
}
