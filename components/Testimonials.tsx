import React from "react";

export default function Testimonials() {
    return (
        <section id="testimoni" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-lime/30 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-lime/20 text-gray-900 text-sm font-semibold mb-4">Testimoni</span>
                    <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Apa Kata <span className="text-primary">Pelanggan Kami</span></h2>
                    <p className="text-gray-600 text-lg">Lebih 10,000 penjawat awam telah mempercayai Kredit Rakyat.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { label: 'Rating Purata', value: '4.9/5' },
                        { label: 'Pelanggan', value: '10,000+' },
                        { label: 'Kadar Kelulusan', value: '98%' },
                        { label: 'Masa Respons', value: '24 Jam' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                            <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { img: '11', name: 'Ahmad bin Abdullah', job: 'Guru, SMK Kuala Lumpur', amount: 'RM50,000', review: 'Proses yang sangat pantas dan mudah. Saya memohon pada pagi Isnin dan wang sudah masuk akaun pada petang yang sama.', stars: 5 },
                        { img: '5', name: 'Siti Nurhaliza', job: 'Jururawat, HKL', amount: 'RM35,000', review: 'Saya ada masalah CTOS sedikit tapi Kredit Rakyat tetap bantu untuk mendapatkan kelulusan. Kadar yang ditawarkan juga lebih baik!', stars: 5 },
                        { img: '3', name: 'Muhammad Rizal', job: 'Pegawai, Kementerian', amount: 'RM80,000', review: 'Penyatuan hutang berjaya mengurangkan komitmen bulanan saya dari RM1,200 kepada RM800. Penjimatan yang besar!', stars: 5 },
                        { init: 'K', color: 'from-blue-500 to-blue-600', name: 'Kumaravel', job: 'Pegawai Teknik, JKR', amount: 'RM60,000', review: 'Pilihan koperasi yang banyak dan boleh bandingkan kadar. Staff consultant sangat professional dan tidak pushy.', stars: 4.5 },
                        { init: 'F', color: 'from-purple-500 to-purple-600', name: 'Faridah Hassan', job: 'Pegawai, JAIN', amount: 'RM45,000', review: 'Dari segi patuh syariah, saya yakin dengan Kredit Rakyat. Semua dokumen jelas dan transparent. Tiada caj tersembunyi.', stars: 5 },
                        { init: 'Z', color: 'from-orange-500 to-orange-600', name: 'Zulkifli', job: 'Polis Bantuan, IPD', amount: 'RM120,000', review: 'Pinjaman perumahan untuk program LPHS berjaya diluluskan dalam masa 2 hari. Staff sangat knowledgeable.', stars: 5 },
                    ].map((test, i) => (
                        <div key={i} className="testimonial-card gradient-border bg-white rounded-3xl p-8 shadow-lg relative">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(Math.floor(test.stars))].map((_, idx) => (
                                    <i key={idx} className="fas fa-star star-rating text-yellow-400 text-sm"></i>
                                ))}
                                {test.stars % 1 !== 0 && <i className="fas fa-star-half-alt star-rating text-yellow-400 text-sm"></i>}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{test.review}"</p>
                            <div className="flex items-center gap-4">
                                {test.img ? (
                                    <img src={`https://i.pravatar.cc/150?img=${test.img}`} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                                ) : (
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold ${test.color}`}>{test.init}</div>
                                )}
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">{test.name}</p>
                                    <p className="text-xs text-gray-500">{test.job}</p>
                                    <span className="inline-block mt-1 px-2 py-0.5 bg-lime/20 text-limeDark text-[10px] rounded-full font-bold">{test.amount}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
