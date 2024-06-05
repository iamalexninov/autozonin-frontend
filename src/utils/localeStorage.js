const tokenName = "USER_TOKEN";

export function getUser() {
  return JSON.parse(localStorage.getItem(tokenName));
}

export function setUser(data) {
  return localStorage.setItem(tokenName, JSON.stringify(data));
}

export function clearUser() {
  localStorage.removeItem(tokenName);
}
