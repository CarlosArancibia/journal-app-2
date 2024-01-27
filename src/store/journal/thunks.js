import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { addEmptyNote, loadNotes, saveNote, setSaving } from './journalSlice';
import { firebaseDB } from '../../firebase/config';

export const startAddEmptyNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const note = {
      title: '',
      description: '',
      date: new Date().getTime(),
      photosURL: [],
    };

    const docRef = await addDoc(collection(firebaseDB, `${uid}/journal/notes/`), note);
    // await setDoc(docRef, note);
    note.id = docRef.id;

    dispatch(addEmptyNote(note));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { id, ...noteToFirebase } = note;

    const docRef = await doc(firebaseDB, `${uid}/journal/notes/${id}`);
    await setDoc(docRef, noteToFirebase);

    dispatch(saveNote(note));
  };
};

export const startLoadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const { docs } = await getDocs(collection(firebaseDB, `${uid}/journal/notes/`));
    const notes = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    // order notes
    const notesSort = notes.sort((a, b) => b.date - a.date);

    dispatch(loadNotes(notesSort));
  };
};
