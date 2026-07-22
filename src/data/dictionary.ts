export interface HanCharacter {
  char: string;
  strokes: number;
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  meaning: string;
}

export const SURNAMES: Record<string, HanCharacter> = {
  'Nguyễn': { char: '阮', strokes: 12, element: 'Mộc', meaning: 'Họ Nguyễn' },
  'Trần': { char: '陳', strokes: 16, element: 'Hỏa', meaning: 'Họ Trần' },
  'Lê': { char: '黎', strokes: 15, element: 'Hỏa', meaning: 'Họ Lê' },
  'Phạm': { char: '范', strokes: 11, element: 'Thủy', meaning: 'Họ Phạm' },
  'Hoàng': { char: '黄', strokes: 12, element: 'Thổ', meaning: 'Họ Hoàng' },
  'Huỳnh': { char: '黄', strokes: 12, element: 'Thổ', meaning: 'Họ Huỳnh' },
  'Phan': { char: '潘', strokes: 15, element: 'Thủy', meaning: 'Họ Phan' },
  'Vũ': { char: '武', strokes: 8, element: 'Thủy', meaning: 'Họ Vũ' },
  'Võ': { char: '武', strokes: 8, element: 'Thủy', meaning: 'Họ Võ' },
  'Đặng': { char: '鄧', strokes: 19, element: 'Hỏa', meaning: 'Họ Đặng' },
  'Bùi': { char: '裴', strokes: 14, element: 'Mộc', meaning: 'Họ Bùi' },
  'Đỗ': { char: '杜', strokes: 7, element: 'Mộc', meaning: 'Họ Đỗ' },
  'Hồ': { char: '胡', strokes: 11, element: 'Thổ', meaning: 'Họ Hồ' },
  'Ngô': { char: '吳', strokes: 7, element: 'Mộc', meaning: 'Họ Ngô' },
  'Dương': { char: '楊', strokes: 13, element: 'Mộc', meaning: 'Họ Dương' },
  'Lý': { char: '李', strokes: 7, element: 'Hỏa', meaning: 'Họ Lý' },
  'Cáp': { char: '哈', strokes: 9, element: 'Thủy', meaning: 'Họ Cáp' },
  'Hồ Đắc': { char: '胡得', strokes: 22, element: 'Mộc', meaning: 'Họ Hồ Đắc' },
};

export const MALE_NAMES: Record<string, HanCharacter> = {
  'Minh': { char: '明', strokes: 8, element: 'Thủy', meaning: 'Sáng sủa, thông minh' },
  'Hải': { char: '海', strokes: 11, element: 'Thủy', meaning: 'Biển cả, rộng lớn, bao la' },
  'Sơn': { char: '山', strokes: 3, element: 'Thổ', meaning: 'Núi non, vững chãi, uy nghiêm' },
  'Lâm': { char: '林', strokes: 8, element: 'Mộc', meaning: 'Rừng cây xanh tốt, sức sống dồi dào' },
  'Tùng': { char: '松', strokes: 8, element: 'Mộc', meaning: 'Cây tùng hiên ngang, dũng cảm' },
  'Dương': { char: '陽', strokes: 17, element: 'Thổ', meaning: 'Mặt trời chiếu sáng, ấm áp rực rỡ' },
  'Đức': { char: '德', strokes: 15, element: 'Hỏa', meaning: 'Đạo đức cao đẹp, nhân từ, ôn hòa' },
  'Trí': { char: '智', strokes: 12, element: 'Hỏa', meaning: 'Trí tuệ, thông minh kiệt xuất' },
  'Tuấn': { char: '俊', strokes: 9, element: 'Hỏa', meaning: 'Khôi ngô, tuấn tú, xuất chúng' },
  'Dũng': { char: '勇', strokes: 9, element: 'Thổ', meaning: 'Dũng cảm, có chí khí phi thường' },
  'Thắng': { char: '勝', strokes: 12, element: 'Kim', meaning: 'Chiến thắng, thành công vượt trội' },
  'Phong': { char: '風', strokes: 9, element: 'Thủy', meaning: 'Như ngọn gió, phóng khoáng, tự do' },
  'Khang': { char: '康', strokes: 11, element: 'Mộc', meaning: 'Khang trang, thịnh vượng, an khang' },
  'Bảo': { char: '寶', strokes: 20, element: 'Hỏa', meaning: 'Bảo vật, quý báu, tôn quý' },
  'Huy': { char: '輝', strokes: 15, element: 'Thủy', meaning: 'Huy hoàng, sáng chói rực rỡ' },
  'Cường': { char: '強', strokes: 11, element: 'Mộc', meaning: 'Mạnh mẽ, kiên cường, dũng mãnh' },
  'Phát': { char: '發', strokes: 12, element: 'Thủy', meaning: 'Phát đạt, hưng vượng, vinh hoa' },
  'Đạt': { char: '達', strokes: 16, element: 'Hỏa', meaning: 'Thành đạt, hiển vinh, đắc ý' },
  'Thành': { char: '城', strokes: 10, element: 'Thổ', meaning: 'Thành lũy vững chắc, đáng tin cậy' },
  'Kiên': { char: '堅', strokes: 11, element: 'Mộc', meaning: 'Kiên định, bền bỉ, ý chí sắt đá' },
  'An': { char: '安', strokes: 6, element: 'Thổ', meaning: 'Bình an, yên ổn, cuộc đời may mắn' },
  'Bình': { char: '平', strokes: 5, element: 'Thủy', meaning: 'Bình yên, ôn hòa, tâm tính rộng lượng' },
  'Thanh': { char: '青', strokes: 8, element: 'Kim', meaning: 'Thanh khiết, thanh cao, liêm khiết' },
  'Khánh': { char: '慶', strokes: 15, element: 'Mộc', meaning: 'Hân hoan, vui vẻ, mang lại phúc lộc' },
  'Lộc': { char: '祿', strokes: 13, element: 'Hỏa', meaning: 'Tài lộc dư dả, cát tường thịnh vượng' },
  'Quân': { char: '軍', strokes: 9, element: 'Mộc', meaning: 'Khí chất quân vương, dũng cảm' },
  'Nhật': { char: '日', strokes: 4, element: 'Hỏa', meaning: 'Mặt trời ban ngày, rạng rỡ' },
  'Quang': { char: '光', strokes: 6, element: 'Hỏa', meaning: 'Hào quang rực rỡ, tiền đồ xán lạn' },
  'Hùng': { char: '雄', strokes: 12, element: 'Thủy', meaning: 'Oai phong, hùng dũng, trác việt' },
  'Gia': { char: '嘉', strokes: 14, element: 'Mộc', meaning: 'Tốt lành, gia đạo hạnh phúc, vui vẻ' },
};

