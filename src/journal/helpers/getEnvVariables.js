export const getEnvVariables = () => {
  return {
    VITE_CLOUD_NAME: import.meta.env.VITE_CLOUD_NAME,
    VITE_API_KEY_FB: import.meta.env.VITE_API_KEY_FB,
  };
};
