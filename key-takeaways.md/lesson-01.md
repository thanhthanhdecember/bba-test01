## Playwright
### Playwright là gì?
- Cung cấp khả năng tự động hoá web đáng tin cậy cho việc kiểm thử kịch bản và vận hành các tác nhân AI
- Là một framwork
- Ra đời 31/01/2020
### Ưu điểm
- Cross browser: Viết code 1 lần và chạy trên tất cả các browser
- Cross platform: Viết code 1 lần và chạy trên tất cả các hệ điều hành
- Các tính năng khác:
    + Auto waiting
    + Auto-retry
    + Assertion: Giảm flaky test (lúc pass lúc fail)
- Report đầy đủ thông tin
    + Pass/fail theo từng loại trình duyệt
    + Chi tiết từng loại thời điểm:
        + Gọi API nào
        + Respone trả về gì
        + Ứng với dòng code nào
- Code gen: Thao tác để sinh ra code
### Tại sao chọn học Playwright TypeScript?
- Dễ cài đặt
- Cú pháp đơn giản, dễ học
Framwork trending, nhiều cơ hội việc làm
## Giải thích các công cụ cài đặt trước buổi học
### 1. NVM
- **NVM** = Node Version Manager
- **NodeJS** = Công cụ chạy code
### 2. Git & Git Hub
#### Git: Quản lý source code
#### GitHub: Chia sẽ code & làm việc nhóm
**Cấu hình Git** <br>
Trước khi làm việc với Git, cần một số cấu hình mặc định: <br>
```
- Config username (tên người dùng):
    git config –global user.name “<tên bạn>”
- Config email (địa chỉ email):
    git config –global user.email “<email của bạn>”
- Config branch default (nhánh mặc định):
    git config –global init.defaultBranch main
```

**Kết nối với GitHub** <br>
```
Generate key:
ssh-keygen -t rsa -b 4096 -C “your_email@example.com”
Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub
Truy cập: https://github.com/settings/ssh/new   để thêm ssh key
```
### 3. Cài đặt Playwight

Cài đặt Playwright:
```
npm init playwright@latest
```
### 4. Đưa code lên GitHub

Khởi tạo
```
1 - Khởi tạo repo local: git init
2 - Liên kết repository vừa tạo với Git: git remote add origin <ssh_link>
3 - Thêm code: git add .
4 - Thêm commit: git commit -m”init project”
5 - Push code: git push origin main
```
### 5. Invite Collabrators
```
1 - Setting
2 - Collabrators
3 - Add people
```
