import { getEnvVariables } from './getEnvVariables';

export const uploadFile = async (file) => {
  if (!file) throw new Error('No file to upload');

  const { VITE_CLOUD_NAME } = getEnvVariables();
  const cloudURL = `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'journal');

  try {
    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('Something went wrong: File not uploaded');
    const { secure_url } = await resp.json();
    return secure_url;
  } catch (error) {
    console.log(error);
  }
};
