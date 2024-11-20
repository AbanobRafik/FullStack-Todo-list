const storageKey = "logedinUser";
const userDataString =
  typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
export const userData = userDataString ? JSON.parse(userDataString) : null;
