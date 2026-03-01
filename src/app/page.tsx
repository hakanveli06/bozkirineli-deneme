import { Leaf, Sun, Recycle, Wheat, Droplets, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ModularCalculator } from "@/components/calculator";
import { ProjectTimeline } from "@/components/timeline";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-emerald-200">

      {/* 1. Hero (Karşılama) Bölümü */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center overflow-hidden">
        {/* Arka plan görseli - Sürdürülebilir Mimari/Ekoköy temalı */}
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2727&auto=format&fit=crop"
            alt="Doğa ile iç içe mimari"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dekoratif Işıklar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply blur-3xl opacity-60"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply blur-3xl opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8 pt-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-emerald-800 text-sm font-semibold border border-stone-200 shadow-sm mb-4">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Bozkırın Kalbi Kadın Girişim Kooperatifi</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-stone-900 leading-[1.1] drop-shadow-sm">
            Kendine Yeten Siteler, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Dayanıklı Mahalleler
            </span>
          </h1>

          <p className="max-w-3xl text-xl md:text-2xl text-stone-600 leading-relaxed font-light drop-shadow-sm">
            <strong className="font-semibold text-stone-800">Kadınların gücüyle inşa edilen;</strong> afetlere dayanıklı, kendi enerjisini, gıdasını ve suyunu üreten modern ekosistemler.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-7 text-lg shadow-xl shadow-emerald-200 transition-transform hover:-translate-y-1">
              Projeyi İncele
            </Button>
            <Button size="lg" variant="outline" className="bg-white/90 backdrop-blur-sm border-2 border-stone-200 rounded-full px-8 py-7 text-lg text-stone-700 hover:bg-white hover:border-stone-300 transition-all">
              Kooperatife Katıl <ArrowRight className="ml-2 w-5 h-5 text-emerald-600" />
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Vizyon & Hikaye Bölümü */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-amber-600 font-semibold tracking-wider text-sm uppercase">
              <span className="w-8 h-0.5 bg-amber-500 rounded-full"></span> Hikayemiz
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              Geleceği inşa eden kadın dayanışması
            </h2>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed text-justify md:text-left">
              Türkiye&apos;den Türk Dünyasına uzanan, kadın girişimciliğini destekleyen kalkınma modelimizle geleceği inşa ediyoruz.
              Pandemi ve doğal afet tecrübelerimiz bize açıkça gösterdi ki; şehirlerdeki <strong className="text-stone-800">dışa bağımlılığı bitirmeli</strong>,
              kendi kendine yetebilen, dayanıklı yaşam alanları kurmalıyız.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Bozkırın Kalbi olarak vizyonumuz, her mahallesiyle üreten, paylaşan ve doğayla tam uyum içinde yaşayan bir toplum yaratmaktır.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[600px] w-full order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl group">
            {/* Kadın dayanışması, doğada üretim görseli */}
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop"
              alt="Doğayla iç içe dayanışma ve üretim"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. Temel Odak Noktalarımız Bölümü */}
      <section className="py-32 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">3 Temel Odak Noktamız</h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light">
              Şehirlerde tam bağımsız ve sürdürülebilir bir ekosistem için üzerine titrediğimiz temel prensiplerimiz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Odak 1: Gıda Üretimi */}
            <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-stone-100 overflow-hidden flex flex-col">
              {/* Kart Görseli */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2680&auto=format&fit=crop"
                  alt="Dikey Tarım ve Buğday"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-emerald-600 shadow-lg">
                  <Wheat className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Gıda Üretimi</h3>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                  Dikey tarım ile sebze/meyve, yeşil alanlarda tarla tarımı ile buğday ve un üretimi gerçekleştiriyoruz.
                </p>
                <ul className="space-y-3 text-stone-700 font-medium text-sm">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Leaf className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Acil durumlarda tam bağımsız gıda arzı</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Leaf className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>Modern kentsel tarım uygulamaları</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Odak 2: Enerji Üretimi */}
            <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-stone-100 overflow-hidden flex flex-col">
              {/* Kart Görseli */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                  alt="Güneş Panelleri ve Yenilenebilir Enerji"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-amber-500 shadow-lg">
                  <Sun className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Enerji Üretimi</h3>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                  Çatı ve otoparklarda kurduğumuz güneş panelleri ve küçük çaplı rüzgar türbinleri ile enerjimizi üretiyoruz.
                </p>
                <ul className="space-y-3 text-stone-700 font-medium text-sm">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Wind className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>Temiz ve yenilenebilir enerji altyapısı</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Wind className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span>Kendi enerjisini paylaşan akıllı sistemler</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Odak 3: Sosyal Dayanışma & Sıfır Atık */}
            <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-stone-100 overflow-hidden flex flex-col">
              {/* Kart Görseli */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop"
                  alt="Sıfır Atık ve Geri Dönüşüm"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-cyan-600 shadow-lg">
                  <Recycle className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Sosyal Dayanışma</h3>
                <p className="text-stone-600 leading-relaxed mb-6 flex-1">
                  Kooperatif ürünlerimizi pazarlıyor, kadınların üretime katılımını sağlıyor ve atıkları geri dönüştürüyoruz.
                </p>
                <ul className="space-y-3 text-stone-700 font-medium text-sm">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Droplets className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Atık suların ve yağmur suyunun geri kazanımı</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <Recycle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    <span>Kadın istihdamı ile sıfır atık felsefesi</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Hesaplayıcı Bölümü */}
          <ModularCalculator />

          {/* Yol Haritası (Timeline) Bölümü */}
          <ProjectTimeline />

        </div>
      </section>

      {/* Kurumsal Alt Bilgi (Footer) */}
      <Footer />

    </div>
  );
}
