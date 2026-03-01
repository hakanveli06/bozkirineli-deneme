import { Sprout, Building2, Globe } from "lucide-react";

export function ProjectTimeline() {
    const phases = [
        {
            id: "faz-1",
            title: "Faz 1: Pilot Proje (0-12 Ay)",
            target: "800-1.000 Kişi",
            description: "Sistemin ilk kurulumu, entegrasyon testleri ve modüllerin çalışabilirliğinin kanıtlanması. Temel gıda, enerji ve su altyapısının devreye alınması.",
            icon: <Sprout className="w-6 h-6 text-emerald-600" />,
            color: "emerald"
        },
        {
            id: "faz-2",
            title: "Faz 2: İlk Genişleme (12-24 Ay)",
            target: "1.500-2.000 Kişi",
            description: "Modül sayılarının artırılması, sosyal tesislerin entegrasyonu ve kooperatif pazar ağının tam kapasite çalışmaya başlaması.",
            icon: <Building2 className="w-6 h-6 text-amber-600" />,
            color: "amber"
        },
        {
            id: "faz-3",
            title: "Faz 3: Dayanıklı Mahalle ve Küresel Vizyon (24-48 Ay)",
            target: "4.000-5.000 Kişi",
            description: "Tam otonom mahalle konseptinin tamamlanması ve bu başarılı modelin Türkiye geneline ve Türk Dünyası coğrafyasına ihraç edilmeye başlanması.",
            icon: <Globe className="w-6 h-6 text-cyan-600" />,
            color: "cyan"
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto mt-32 px-4 sm:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">Proje Yol Haritası</h2>
                <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light">
                    Hedeflerimize ulaşmak için planlı, sağlam ve modüler adımlarla ilerliyoruz.
                </p>
            </div>

            <div className="relative border-l-4 border-stone-200/60 ml-6 md:ml-12 space-y-12 pb-12">
                {phases.map((phase, index) => (
                    <div key={phase.id} className="relative pl-10 md:pl-16 group">
                        {/* Timeline Çizgisi ve İkonu */}
                        <div className={`absolute -left-6 md:-left-8 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-${phase.color}-200 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-${phase.color}-300 transition-all duration-300 z-10`}>
                            <div className={`w-8 h-8 md:w-12 md:h-12 bg-${phase.color}-50 rounded-full flex items-center justify-center`}>
                                {phase.icon}
                            </div>
                        </div>

                        {/* İçerik Kartı */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-stone-200/40 border border-stone-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <h3 className={`text-2xl font-bold text-stone-900 group-hover:text-${phase.color}-700 transition-colors`}>
                                    {phase.title}
                                </h3>
                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-${phase.color}-50 text-${phase.color}-700 border border-${phase.color}-100 shrink-0`}>
                                    Hedef Nüfus: {phase.target}
                                </span>
                            </div>
                            <p className="text-lg text-stone-600 leading-relaxed font-light">
                                {phase.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
