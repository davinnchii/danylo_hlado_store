export const realoadPage = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};
