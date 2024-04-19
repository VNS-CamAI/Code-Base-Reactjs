import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Tạo một AxiosInstance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://example.com/api', // Thay đổi baseURL theo địa chỉ API của bạn
//   timeout: 5000, // Thời gian chờ tối đa
  headers: {
    'Content-Type': 'application/json',
    authorization: `vinorsoft token`,
    // Các header khác mà bạn muốn đặt mặc định
  },
});

// Tùy chỉnh các cài đặt khác nếu cần thiết, ví dụ như interceptors hoặc defaults

// Interceptors request
axiosInstance.interceptors.request.use(
  (config: any) => {
    // Thêm xử lý request trước khi gửi đi
    return config;
  },
  (error) => {
    // Xử lý lỗi request
    return Promise.reject(error);
  }
);

// Interceptors response
axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý response trước khi trả về
    return response;
  },
  (error) => {
    // Xử lý lỗi response
    return Promise.reject(error);
  }
);

export default axiosInstance;