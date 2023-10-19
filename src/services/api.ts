import axios from 'axios';
import {BASE_URL} from '../config/api';
import {GITHUB_KEY} from '../config/keys';

export default axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});
