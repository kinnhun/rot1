# Bazil Portfolio - Next.js Version

Đây là phiên bản Next.js của website portfolio Bazil Hamard, được chuyển đổi từ HTML tĩnh sang ứng dụng React với Next.js.

## 🚀 Công nghệ sử dụng

- **Next.js 14** - Framework React cho production
- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **CSS Modules** - Styling đã có sẵn từ phiên bản cũ

## 📦 Cài đặt

### Yêu cầu

- Node.js 16.x hoặc cao hơn
- npm hoặc yarn

### Các bước cài đặt

1. **Cài đặt dependencies:**

```bash
npm install
# hoặc
yarn install
```

2. **Chạy môi trường development:**

```bash
npm run dev
# hoặc
yarn dev
```

3. **Mở trình duyệt:**

Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🏗️ Cấu trúc dự án

```
bazilwebsite-main/
├── components/          # React components
│   ├── Layout.tsx      # Layout chung
│   └── Navigation.tsx  # Menu điều hướng
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # HTML document
│   ├── index.tsx      # Trang chủ
│   ├── about.tsx      # Trang giới thiệu
│   ├── design.tsx     # Trang thiết kế
│   ├── photos.tsx     # Trang ảnh
│   └── look-book.tsx  # Trang look book
├── styles/            # CSS files
│   ├── globals.css    # CSS toàn cục
│   └── bazil-2022.css # CSS gốc từ website
├── public/            # Static files
│   └── (images, fonts, etc.)
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── next.config.js     # Next.js config
```

## 📝 Các trang

- **/** - Trang chủ với giới thiệu webdesigner & photographer
- **/about** - Trang giới thiệu về Bazil
- **/design** - Portfolio thiết kế
- **/photos** - Portfolio nhiếp ảnh
- **/look-book** - Tuyển tập các tác phẩm

## 🛠️ Scripts

```bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm run start

# Lint code
npm run lint
```

## 🎨 Tùy chỉnh

### Thay đổi nội dung

- Chỉnh sửa các file trong thư mục `pages/` để thay đổi nội dung trang
- Các components có thể tái sử dụng nằm trong `components/`

### Thay đổi styling

- CSS chính nằm trong `styles/globals.css`
- CSS gốc từ website cũ được giữ nguyên trong `styles/bazil-2022.css`

### Thêm ảnh và assets

- Đặt file vào thư mục `public/`
- Truy cập qua đường dẫn `/ten-file.jpg`

## 🌐 Deploy

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động deploy

### Build thủ công

```bash
npm run build
npm run start
```

## 📱 Responsive

Website được tối ưu cho tất cả các thiết bị:
- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 🔧 Cấu hình

### Environment Variables

Tạo file `.env.local` nếu cần thiết:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Next.js Config

Cấu hình được đặt trong `next.config.js`:
- Image optimization
- External domains
- Custom headers

## 📞 Liên hệ

- Email: hello@bazil.fr
- Instagram: [@bazildesiles](https://www.instagram.com/bazildesiles/)
- LinkedIn: [Bazil Hamard](https://www.linkedin.com/in/bazil-hamard/)

## 📄 License

© 2024 Bazil Hamard. All rights reserved.

## 🆕 Thay đổi từ phiên bản HTML

1. ✅ Chuyển từ HTML tĩnh sang React components
2. ✅ Sử dụng Next.js routing thay vì HTML links
3. ✅ TypeScript để type safety
4. ✅ Component-based architecture
5. ✅ Optimized images với Next.js Image
6. ✅ Server-side rendering (SSR)
7. ✅ Better SEO với Next.js Head
8. ✅ Faster page transitions

## 🚧 Phát triển tiếp

- [ ] Thêm animations với Framer Motion
- [ ] Tích hợp CMS (Contentful/Sanity)
- [ ] Thêm blog section
- [ ] Tích hợp contact form
- [ ] Thêm dark mode
- [ ] Tối ưu performance hơn nữa
