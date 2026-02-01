import axios from 'axios';

const setupAxiosInterceptors = (navigate: (path: string) => void) => {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('userInfo');
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptors;
