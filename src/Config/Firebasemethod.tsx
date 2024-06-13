import app from "./Firebaseconfih";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const db = getDatabase(app);
export const sendData = (nodeName: string, data: any) => {
  data.id = push(ref(db, `${nodeName}`)).key;
  const refrence = ref(db, `${nodeName},${data.id}`);
  set(refrence, data);
};
export const getData = (nodeName: string, id?: any) => {
  const reference = ref(db, `${nodeName},${id?id:""}`);
  onValue(reference, (dt) => {
    console.log(dt.val(),"hey");
  });
};