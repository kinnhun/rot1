# Animations & Effects - Hướng dẫn

## ✅ Các animations đã được implement

### 1. **Preloader Animation**
- Hiệu ứng loading khi trang đang tải
- Tự động biến mất sau 1.5 giây
- Logo pulsing effect

### 2. **Page Transitions**
- Hiệu ứng chuyển trang mượt mà
- Curtain effect với màu cam (#FDA228)
- Transition 600ms

### 3. **Cursor Effects**
- Custom cursor với border màu cam
- Hover effect trên heading-outline
- Scale và shadow effects
- Chỉ hiển thị trên desktop (ẩn trên mobile)

### 4. **Intro Animations** (Trang chủ)
- **Text slide down**: intro__text với delay 0.5s
- **Heading fade in**: heading-outline với delay 0.8s
- **Title slide right**: intro__title với delay 1s
- **Heading slide left**: heading-xl với delay 1.2s
- **Photo scale in**: intro__photo với delay 1.4s
- **Logo animations**: client logos với stagger delays
- **CTA fade in**: buttons với delays 2s-2.1s

### 5. **Menu Animations**
- Menu toggle với hamburger animation
- Mobile menu slide in from right
- Smooth transitions

### 6. **Scroll Animations**
- Intersection Observer API
- Elements fade in khi scroll vào view
- Threshold: 10%, rootMargin: -100px

### 7. **Hover Effects**
- Link hover transitions
- Photo/Web link interactions
- Outline text effects

## 🎨 CSS Animations

### Keyframes định nghĩa:
- `pulse` - Preloader pulsing
- `fadeInUp` - Fade in từ dưới lên
- `fadeIn` - Simple fade in
- `slideRight` - Slide từ phải
- `slideLeft` - Slide từ trái
- `slideDown` - Slide từ trên xuống
- `scaleIn` - Scale from small to normal
- `logoScale` - Logo scale animation

## 🔧 Custom Hooks

Tất cả animations được quản lý qua custom hooks trong `hooks/useAnimations.ts`:

### `usePageTransitions()`
Xử lý chuyển trang mượt mà với curtain effect

### `usePreloader()`
Quản lý hiển thị và ẩn preloader

### `useCursorEffects()`
Custom cursor theo mouse và hover effects

### `useIntroAnimations()`
Animations riêng cho trang intro/home

### `useMenuToggle()`
Toggle menu mobile với animations

### `useScrollAnimations()`
Intersection Observer cho scroll animations

### `useForceReload()`
Force reload khi dùng back button

## 📝 Cách sử dụng

### Thêm animations vào trang mới:

```tsx
import { 
  usePageTransitions, 
  usePreloader, 
  useCursorEffects,
  useMenuToggle,
  useForceReload 
} from '@/hooks/useAnimations'

export default function MyPage() {
  // Initialize animations
  usePageTransitions()
  usePreloader()
  useCursorEffects()
  useMenuToggle()
  useForceReload()
  
  return (
    <Layout>
      <Navigation />
      {/* Your content */}
      <Cursor />
    </Layout>
  )
}
```

### Thêm animation cho element mới:

```tsx
// HTML
<div className="my-element">Content</div>

// CSS
.my-element {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
```

## ⚡ Performance Tips

1. **Use CSS transforms** thay vì position/width/height
2. **Use opacity** thay vì visibility cho smooth transitions
3. **Use `will-change`** cho elements có animations phức tạp
4. **Debounce scroll events** nếu cần
5. **Remove event listeners** trong cleanup functions

## 🐛 Troubleshooting

### Animations không chạy?
1. Check console cho errors
2. Verify hooks được gọi trong component
3. Check CSS đã được load đúng chưa
4. Verify element có đúng class name không

### Cursor không hiển thị?
- Cursor chỉ hiển thị trên desktop (min-width: 992px)
- Check `.cursor` element có trong DOM không

### Page transitions bị lag?
- Kiểm tra network speed
- Optimize images
- Reduce transition duration nếu cần

## 🎯 Tùy chỉnh

### Thay đổi màu curtain:
```css
/* styles/globals.css */
.colorpanel-left,
.colorpanel-right {
  background: #YOUR_COLOR;
}
```

### Thay đổi thời gian transition:
```tsx
// hooks/useAnimations.ts
setTimeout(() => {
  window.location.href = href
}, 600) // Change this value
```

### Thay đổi preloader timeout:
```tsx
// hooks/useAnimations.ts
setTimeout(() => {
  preloader.style.opacity = '0'
  setTimeout(() => {
    preloader.style.display = 'none'
  }, 500)
}, 1500) // Change this value
```

## 📚 Resources

- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [Next.js Routing](https://nextjs.org/docs/routing/introduction)

## 🚀 Next Steps

Có thể thêm các animations nâng cao:
- [ ] GSAP animations
- [ ] Framer Motion
- [ ] Lottie animations
- [ ] Parallax effects
- [ ] 3D transforms
- [ ] SVG animations
