"use client";

import { useState } from "react";
import { Leaf, Sun, Recycle, Users, Wind, Droplets, Zap, ChevronRight, AlertTriangle, Wheat } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ModularCalculator() {
    const [peopleCount, setPeopleCount] = useState<number>(150);

    // Checklist states
    const [isSolarSuitable, setIsSolarSuitable] = useState(true);
    const [isWindSuitable, setIsWindSuitable] = useState(false);
    const [isAgriSuitable, setIsAgriSuitable] = useState(true);
    const [isRainSuitable, setIsRainSuitable] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setPeopleCount(Math.min(Math.max(0, value), 50000));
        } else if (e.target.value === "") {
            setPeopleCount(0);
        }
    };

    // Calculations based on people count and active switches
    const calculateEnergy = () => {
        if (peopleCount === 0) return { panels: 0, turbines: 0, warning: "" };
        if (isSolarSuitable && isWindSuitable) {
            return { panels: Math.ceil(peopleCount * 1.5), turbines: Math.ceil(peopleCount / 50), warning: "" };
        } else if (isSolarSuitable) {
            return { panels: Math.ceil(peopleCount * 3), turbines: 0, warning: "" };
        } else if (isWindSuitable) {
            return { panels: 0, turbines: Math.ceil(peopleCount / 25), warning: "" };
        } else {
            return { panels: 0, turbines: 0, warning: "Şebeke Ana Bağlantısı Şart" };
        }
    };

    const calculateFood = () => {
        if (peopleCount === 0) return { vertical: 0, land: 0 };
        if (isAgriSuitable) {
            return { vertical: Math.ceil(peopleCount / 100), land: Math.ceil(peopleCount * 25) };
        } else {
            return { vertical: Math.ceil(peopleCount / 20), land: 0 };
        }
    };

    const calculateWater = () => {
        if (peopleCount === 0) return { tanks: 0, greyWater: 0 };
        const greyWater = Math.ceil(peopleCount / 200);
        if (isRainSuitable) {
            return { tanks: Math.ceil(peopleCount * 0.5), greyWater };
        } else {
            return { tanks: 0, greyWater };
        }
    };

    const energy = calculateEnergy();
    const food = calculateFood();
    const water = calculateWater();

    return (
        <Card className="w-full bg-white shadow-2xl shadow-stone-200/50 border-stone-100 rounded-[2.5rem] overflow-hidden mt-16">

            {/* Header - Kişi Sayısı Girişi */}
            <CardHeader className="bg-gradient-to-br from-stone-50 to-white border-b border-stone-100 pb-10 pt-12 px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-3 text-center md:text-left">
                        <CardTitle className="text-3xl md:text-4xl text-stone-900 font-extrabold tracking-tight">Ekoköyünüzü Planlayın</CardTitle>
                        <CardDescription className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
                            Hedeflediğiniz nüfus ve sahanızın coğrafi özelliklerine göre gereken tüm altyapı modüllerini hesaplayın.
                        </CardDescription>
                    </div>

                    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded-3xl border border-stone-200 shadow-lg shadow-stone-100/50 w-full md:w-auto shrink-0 transition-transform hover:scale-[1.02]">
                        <div className="flex items-center gap-3 w-full justify-center px-4">
                            <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0">
                                <Users className="w-6 h-6 text-stone-600" />
                            </div>
                            <div className="flex-col flex">
                                <label className="text-xs font-bold text-stone-500 uppercase tracking-widest block mb-1">
                                    Tahmini Nüfus
                                </label>
                                <Input
                                    type="number"
                                    value={peopleCount || ""}
                                    onChange={handleInputChange}
                                    className="h-10 text-2xl font-black bg-transparent border-none p-0 focus-visible:ring-0 w-32 shadow-none text-stone-900 placeholder:text-stone-300"
                                    min={0}
                                    max={50000}
                                />
                            </div>
                        </div>
                        <div className="w-full px-2 pt-2">
                            <Slider
                                value={[peopleCount]}
                                min={0}
                                max={5000}
                                step={25}
                                onValueChange={(val) => setPeopleCount(val[0])}
                                className="w-full cursor-grab"
                            />
                        </div>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-0">
                <div className="grid lg:grid-cols-12 min-h-[400px]">

                    {/* Sol Kolon: Saha Uygunluk Checlist'i */}
                    <div className="lg:col-span-4 bg-stone-50/50 p-8 md:p-10 border-r border-stone-100 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-stone-800 border-b border-stone-200 pb-4 mb-6 flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-emerald-600" />
                            Saha Özellikleri
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between space-x-4 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm transition-colors hover:border-amber-200">
                                <Label htmlFor="solar" className="flex flex-col space-y-1.5 cursor-pointer">
                                    <span className="font-bold text-stone-700 flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-amber-500" /> Güneş Enerjisi
                                    </span>
                                    <span className="text-sm text-stone-500 font-medium">Bölge güneş paneline uygun mu?</span>
                                </Label>
                                <Switch id="solar" checked={isSolarSuitable} onCheckedChange={setIsSolarSuitable} className="data-[state=checked]:bg-amber-500" />
                            </div>

                            <div className="flex items-center justify-between space-x-4 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm transition-colors hover:border-cyan-200">
                                <Label htmlFor="wind" className="flex flex-col space-y-1.5 cursor-pointer">
                                    <span className="font-bold text-stone-700 flex items-center gap-2">
                                        <Wind className="w-4 h-4 text-cyan-600" /> Rüzgar Enerjisi
                                    </span>
                                    <span className="text-sm text-stone-500 font-medium">Bölge rüzgar türbinine uygun mu?</span>
                                </Label>
                                <Switch id="wind" checked={isWindSuitable} onCheckedChange={setIsWindSuitable} className="data-[state=checked]:bg-cyan-600" />
                            </div>

                            <div className="flex items-center justify-between space-x-4 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm transition-colors hover:border-emerald-200">
                                <Label htmlFor="agri" className="flex flex-col space-y-1.5 cursor-pointer">
                                    <span className="font-bold text-stone-700 flex items-center gap-2">
                                        <Wheat className="w-4 h-4 text-emerald-600" /> Toprak Tarımı
                                    </span>
                                    <span className="text-sm text-stone-500 font-medium">Açık tarla/üretim imkanı var mı?</span>
                                </Label>
                                <Switch id="agri" checked={isAgriSuitable} onCheckedChange={setIsAgriSuitable} className="data-[state=checked]:bg-emerald-600" />
                            </div>

                            <div className="flex items-center justify-between space-x-4 bg-white p-4 rounded-2xl border border-stone-100 shadow-sm transition-colors hover:border-blue-200">
                                <Label htmlFor="rain" className="flex flex-col space-y-1.5 cursor-pointer">
                                    <span className="font-bold text-stone-700 flex items-center gap-2">
                                        <Droplets className="w-4 h-4 text-blue-500" /> Yağmur Hasadı
                                    </span>
                                    <span className="text-sm text-stone-500 font-medium">Yağış rejimi depolamaya uygun mu?</span>
                                </Label>
                                <Switch id="rain" checked={isRainSuitable} onCheckedChange={setIsRainSuitable} className="data-[state=checked]:bg-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Sağ Kolon: Dinamik Sonuçlar */}
                    <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-center bg-white">
                        <h3 className="text-xl font-bold text-stone-800 pb-4 mb-2 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-500" />
                            Gereken Altyapı Modülleri
                        </h3>

                        <div className="grid sm:grid-cols-3 gap-6">

                            {/* Enerji Sonucu */}
                            <div className="bg-stone-50 border border-stone-100 rounded-[2rem] p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                                <h4 className="font-bold text-stone-800 mb-6 flex items-center justify-between">
                                    Enerji <ChevronRight className="w-4 h-4 text-stone-400" />
                                </h4>

                                {energy.warning ? (
                                    <div className="flex flex-col items-center justify-center flex-1 text-center text-stone-400 bg-stone-100/50 rounded-2xl p-4">
                                        <AlertTriangle className="w-8 h-8 mb-2 text-rose-400" />
                                        <span className="text-sm font-semibold text-rose-600">{energy.warning}</span>
                                    </div>
                                ) : (
                                    <div className="space-y-4 flex-1">
                                        {energy.panels > 0 && (
                                            <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                                    <Sun className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-amber-600 leading-none">{energy.panels}</div>
                                                    <div className="text-xs font-bold text-stone-500 uppercase mt-1">Solar Panel</div>
                                                </div>
                                            </div>
                                        )}
                                        {energy.turbines > 0 && (
                                            <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                                                    <Wind className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-black text-cyan-700 leading-none">{energy.turbines}</div>
                                                    <div className="text-xs font-bold text-stone-500 uppercase mt-1">Rüzgar Türbini</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Gıda Sonucu */}
                            <div className="bg-stone-50 border border-stone-100 rounded-[2rem] p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                                <h4 className="font-bold text-stone-800 mb-6 flex items-center justify-between">
                                    Gıda <ChevronRight className="w-4 h-4 text-stone-400" />
                                </h4>
                                <div className="space-y-4 flex-1">
                                    {food.vertical > 0 && (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                                <Leaf className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-emerald-600 leading-none">{food.vertical} <span className="text-sm font-medium text-stone-400">Ünite</span></div>
                                                <div className="text-xs font-bold text-stone-500 uppercase mt-1">Dikey Tarım</div>
                                            </div>
                                        </div>
                                    )}
                                    {food.land > 0 ? (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                                                <Wheat className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-stone-700 leading-none">{food.land} <span className="text-sm font-medium text-stone-400">m²</span></div>
                                                <div className="text-xs font-bold text-stone-500 uppercase mt-1">Tarla Alanı</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4 opacity-50">
                                            <div className="text-xs font-bold text-stone-400 uppercase text-center w-full">Açık Tarla Kapalı</div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Su ve Atık Sonucu */}
                            <div className="bg-stone-50 border border-stone-100 rounded-[2rem] p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                                <h4 className="font-bold text-stone-800 mb-6 flex items-center justify-between">
                                    Su & Atık <ChevronRight className="w-4 h-4 text-stone-400" />
                                </h4>
                                <div className="space-y-4 flex-1">
                                    {water.tanks > 0 ? (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                                <Droplets className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-blue-600 leading-none">{water.tanks} <span className="text-sm font-medium text-stone-400">Ton</span></div>
                                                <div className="text-xs font-bold text-stone-500 uppercase mt-1">Su Deposu</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4 opacity-50">
                                            <div className="text-xs font-bold text-stone-400 uppercase text-center w-full">Depolama Yok</div>
                                        </div>
                                    )}
                                    {water.greyWater > 0 && (
                                        <div className="bg-white rounded-2xl p-4 border border-stone-100 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center shrink-0">
                                                <Recycle className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-black text-stone-700 leading-none">{water.greyWater} <span className="text-sm font-medium text-stone-400">Sistem</span></div>
                                                <div className="text-xs font-bold text-stone-500 uppercase mt-1">Gri Su Arıtma</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
