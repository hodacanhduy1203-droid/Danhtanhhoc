import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBaziInfo, suggestNames, evaluateCustomName, BaziInfo } from './lib/fengShui';
import { SURNAMES, LOOKUP_DICTIONARY } from './data/dictionary';
import { REFERENCE_BOOKS } from './data/books';

export default function App() {
  const [fatherSurname, setFatherSurname] = useState('Nguyễn');
  const [gender, setGender] = useState<'Nam' | 'Nữ'>('Nam');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'dating' | 'evaluate' | 'dictionary' | 'books'>('dating');
  const [customFullName, setCustomFullName] = useState('');

  // Search state for dictionary
  const [searchQuery, setSearchQuery] = useState('');
  const [filterElement, setFilterElement] = useState<string>('Tất cả');
  const [filterStrokes, setFilterStrokes] = useState<string>('Tất cả');

  const baziData = useMemo(() => {
    if (!submitted || !birthDate || !birthTime) return null;
    try {
      const [year, month, day] = birthDate.split('-');
      const [hour, minute] = birthTime.split(':');
      const date = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
      return getBaziInfo(date);
    } catch (e) {
      return null;
    }
  }, [submitted, birthDate, birthTime]);

  const baziDataForEvaluation = useMemo(() => {
    if (!birthDate || !birthTime) return null;
    try {
      const [year, month, day] = birthDate.split('-');
      const [hour, minute] = birthTime.split(':');
      const date = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
      return getBaziInfo(date);
    } catch (e) {
      return null;
    }
  }, [birthDate, birthTime]);

  const evaluatedResult = useMemo(() => {
    if (!customFullName || !baziDataForEvaluation) return null;
    return evaluateCustomName(customFullName, baziDataForEvaluation);
  }, [customFullName, baziDataForEvaluation]);

  const suggestions = useMemo(() => {
    if (!baziData || !fatherSurname) return [];
    return suggestNames(fatherSurname, gender, baziData);
  }, [baziData, fatherSurname, gender]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Filter dictionary items
  const filteredDict = useMemo(() => {
    return LOOKUP_DICTIONARY.filter(item => {
      const matchesSearch = 
        item.vietnamese.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.han.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesElement = filterElement === 'Tất cả' || item.element === filterElement;
      const matchesStrokes = filterStrokes === 'Tất cả' || item.strokes === Number(filterStrokes);
      return matchesSearch && matchesElement && matchesStrokes;
    });
  }, [searchQuery, filterElement, filterStrokes]);

  // Unique strokes in dictionary for filtering
  const uniqueStrokesList = useMemo(() => {
    const set = new Set<number>();
    LOOKUP_DICTIONARY.forEach(item => set.add(item.strokes));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans overflow-y-auto" style={{ background: 'radial-gradient(circle at center, #161625 0%, #0A0A0F 100%)', backgroundColor: '#0A0A0F' }}>
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 p-4 sm:p-8">
        
        <header className="text-center py-6 border-b border-white/10 bg-black/40 backdrop-blur-md rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.05)]">
          <div className="flex justify-center mb-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <span className="text-black font-bold text-lg">☯</span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-widest uppercase text-amber-500 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Lạc Việt Danh Tánh</h1>
          <p className="text-white/60 max-w-lg mx-auto text-[10px] sm:text-xs tracking-widest uppercase">
            Hỗ trợ đặt tên cát tường kết hợp Ngũ Hành Bát Tự & Tam Tài
          </p>

          {/* Navigation Tabs */}
          <div className="flex justify-center mt-6 gap-2 px-4 flex-wrap">
            <button
              onClick={() => setActiveTab('dating')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'dating' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              ☯ Đặt Tên Phong Thủy
            </button>
            <button
              onClick={() => setActiveTab('evaluate')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'evaluate' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              🔍 Kiểm Tra Họ Tên
            </button>
            <button
              onClick={() => setActiveTab('dictionary')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'dictionary' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              📖 Tra Cứu Hán Tự
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'books' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              📚 Cổ Thư & Tài Liệu
            </button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'dating' ? (
            <motion.div
              key="dating-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-8 items-start w-full"
            >
              {/* Form Section */}
              <section className="w-full md:w-1/3 bg-black/20 p-6 rounded-2xl border border-white/10 shrink-0 shadow-xl">
                <div className="space-y-1 mb-6">
                  <h2 className="text-xs uppercase tracking-widest text-amber-500/80 font-semibold">Thông Tin Bé</h2>
                  <p className="text-[10px] text-white/40 italic">Nhập chính xác để tính toán tứ trụ</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Họ của cha</label>
                    <select 
                      value={fatherSurname}
                      onChange={(e) => { setFatherSurname(e.target.value); setSubmitted(false); }}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                    >
                      {Object.keys(SURNAMES).map(sn => (
                        <option key={sn} value={sn} className="bg-[#161625] text-slate-100">{sn} ({SURNAMES[sn].strokes} nét)</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Giới tính</label>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => { setGender('Nam'); setSubmitted(false); }}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors ${gender === 'Nam' ? 'bg-amber-500 text-black' : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'}`}
                      >
                        Nam
                      </button>
                      <button 
                        type="button"
                        onClick={() => { setGender('Nữ'); setSubmitted(false); }}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors ${gender === 'Nữ' ? 'bg-amber-500 text-black' : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'}`}
                      >
                        Nữ
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Ngày sinh (DL)</label>
                    <input 
                      type="date" 
                      value={birthDate}
                      onChange={(e) => { setBirthDate(e.target.value); setSubmitted(false); }}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Giờ sinh</label>
                    <input 
                      type="time" 
                      value={birthTime}
                      onChange={(e) => { setBirthTime(e.target.value); setSubmitted(false); }}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="mt-4 w-full py-3.5 bg-gradient-to-r from-amber-600 to-amber-400 text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-[0_4px_20px_rgba(217,119,6,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Khởi Tạo Danh Tánh
                  </button>
                </form>
              </section>

              {/* Results Section */}
              <section className="w-full md:w-2/3 flex flex-col gap-8">
                <AnimatePresence mode="wait">
                  {submitted && baziData && (
                    <motion.div 
                      key="results"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col gap-8 w-full"
                    >
                      {/* Bazi Card */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
                        <h3 className="text-sm uppercase tracking-widest text-amber-500 mb-6 relative z-10">Phân Tích Tứ Trụ & Ngũ Hành</h3>
                        
                        <div className="grid grid-cols-4 gap-4 mb-6 text-center relative z-10">
                          <div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-[10px] text-amber-500/80 uppercase tracking-widest font-semibold">Trụ Giờ</span>
                            <span className="font-serif text-lg font-medium text-white mt-1">{baziData.time}</span>
                            <span className="text-xs text-white/60">{baziData.timeWuXing}</span>
                          </div>
                          <div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-[10px] text-amber-500/80 uppercase tracking-widest font-semibold">Trụ Ngày</span>
                            <span className="font-serif text-lg font-medium text-white mt-1">{baziData.day}</span>
                            <span className="text-xs text-white/60">{baziData.dayWuXing}</span>
                          </div>
                          <div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-[10px] text-amber-500/80 uppercase tracking-widest font-semibold">Trụ Tháng</span>
                            <span className="font-serif text-lg font-medium text-white mt-1">{baziData.month}</span>
                            <span className="text-xs text-white/60">{baziData.monthWuXing}</span>
                          </div>
                          <div className="flex flex-col gap-1 p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-[10px] text-amber-500/80 uppercase tracking-widest font-semibold">Trụ Năm</span>
                            <span className="font-serif text-lg font-medium text-white mt-1">{baziData.year}</span>
                            <span className="text-xs text-white/60">{baziData.yearWuXing}</span>
                          </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-xl relative z-10 flex flex-col gap-4">
                          <div>
                            <h4 className="text-[10px] uppercase tracking-widest text-amber-500 mb-2 font-semibold">Thống Kê Cục Diện Ngũ Hành</h4>
                            <div className="flex flex-wrap gap-4 text-xs text-amber-200/80">
                              {Object.entries(baziData.elementsCount).map(([el, count]) => (
                                <span key={el} className={count === 0 ? "font-bold text-red-400" : ""}>
                                  {el}: {count}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 border-t border-amber-500/20 pt-3">
                            <div className="p-2 bg-black/40 border border-amber-500/10 rounded-lg text-center">
                              <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">Dụng Thần</span>
                              <span className="text-sm font-serif font-semibold text-white">{baziData.dungThan}</span>
                              <span className="text-[8px] text-white/40 block mt-0.5">(Cần bổ trợ nhất)</span>
                            </div>
                            <div className="p-2 bg-black/40 border border-amber-500/10 rounded-lg text-center">
                              <span className="text-[9px] uppercase tracking-wider text-amber-400 font-bold block mb-0.5">Hỷ Thần</span>
                              <span className="text-sm font-serif font-semibold text-white">{baziData.hyThan}</span>
                              <span className="text-[8px] text-white/40 block mt-0.5">(Trợ lực sinh khí)</span>
                            </div>
                            <div className="p-2 bg-black/40 border border-red-500/10 rounded-lg text-center">
                              <span className="text-[9px] uppercase tracking-wider text-red-400 font-bold block mb-0.5">Kỵ Thần</span>
                              <span className="text-sm font-serif font-semibold text-white">{baziData.kyThan}</span>
                              <span className="text-[8px] text-white/40 block mt-0.5">(Nên hạn chế dùng)</span>
                            </div>
                          </div>

                          <div className="text-xs border-t border-amber-500/20 pt-3 text-white/70 space-y-1.5">
                            {baziData.missingElements.length > 0 ? (
                              <p className="leading-relaxed">
                                <span className="font-bold text-red-400 uppercase tracking-wider text-[9px]">Khuyết Thiếu:</span> {baziData.missingElements.join(', ')}. Thuyết Đàm Trúc Quân khuyên bổ khuyết trực tiếp cho <span className="text-emerald-400 font-bold">Dụng Thần {baziData.dungThan}</span> để đạt trạng thái cân bằng lý tưởng nhất.
                              </p>
                            ) : (
                              <p className="leading-relaxed">
                                Bát Tự cân bằng tự nhiên, Dụng Thần bổ khuyết chính yếu là hành <span className="text-emerald-400 font-bold">{baziData.dungThan}</span> giúp củng cố bản mệnh phát triển toàn diện.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Suggestions List */}
                      <div className="flex flex-col gap-4">
                        <h3 className="text-sm uppercase tracking-widest text-amber-500 mb-2">Đề Xuất Danh Tánh Thượng Cát</h3>
                        
                        {suggestions.length === 0 ? (
                          <p className="text-white/40 text-xs tracking-wider p-6 text-center bg-white/5 rounded-xl border border-white/10">Chưa tìm thấy tên phù hợp hoàn toàn.</p>
                        ) : (
                          <div className="grid grid-cols-1 gap-4">
                            {suggestions.map((s, idx) => (
                              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors group relative overflow-hidden flex flex-col gap-4">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <div className="flex items-start justify-between relative z-10">
                                  <div>
                                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                      <h4 className="text-2xl font-serif text-white tracking-wide">
                                        {s.fullName}
                                      </h4>
                                      <span className="text-[10px] text-white/40 font-mono">
                                        ({s.phoneticElements.join(' ➔ ')})
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-white/50 mt-1">
                                      Ý nghĩa chữ chính: <span className="italic text-amber-200/80">{s.firstName.meaning}</span>
                                    </p>
                                  </div>
                                  <div className="flex flex-col items-end gap-1.5">
                                    <span className="text-xl font-serif text-amber-500 flex items-baseline gap-1 font-bold">
                                      {s.score} <span className="text-[9px] uppercase opacity-60 font-sans tracking-widest font-normal">/100 điểm</span>
                                    </span>
                                    <div className="flex flex-wrap gap-1 justify-end">
                                      {s.dungThanMatch && (
                                        <span className="text-[9px] text-emerald-400 font-medium uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Đắc Dụng Thần</span>
                                      )}
                                      {s.hyThanMatch && (
                                        <span className="text-[9px] text-amber-400 font-medium uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Trợ Hỷ Thần</span>
                                      )}
                                      {s.phoneticHarmonious && (
                                        <span className="text-[9px] text-cyan-400 font-medium uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Âm Dương Sinh</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Ngu Cach Grid */}
                                <div className="grid grid-cols-5 gap-2 text-center relative z-10">
                                  <CachBlock name="Thiên" data={s.nguCach.thienCach} />
                                  <CachBlock name="Nhân" data={s.nguCach.nhanCach} />
                                  <CachBlock name="Địa" data={s.nguCach.diaCach} />
                                  <CachBlock name="Ngoại" data={s.nguCach.ngoaiCach} />
                                  <CachBlock name="Tổng" data={s.nguCach.tongCach} />
                                </div>

                                {/* Book Theories Evaluation */}
                                <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex flex-col gap-2 relative z-10">
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Luận Giải Cổ Thư & Khoa Học Danh Tánh</span>
                                    <span className="text-[8px] bg-amber-500/10 text-amber-300 px-1.5 py-0.5 rounded font-mono">Chính Tông Học Thuật</span>
                                  </div>
                                  <ul className="list-disc list-inside text-[11px] text-white/80 space-y-1.5 leading-relaxed pl-1">
                                    {s.bookTheoriesFeedback.map((feedback, fIdx) => (
                                      <li key={fIdx} className="marker:text-amber-500/60">
                                        {feedback}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                    </motion.div>
                  )}
                  {!submitted && (
                    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-white/20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02] w-full">
                      <span className="text-4xl mb-4 opacity-50">☯</span>
                      <p className="text-xs uppercase tracking-widest">Khởi tạo thông tin để xem luận giải</p>
                    </div>
                  )}
                </AnimatePresence>
              </section>
            </motion.div>
          ) : activeTab === 'evaluate' ? (
            <motion.div
              key="evaluate-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-8 items-start w-full"
            >
              {/* Left Form: Bazi & Name Input */}
              <section className="w-full md:w-1/3 bg-black/20 p-6 rounded-2xl border border-white/10 shrink-0 shadow-xl space-y-6">
                <div className="space-y-1">
                  <h2 className="text-xs uppercase tracking-widest text-amber-500/80 font-semibold">Thông Tin Bản Mệnh</h2>
                  <p className="text-[10px] text-white/40 italic">Nhập ngày giờ sinh để đối chiếu Ngũ Hành</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Ngày sinh (DL)</label>
                    <input 
                      type="date" 
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Giờ sinh</label>
                    <input 
                      type="time" 
                      value={birthTime}
                      onChange={(e) => setBirthTime(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xs uppercase tracking-widest text-amber-500/80 font-semibold font-sans">Họ Tên Cần Kiểm Tra</h2>
                    <p className="text-[10px] text-white/40 italic">Nhập đầy đủ Họ, Tên đệm và Tên chính</p>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase opacity-50 tracking-widest">Họ & Tên đầy đủ</label>
                    <input 
                      type="text" 
                      value={customFullName}
                      onChange={(e) => setCustomFullName(e.target.value)}
                      placeholder="Ví dụ: Nguyễn Minh Đức"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-100 placeholder-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                </div>
              </section>

              {/* Right Results: Evaluation Breakdown */}
              <section className="w-full md:w-2/3 flex flex-col gap-6 w-full">
                {!birthDate || !birthTime ? (
                  <div className="flex flex-col items-center justify-center min-h-[350px] text-white/20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02] p-6 text-center w-full">
                    <span className="text-3xl mb-3">📅</span>
                    <p className="text-xs uppercase tracking-widest max-w-sm leading-relaxed">Vui lòng nhập Ngày sinh & Giờ sinh trước để hệ thống thiết lập Tứ Trụ bản mệnh.</p>
                  </div>
                ) : !customFullName ? (
                  <div className="flex flex-col items-center justify-center min-h-[350px] text-white/20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02] p-6 text-center w-full">
                    <span className="text-3xl mb-3">✍️</span>
                    <p className="text-xs uppercase tracking-widest max-w-sm leading-relaxed">Nhập đầy đủ Họ và Tên bên trái để hệ thống lập quẻ khoa học danh tánh học.</p>
                  </div>
                ) : !evaluatedResult ? (
                  <div className="flex flex-col items-center justify-center min-h-[350px] text-white/20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02] p-6 text-center w-full">
                    <span className="text-3xl mb-3">⚠️</span>
                    <p className="text-xs uppercase tracking-widest max-w-sm leading-relaxed">Vui lòng nhập tên có ít nhất 2 chữ (Họ và Tên chính).</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 w-full">
                    
                    {/* Bazi Context Block */}
                    {baziDataForEvaluation && (
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden shadow-lg w-full">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold font-sans">Bản Mệnh Đối Chiếu</h4>
                          <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded font-mono">Bát Tự Tứ Trụ</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 bg-black/30 border border-amber-500/10 rounded-lg text-center">
                            <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block mb-0.5">Dụng Thần</span>
                            <span className="text-sm font-serif font-semibold text-white">{baziDataForEvaluation.dungThan}</span>
                          </div>
                          <div className="p-2 bg-black/30 border border-amber-500/10 rounded-lg text-center">
                            <span className="text-[9px] uppercase tracking-wider text-amber-400 font-bold block mb-0.5">Hỷ Thần</span>
                            <span className="text-sm font-serif font-semibold text-white">{baziDataForEvaluation.hyThan}</span>
                          </div>
                          <div className="p-2 bg-black/30 border border-red-500/10 rounded-lg text-center">
                            <span className="text-[9px] uppercase tracking-wider text-red-400 font-bold block mb-0.5">Kỵ Thần</span>
                            <span className="text-sm font-serif font-semibold text-white">{baziDataForEvaluation.kyThan}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Evaluation Result Card */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-5 relative overflow-hidden shadow-xl w-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
                      
                      <div className="flex items-start justify-between border-b border-white/5 pb-5 flex-wrap gap-4">
                        <div>
                          <div className="flex flex-wrap items-baseline gap-2 mb-1">
                            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                              {evaluatedResult.fullName}
                            </h3>
                            <span className="text-xs text-white/40 font-mono">
                              ({evaluatedResult.phoneticElements.join(' ➔ ')})
                            </span>
                          </div>
                          <p className="text-[11px] text-white/50">
                            Họ Tên tự hình quốc ngữ, tra cứu vận mệnh khoa học
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 shrink-0 ml-auto">
                          <span className="text-2xl sm:text-3xl font-serif text-amber-500 flex items-baseline gap-1 font-bold">
                            {evaluatedResult.score} <span className="text-[10px] uppercase opacity-60 font-sans tracking-widest font-normal text-white/60">/100 điểm</span>
                          </span>
                          <div className="flex flex-wrap gap-1 justify-end">
                            {evaluatedResult.dungThanMatch && (
                              <span className="text-[9px] text-emerald-400 font-medium uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Đắc Dụng Thần</span>
                            )}
                            {evaluatedResult.hyThanMatch && (
                              <span className="text-[9px] text-amber-400 font-medium uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Trợ Hỷ Thần</span>
                            )}
                            {evaluatedResult.phoneticHarmonious && (
                              <span className="text-[9px] text-cyan-400 font-medium uppercase tracking-wider bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">Âm Dương Sinh</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Characters Breakdown */}
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold">Tầm Nguyên Tự Hình Chi Tiết</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          
                          {/* Họ */}
                          <div className="p-3 bg-black/20 border border-white/5 rounded-xl space-y-1">
                            <div className="flex justify-between items-baseline">
                              <span className="text-xs font-serif text-amber-400 font-bold">{evaluatedResult.surName.char} ({evaluatedResult.surName.strokes} nét)</span>
                              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-white/60">{evaluatedResult.surName.element}</span>
                            </div>
                            <span className="text-[10px] uppercase opacity-40 font-semibold block tracking-wider mt-1">Vai trò: Họ (Hạ thiên)</span>
                            <p className="text-[11px] text-white/70 italic leading-snug">{evaluatedResult.surName.meaning}</p>
                          </div>

                          {/* Tên Đệm */}
                          {evaluatedResult.middleName ? (
                            <div className="p-3 bg-black/20 border border-white/5 rounded-xl space-y-1">
                              <div className="flex justify-between items-baseline">
                                <span className="text-xs font-serif text-amber-400 font-bold">{evaluatedResult.middleName.char} ({evaluatedResult.middleName.strokes} nét)</span>
                                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-white/60">{evaluatedResult.middleName.element}</span>
                              </div>
                              <span className="text-[10px] uppercase opacity-40 font-semibold block tracking-wider mt-1">Vai trò: Đệm (Nhân duyên)</span>
                              <p className="text-[11px] text-white/70 italic leading-snug">{evaluatedResult.middleName.meaning}</p>
                            </div>
                          ) : (
                            <div className="p-3 bg-black/10 border border-dashed border-white/5 rounded-xl flex items-center justify-center text-white/20 text-[10px] uppercase tracking-wider font-semibold">
                              Không có đệm
                            </div>
                          )}

                          {/* Tên Chính */}
                          <div className="p-3 bg-black/20 border border-white/5 rounded-xl space-y-1">
                            <div className="flex justify-between items-baseline">
                              <span className="text-xs font-serif text-amber-400 font-bold">{evaluatedResult.firstName.char} ({evaluatedResult.firstName.strokes} nét)</span>
                              <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-white/60">{evaluatedResult.firstName.element}</span>
                            </div>
                            <span className="text-[10px] uppercase opacity-40 font-semibold block tracking-wider mt-1">Vai trò: Tên (Hậu thiên)</span>
                            <p className="text-[11px] text-white/70 italic leading-snug">{evaluatedResult.firstName.meaning}</p>
                          </div>

                        </div>
                      </div>

                      {/* Ngu Cach Grid */}
                      <div className="space-y-2 border-t border-white/5 pt-5">
                        <h4 className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold">Cục Diện Ngũ Cách Phong Thủy</h4>
                        <div className="grid grid-cols-5 gap-2 text-center relative z-10">
                          <CachBlock name="Thiên" data={evaluatedResult.nguCach.thienCach} />
                          <CachBlock name="Nhân" data={evaluatedResult.nguCach.nhanCach} />
                          <CachBlock name="Địa" data={evaluatedResult.nguCach.diaCach} />
                          <CachBlock name="Ngoại" data={evaluatedResult.nguCach.ngoaiCach} />
                          <CachBlock name="Tổng" data={evaluatedResult.nguCach.tongCach} />
                        </div>
                      </div>

                      {/* Theories Feedback */}
                      <div className="bg-black/30 border border-white/5 rounded-xl p-4 flex flex-col gap-2 relative z-10 w-full">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Luận Giải Cổ Thư & Khoa Học Danh Tánh</span>
                          <span className="text-[8px] bg-amber-500/10 text-amber-300 px-1.5 py-0.5 rounded font-mono">Chính Tông Học Thuật</span>
                        </div>
                        <ul className="list-disc list-inside text-[11px] text-white/80 space-y-1.5 leading-relaxed pl-1">
                          {evaluatedResult.bookTheoriesFeedback.map((feedback, fIdx) => (
                            <li key={fIdx} className="marker:text-amber-500/60">
                              {feedback}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                )}
              </section>
            </motion.div>
          ) : activeTab === 'dictionary' ? (
            <motion.div
              key="dictionary-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Filter and Search Bar */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên hoặc Hán tự (ví dụ: An, Mộc, Cửu...)..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <div className="flex flex-col gap-1 w-full md:w-36">
                    <label className="text-[9px] uppercase opacity-40 tracking-wider font-semibold">Ngũ hành</label>
                    <select
                      value={filterElement}
                      onChange={(e) => setFilterElement(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
                    >
                      <option value="Tất cả" className="bg-[#161625]">Tất cả</option>
                      <option value="Kim" className="bg-[#161625]">Kim</option>
                      <option value="Mộc" className="bg-[#161625]">Mộc</option>
                      <option value="Thủy" className="bg-[#161625]">Thủy</option>
                      <option value="Hỏa" className="bg-[#161625]">Hỏa</option>
                      <option value="Thổ" className="bg-[#161625]">Thổ</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1 w-full md:w-36">
                    <label className="text-[9px] uppercase opacity-40 tracking-wider font-semibold">Số nét</label>
                    <select
                      value={filterStrokes}
                      onChange={(e) => setFilterStrokes(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-slate-100 focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
                    >
                      <option value="Tất cả" className="bg-[#161625]">Tất cả</option>
                      {uniqueStrokesList.map(st => (
                        <option key={st} value={st} className="bg-[#161625]">{st} nét</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Characters List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDict.length === 0 ? (
                  <div className="col-span-full py-16 text-center text-white/30 text-xs uppercase tracking-widest border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                    Không tìm thấy từ nào phù hợp với bộ lọc
                  </div>
                ) : (
                  filteredDict.map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-xl relative overflow-hidden flex flex-col gap-3 group hover:bg-white/10 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-serif text-white font-medium">{item.vietnamese}</span>
                          <span className="text-2xl font-serif text-amber-500 font-bold">{item.han}</span>
                        </div>
                        <div className="flex gap-1.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400">
                            {item.element}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 border border-white/10 text-white/60">
                            {item.strokes} nét
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed border-t border-white/5 pt-2 italic">
                        {item.meaning}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="books-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-6 w-full"
            >
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
                <h3 className="text-sm uppercase tracking-widest text-amber-500 mb-2 font-semibold">Tài Liệu & Cổ Thư Danh Tánh Học</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Tổng hợp các tác phẩm kinh điển và hiện đại uy tín về học thuật danh tánh học, bát tự, lý số âm dương ngũ hành. Các tác phẩm này cung cấp nền tảng lý thuyết sâu sắc cho phương pháp luận đang được áp dụng trong hệ thống.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {REFERENCE_BOOKS.map((book, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-lg font-serif font-semibold text-amber-400 leading-snug">{book.title}</h4>
                        <span className="shrink-0 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/60 font-medium">
                          {book.era}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Tác giả: {book.author}</p>
                      <p className="text-xs text-white/70 leading-relaxed mt-2">{book.description}</p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 p-3.5 rounded-xl text-xs">
                      <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 block mb-1">Cốt tủy học thuật:</span>
                      <p className="text-amber-200/90 italic leading-relaxed">"{book.keyTakeaway}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CachBlock({ name, data }: { name: string; data: { strokes: number; element: string; isGood: boolean } }) {
  return (
    <div className={`p-2 rounded-lg border ${data.isGood ? 'bg-amber-500/10 border-amber-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
      <div className="text-[10px] uppercase opacity-60 text-slate-100 tracking-widest mb-1">{name}</div>
      <div className="text-white/90 font-serif text-sm">{data.strokes} nét</div>
      <div className="text-white/60 text-[10px] mt-0.5">{data.element}</div>
      <div className={`mt-1.5 text-[9px] font-bold uppercase tracking-widest ${data.isGood ? 'text-amber-400' : 'text-red-400'}`}>
        {data.isGood ? 'Cát' : 'Hung'}
      </div>
    </div>
  );
}
