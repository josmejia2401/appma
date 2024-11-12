import { axiosInstance } from './fetch.service.js'
import api from './api.constants';
import { buildAndThrowNewError, buildHeaders, setAccessToken } from '../lib/token.js';

export const signIn = async (payload) => {
    try {
        const authHeaders = buildHeaders();
        const res = await axiosInstance.post(`${api.auth.signIn}`, payload, {
            headers: {
                ...authHeaders
            },
        });
        setAccessToken(res.data["accessToken"]);
        return res.data;
    } catch (error) {
        console.error(error);
        buildAndThrowNewError(error);
    }
}
