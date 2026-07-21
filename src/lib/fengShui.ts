import { Solar } from 'lunar-javascript';
import { SURNAMES, MALE_NAMES, FEMALE_NAMES, HanCharacter } from '../data/dictionary';

export type Wuxing = 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';

export interface BaziInfo {
  year: string;
  yearWuXing: string;
  month: string;
  monthWuXing: string;
  day: string;
  dayWuXing: string;
  time: string;
  timeWuXing: string;
  missingElements: Wuxing[];
  elementsCount: Record<Wuxing, number>;
  dungThan: Wuxing;
  hyThan: Wuxing;
  kyThan: Wuxing;
}

const translateCanChi = (str: string) => {
  const map: Record<string, string> = {
    '甲': 'Giáp', '乙': 'Ất', '丙': 'Bính', '丁': 'Đinh', '戊': 'Mậu', '己': 'Kỷ', '庚': 'Canh', '辛': 'Tân', '壬': 'Nhâm', '癸': 'Quý',
    '子': 'Tý', '丑': 'Sửu', '寅': 'Dần', '卯': 'Mão', '辰': 'Thìn', '巳': 'Tỵ', '午': 'Ngọ', '未': 'Mùi', '申': 'Thân', '酉': 'Dậu', '戌': 'Tuất', '亥': 'Hợi'
  };
  return str.split('').map(c => map[c] || c).join(' ');
};

const translateWuXing = (str: string) => {
  const map: Record<string, string> = {
    '金': 'Kim', '木': 'Mộc', '水': 'Thủy', '火': 'Hỏa', '土': 'Thổ'
  };
  return str.split('').map(c => map[c] || c).join(' ');
};

export function getBaziInfo(date: Date): BaziInfo {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();
  const bazi = lunar.getEightChar();
  
  const yearWuXing = bazi.getYearWuXing();
  const monthWuXing = bazi.getMonthWuXing();
  const dayWuXing = bazi.getDayWuXing();
  const timeWuXing = bazi.getTimeWuXing();

  const elementsCount: Record<Wuxing, number> = {
    'Kim': 0, 'Mộc': 0, 'Thủy': 0, 'Hỏa': 0, 'Thổ': 0
  };

  const allElements = yearWuXing + monthWuXing + dayWuXing + timeWuXing;
  
  for (let i = 0; i < allElements.length; i++) {
    const char = allElements[i];
    if (char === '金') elementsCount['Kim']++;
    if (char === '木') elementsCount['Mộc']++;
    if (char === '水') elementsCount['Thủy']++;
    if (char === '火') elementsCount['Hỏa']++;
    if (char === '土') elementsCount['Thổ']++;
  }

  const missingElements: Wuxing[] = [];
  (Object.keys(elementsCount) as Wuxing[]).forEach((el) => {
    if (elementsCount[el] === 0) {
      missingElements.push(el);
    }
  });

  // Calculate Dung Than, Hy Than, Ky Than according to classical academic balance
  const sortedElements = (Object.keys(elementsCount) as Wuxing[])
    .map(el => ({ element: el, count: elementsCount[el] }))
    .sort((a, b) => a.count - b.count);

  const dungThan = sortedElements[0].element;
  const hyThan = sortedElements[1].element;
  const kyThan = sortedElements[sortedElements.length - 1].element;

  return {
    year: translateCanChi(bazi.getYear()),
    yearWuXing: translateWuXing(yearWuXing),
    month: translateCanChi(bazi.getMonth()),
    monthWuXing: translateWuXing(monthWuXing),
    day: translateCanChi(bazi.getDay()),
    dayWuXing: translateWuXing(dayWuXing),
    time: translateCanChi(bazi.getTime()),
    timeWuXing: translateWuXing(timeWuXing),
    missingElements,
    elementsCount,
    dungThan,
    hyThan,
    kyThan
  };
}

export function getElementFromStrokes(strokes: number): Wuxing {
  const lastDigit = strokes % 10;
  if (lastDigit === 1 || lastDigit === 2) return 'Mộc';
  if (lastDigit === 3 || lastDigit === 4) return 'Hỏa';
  if (lastDigit === 5 || lastDigit === 6) return 'Thổ';
  if (lastDigit === 7 || lastDigit === 8) return 'Kim';
  return 'Thủy'; // 9, 0
}

