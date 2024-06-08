# Sử dụng image Node.js 18 chính thức từ Docker Hub
FROM node:18

# Tạo thư mục làm việc cho ứng dụng bên trong container
WORKDIR /usr/src/app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies cần thiết
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng Node.js
CMD ["node", "server.js"]
