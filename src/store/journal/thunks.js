import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import {
  deleteNote,
  loadNotes,
  saveNote,
  setSaving,
  setUploading,
  updateNote,
  uploadImages,
} from './journalSlice';
import { firebaseDB } from '../../firebase/config';
import { uploadFile } from '../../journal/helpers/uploadFile';

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

export const startUploadImages = (images = []) => {
  return async (dispatch) => {
    dispatch(setUploading());

    const imagesToUpload = [];

    for (const image of images) {
      imagesToUpload.push(uploadFile(image));
    }

    const imagesURL = await Promise.all(imagesToUpload);
    dispatch(uploadImages(imagesURL));
  };
};
