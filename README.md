# Web BASE CODE VNS CAMAI

## 1. Cài đặt

2.1. Tải thư viện

```bash
npm install / npm install --force
```

1.2. Chạy web ở chế độ deployment

```bash
npm start
```

Web chạy ở URL:

```bash
http://localhost:3000
```

1.3. Build web:

```bash
npm run build
```

## 2. Cấu trúc folder

```
├───build                        #----> folder phục vụ deploy
├───public                       #-----> file statict
└───src
    ├───assets                   #----->   Chứa các file tĩnh như ảnh, font, etc...
    ├───api                      #----->   Chứa các file gọi các service
    ├───components               #-----> Chứa các components có thể tái sử dụng ở nhiều nơi
    ├───constants                #-----> Chứa các các type của các đối tượng
    │   ├───type
    │   └───data
    ├───contexts                 #-----> Chứa file định nghĩa các context sử dụng cho useContext
    ├───hooks                    #-----> Chứa các file hooks được custom
    ├───Layouts                  #-----> Chứa các file, các phần tử tạo nên khung cơ bản của UI
    │   ├───AuthLayout
    │   └───MainLayout
    ├───pages                    #-----> Chứa các folder tạo nên từng trang
    ├───routers                  #-----> Chứa các đường dẫn tới từng trang
    ├───store                    #-----> Quản lý state của dự án
    └───utils                    #-----> Chứa các hàm hỗ trợ 
```