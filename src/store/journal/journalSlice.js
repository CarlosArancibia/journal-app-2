import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    notes: [],
    active: null,
  },
  reducers: {
    setActiveNote: (state, { payload }) => {
      state.active = payload;
    },
    saveNote: (state, { payload }) => {
      state.notes = [payload, ...state.notes];
      state.isSaving = false;
    },
    updateNote: (state, { payload }) => {
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
      state.isSaving = false;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    loadNotes: (state, { payload }) => {
      state.notes = payload;
    },
    deleteNote: (state, { payload }) => {
      state.notes = state.notes.filter(({ id }) => id !== payload.id);
      state.active = null;
    },
  },
});

export const { setActiveNote, saveNote, updateNote, setSaving, loadNotes, deleteNote } =
  journalSlice.actions;
