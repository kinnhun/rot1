# Hướng dẫn cài đặt và chạy dự án

## ✅ Hoàn thành chuyển đổi

Website Bazil Portfolio đã được chuyển đổi hoàn toàn từ HTML tĩnh sang Next.js!

## 📋 Bước tiếp theo

### 1. Cài đặt dependencies

```bash
npm install
```

Hoặc nếu dùng Yarn:

```bash
yarn install
```

### 2. Chạy development server

```bash
npm run dev
```

Sau đó mở trình duyệt và truy cập: **http://localhost:3000**

### 3. Build cho production

```bash
npm run build
npm start
```

## 📁 Cấu trúc dự án mới

```
bazilwebsite-main/
├── pages/              # Các trang Next.js
│   ├── _app.tsx       # Config toàn cục
│   ├── _document.tsx  # HTML document
│   ├── index.tsx      # Trang chủ (/)
│   ├── about.tsx      # Trang about (/about)
│   ├── design.tsx     # Trang design (/design)
│   ├── photos.tsx     # Trang photos (/photos)
│   └── look-book.tsx  # Trang look-book (/look-book)
├── components/        # React Components
│   ├── Layout.tsx     # Layout wrapper
│   └── Navigation.tsx # Menu navigation
├── styles/           # CSS files
│   ├── globals.css   # Global styles
│   └── bazil-2022.css # CSS gốc
├── public/           # Static files
├── hooks/            # Custom React hooks
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript config
├── next.config.js    # Next.js config
└── .eslintrc.json    # ESLint config
```

## 🎯 Các tính năng đã implement

✅ Chuyển đổi tất cả 5 trang HTML sang Next.js  
✅ TypeScript cho type safety  
✅ Responsive design được giữ nguyên  
✅ SEO optimization với Next.js Head  
✅ Google Analytics & Tag Manager  
✅ Navigation component với routing  
✅ Layout component tái sử dụng  
✅ CSS modules và global styles  
✅ Fast Refresh cho development  
✅ Optimized production builds  

## 🚀 Lợi ích của Next.js

1. **Performance**: Server-side rendering và code splitting
2. **SEO**: Better SEO với SSR và meta tags
3. **Developer Experience**: Hot reload, TypeScript support
4. **Routing**: File-based routing tự động
5. **Production Ready**: Optimized cho deployment
6. **Scalability**: Dễ dàng mở rộng tính năng

## 📝 Các file quan trọng

- **README.md** - Tài liệu đầy đủ
- **QUICK_START.md** - Hướng dẫn nhanh
- **MIGRATION_NOTES.md** - Chi tiết về quá trình chuyển đổi
- **INSTALLATION.md** - File này

## 🔧 Troubleshooting

### Lỗi khi npm install

```bash
# Xóa node_modules và package-lock.json
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 bị chiếm

```bash
npm run dev -- -p 3001
```

### Lỗi TypeScript

```bash
npm run build
```

Nếu có lỗi TypeScript, check file tsconfig.json

## 📞 Support

Nếu gặp vấn đề, check:
1. README.md - Tài liệu chính
2. QUICK_START.md - Hướng dẫn nhanh
3. MIGRATION_NOTES.md - Chi tiết kỹ thuật

## 🎉 Bắt đầu

```bash
cd bazilwebsite-main
npm install
npm run dev
```

**Chúc bạn code vui vẻ! 🚀**
