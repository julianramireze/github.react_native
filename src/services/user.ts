import api from './api';
import {USERS_ENDPOINT} from '../config/api';

const userServices = {
  get: async (name: any) => api.get(USERS_ENDPOINT, {params: {q: name}}),
  getUserInfo: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}`),
  getUserRepos: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}/repos`),
  getUserOrgs: async (username: any) =>
    api.get(`${USERS_ENDPOINT}/${username}/orgs`),
};

export default userServices;
