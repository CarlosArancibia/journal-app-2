import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    notes: [],
    active: null,
  },
  reducers: {
    addEmptyNote: (state, { payload }) => {
      state.active = payload;
    },
    saveNote: (state, { payload }) => {
      state.notes = [payload, ...state.notes];
      state.isSaving = false;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    loadNotes: (state, { payload }) => {
      state.notes = payload;
    },
  },
});

export const { addEmptyNote, saveNote, setSaving, loadNotes } = journalSlice.actions;
