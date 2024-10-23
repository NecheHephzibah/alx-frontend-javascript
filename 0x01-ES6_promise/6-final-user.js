import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resp) => {
    const arr = [];
    for (const n of resp) {
      arr.push({ status: n.status, resp: n.resp || n.reason });
    }
    return arr;
  });
}
