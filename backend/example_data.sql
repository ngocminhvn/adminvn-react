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
(140, 'do-xuan-tung', 'Đỗ Xuân Tùng', '0975716017', '100045283914049', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Momo : 0975716017\r\nTSR : 0914308987', '120000', 'dotung87222@gmail.com', NULL),
(142, 'khanh-doan-duy', 'Khánh Đoàn Duy ', '0813445946', '100070193393772', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Momo + Mb bank : 0813445946', '50000', 'thanhtruc23122006@gmail.com ', NULL),
(148, 'tran-thien-au', 'Trần Thiên Âu', '0332401620', '100047384827195', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0332401620\r\nTSR : 0332401620', '123456', 'Tranthienau2004@gmail.com', ''),
(149, 'nguyen-minh', 'Nguyễn Minh', '0367121450', '100075507039269', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0328182971\r\nTSR + GT1S : 0367121450', '111111', 'nguyenminhxt207@gmail.com', NULL),
(152, 'truong-phat', 'Trường Phát', '0981247408', '100062214344640', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0936526670\r\nTSR : 0936526670', '100000', 'phattruong99728@gmail.com', NULL),
(156, 'sadboy', 'SadBoy', '0866590230', '100050680864634', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0866590230\r\nTsr : kens1tg', '80000', 'kentrummeta@gmail.com', NULL),
(157, 'le-dang-hoang', 'Lê Đăng Hoàng', '0914577098', '100048071612475', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0372467404\r\nMb Bank :  0444830122006\r\n', '100000', 'ledanghoang3012vjp@gmail.com', ''),
(158, 'duc-tin', 'Đức Tín', '0903458845', '100071955639149', 'Checkscam77.com', 'QTV', 'Momo: 0903458845\r\nTsr: 0913990842\r\nThecaommo: conkhi123zx@gmail.com', '11111111', 'ductin111zx@gmail.com', ''),
(163, 'trinh-bao-chau', 'Trịnh Bảo Châu ', '0359930020', '100035402182507', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0359930020\r\nTsr : 0985360545', '100000', 'trinhchau04@gmail.com', NULL),
(167, 'nguyen-minh-thuat', 'Nguyễn Minh Thuật', '0927499688', '100079616957329', 'checkscam77.com', 'GDV MMO Uy Tín', 'MOMO: 0927499688 , THESIEURE: 0927499688 , THECAOMMO: 0927499688', '100000', 'tam6334@gamil.com', NULL),
(171, 'nguyen-van-nguyen', 'Nguyễn Văn Nguyên', '0354100346', '1110510889', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Tsr : nvn2008norip@gmail.com\r\nMoMo :  0354100346', '234567', 'nvn2008norip@gmail.com', NULL),
(172, 'ng-cuong-vinhh', 'Ng Cường Vinhh', '0782887085', '100068775425521', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0984260634\r\nTsr : Nguyencuongvinh08@gmail.com', '333333', 'thanhtruclataone2006@gmail.com ', ''),
(173, 'nguyen-dat', 'Nguyễn Đạt', '0904430429', '100072596800629', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0904430429\r\nNT1S : 0988361429\r\nTsr : 0988361429', '111111', 'datlopdaubuoi@gmail.com', NULL),
(176, 'ng-tuan', 'Ng Tuấn', '0906459440', '100054356260777', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Momo : 0906459440\r\nThesieure : 0906459440', '123456', 'nguyentuan.dk2008@gmail.com', NULL),
(177, 'ditme-hiuutzshao', 'Lương Tuấn Hiếu', '0866812198', '100079637405346', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0866812198\r\nMb Bank + GT1S : 0866812198', '211111', 'hiuutvcl888@gmail.com', ''),
(178, 'pham-gia-thai', 'Phạm Gia Thái', '0368283628', '100069568201699', 'Checkscam77.com', 'QTV', 'Tsr : 0368283628\r\nMoMo : 0368283628', '111111', 'thaipham.3628@gmail.com', ''),
(181, 'phan-quoc-minhh', 'Phan Quốc Minhh', '0877008161', '100055941254280', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0877008161\r\nTsr : 0877008161', '111111', 'minhquoc56790@gmail.com', NULL),
(182, 'trai-dao', 'Trái Đào', '0797873775', '100038586860031', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Tsr : hihibedequaa@gmail.com\r\nMoMo : 0797873775', '123456', 'hihibedequaa@gmail.com', ''),
(186, 'tu-tran', 'Tú Trần ', '0347953212', '100026017202236', 'Checkscam77.com', 'GDV MMO Uy Tín', 'MoMo : 0333975119', '70000', 'tranminhtu09042008@gmail.com', NULL),
(192, 'do-van-hai', 'Đỗ Văn Hải', '0967465431', '100041774085712', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Tsr : 0393003418\r\nMoMo : 0878596342', '111111', 'van658605@gmail.com', ''),
(196, 'hoang-diamond', 'Hoàng Diamond', '0823386362', '100078927494496', 'Checkscam77.com', 'GDV MMO Uy Tín', 'Momo : 0823386362\r\nTsr : 0825945040', '111111', 'phamhiu18900@gmail.com', NULL);

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
(126, 'QTV'),
(127, 'Admin'),
(128, 'GDV MMO Uy Tín');

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
(96, 'Nguyễn Trung Nam', 'Scam', 'scam', '0981943444 ', 'MB Bank', '1000981943444', '/anh/bc_522883678.png', 'Nguyễn Huy Tuấn', '0813261778', '', '16-03-2022'),
(98, 'Kiet Tuan', 'cọc bh 500 giờ scam 91k mong ad giải quyết', 'scam', '0325334106', '', '0325334106', '/anh/bc_428469150.png', 'Trần Tài Lộc', '0797873775', '', '17-03-2022'),
(100, 'Tập buôn ken', 'Tôi yêu cầu xử lý việc này cho tôi, 20k cũng scam là sao ?', 'scam', 'mb', 'mb', '0948978583', '/anh/bc_875280408.png', 'Bây bi mén', '0354350859', '', '23-03-2022'),
(101, 'Ken rập buôn', 'Scam 20k hảo lắm e', 'scam', '', '', '', '/anh/bc_1230375815.png', 'Đặng văn tháng', '0395532218', '', '23-03-2022'),
(102, 'Trần Hoàng Sơn', 'Lừa đảo buôn bán', 'scam', '0773718924', 'VietComBank ', '1019607644', '/anh/bc_363561406.png', 'Trần Hoàng Sơn', '0773718924', '', '24-03-2022'),
(103, 'Ngô Phước Thịnh', 'ngô phước thịnh scam 100k card ', 'scam', '0935110260', 'card ', '0935110260', '/anh/bc_295425996.png', 'Bún Đậu Mắm Tôm', '0565297301', '', '31-03-2022'),
(104, 'Ngô Viết Thịnh ', 'Có 75k cũng lấy tao lạy:)', 'scam', '0767647843', '', '100069923845537', '/anh/bc_237140781.png', 'Lê Quang Huy', '0337056096', '', '01-04-2022'),
(107, 'Hiuutzshao Ditme', 'Scam tiền cọc tìm acc (100k)', 'xuly', '0866812198', 'Momo', '0866812198', '/anh/bc_623683113.png', 'Phạm Gia Thái ', '0368283628', '', '11-04-2022'),
(108, 'Thiên trần', 'Scam 180k ', 'scam', '0935884947', 'Momo', '0943222409', '/anh/bc_441334617.png', 'Trần tiến đạt', '0974667213', '', '11-04-2022'),
(110, 'Nguyễn Đặng Hữu Thắng ', 'scam', 'xuly', '0332606604', '0332606604', '0332606604', '/anh/bc_853741159.png', 'Phạm Nguyễn Quỳnh Anh', '0859830996', '', '13-04-2022'),
(111, 'Nguyễn Văn A', 'gsgsegse', 'scam', '12345678980', 'Mb bank', '000000004646', '/anh/bc_21374551.png', 'Admin', '091515151', '', '17-04-2022'),
(112, 'Lo bảo an', 'Lùa đảo', 'scam', '0585649647', 'Momo', '0582649647', '/anh/bc_123634685.png', '', '', 'https://www.facebook.com/Doozyuwu', '22-04-2022'),
(113, 'Đào hồng ngọc', 'Lừa đảo bán hàng ', 'scam', '0582649647', 'Môm', '0582649647', '/anh/bc_551726874.png', 'Đào hồng ngọc', '0582649647', 'https://www.facebook.com/daothihongngoc19012009', '22-04-2022'),
(114, 'Đào hồng ngọc', 'Lừa đảo bán hàng ', 'scam', '0582649647', 'Môm', '0582649647', '/anh/bc_1095594091.png', 'Đào hồng ngọc', '0582649647', 'https://www.facebook.com/daothihongngoc19012009', '22-04-2022'),
(115, 'Hưởng Lê', 'Hưởng Lê đã scam qđ 2m5 dd trị giá 700k', 'xuly', '0935770594', '1020776073', '0941338808', '/anh/bc_41668660.png', 'Diệp Đại Hùng', '0946462595', '', '25-04-2022'),
(116, 'Nguyễn Đặng Hữu Thắng', 'Scam 400k', 'xuly', '0332606604', 'Momo', '0332606604', '/anh/bc_822752542.png', 'Lỷ Tiến Thuận', '0975432819', '', '27-04-2022'),
(117, 'Phạm Tiến Dũng', 'Nói là acc trắng thông tin chơi được 1 hôm thì có người vào acc nói thì không biết', 'xuly', '0343646438', '0983471871', '0983471871', '/anh/bc_1211303717.png', 'Nguyễn Lĩnh', '0869839354', '', '01-05-2022'),
(118, 'Thanh Trúc', 'Nguyễn Thanh Trúc scam anh:))', 'xuly', '0879678434', '123456789', '123456789', '/anh/bc_953197520.png', 'Phạm Bảo', '0793413652', '', '08-05-2022'),
(119, 'Phan Thanh Ngọc', '', 'xuly', '0368283628', 'Ví Momo', '0368283628', '/anh/bc_1135346930.png', 'Lê Tiến Lương ', '0988721107', '', '12-05-2022'),
(120, 'Nguyễnn Thành Long', 'Scam nhưng tag box hỏi giá thì out và chụp bill thì che giờ', 'xuly', '0374641630', 'MoMo', '0374641630', '/anh/bc_81566860.png', 'Nguyễn Thế Khôi Nguyên', '0918860088', '', '15-05-2022');

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
(1, 'XS9T5WV8OQQQ', '231206', 'admin@gmail.com', '231206', 0, 1000000, 'admin', 10, '2020-07-16 14:43:56', '::1', 0, 'KEYVIP.XYZ', NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
