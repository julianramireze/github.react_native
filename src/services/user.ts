import api from './api';
import {SEARCH_ENDPOINT, USERS_ENDPOINT} from '../config/api';

const userServices = {
  get: async (params: any) =>
    api.get(SEARCH_ENDPOINT + USERS_ENDPOINT, {params: params}),
  getUserInfo: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}`),
  getUserRepos: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}/repos`),
  getUserOrgs: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}/orgs`),
};

export default userServices;
