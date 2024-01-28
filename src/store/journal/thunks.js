import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import { setActiveNote, deleteNote, loadNotes, saveNote, setSaving, updateNote } from './journalSlice';
import { firebaseDB } from '../../firebase/config';

export const startAddEmptyNote = () => {
  return async (dispatch) => {
    const note = {
      title: '',
      description: '',
      date: new Date().getTime(),
      photosURL: [],
    };

    dispatch(setActiveNote(note));
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { id, ...noteToFirebase } = note;

    if (id) {
      const docRef = await doc(firebaseDB, `${uid}/journal/notes/${id}`);
      await setDoc(docRef, noteToFirebase);
      dispatch(updateNote(note));
    } else {
      const docRef = await addDoc(collection(firebaseDB, `${uid}/journal/notes/`), note);
      note.id = docRef.id;
      dispatch(saveNote(note));
    }
  };
};

export const startLoadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const { docs } = await getDocs(collection(firebaseDB, `${uid}/journal/notes/`));
    const notes = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('load');
    // order notes
    const notesSort = notes.sort((a, b) => b.date - a.date);

    dispatch(loadNotes(notesSort));
  };
};

export const startDeleteNote = () => {
  return async (dispatch, getState) => {
    const { active: note } = getState().journal;
    const { uid } = getState().auth;

    await deleteDoc(doc(firebaseDB, `${uid}/journal/notes/${note.id}`));

    dispatch(deleteNote(note));
  };
};