export const FEMALE_NAMES: Record<string, HanCharacter> = {
  'Anh': { char: '英', strokes: 11, element: 'Mộc', meaning: 'Anh tài, thông minh, tinh anh xuất chúng' },
  'Châu': { char: '珠', strokes: 11, element: 'Kim', meaning: 'Trân châu, viên ngọc quý giá vô ngần' },
  'Ngọc': { char: '玉', strokes: 5, element: 'Kim', meaning: 'Dung mạo đoan trang, ngọc ngà cao quý' },
  'Linh': { char: '靈', strokes: 24, element: 'Hỏa', meaning: 'Linh hoạt, thông tuệ, huyền diệu ôn hòa' },
  'Hương': { char: '香', strokes: 9, element: 'Thủy', meaning: 'Hương thơm lan tỏa, nết na, dịu dàng' },
  'Lan': { char: '蘭', strokes: 23, element: 'Mộc', meaning: 'Hoa lan thanh nhã, quý phái kiều diễm' },
  'Phương': { char: '芳', strokes: 10, element: 'Mộc', meaning: 'Hương thơm tốt lành, tiếng thơm truyền xa' },
  'Thảo': { char: '草', strokes: 12, element: 'Mộc', meaning: 'Như nhành cỏ non mềm mại dẻo dai' },
  'Hoa': { char: '花', strokes: 10, element: 'Mộc', meaning: 'Xinh đẹp như hoa, thanh xuân rực rỡ' },
  'Quỳnh': { char: '瓊', strokes: 20, element: 'Mộc', meaning: 'Hoa quỳnh thanh khiết, ngọc quý trân trọng' },
  'Nga': { char: '娥', strokes: 10, element: 'Thủy', meaning: 'Dung mạo mỹ miều, đoan trang hiền thục' },
  'My': { char: '嵋', strokes: 12, element: 'Thổ', meaning: 'Núi non kiều diễm, khí chất thanh tú' },
  'Mi': { char: '嵋', strokes: 12, element: 'Thổ', meaning: 'Núi non kiều diễm, khí chất thanh tú' },
  'Trang': { char: '莊', strokes: 13, element: 'Mộc', meaning: 'Đoan trang, nghiêm túc, đoan chính hiền dịu' },
  'Nhung': { char: '絨', strokes: 12, element: 'Mộc', meaning: 'Mềm mại như nhung, cuộc sống ấm êm sung túc' },
  'Yến': { char: '燕', strokes: 16, element: 'Thổ', meaning: 'Như loài chim yến mang mùa xuân ấm áp về' },
  'Thủy': { char: '水', strokes: 4, element: 'Thủy', meaning: 'Nước trong trẻo, hiền hòa, uyển chuyển' },
  'Nhi': { char: '兒', strokes: 8, element: 'Kim', meaning: 'Nhỏ nhắn, đáng yêu, thông minh lanh lợi' },
  'Bích': { char: '碧', strokes: 14, element: 'Thủy', meaning: 'Ngọc bích xanh trong, quý phái tao nhã' },
  'Hà': { char: '河', strokes: 9, element: 'Thủy', meaning: 'Dòng sông êm đềm, hiền hòa, bao dung rộng lớn' },
  'Hân': { char: '欣', strokes: 8, element: 'Mộc', meaning: 'Hân hoan, vui mừng, cát tường hạnh phúc' },
  'Tú': { char: '秀', strokes: 7, element: 'Kim', meaning: 'Thanh tú, tú lệ, dung mạo xinh đẹp hiền hậu' },
  'Thu': { char: '秋', strokes: 9, element: 'Kim', meaning: 'Mùa thu dịu mát, ôn hòa và sâu sắc' },
  'Diệp': { char: '葉', strokes: 15, element: 'Mộc', meaning: 'Lá ngọc cành vàng, gia thế cao quý tốt lành' },
  'Hồng': { char: '紅', strokes: 9, element: 'Thủy', meaning: 'Màu đỏ may mắn, rực rỡ hưng vượng cát tường' },
  'Cẩm': { char: '錦', strokes: 16, element: 'Kim', meaning: 'Gấm vóc lộng lẫy, vinh hoa phú quý sau này' },
  'Oanh': { char: '鶯', strokes: 21, element: 'Mộc', meaning: 'Chim oanh líu lo mang niềm vui đến mọi nhà' },
  'Mai': { char: '梅', strokes: 11, element: 'Mộc', meaning: 'Hoa mai thanh khiết nở trong giá tuyết kiên cường' },
  'Đào': { char: '桃', strokes: 10, element: 'Mộc', meaning: 'Hoa đào rực rỡ, mang xuân sắc tươi vui cát tường' },
};

