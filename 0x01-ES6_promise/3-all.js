import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((signup) => {
      console.log(`${signup[0].body} ${signup[1].firstName} ${signup[1].lastName}`);
    })

    .catch(() => console.log('Signup system offline'));
}
