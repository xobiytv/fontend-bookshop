import axios from 'axios';

const baseURL = 'https://no23.lavina.tech/';

const axiosInstance = axios.create({
  baseURL,
  //  location :'/signup' ,
  header : 'Key: {MyUserKey}' ,
  header : 'Sign: {2892678138d8d793a28fc49055095d8b}' ,
  header : 'Content-Type: application/json' ,
});

export const postRegister = async (userRegisterData) => {
    try {
      const response = await axiosInstance.post('signup', userRegisterData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getBooks = () => {
    return axiosInstance.get('books')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
  };
      