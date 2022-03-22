import firebase from "react-native-firebase";

export function addUser(user,addComplete){
    firebase.firestore()
    .collection('Users')
    .add({
        mail: user.mail,
        name: user.name,
        user_name: user.user_name,
        password: user.password,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(eror));
}