# Keyano — Kế hoạch phát triển

## Quyết định đã chốt

- Web/PWA trước, native (Capacitor) sau.
- Bố cục mặc định **A — "2 tay mô phỏng piano"**:
  - Tay phải: `Q→]` phím trắng C4–G5; hàng số `2 3 · 5 6 7 · 9 0 · =` phím đen.
  - Tay trái: `Z→/` phím trắng C3–E4; `S D · G H J · L ;` phím đen.
  - `Space` = pedal; `←/→` dịch quãng tay trái, `↓/↑` tay phải.
- Bố cục B kiểu Virtual Piano là phụ.
- Tên: **Keyano**.
- Stack: Vite + React + TypeScript.

## Giai đoạn 0 — Khởi tạo

- [x] Scaffold Vite + React + TS — 2026-10-10: template react-ts, app shell tối giản (nền #151515, min-h-dvh + safe-area)
- [x] Tailwind / Zustand / Vitest — 2026-10-10: Tailwind v4 qua @tailwindcss/vite, zustand, vitest env node + test src/lib/notes.ts
- [x] PWA — 2026-10-10: vite-plugin-pwa autoUpdate, manifest vi, icon 192/512 + maskable, apple-touch-icon
- [x] CI — 2026-10-10: GitHub Actions chạy npm ci → lint → typecheck → test → build trên Node 20
- [x] README / PLAN — 2026-10-10: README + PLAN tiếng Việt
- [ ] Deploy Vercel — cần anh Hung import repo trên Vercel

## Giai đoạn 1 — Chơi được bằng bàn phím

- [ ] Âm piano thật (Salamander Grand Piano qua Tone.js)
- [ ] Bàn đàn trên màn hình sáng theo phím
- [ ] Bố cục A + B (đọc theo `KeyboardEvent.code`)
- [ ] Pedal Space
- [ ] Dịch quãng từng tay
- [ ] Âm lượng
- [ ] Nhãn chữ phím trên bàn đàn với 3 mức hiện (luôn hiện / chỉ hiện khi bấm / ẩn)
- [ ] Màn kiểm tra ghosting

## Giai đoạn 2 — Nhập & quản lý bài

- [ ] Nhập MIDI, MusicXML, gõ chữ / sheet chữ Virtual Piano
- [ ] Tách tay trái/phải
- [ ] Thư viện IndexedDB
- [ ] Bài mẫu public domain

## Giai đoạn 3 — Hướng dẫn nốt rơi

- [ ] Canvas nốt rơi có chữ phím
- [ ] Chế độ xem / chờ / chấm điểm
- [ ] Tốc độ 25–150%
- [ ] Lặp A–B
- [ ] Luyện từng tay
- [ ] Tự dịch quãng
- [ ] Gợi ý giảm dần (chữ phím → tên nốt Đô/Rê/Mi → không ghi → chế độ thuộc bài: ẩn nốt rơi, chỉ nhắc khi dừng quá 2 giây)
- [ ] Bài tập "Thấy nốt, bấm phím", "Nghe nốt, đoán phím", chạy gam
- [ ] Ghi lại và xuất MIDI

## Giai đoạn 4 — Điện thoại & đàn MIDI

- [ ] Bàn đàn cảm ứng ngang, đa chạm, vuốt dịch quãng
- [ ] Cài PWA trên iPhone
- [ ] Web MIDI (Chrome/Android)
- [ ] Xử lý iOS (mở khóa âm thanh, công tắc im lặng)

## Giai đoạn 5 — Mở rộng (tùy chọn)

- [ ] mp3 → nốt (Basic Pitch)
- [ ] Trình sửa bài
- [ ] Đổi tiếng đàn
- [ ] Capacitor
- [ ] Đồng bộ đám mây
