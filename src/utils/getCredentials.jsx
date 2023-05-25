export const getCredentials = (username, password) => {
  console.log("login", { username: username.value, password: password.value });
  return { username: username.value, password: password.value };
};
