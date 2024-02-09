import { provider, signInWithPopup } from "../firebaseData.js";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((e) => {
        alert(e);
      });
  };
}
