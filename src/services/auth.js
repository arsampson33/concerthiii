import auth from "@react-native-firebase/auth";
//Test out Later for error handling
// function getErrorMessage(errorCode){
//     const errorMessages ={ 
//         "auth/email-already-in-use": "That email address is already in use!",
//         "auth/invalid-email": "That email address is invalid!"
//     }
//     return errorMessages[errorCode] || "An error occurred";
// }

export const signUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log("User account created & signed in!");
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("That email address is already in use!");
    } else if (error.code === "auth/invalid-email") {
      console.log("That email address is invalid!");
    } else {
      console.error(error);
    }
    // console.log(getErrorMessage(error.code)); //Test out Later for error handling
  }
};
