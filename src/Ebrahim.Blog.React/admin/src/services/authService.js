import httpService from "./base/httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";
const refreshTokenKey = "refreshToken";
const apiLoginAddress = '/auth/login';
const apiAllUsersAddress = '/users';

export async function getLogin(username, password) {
  const { data: { accessToken, refreshToken } } = await httpService.post(apiLoginAddress, { username, password });
  localStorage.setItem(tokenKey, accessToken);
  localStorage.setItem(refreshTokenKey, refreshToken);
}

export async function getAllUsers(page, count) {
  return httpService.get(apiAllUsersAddress);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const user = getJwtDecode(getLocalJwt());
    checkExpirationDate(user);
    return user;
  } catch (ex) {
    console.log(ex);
    logout();
    return null;
  }
}

function checkExpirationDate(user) {
  if (!user || !user.exp) {
    throw new Error("این نشست دارای تاریخ انقضا نمی‌باشد.");
  }

  user.expirationDateUtc = new Date(0);
  user.expirationDateUtc.setUTCSeconds(user.exp);

  const isAccessTokenTokenExpired = user.expirationDateUtc.valueOf() < new Date().valueOf();

  if (isAccessTokenTokenExpired) {
    throw new Error("این نشست منقضی شده است");
  }

}

export function getJwtDecode(token) {
  return jwtDecode(token);
}

export function getLocalJwt() {
  return localStorage.getItem(tokenKey);
}