export interface DictionaryItem {
  vietnamese: string;
  han: string;
  strokes: number;
  element: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  meaning: string;
}

export const LOOKUP_DICTIONARY: DictionaryItem[] = [
  // 3 strokes
  { vietnamese: 'Cung', han: '弓', strokes: 3, element: 'Mộc', meaning: 'Hoài bão lớn, có ý chí dũng cảm vượt khó khăn.' },
  { vietnamese: 'Cập', han: '及', strokes: 3, element: 'Thủy', meaning: 'Bôn ba vất vả, gặp nhiều thử thách để thành công.' },
  { vietnamese: 'Cửu', han: '久', strokes: 3, element: 'Mộc', meaning: 'Có số xuất ngoại phát tài, thanh nhàn phú quý, phúc thọ song toàn.' },
  { vietnamese: 'Sơn', han: '山', strokes: 3, element: 'Thổ', meaning: 'Uy nghiêm, kiên định vững chãi như núi cao tráng lệ.' },
  
  // 4 strokes
  { vietnamese: 'Giới', han: '介', strokes: 4, element: 'Mộc', meaning: 'Anh em lập thân lập nghiệp phương xa cát tường.' },
  { vietnamese: 'Cân', han: '斤', strokes: 4, element: 'Mộc', meaning: 'Thanh tú, thông minh, mưu cầu đắc lộc, gia cảnh tốt lành.' },
  { vietnamese: 'Khổng', han: '孔', strokes: 4, element: 'Mộc', meaning: 'Bản tính ôn hòa, kiên nhẫn lập đại nghiệp.' },
  { vietnamese: 'Mộc', han: '木', strokes: 4, element: 'Mộc', meaning: 'Sống bình dị, gia cảnh ôn hòa hạnh phúc.' },
  { vietnamese: 'Nguyên', han: '元', strokes: 4, element: 'Mộc', meaning: 'Gia thế tốt đẹp, quý nhân phù trợ phát lộc cát tường.' },
  { vietnamese: 'Nguyệt', han: '月', strokes: 4, element: 'Mộc', meaning: 'Thanh nhã như vầng trăng sáng ôn nhu, kết hôn muộn đại cát.' },
  { vietnamese: 'Vân', han: '匀', strokes: 4, element: 'Mộc', meaning: 'Thông minh, lanh lợi, một đời hanh thông phú quý thịnh vượng.' },
  { vietnamese: 'Nhật', han: '日', strokes: 4, element: 'Hỏa', meaning: 'Mặt trời soi sáng rực rỡ, chí khí kiên định.' },
  { vietnamese: 'Thủy', han: '水', strokes: 4, element: 'Thủy', meaning: 'Trong suốt, dịu dàng hiền hậu, uyển chuyển bao dung.' },
  { vietnamese: 'Văn', han: '文', strokes: 4, element: 'Thủy', meaning: 'Người có học thức cao, nho nhã, tôn quý và tinh tế.' },
  { vietnamese: 'Thị', han: '氏', strokes: 4, element: 'Kim', meaning: 'Chữ lót nữ truyền thống, đoan trang, dung mạo thanh nhã nết na.' },
  { vietnamese: 'Tâm', han: '心', strokes: 4, element: 'Kim', meaning: 'Tấm lòng nhân ái, lương thiện, trí tuệ mẫn tiệp, bình an.' },
  { vietnamese: 'Nhân', han: '仁', strokes: 4, element: 'Kim', meaning: 'Đức nhân ái, từ bi hiền hậu, sống khoan dung rộng lượng.' },

  // 5 strokes
  { vietnamese: 'Bản', han: '本', strokes: 5, element: 'Mộc', meaning: 'Ôn hòa, hiền hậu, cuộc đời bình dị hưng vượng lâu bền.' },
  { vietnamese: 'Cam', han: '甘', strokes: 5, element: 'Mộc', meaning: 'Đa tài, nhanh trí, danh lợi vẹn toàn, hào phóng trác việt.' },
  { vietnamese: 'Công', han: '功', strokes: 5, element: 'Mộc', meaning: 'Ý chí kiên định vượt mọi phong ba để thành công hiển hách.' },
  { vietnamese: 'Huỷ', han: '卉', strokes: 5, element: 'Mộc', meaning: 'Tinh tế, ưu tú nhạy bén nghệ thuật.' },
  { vietnamese: 'Gia', han: '加', strokes: 5, element: 'Mộc', meaning: 'Xuất ngoại đại cát, trung niên hưng thịnh phát lộc.' },
  { vietnamese: 'Cự', han: '巨', strokes: 5, element: 'Mộc', meaning: 'Có tài thao lược chí hướng cao xa, hậu vận đắc lộc.' },
  { vietnamese: 'Khả', han: '可', strokes: 5, element: 'Mộc', meaning: 'Phúc lộc song toàn, thông minh lanh lợi, trung niên phát đạt.' },
  { vietnamese: 'Mão', han: '卯', strokes: 5, element: 'Mộc', meaning: 'Thanh nhàn, ôn hòa trọng nghĩa khí, tuổi già cát tường.' },
  { vietnamese: 'Ngọc', han: '玉', strokes: 5, element: 'Kim', meaning: 'Trí dũng song toàn, danh lợi vẹn toàn, phú quý cát tường vinh hiển.' },
  { vietnamese: 'Bình', han: '平', strokes: 5, element: 'Thủy', meaning: 'Cuộc sống an nhiên thuận lợi thanh bình.' },
  { vietnamese: 'Thế', han: '世', strokes: 5, element: 'Kim', meaning: 'Ý chí oai phong lẫm liệt, tầm vóc lớn, cuộc đời cát tường thịnh vượng.' },
  { vietnamese: 'Đông', han: '冬', strokes: 5, element: 'Thủy', meaning: 'Thâm trầm sâu sắc, tĩnh lặng kiên định, dồi dào nội lực.' },

  // 6 strokes
  { vietnamese: 'Cộng', han: '共', strokes: 6, element: 'Mộc', meaning: 'Được quý nhân nâng đỡ nâng tầm sự nghiệp.' },
  { vietnamese: 'Cát', han: '吉', strokes: 6, element: 'Mộc', meaning: 'Mang lại sự may mắn cát tường vinh hiển thịnh vượng.' },
  { vietnamese: 'Khuông', han: '匡', strokes: 6, element: 'Mộc', meaning: 'Ý chí kiên định vượt khó khăn tạo nên đại nghiệp.' },
  { vietnamese: 'Xí', han: '企', strokes: 6, element: 'Mộc', meaning: 'Chân thành, hiền hậu, thanh nhàn đắc lộc phú quý.' },
  { vietnamese: 'Khúc', han: '曲', strokes: 6, element: 'Mộc', meaning: 'Lý trí nhạy bén nghệ thuật và sáng tạo cao.' },
  { vietnamese: 'Húc', han: '旭', strokes: 6, element: 'Mộc', meaning: 'Như ánh dương buổi sớm rực rỡ cát tường thịnh vượng.' },
  { vietnamese: 'Quang', han: '光', strokes: 6, element: 'Hỏa', meaning: 'Hào quang rực rỡ, danh vọng hiển hách sau này.' },
  { vietnamese: 'An', han: '安', strokes: 6, element: 'Thổ', meaning: 'Gia đạo an bình, vạn sự thuận hòa phát lộc.' },
  { vietnamese: 'Hữu', han: '有', strokes: 6, element: 'Thổ', meaning: 'Sở hữu tài năng, trí tuệ kiệt xuất, cuộc sống hưng thịnh phú quý.' },
  { vietnamese: 'Hữu', han: '友', strokes: 6, element: 'Thổ', meaning: 'Trọng tình nghĩa, hữu hảo trung thực, quý nhân trợ lực dồi dào.' },
  { vietnamese: 'Trọng', han: '仲', strokes: 6, element: 'Hỏa', meaning: 'Trọng hậu nghiêm túc, đứng đắn tự tin, chí khí phi thường.' },
  { vietnamese: 'Như', han: '如', strokes: 6, element: 'Kim', meaning: 'Vạn sự như ý, cát tường, nết na thùy mị hiền hậu ôn hòa.' },
  { vietnamese: 'Trúc', han: '竹', strokes: 6, element: 'Mộc', meaning: 'Quân tử thẳng thắn thanh cao, dẻo dai kiên cường bất khuất.' },
  { vietnamese: 'Giang', han: '江', strokes: 6, element: 'Thủy', meaning: 'Hào sảng, bao dung rộng lớn tựa dòng sông xanh mượt trùng điệp.' },
  { vietnamese: 'Toàn', han: '全', strokes: 6, element: 'Hỏa', meaning: 'Vẹn toàn hoàn mỹ, phú quý an khang, gia đạo viên mãn.' },

  // 7 strokes
  { vietnamese: 'Canh', han: '庚', strokes: 7, element: 'Kim', meaning: 'Thông minh lanh lợi, hậu vận hưng vượng.' },
  { vietnamese: 'Cốc', han: '谷', strokes: 7, element: 'Mộc', meaning: 'Thanh nhàn phú quý, phúc lộc song toàn cát tường.' },
  { vietnamese: 'Hà', han: '何', strokes: 7, element: 'Thủy', meaning: 'Dòng sông êm đềm hanh thông thuận lợi ôn hòa.' },
  { vietnamese: 'Kiến', han: '見', strokes: 7, element: 'Mộc', meaning: 'Tinh anh sáng suốt, đắc lộc cát tường về già.' },
  { vietnamese: 'Ngôn', han: '言', strokes: 7, element: 'Mộc', meaning: 'Trọng nghĩa khí, từ tốn ôn hòa đức độ.' },
  { vietnamese: 'Ngâm', han: '吟', strokes: 7, element: 'Mộc', meaning: 'Ôn hậu chân thành, phú quý thanh nhàn hưng thịnh.' },
  { vietnamese: 'Tú', han: '秀', strokes: 7, element: 'Kim', meaning: 'Thanh tú cát tường, đắc lộc vinh hiển mỹ mãn.' },
  { vietnamese: 'Hạnh', han: '杏', strokes: 7, element: 'Mộc', meaning: 'Nết na, ngọt ngào hiền hậu, cuộc đời an nhàn vui vẻ.' },

  // 8 strokes
  { vietnamese: 'Minh', han: '明', strokes: 8, element: 'Thủy', meaning: 'Thông tuệ kiệt xuất, tấm lòng trung trinh sáng tỏ.' },
  { vietnamese: 'Tùng', han: '松', strokes: 8, element: 'Mộc', meaning: 'Kiên cường, bền bỉ hiên ngang như tùng bách.' },
  { vietnamese: 'Lâm', han: '林', strokes: 8, element: 'Mộc', meaning: 'Rừng cây đại ngàn dồi dào sinh lực cát tường.' },
  { vietnamese: 'Vũ', han: '武', strokes: 8, element: 'Thủy', meaning: 'Hùng dũng, phi thường dũng cảm mưu lược lớn.' },
  { vietnamese: 'Vũ', han: '雨', strokes: 8, element: 'Thủy', meaning: 'Cơn mưa lành tưới mát vạn vật, dồi dào tài lộc cát phúc.' },
  { vietnamese: 'Kim', han: '金', strokes: 8, element: 'Kim', meaning: 'Tượng trưng cho vàng bạc cao quý, phú quý hưng thịnh vinh hiển.' },
  { vietnamese: 'Hân', han: '欣', strokes: 8, element: 'Mộc', meaning: 'Hân hoan cát tường, luôn vui vẻ lạc quan, hạnh phúc viên mãn.' },
  { vietnamese: 'Đông', han: '東', strokes: 8, element: 'Mộc', meaning: 'Phương Đông khởi sắc, rạng rỡ sinh khí tràn đầy năng lượng phát triển.' },
  { vietnamese: 'Tây', han: '西', strokes: 6, element: 'Kim', meaning: 'Phương Tây yên bình ôn hòa, cuộc đời sung túc an nhàn.' },
  { vietnamese: 'Hạnh', han: '幸', strokes: 8, element: 'Thủy', meaning: 'Hạnh phúc dồi dào, cát tường may mắn, gia đình êm ấm cát khánh.' },

  // 9 strokes
  { vietnamese: 'Xuân', han: '春', strokes: 9, element: 'Mộc', meaning: 'Mùa xuân ấm áp tươi vui, tràn đầy sức sống và sinh khí tươi mới.' },
  { vietnamese: 'Khoa', han: '科', strokes: 9, element: 'Mộc', meaning: 'Đỗ đạt khoa bảng, thông minh kiệt xuất, công thành danh toại.' },
  { vietnamese: 'Nam', han: '南', strokes: 9, element: 'Hỏa', meaning: 'Phương Nam ấm áp nhiệt thành, mạnh mẽ, hướng thiện cát tường.' },
  { vietnamese: 'Hương', han: '香', strokes: 9, element: 'Thủy', meaning: 'Hương thơm cao nhã bay xa, tiếng thơm lưu truyền đức hạnh.' },
  { vietnamese: 'Thu', han: '秋', strokes: 9, element: 'Kim', meaning: 'Mùa thu mát dịu, tâm tính ôn hòa điềm tĩnh sâu sắc.' },
  { vietnamese: 'Hồng', han: '紅', strokes: 9, element: 'Thủy', meaning: 'Màu đỏ may mắn rực rỡ, hưng vượng giàu sang phú quý cát tường.' },
  { vietnamese: 'Bách', han: '柏', strokes: 9, element: 'Mộc', meaning: 'Cây bách kiên cường dẻo dai trường thọ đón tuyết hiên ngang.' },
  { vietnamese: 'Quân', han: '軍', strokes: 9, element: 'Mộc', meaning: 'Chí khí quân tử, bản lĩnh oai phong, dũng cảm kiên định.' },
  { vietnamese: 'Tín', han: '信', strokes: 9, element: 'Kim', meaning: 'Uy tín trung thực, đáng tin cậy trọng nghĩa nghĩa khí, cát tường hưng thịnh.' },

  // 10 strokes
  { vietnamese: 'Phương', han: '芳', strokes: 10, element: 'Mộc', meaning: 'Cỏ thơm ngát tốt tươi, dung mạo tú lệ nết na đức hạnh lan tỏa.' },
  { vietnamese: 'Hoa', han: '花', strokes: 10, element: 'Mộc', meaning: 'Như đóa hoa tươi thắm rực rỡ tràn đầy thanh xuân và sức sống.' },
  { vietnamese: 'Nga', han: '娥', strokes: 10, element: 'Thủy', meaning: 'Mỹ nữ xinh đẹp kiều diễm, dung mạo đoan trang thanh nhã.' },
  { vietnamese: 'Tấn', han: '晉', strokes: 10, element: 'Hỏa', meaning: 'Tiến lên phát triển mạnh mẽ, hưng vượng thịnh vượng thăng tiến vượt trội.' },
  { vietnamese: 'Triết', han: '哲', strokes: 10, element: 'Hỏa', meaning: 'Triết lý sáng suốt, thấu triệt nhân tình thế thái, thông tuệ xuất chúng.' },
  { vietnamese: 'Thái', han: '泰', strokes: 10, element: 'Thủy', meaning: 'Thái bình an khang, yên bình thanh thản thịnh vượng hanh thông.' },
  { vietnamese: 'Tường', han: '祥', strokes: 10, element: 'Kim', meaning: 'Điềm lành cát tường như ý, mang lại phúc lộc khánh hỷ cho gia đạo.' },
  { vietnamese: 'Quyên', han: '娟', strokes: 10, element: 'Thủy', meaning: 'Duyên dáng thanh cao, nết na thùy mị tao nhã hiền hậu.' },
  { vietnamese: 'Hạ', han: '夏', strokes: 10, element: 'Hỏa', meaning: 'Mùa hè rực rỡ dồi dào năng lượng khát vọng và tinh thần sảng khoái.' },

  // 11 strokes
  { vietnamese: 'Anh', han: '英', strokes: 11, element: 'Mộc', meaning: 'Tinh anh anh kiệt xuất sắc, thông minh mẫn tiệp kiệt xuất phi thường.' },
  { vietnamese: 'Đắc', han: '得', strokes: 11, element: 'Kim', meaning: 'Đạt được mục tiêu, vạn sự cát lợi đắc tâm đắc ý, tài lộc dồi dào hưng thịnh.' },
  { vietnamese: 'Hải', han: '海', strokes: 11, element: 'Thủy', meaning: 'Biển cả mênh mông phóng khoáng dũng cảm, bao dung vĩ đại.' },
  { vietnamese: 'Khang', han: '康', strokes: 11, element: 'Mộc', meaning: 'An khang thịnh vượng, khỏe mạnh bình an vạn sự cát khánh.' },
  { vietnamese: 'Cường', han: '強', strokes: 11, element: 'Mộc', meaning: 'Mạnh mẽ dũng cảm kiên cường vượt nghịch cảnh đạt vinh hiển.' },
  { vietnamese: 'Châu', han: '珠', strokes: 11, element: 'Kim', meaning: 'Trân châu ngọc quý vô giá, dung mạo đoan trang kiêu sa cát tường.' },
  { vietnamese: 'Mai', han: '梅', strokes: 11, element: 'Mộc', meaning: 'Hoa mai nở trong tuyết lạnh thanh tao kiên trì thanh nhã.' },
  { vietnamese: 'Cúc', han: '菊', strokes: 11, element: 'Mộc', meaning: 'Hoa cúc kiêu hãnh bền bỉ, cốt cách thanh tao đài các dẻo dai.' },
  { vietnamese: 'Tuyết', han: '雪', strokes: 11, element: 'Thủy', meaning: 'Tuyết trắng thanh khiết trong lành tao nhã hiền diệu.' },
  { vietnamese: 'Tiến', han: '進', strokes: 11, element: 'Hỏa', meaning: 'Tiến lên không ngừng vươn cao, nỗ lực đạt thành tựu hiển hách.' },
  { vietnamese: 'Quốc', han: '國', strokes: 11, element: 'Mộc', meaning: 'Hùng vĩ chí khí đại cục quốc gia, tiền đồ rộng lớn hiển đạt.' },

  // 12 strokes
  { vietnamese: 'Đăng', han: '登', strokes: 12, element: 'Hỏa', meaning: 'Đăng khoa đỗ đạt, thăng tiến vươn lên tầm cao vinh hiển.' },
  { vietnamese: 'Thiện', han: '善', strokes: 12, element: 'Kim', meaning: 'Thiện lương tốt đẹp, từ bi bác ái mang đức độ cát lành muôn phương.' },
  { vietnamese: 'Kiệt', han: '傑', strokes: 12, element: 'Mộc', meaning: 'Kiệt xuất kiệt hiệt phi thường xuất chúng, đứng đầu vạn người.' },
  { vietnamese: 'Trí', han: '智', strokes: 12, element: 'Hỏa', meaning: 'Trí tuệ thông thái, tinh anh sáng suốt thấu hiểu đạo lý cao thâm.' },
  { vietnamese: 'Vân', han: '雲', strokes: 12, element: 'Thủy', meaning: 'Áng mây tự do bồng bềnh thong dong thảnh thơi cát tường.' },
  { vietnamese: 'Thắng', han: '勝', strokes: 12, element: 'Kim', meaning: 'Chiến thắng thành công phi thường hưng thịnh phát triển vượt trội.' },
  { vietnamese: 'Phát', han: '發', strokes: 12, element: 'Thủy', meaning: 'Phát tài phát đạt hưng vượng giàu sang phú quý tiến lên mãnh liệt.' },

  // 13 strokes
  { vietnamese: 'Duy', han: '維', strokes: 14, element: 'Thổ', meaning: 'Gìn giữ, duy trì kỷ cương gia tộc; tư duy mẫn tiệp sâu sắc thông tuệ.' },
  { vietnamese: 'Duy', han: '唯', strokes: 11, element: 'Thổ', meaning: 'Duy nhất độc tôn quý báu ôn hòa thông thái.' },
  { vietnamese: 'Ý', han: '意', strokes: 13, element: 'Thổ', meaning: 'Ý chí quyết tâm kiên định, vạn sự như ý thuận lợi cát bảo.' },
  { vietnamese: 'Nghĩa', han: '義', strokes: 13, element: 'Thổ', meaning: 'Sống chính nghĩa, trọng tình nghĩa, hào sảng dũng khí bao dung.' },
  { vietnamese: 'Phúc', han: '福', strokes: 13, element: 'Thủy', meaning: 'Phúc lộc song toàn gặt hái ngập tràn điềm khánh, cát khánh muôn đời.' },
  { vietnamese: 'Phước', han: '福', strokes: 13, element: 'Thủy', meaning: 'Phúc lộc cát tường phúc trạch dồi dào hạnh phúc viên mãn.' },
  { vietnamese: 'Trang', han: '莊', strokes: 13, element: 'Mộc', meaning: 'Đoan trang trang nghiêm đoan chính hiền thục dung từ cát bảo.' },
  { vietnamese: 'Khê', han: '溪', strokes: 13, element: 'Thủy', meaning: 'Dòng suối mát lành thanh thanh tĩnh tĩnh tự tại hanh thông.' },
  { vietnamese: 'Liên', han: '蓮', strokes: 13, element: 'Mộc', meaning: 'Hoa sen gần bùn không hôi tanh cốt cách tôn quý thanh cao mộc mạc.' },
  { vietnamese: 'Lộc', han: '祿', strokes: 13, element: 'Hỏa', meaning: 'Tài lộc hưng vượng, lộc trời ban phát phú quý vinh hiển lâu bền.' },

  // 14 strokes
  { vietnamese: 'Gia', han: '嘉', strokes: 14, element: 'Mộc', meaning: 'Tốt lành vui vẻ khánh hỷ, gia đình êm ấm cát tường viên mãn.' },
  { vietnamese: 'Vinh', han: '榮', strokes: 14, element: 'Mộc', meaning: 'Vinh hiển vinh hoa vẻ vang phú quý, tương lai chói lọi rạng danh.' },
  { vietnamese: 'Bích', han: '碧', strokes: 14, element: 'Thủy', meaning: 'Ngọc bích xanh biếc ôn nhu hiền dịu cao sang trác việt.' },
  { vietnamese: 'Phượng', han: '鳳', strokes: 14, element: 'Thủy', meaning: 'Phượng hoàng cao quý cát tường, điềm lành hiển hách lộng lẫy cát bảo.' },

  // 15 strokes
  { vietnamese: 'Khánh', han: '慶', strokes: 15, element: 'Mộc', meaning: 'Hân hoan chào mừng điềm vui khánh hỷ cát tường phúc trạch ngập tràn.' },
  { vietnamese: 'Đức', han: '德', strokes: 15, element: 'Hỏa', meaning: 'Đạo đức nhân từ hiền hậu, đức trọng quỷ thần kinh, vạn sự thuận hòa.' },
  { vietnamese: 'Huy', han: '輝', strokes: 15, element: 'Thủy', meaning: 'Huy hoàng chói lọi, ánh sáng rực rỡ công thành danh toại hiển vinh.' },
  { vietnamese: 'Diệp', han: '葉', strokes: 15, element: 'Mộc', meaning: 'Lá ngọc cành vàng gia thế trâm anh thế phiệt tôn quý cát hỷ.' },
  { vietnamese: 'Kiều', han: '嬌', strokes: 15, element: 'Mộc', meaning: 'Kiều diễm xinh đẹp dịu dàng kiêu sa quý phái tao nhã.' },

  // 16 strokes+
  { vietnamese: 'Đạt', han: '達', strokes: 16, element: 'Hỏa', meaning: 'Thành đạt hanh thông, vươn tầm ước mơ đạt hiển hách tối cao.' },
  { vietnamese: 'Long', han: '龍', strokes: 16, element: 'Thủy', meaning: 'Rồng oai linh tôn quý phi thường đại diện cát tường quyền lực vinh hiển.' },
  { vietnamese: 'Cẩm', han: '錦', strokes: 16, element: 'Kim', meaning: 'Gấm vóc lụa là lộng lẫy hiển vinh, phú quý dư dả thịnh đạt thịnh vượng.' },
  { vietnamese: 'Vy', han: '薇', strokes: 16, element: 'Mộc', meaning: 'Hoa tường vy thanh cao mềm dẻo kiên trì bền bỉ tràn trề khí lực.' },
  { vietnamese: 'Yến', han: '燕', strokes: 16, element: 'Thổ', meaning: 'Như chim yến mang điềm báo mùa xuân cát lành êm ấm muôn phương.' },
  { vietnamese: 'Bảo', han: '寶', strokes: 20, element: 'Hỏa', meaning: 'Bảo vật tôn kính trân quý báu bối vô song rực rỡ cao sang phú quý.' },
  { vietnamese: 'Quỳnh', han: '瓊', strokes: 20, element: 'Mộc', meaning: 'Ngọc quỳnh thanh khiết hoa quỳnh dịu dàng tao nhã tinh khôi.' },
  { vietnamese: 'Linh', han: '靈', strokes: 24, element: 'Hỏa', meaning: 'Linh hoạt, linh thông huyền diệu thông minh nhạy bén xuất thần.' },
];
