export interface ReferenceBook {
  title: string;
  author: string;
  era: string;
  description: string;
  keyTakeaway: string;
}

export const REFERENCE_BOOKS: ReferenceBook[] = [
  {
    title: "Danh Tánh Học Thần Kỷ Kinh",
    author: "Liêu Vô Đạo",
    era: "Nhà Thanh",
    description: "Tác phẩm kinh điển đặt nền móng cho việc phân tích Số Lý nét chữ (Họa số) kết hợp sinh khắc của dòng họ. Sách giải thích chi tiết cách tính Thiên Cách, Nhân Cách, Địa Cách và sự phối hợp âm dương.",
    keyTakeaway: "Số lý của Nhân Cách là linh hồn của danh tánh; phối hợp Tam Tài là nền tảng quyết định cát hung."
  },
  {
    title: "Ngũ Hành Danh Tánh Học Luận",
    author: "Đàm Trúc Quân",
    era: "Hiện đại",
    description: "Nghiên cứu sâu sắc về sự tương quan giữa âm thanh (Âm luật ngũ hành) và chữ viết đối với Bát tự khuyết thiếu. Sách hướng dẫn cách lấy dụng thần từ Tứ Trụ để chọn tên bổ khuyết hiệu quả nhất.",
    keyTakeaway: "Đặt tên không chỉ nhìn nét chữ, mà phải dựa vào Dụng Thần Bát Tự để điều hòa chân khí ngũ hành khí lực."
  },
  {
    title: "Khoa Học Đặt Tên & Bí Mật Vận Mệnh",
    author: "Thiệu Vĩ Hoa",
    era: "Hiện đại",
    description: "Cuốn sách phân tích danh tánh học dưới góc nhìn hệ thống thông tin sinh học. Tên gọi là một loại ký hiệu mang trường năng lượng liên tục kích hoạt tinh thần và thể chất của con người.",
    keyTakeaway: "Tần số âm thanh khi gọi tên tạo nên rung động tương sinh hoặc tương khắc với bản mệnh tự nhiên."
  },
  {
    title: "Tính Danh Tự Điển Cát Tường",
    author: "Vương Đại Hữu",
    era: "Cổ học phục hưng",
    description: "Bộ đại từ điển tra cứu nét chữ Hán chính tông theo Khang Hy Tự Điển, phân định rõ ràng hành của từng chữ và ý nghĩa cát tường theo tượng hình lục thư.",
    keyTakeaway: "Mỗi nét chữ mang một định lượng năng lượng cụ thể; tra cứu chính tông giúp tránh nhầm lẫn ngũ hành."
  },
  {
    title: "Tam Tài Nhân Duyên Thư",
    author: "Trần Đoàn Lão Nhân",
    era: "Nhà Tống",
    description: "Bản thảo cổ xưa chuyên sâu thảo luận về sự phối hợp giữa Thiên - Nhân - Địa cát hung. Giải nghĩa chi tiết 125 bộ phối hợp Tam Tài từ đại cát đến đại hung.",
    keyTakeaway: "Sự thông suốt của Tam Tài giúp chuyển hung thành cát, đem lại sự hanh thông suốt đời cho trẻ."
  }
];
