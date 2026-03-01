import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Leaf } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t-8 border-emerald-800">
            <div className="max-w-7xl mx-auto px-6 border-b border-stone-800 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

                    {/* 1. Sütun: Hakkımızda */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0">
                                <Leaf className="w-5 h-5 text-emerald-300" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">Bozkırın Kalbi<br /><span className="text-sm font-normal text-emerald-400">Kadın Girişim Kooperatifi</span></h3>
                        </div>
                        <p className="text-stone-400 leading-relaxed text-sm lg:text-base font-light">
                            Türkiye&apos;den Türk Dünyasına uzanan, kadın emeğiyle inşa edilen dayanıklı ve kendi kendine yeten mahalleler vizyonu. Doğayla uyumlu, sürdürülebilir gelecek için birlikte üretiyoruz.
                        </p>
                    </div>

                    {/* 2. Sütun: Hızlı Bağlantılar */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide uppercase text-sm">Hızlı Bağlantılar</h4>
                        <ul className="space-y-3 font-medium text-sm lg:text-base">
                            <li>
                                <Link href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors"></span> Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors"></span> Vizyonumuz
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors"></span> Kapasite Hesaplayıcı
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-emerald-500 transition-colors"></span> Proje Yol Haritası
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Sütun: İletişim */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide uppercase text-sm">İletişim</h4>
                        <ul className="space-y-4 font-light text-sm lg:text-base">
                            <li className="flex items-start gap-4 hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Merkez Ofis</strong><br />
                                    Çankaya, Ankara / Türkiye
                                </span>
                            </li>
                            <li className="flex items-center gap-4 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <a href="mailto:bilgi@bozkirineli.com">bilgi@bozkirineli.com</a>
                            </li>
                            <li className="flex items-center gap-4 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <a href="tel:+903120000000">+90 (312) 000 00 00</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Alt Kısım: Telif ve Sosyal Medya */}
            <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
                <p>© {new Date().getFullYear()} Bozkırın Kalbi Kadın Girişim Kooperatifi. Tüm hakları saklıdır.</p>

                <div className="flex items-center gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-700 hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
