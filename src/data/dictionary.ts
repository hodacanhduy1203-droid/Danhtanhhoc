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

  // 6 strokes
  { vietnamese: 'Cộng', han: '共', strokes: 6, element: 'Mộc', meaning: 'Được quý nhân nâng đỡ nâng tầm sự nghiệp.' },
  { vietnamese: 'Cát', han: '吉', strokes: 6, element: 'Mộc', meaning: 'Mang lại sự may mắn cát tường vinh hiển thịnh vượng.' },
  { vietnamese: 'Khuông', han: '匡', strokes: 6, element: 'Mộc', meaning: 'Ý chí kiên định vượt khó khăn tạo nên đại nghiệp.' },
  { vietnamese: 'Xí', han: '企', strokes: 6, element: 'Mộc', meaning: 'Chân thành, hiền hậu, thanh nhàn đắc lộc phú quý.' },
  { vietnamese: 'Khúc', han: '曲', strokes: 6, element: 'Mộc', meaning: 'Lý trí nhạy bén nghệ thuật và sáng tạo cao.' },
  { vietnamese: 'Húc', han: '旭', strokes: 6, element: 'Mộc', meaning: 'Như ánh dương buổi sớm rực rỡ cát tường thịnh vượng.' },
  { vietnamese: 'Quang', han: '光', strokes: 6, element: 'Hỏa', meaning: 'Hào quang rực rỡ, danh vọng hiển hách sau này.' },
  { vietnamese: 'An', han: '安', strokes: 6, element: 'Thổ', meaning: 'Gia đạo an bình, vạn sự thuận hòa phát lộc.' },

  // 7 strokes
  { vietnamese: 'Canh', han: '庚', strokes: 7, element: 'Kim', meaning: 'Thông minh lanh lợi, hậu vận hưng vượng.' },
  { vietnamese: 'Cốc', han: '谷', strokes: 7, element: 'Mộc', meaning: 'Thanh nhàn phú quý, phúc lộc song toàn cát tường.' },
  { vietnamese: 'Hà', han: '何', strokes: 7, element: 'Thủy', meaning: 'Dòng sông êm đềm hanh thông thuận lợi ôn hòa.' },
  { vietnamese: 'Kiến', han: '見', strokes: 7, element: 'Mộc', meaning: 'Tinh anh sáng suốt, đắc lộc cát tường về già.' },
  { vietnamese: 'Ngôn', han: '言', strokes: 7, element: 'Mộc', meaning: 'Trọng nghĩa khí, từ tốn ôn hòa đức độ.' },
  { vietnamese: 'Ngâm', han: '吟', strokes: 7, element: 'Mộc', meaning: 'Ôn hậu chân thành, phú quý thanh nhàn hưng thịnh.' },
  { vietnamese: 'Tú', han: '秀', strokes: 7, element: 'Kim', meaning: 'Thanh tú cát tường, đắc lộc vinh hiển mỹ mãn.' },

  // 8 strokes
  { vietnamese: 'Minh', han: '明', strokes: 8, element: 'Thủy', meaning: 'Thông tuệ kiệt xuất, tấm lòng trung trinh sáng tỏ.' },
  { vietnamese: 'Tùng', han: '松', strokes: 8, element: 'Mộc', meaning: 'Kiên cường, bền bỉ hiên ngang như tùng bách.' },
  { vietnamese: 'Lâm', han: '林', strokes: 8, element: 'Mộc', meaning: 'Rừng cây đại ngàn dồi dào sinh lực cát tường.' },
  { vietnamese: 'Vũ', han: '武', strokes: 8, element: 'Thủy', meaning: 'Hùng dũng, phi thường dũng cảm mưu lược lớn.' },
];
