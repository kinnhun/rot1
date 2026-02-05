# Bazil Portfolio Next.js - Quick Start Guide

## Hướng dẫn nhanh (Tiếng Việt)

### 1. Cài đặt Node.js
- Tải và cài đặt Node.js từ https://nodejs.org (phiên bản LTS)
- Kiểm tra: `node --version` và `npm --version`

### 2. Cài đặt dependencies
```bash
cd bazilwebsite-main
npm install
```

### 3. Chạy development server
```bash
npm run dev
```

### 4. Mở trình duyệt
Truy cập: http://localhost:3000

## Các lệnh thường dùng

```bash
# Chạy development (hot reload)
npm run dev

# Build cho production
npm run build

# Chạy production build
npm start

# Kiểm tra lỗi code
npm run lint
```

## Cấu trúc quan trọng

- `pages/` - Các trang website (index, about, design, photos, look-book)
- `components/` - Các component tái sử dụng (Layout, Navigation)
- `styles/` - File CSS
- `public/` - Ảnh và tài nguyên tĩnh

## Chỉnh sửa nội dung

1. **Trang chủ**: Sửa file `pages/index.tsx`
2. **Trang About**: Sửa file `pages/about.tsx`
3. **Trang Design**: Sửa file `pages/design.tsx`
4. **Trang Photos**: Sửa file `pages/photos.tsx`
5. **Menu**: Sửa file `components/Navigation.tsx`

## Thêm trang mới

1. Tạo file mới trong `pages/`, ví dụ: `pages/contact.tsx`
2. Copy template từ trang khác
3. Thay đổi nội dung
4. Trang sẽ tự động có route `/contact`

## Deploy

### Deploy lên Vercel (Miễn phí, dễ nhất)
1. Push code lên GitHub
2. Truy cập https://vercel.com
3. Import repository từ GitHub
4. Vercel sẽ tự động deploy

### Deploy thủ công
```bash
npm run build
npm start
```

## Gặp vấn đề?

### Lỗi khi cài đặt
```bash
# Xóa node_modules và cài lại
rm -rf node_modules
npm install
```

### Lỗi khi chạy
```bash
# Xóa cache Next.js
rm -rf .next
npm run dev
```

### Port 3000 đã được sử dụng
```bash
# Chạy trên port khác
npm run dev -- -p 3001
```

## Tài nguyên học tập

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- TypeScript Handbook: https://www.typescriptlang.org/docs

## Hỗ trợ

Nếu cần hỗ trợ, vui lòng liên hệ:
- Email: hello@bazil.fr
- GitHub Issues: (Tạo issue trong repository)
