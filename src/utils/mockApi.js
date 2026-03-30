let savedResume = null;

export const saveResume = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      savedResume = data;
      resolve({ success: true });
    }, 2000);
  });
};

export const loadResume = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(savedResume);
    }, 1000);
  });
};
