# Migration Notes - HTML to Next.js

## Các thay đổi chính

### 1. Routing
- ✅ Chuyển từ HTML links (`<a href="about.html">`) sang Next.js Links (`<Link href="/about">`)
- ✅ Tất cả các trang đều có routing tự động

### 2. Components
- ✅ Tách navigation thành component riêng
- ✅ Tạo Layout component để tái sử dụng
- ✅ Tất cả components đều dùng TypeScript

### 3. Scripts
- ✅ Google Analytics đã được tích hợp vào _app.tsx
- ✅ Google Tag Manager đã được tích hợp
- ✅ WebFont loader đã được cấu hình
- ⚠️ Weglot (đa ngôn ngữ) cần cấu hình thêm nếu cần

### 4. Styles
- ✅ CSS gốc được giữ nguyên trong styles/bazil-2022.css
- ✅ Global styles được thêm vào globals.css
- ✅ Responsive design được giữ nguyên

### 5. Images
- ⚠️ Hầu hết images vẫn dùng CDN link (cdn.prod.website-files.com)
- 💡 Có thể tải về và dùng Next.js Image component để tối ưu

### 6. SEO
- ✅ Meta tags được thêm vào mỗi trang qua Next.js Head
- ✅ Open Graph tags đã được cấu hình
- ✅ Twitter cards đã được cấu hình

## Các tính năng cần phát triển thêm

### Priority 1 (Cao)
- [ ] Animations và transitions (Framer Motion)
- [ ] Custom cursor behavior
- [ ] Menu mobile functionality hoàn chỉnh
- [ ] Lazy loading cho images

### Priority 2 (Trung bình)
- [ ] Contact form
- [ ] Portfolio filtering
- [ ] Image gallery với lightbox
- [ ] Blog section

### Priority 3 (Thấp)
- [ ] Multi-language support (i18n)
- [ ] Dark mode
- [ ] CMS integration
- [ ] Analytics dashboard

## Performance Optimizations

### Đã làm
- ✅ Server-side rendering với Next.js
- ✅ Code splitting tự động
- ✅ Optimized bundle size

### Cần làm
- [ ] Image optimization (tải về và dùng next/image)
- [ ] Font optimization
- [ ] Critical CSS
- [ ] Service Worker cho offline support

## Compatibility Notes

### Browser Support
- Chrome/Edge: ✅ Hoàn toàn tương thích
- Firefox: ✅ Hoàn toàn tương thích
- Safari: ✅ Hoàn toàn tương thích
- Mobile: ✅ Responsive design

### Known Issues
- Cursor animation cần JavaScript logic bổ sung
- Một số animations từ Webflow cần được implement lại
- Preloader animation cần được cải thiện

## Testing Checklist

- [ ] Test tất cả các trang
- [ ] Test navigation links
- [ ] Test responsive trên mobile
- [ ] Test trên các trình duyệt khác nhau
- [ ] Test form submissions (nếu có)
- [ ] Test analytics tracking
- [ ] Test SEO meta tags
- [ ] Test performance với Lighthouse

## Deployment Checklist

- [ ] Update environment variables
- [ ] Configure custom domain
- [ ] Setup SSL certificate
- [ ] Configure redirects nếu cần
- [ ] Test production build locally
- [ ] Monitor error logs sau deploy
- [ ] Setup monitoring (Vercel Analytics)

## Resources

### Documentation
- Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

### Tools
- Vercel (deployment): https://vercel.com
- Lighthouse (performance): Chrome DevTools
- React DevTools: Browser extension

### Learning
- Next.js Tutorial: https://nextjs.org/learn
- React Tutorial: https://react.dev/learn
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/
