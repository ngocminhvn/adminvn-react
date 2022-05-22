-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th5 16, 2022 lúc 08:54 PM
-- Phiên bản máy phục vụ: 10.3.34-MariaDB-log-cll-lve
-- Phiên bản PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `teckscam77com_sql`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `code` varchar(32) DEFAULT NULL,
  `username` text CHARACTER SET utf8mb4 NOT NULL,
  `sdt` text DEFAULT NULL,
  `id_fb` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `website` text CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dich_vu` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `mo_ta` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `money` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `gmail` text CHARACTER SET utf8mb4 DEFAULT NULL,
  `ngan_hang` text CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `cards`
--

INSERT INTO `cards` (`id`, `code`, `username`, `sdt`, `id_fb`, `website`, `dich_vu`, `mo_ta`, `money`, `gmail`, `ngan_hang`) VALUES
(1, 'hoang-diamond', 'Hoàng Diamond', '0823386362', '100078927494496', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Momo : 0823386362\r\nTsr : 0825945040', '111111', 'phamhiu18900@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `code`) VALUES
(1, 'GDV MMO Uy Tín');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lang`
--

CREATE TABLE `lang` (
  `id` int(11) NOT NULL,
  `msg1` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg2` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg3` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg4` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg5` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg6` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg7` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg8` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg9` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg10` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg11` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg12` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `msg13` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `14` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `15` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `16` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `17` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `18` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `19` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `20` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side1` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side2` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side3` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side4` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side5` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side6` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side7` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side8` text COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `side9` text COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `lang`
--

INSERT INTO `lang` (`id`, `msg1`, `msg2`, `msg3`, `msg4`, `msg5`, `msg6`, `msg7`, `msg8`, `msg9`, `msg10`, `msg11`, `msg12`, `msg13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `side1`, `side2`, `side3`, `side4`, `side5`, `side6`, `side7`, `side8`, `side9`) VALUES
(1, 'Vui lòng điền vào ô trống !', 'Tài khoản không tồn tại trong hệ thống !', 'Địa chỉ Email đã tồn tại !', 'IP này đã đạt giới hạn tạo tài khoản!', 'Đăng ký tài khoản thành công !', 'Vui lòng điền vào ô trống !', 'Tài khoản không tồn tại trong hệ thống !', 'Mật khẩu không chính xác', 'Đăng nhập thành công !', 'Vui lòng điền vào ô trống !', 'Địa chỉ email không hợp lệ !', 'Địa chỉ email không có trong hệ thống !', 'Vui lòng kiểm tra hòm thư Email của bạn!', 'Vui lòng đăng nhập để tiếp tục', 'Số lượng tối thiểu là 1 tài khoản !', 'Số lượng tối đa khi mua 1 lần là 10.000 !', 'Loại tài khoản không tồn tại !', 'Số tài khoản trong hệ thống không đủ !', 'Số dư không đủ thanh toán!', 'Số lượng tài khoản không đủ, vui lòng thử lại', 'Home', 'Mua Tài Khoản', 'Nạp Tiền', 'Lịch Sử Đơn Hàng', 'Công Cụ', 'Giftcode', 'Cộng Tác Viên', 'Yêu Cầu Hỗ Trợ', 'Liên Hệ Facebook');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `site_image` text DEFAULT NULL,
  `site_domain` text DEFAULT NULL,
  `site_favicon` text DEFAULT NULL,
  `site_logo` text DEFAULT NULL,
  `site_tenweb` text DEFAULT NULL,
  `site_mota` text DEFAULT NULL,
  `facebook` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `sdt_admin` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `setting`
--

INSERT INTO `setting` (`id`, `site_image`, `site_domain`, `site_favicon`, `site_logo`, `site_tenweb`, `site_mota`, `facebook`, `sdt_admin`) VALUES
(1, 'https://keyvip.xyz/image/checkscam.svgv', 'https://checkscam77.com', NULL, 'https://keyvip.xyz/image/checkscam.svg', 'CHECKSCAM77.COM', 'v', 'https://www.facebook.com/haked', '0867518285');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `ly_do` text DEFAULT NULL,
  `status` varchar(32) NOT NULL,
  `sdt` text DEFAULT NULL,
  `ngan_hang` text DEFAULT NULL,
  `stk` text DEFAULT NULL,
  `anh` varchar(100) DEFAULT NULL,
  `hoten_np` text DEFAULT NULL,
  `sdt_np` text DEFAULT NULL,
  `linkphot` text DEFAULT NULL,
  `ngay` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `ticket`
--

INSERT INTO `ticket` (`id`, `username`, `ly_do`, `status`, `sdt`, `ngan_hang`, `stk`, `anh`, `hoten_np`, `sdt_np`, `linkphot`, `ngay`) VALUES
(1, 'Nguyễnn Thành Long', 'Scam nhưng tag box hỏi giá thì out và chụp bill thì che giờ', 'xuly', '0374641630', 'MoMo', '0374641630', '/anh/bc_81566860.png', 'Nguyễn Thế Khôi Nguyên', '0918860088', '', '15-05-2022');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `code` varchar(32) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `email` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `money` int(11) NOT NULL DEFAULT 0,
  `total_nap` int(11) NOT NULL DEFAULT 0,
  `level` varchar(32) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ck` float DEFAULT 0,
  `createdate` datetime DEFAULT NULL,
  `ip` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `banned` int(11) NOT NULL DEFAULT 0,
  `fullname` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `token` varchar(64) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `ref` varchar(64) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `code`, `username`, `email`, `password`, `money`, `total_nap`, `level`, `ck`, `createdate`, `ip`, `banned`, `fullname`, `token`, `ref`) VALUES
(1, 'XS9T5WV8OQQQ', 'admin', 'admin@gmail.com', 'admin', 0, 1000000, 'admin', 10, '2020-07-16 14:43:56', '::1', 0, 'KEYVIP.XYZ', NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `lang`
--
ALTER TABLE `lang`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `lang`
--
ALTER TABLE `lang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