export function isAuspicious(strokes: number): boolean {
  const goodNumbers = [1, 3, 5, 7, 8, 11, 13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 61, 63, 65, 67, 68, 81];
  const semiGoodNumbers = [6, 26, 27, 30, 38, 40, 42, 43, 51, 55, 71, 73, 75, 77, 78];
  
  return goodNumbers.includes(strokes) || semiGoodNumbers.includes(strokes);
}

// "Khoa Học Đặt Tên & Bí Mật Vận Mệnh" - Phonetic elements logic (Ngũ Âm phát âm tiếng Việt)
// Căn cứ vào Ngũ âm cổ thư ứng dụng cho chữ quốc ngữ:
// - Nha âm (Mộc - phát âm từ răng hàm): G, K, KH
// - Thiệt âm (Hỏa - phát âm từ đầu lưỡi): D, Đ, L, N, T, TH, TR, CH, GI
// - Môi âm (Thủy - phát âm từ môi): B, M, P, PH, V, NH
// - Sỉ âm (Kim - phát âm qua khe răng): C, Q, R, S, X
// - Cổ âm (Thổ - phát âm từ cổ họng): A, Ă, Â, E, Ê, I, O, Ô, Ơ, U, Ư, Y, H
export function getPhoneticElement(name: string): Wuxing {
  if (!name) return 'Thổ';
  const cleanName = name.trim().toUpperCase();
  
  // Kiểm tra 2 ký tự đầu trước (các phụ âm ghép)
  if (cleanName.startsWith('KH')) return 'Mộc';
  if (cleanName.startsWith('TR') || cleanName.startsWith('TH') || cleanName.startsWith('CH') || cleanName.startsWith('GI')) return 'Hỏa';
  if (cleanName.startsWith('PH') || cleanName.startsWith('NH')) return 'Thủy';
  
  // Sau đó kiểm tra ký tự đầu tiên
  const firstChar = cleanName.charAt(0);
  
  // Nha âm (Mộc)
  if (firstChar === 'G' || firstChar === 'K') return 'Mộc';
  
  // Thiệt âm (Hỏa)
  if (['D', 'Đ', 'L', 'N', 'T'].includes(firstChar)) return 'Hỏa';
  
  // Môi âm (Thủy)
  if (['B', 'M', 'P', 'V'].includes(firstChar)) return 'Thủy';
  
  // Sỉ âm (Kim)
  if (['C', 'Q', 'R', 'S', 'X'].includes(firstChar)) return 'Kim';
  
  // Cổ âm (Thổ) - Bao gồm nguyên âm và phụ âm họng 'H'
  const vowelsAndGuttural = ['A', 'Ă', 'Â', 'E', 'Ê', 'I', 'O', 'Ô', 'Ơ', 'U', 'Ư', 'Y', 'H'];
  if (vowelsAndGuttural.includes(firstChar)) return 'Thổ';
  
  return 'Thổ'; // Mặc định dự phòng
}

export function checkPhoneticHarmony(surEl: Wuxing, midEl: Wuxing | null, firstEl: Wuxing): boolean {
  const isOvercoming = (a: Wuxing, b: Wuxing) => {
    if (a === 'Mộc' && b === 'Thổ') return true;
    if (a === 'Thổ' && b === 'Thủy') return true;
    if (a === 'Thủy' && b === 'Hỏa') return true;
    if (a === 'Hỏa' && b === 'Kim') return true;
    if (a === 'Kim' && b === 'Mộc') return true;
    return false;
  };

  if (midEl) {
    if (isOvercoming(surEl, midEl) || isOvercoming(midEl, surEl)) return false;
    if (isOvercoming(midEl, firstEl) || isOvercoming(firstEl, midEl)) return false;
    return true;
  } else {
    if (isOvercoming(surEl, firstEl) || isOvercoming(firstEl, surEl)) return false;
    return true;
  }
}

export interface TamTai {
  combination: string;
  status: 'Cát' | 'Bình' | 'Hung';
  description: string;
}

