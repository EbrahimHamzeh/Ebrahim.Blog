import httpService from "./base/httpService";
import { baseAddress } from "../config.json";

const apiLoginAddress = `${baseAddress}/auth/login`

export function getLogin(username, password) {
    return httpService.post(apiLoginAddress, { username, password });
}