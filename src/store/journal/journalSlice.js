import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    isUploading: false,
    notes: [],
    active: null,
    messageFeedback: '',
  },
  reducers: {
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.messageFeedback = '';
    },
    saveNote: (state, { payload }) => {
      state.notes = [payload, ...state.notes];
      state.active = payload;
      state.isSaving = false;
      state.messageFeedback = 'The note was created successfully';
    },
    updateNote: (state, { payload }) => {
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
      state.isSaving = false;
      state.messageFeedback = 'The note was updated successfully';
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageFeedback = '';
    },
    setUploading: (state) => {
      state.isUploading = true;
    },
    loadNotes: (state, { payload }) => {
      state.notes = payload;
    },
    deleteNote: (state, { payload }) => {
      state.notes = state.notes.filter(({ id }) => id !== payload.id);
      state.active = null;
    },
    uploadImages: (state, { payload }) => {
      state.active.photosURL = [...payload, ...state.active.photosURL];
      state.messageFeedback = '';
      state.isUploading = false;
    },
    clearState: (state) => {
      state.isSaving = false;
      state.active = null;
      state.notes = [];
      state.messageFeedback = '';
    },
  },
});

export const {
  setActiveNote,
  saveNote,
  updateNote,
  setSaving,
  setUploading,
  loadNotes,
  deleteNote,
  uploadImages,
  clearState,
} = journalSlice.actions;