export function getTamTaiEvaluation(thien: Wuxing, nhan: Wuxing, dia: Wuxing): TamTai {
  const combo = `${thien}-${nhan}-${dia}`;
  
  const exactCombo: Record<string, { status: 'Cát' | 'Bình' | 'Hung'; description: string }> = {
    'Mộc-Mộc-Mộc': {
      status: 'Cát',
      description: 'Ý chí kiên định, học vấn uyên thâm, gia cảnh hưng vượng, con cháu hiếu thảo, đắc lộc cát tường.'
    },
    'Mộc-Mộc-Hỏa': {
      status: 'Cát',
      description: 'Được quý nhân nâng đỡ, tiền tài hanh thông, danh lợi vẹn toàn, gia đình hạnh phúc mỹ mãn.'
    },
    'Mộc-Mộc-Thổ': {
      status: 'Cát',
      description: 'Sự nghiệp thăng tiến vững chắc, đời sống vật chất dư dả, hậu vận an khang, sức khỏe trường thọ.'
    },
    'Mộc-Hỏa-Thổ': {
      status: 'Cát',
      description: 'Thiên địa giao hòa, gia đạo thịnh vượng, công thành danh toại, hậu thế hiển đạt tôn quý (Đại Cát).'
    },
    'Mộc-Hỏa-Hỏa': {
      status: 'Cát',
      description: 'Năng lượng dồi dào, phát đạt nhanh chóng nhưng cần kiềm chế tính nóng nảy để giữ vững bền lâu.'
    },
    'Mộc-Hỏa-Mộc': {
      status: 'Cát',
      description: 'Sự nghiệp hanh thông, trường thọ, gia đình thuận hòa, tài lộc dồi dào gặt hái thành tựu.'
    },
    'Thủy-Mộc-Hỏa': {
      status: 'Cát',
      description: 'Ngũ hành tương sinh tuần hoàn, quý nhân đắc lực, công danh hiển hách, hậu vận đại cát đại lợi.'
    },
    'Thủy-Mộc-Mộc': {
      status: 'Cát',
      description: 'Nền tảng vững vàng, ý chí sắt đá, dễ phát đạt, trung niên đạt vinh hoa phú quý phát tài.'
    },
    'Thủy-Mộc-Thủy': {
      status: 'Cát',
      description: 'Tài lộc dồi dào, cuộc sống sung túc trọn vẹn, được mọi người quý mến giúp đỡ vượt khó khăn.'
    },
    'Hỏa-Thổ-Kim': {
      status: 'Cát',
      description: 'Sinh khí dồi dào, mưu cầu việc gì cũng thành công, hậu vận giàu sang phú quý tôn kính.'
    },
    'Hỏa-Thổ-Thổ': {
      status: 'Cát',
      description: 'Bản tính ôn hòa, vững chãi, mưu trí kiên định, cuộc đời an nhàn vượt qua gian khổ.'
    },
    'Thổ-Kim-Thủy': {
      status: 'Cát',
      description: 'Kim thủy tương sinh, hanh thông đắc lộc, tư chất thông minh xuất chúng, sự nghiệp thăng hoa.'
    },
    'Thổ-Kim-Kim': {
      status: 'Cát',
      description: 'Tính cách kiên nghị, thẳng thắn, được cấp trên cất nhắc giúp đỡ, tiền tài hanh thông phát lộc.'
    },
    'Kim-Thủy-Mộc': {
      status: 'Cát',
      description: 'Trí tuệ trác việt, tài lộc cuộn chảy tự nhiên, cuộc đời hạnh phúc viên mãn vinh hiển gia thế.'
    },
    'Kim-Thủy-Thủy': {
      status: 'Cát',
      description: 'Gia đạo ôn hòa, tài lộc dồi dào, cuộc đời tự do tự tại không lo nghĩ phiền muộn, sức khỏe tốt.'
    },
    
    // Inauspicious combinations (Hung)
    'Kim-Mộc-Thổ': {
      status: 'Hung',
      description: 'Kim khắc Mộc, Mộc khắc Thổ. Gặp nhiều trắc trở, bị chèn ép gò bó, dễ mắc các bệnh về gan và dạ dày.'
    },
    'Thủy-Hỏa-Kim': {
      status: 'Hung',
      description: 'Thủy khắc Hỏa, Hỏa khắc Kim. Tâm lý bất an, gia đạo dễ rạn nứt bất hòa, cuộc sống bấp bênh không ổn định.'
    },
    'Mộc-Thổ-Thủy': {
      status: 'Hung',
      description: 'Mộc khắc Thổ, Thổ khắc Thủy. Thường bị tiểu nhân hãm hại, làm việc gì cũng nửa đường đứt gánh, hao tổn tài lộc.'
    },
    'Hỏa-Kim-Mộc': {
      status: 'Hung',
      description: 'Hỏa khắc Kim, Kim khắc Mộc. Ý chí lung lay, dễ gặp tai ương bất ngờ, sức khỏe kém, gia đạo bất an.'
    },
    'Thổ-Thủy-Hỏa': {
      status: 'Hung',
      description: 'Thổ khắc Thủy, Thủy khắc Hỏa. Cuộc đời chìm nổi bấp bênh, gia đạo trớ trêu, tinh thần mệt mỏi nặng nề.'
    }
  };

  if (exactCombo[combo]) {
    return { combination: combo, ...exactCombo[combo] };
  }

  // Fallback calculation rule
  const isGenerating = (a: Wuxing, b: Wuxing) => {
    if (a === b) return true;
    if (a === 'Mộc' && b === 'Hỏa') return true;
    if (a === 'Hỏa' && b === 'Thổ') return true;
    if (a === 'Thổ' && b === 'Kim') return true;
    if (a === 'Kim' && b === 'Thủy') return true;
    if (a === 'Thủy' && b === 'Mộc') return true;
    return false;
  };

  const isOvercoming = (a: Wuxing, b: Wuxing) => {
    if (a === 'Mộc' && b === 'Thổ') return true;
    if (a === 'Thổ' && b === 'Thủy') return true;
    if (a === 'Thủy' && b === 'Hỏa') return true;
    if (a === 'Hỏa' && b === 'Kim') return true;
    if (a === 'Kim' && b === 'Mộc') return true;
    return false;
  };

  if (isGenerating(thien, nhan) && isGenerating(nhan, dia)) {
    return {
      combination: combo,
      status: 'Cát',
      description: 'Mô hình tương sinh liên hoàn cát tường, được trời đất bảo hộ, sự nghiệp phát triển thuận lợi vững vàng.'
    };
  }

  if (isOvercoming(thien, nhan) || isOvercoming(nhan, dia)) {
    return {
      combination: combo,
      status: 'Hung',
      description: 'Ngũ hành tương khắc cục diện xung đột, làm việc khó thành, dễ gặp điều cản trở mệt mỏi dồn dập.'
    };
  }

  return {
    combination: combo,
    status: 'Bình',
    description: 'Ngũ hành bình hòa tương đối ổn định, cuộc đời ít thăng trầm lớn, cần nỗ lực bền bỉ đạt cát tường viên mãn.'
  };
}

export interface NguCach {
  thienCach: { strokes: number, element: Wuxing, isGood: boolean };
  nhanCach: { strokes: number, element: Wuxing, isGood: boolean };
  diaCach: { strokes: number, element: Wuxing, isGood: boolean };
  ngoaiCach: { strokes: number, element: Wuxing, isGood: boolean };
  tongCach: { strokes: number, element: Wuxing, isGood: boolean };
  goodCount: number;
  tamTai: TamTai;
}

export function calculateNguCach(surName: HanCharacter, middleName: HanCharacter | null, firstName: HanCharacter): NguCach {
  const S1 = surName.strokes;
  const M1 = middleName ? middleName.strokes : 0;
  const F1 = firstName.strokes;

  // Thien = Surname + 1 (for single char) or Surname (for double char)
  const thien = surName.char.length > 1 ? S1 : S1 + 1;
  // Nhan = Surname + Middle
  const nhan = S1 + (M1 || F1); // If no middle name, use First Name
  // Dia = Middle + First Name (If no middle name, First Name + 1)
  const dia = M1 ? (M1 + F1) : (F1 + 1);
  // Tong = Sum of all
  const tong = S1 + M1 + F1;
  // Ngoai = Tong - Nhan + 1 (For 3-word name, it's usually First Name + 1. For 2-word, it's 2)
  const ngoai = M1 ? (F1 + 1) : 2;

  const thienEl = getElementFromStrokes(thien);
  const nhanEl = getElementFromStrokes(nhan);
  const diaEl = getElementFromStrokes(dia);

  const result = {
    thienCach: { strokes: thien, element: thienEl, isGood: isAuspicious(thien) },
    nhanCach: { strokes: nhan, element: nhanEl, isGood: isAuspicious(nhan) },
    diaCach: { strokes: dia, element: diaEl, isGood: isAuspicious(dia) },
    ngoaiCach: { strokes: ngoai, element: getElementFromStrokes(ngoai), isGood: isAuspicious(ngoai) },
    tongCach: { strokes: tong, element: getElementFromStrokes(tong), isGood: isAuspicious(tong) },
    goodCount: 0,
    tamTai: getTamTaiEvaluation(thienEl, nhanEl, diaEl)
  };

  let count = 0;
  if (result.thienCach.isGood) count++;
  if (result.nhanCach.isGood) count++;
  if (result.diaCach.isGood) count++;
  if (result.ngoaiCach.isGood) count++;
  if (result.tongCach.isGood) count++;
  result.goodCount = count;

  return result;
}

export interface SuggestedName {
  fullName: string;
  surName: HanCharacter;
  middleName: HanCharacter | null;
  firstName: HanCharacter;
  nguCach: NguCach;
  score: number;
  matchElement: boolean;
  dungThanMatch: boolean;
  hyThanMatch: boolean;
  phoneticElements: Wuxing[];
  phoneticHarmonious: boolean;
  bookTheoriesFeedback: string[];
}

export function suggestNames(surNameStr: string, gender: 'Nam' | 'Nữ', bazi: BaziInfo): SuggestedName[] {
  const surName = SURNAMES[surNameStr];
  if (!surName) return [];

  const nameDict = gender === 'Nam' ? MALE_NAMES : FEMALE_NAMES;
  
  const suggestions: SuggestedName[] = [];
  const names = Object.keys(nameDict);
  const targetElements = bazi.missingElements.length > 0 ? bazi.missingElements : ['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'];

  const evaluateAndPush = (m: string | null, f: string) => {
    const fn = nameDict[f];
    const mn = m ? ({ ...MALE_NAMES, ...FEMALE_NAMES }[m] || null) : null;
    
    const nguCach = calculateNguCach(surName, mn, fn);
    
    // Core Scoring Engine based on the 5 Books' theories
    let currentScore = nguCach.goodCount * 10; // Max 50 points from Ngu Cach
    
    let dungThanMatch = false;
    let hyThanMatch = false;
    const targetEl = bazi.dungThan;
    const supportEl = bazi.hyThan;
    const obstacleEl = bazi.kyThan;
    
    const nameElements = mn ? [mn.element, fn.element] : [fn.element];
    if (nameElements.includes(targetEl)) {
      dungThanMatch = true;
      currentScore += 12;
    }
    if (nameElements.includes(supportEl)) {
      hyThanMatch = true;
      currentScore += 8;
    }
    if (nameElements.includes(obstacleEl)) {
      currentScore -= 5;
    }
    
    // Thần Kỷ Kinh: Nhan Cach is the soul (Max 15 points)
    let nhanCachBonus = 0;
    if (nguCach.nhanCach.isGood) {
      nhanCachBonus += 8;
    }
    if (nguCach.nhanCach.element === targetEl || nguCach.nhanCach.element === supportEl) {
      nhanCachBonus += 7;
    }
    currentScore += nhanCachBonus;
    
    // Khoa Học Đặt Tên & Bí Mật Vận Mệnh: Phonetic harmony (Max 15 points)
    const surPhonetic = getPhoneticElement(surNameStr);
    const midPhonetic = m ? getPhoneticElement(m) : null;
    const firstPhonetic = getPhoneticElement(f);
    const phoneticElements = m ? [surPhonetic, midPhonetic, firstPhonetic] : [surPhonetic, firstPhonetic];
    const phoneticHarmonious = checkPhoneticHarmony(surPhonetic, midPhonetic, firstPhonetic);
    if (phoneticHarmonious) {
      currentScore += 15;
    } else {
      currentScore += 5;
    }
    
    // Tam Tài Nhân Duyên Thư (Max 15 points)
    if (nguCach.tamTai.status === 'Cát') {
      currentScore += 15;
    } else if (nguCach.tamTai.status === 'Bình') {
      currentScore += 5;
    } else {
      currentScore -= 10;
    }

    const finalScore = Math.min(100, Math.max(10, currentScore));
    
    // Generate qualitative book theories feedback for the user interface
    const bookTheoriesFeedback: string[] = [];
    
    // 1. Thần Kỷ Kinh
    if (nguCach.nhanCach.isGood) {
      bookTheoriesFeedback.push(`Thần Kỷ Kinh: Nhân Cách [${nguCach.nhanCach.strokes} nét - ${nguCach.nhanCach.element}] đạt Cát tinh, gia tăng bản lĩnh và kích hoạt vinh hiển.`);
    } else {
      bookTheoriesFeedback.push(`Thần Kỷ Kinh: Nhân Cách [${nguCach.nhanCach.strokes} nét] chưa đạt cát, khuyên phối hợp cùng nỗ lực hậu thiên.`);
    }
    
    // 2. Ngũ Hành Danh Tánh Học Luận
    if (dungThanMatch) {
      bookTheoriesFeedback.push(`Ngũ Hành Luận: Tự hình bổ khuyết trực tiếp cho Dụng Thần [${targetEl}] của Bát tự, điều hòa chân khí khí lực.`);
    } else if (hyThanMatch) {
      bookTheoriesFeedback.push(`Ngũ Hành Luận: Chữ thuộc hành [${supportEl}] là Hỷ Thần trợ lực, củng cố sinh khí bản mệnh vững vàng.`);
    } else {
      bookTheoriesFeedback.push(`Ngũ Hành Luận: Ngũ hành tự hình bình hòa, không gây xung khắc hay bế tắc với Bát tự tiên thiên.`);
    }
    
    // 3. Khoa Học Đặt Tên & Bí Mật Vận Mệnh
    if (phoneticHarmonious) {
      const phoneticFlow = m ? `${surPhonetic} ➔ ${midPhonetic} ➔ ${firstPhonetic}` : `${surPhonetic} ➔ ${firstPhonetic}`;
      bookTheoriesFeedback.push(`Bí Mật Vận Mệnh: Âm luật phát âm [${phoneticFlow}] tương sinh hài hòa, kích hoạt sóng rung cát lành.`);
    } else {
      bookTheoriesFeedback.push(`Bí Mật Vận Mệnh: Luồng âm thanh bình hòa, âm hưởng ôn nhu, khuyên dùng cách gọi tên trìu mến.`);
    }
    
    // 4. Tam Tài Nhân Duyên Thư
    bookTheoriesFeedback.push(`Tam Tài Nhân Duyên: Phối hợp Thiên - Nhân - Địa [${nguCach.tamTai.combination}] đạt bậc [${nguCach.tamTai.status}], ${nguCach.tamTai.description.split('.')[0]}.`);

    suggestions.push({
      fullName: m ? `${surNameStr} ${m} ${f}` : `${surNameStr} ${f}`,
      surName,
      middleName: mn,
      firstName: fn,
      nguCach,
      score: finalScore,
      matchElement: targetElements.includes(fn.element) || (mn !== null && targetElements.includes(mn.element)),
      dungThanMatch,
      hyThanMatch,
      phoneticElements,
      phoneticHarmonious,
      bookTheoriesFeedback
    });
  };

  // Two-word names
  for (const f of names) {
    evaluateAndPush(null, f);
  }

  // Three-word names
  const middleNames = gender === 'Nam'
    ? ['Minh', 'Đức', 'Bảo', 'Gia', 'An', 'Thành', 'Quang', 'Khánh', 'Thanh', 'Bình', 'Nhật']
    : ['Ngọc', 'Anh', 'Phương', 'Thảo', 'Hân', 'Thu', 'Cẩm', 'Mai', 'Yến', 'Châu', 'Hương', 'An'];
  const allDict = { ...MALE_NAMES, ...FEMALE_NAMES };
  
  for (const m of middleNames) {
    if (!allDict[m]) continue;
    for (const f of names) {
      if (m === f) continue;
      evaluateAndPush(m, f);
    }
  }

  // Sort by finalScore desc, then matchElement first
  return suggestions.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (a.matchElement && !b.matchElement) return -1;
    if (!a.matchElement && b.matchElement) return 1;
    return 0;
  }).slice(0, 15);
}
