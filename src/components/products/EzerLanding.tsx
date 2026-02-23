'use client';

import React from 'react';
import Link from 'next/link';
import {
    CheckCircle2,
    ArrowRight,
    Clock,
    ShieldCheck,
    TrendingUp,
    Calendar,
    FileText,
    Users,
    Activity,
    Lock
} from 'lucide-react';
import { Product } from '@/data/product';

interface EzerLandingProps {
    product: Product;
}

const EzerLanding: React.FC<EzerLandingProps> = ({ product }) => {
    return (
        <div className="bg-white font-sans text-slate-800 selection:bg-brand-gold/30">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-brand-navy">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-gold blur-[150px] rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white blur-[150px] rounded-full" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Ezer Enterprise v4.2</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                            Home Care on <span className="text-brand-gold">Autopilot.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                            The administrative backbone for top-tier care agencies. Stop fighting paperwork and start scaling your operational profitability with Ezer.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-12 py-5 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl flex items-center justify-center group"
                            >
                                REQUEST DEMO
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link
                                href="#features"
                                className="w-full sm:w-auto px-12 py-5 bg-white/5 text-white text-[12px] font-black uppercase tracking-[0.2em] border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                EXPLORE SYSTEM
                            </Link>
                        </div>
                    </div>

                    {/* Dashboard Mockup Placeholder */}
                    <div className="mt-24 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold/20 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative aspect-[16/9] bg-slate-900 rounded-[2rem] border border-white/10 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                            {/* Visual Representation of Dashboard */}
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-brand-gold rounded-lg"></div>
                                        <div className="w-32 h-4 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-red-500/50"></div>
                                        <div className="w-4 h-4 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-4 h-4 rounded-full bg-green-500/50"></div>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-12 gap-8">
                                    <div className="col-span-3 space-y-4">
                                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 bg-white/5 rounded-lg w-full"></div>)}
                                    </div>
                                    <div className="col-span-9 grid grid-cols-2 gap-8">
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <div className="w-1/2 h-4 bg-brand-gold/20 rounded mb-4"></div>
                                            <div className="space-y-3">
                                                <div className="w-full h-8 bg-white/10 rounded"></div>
                                                <div className="w-full h-8 bg-white/10 rounded"></div>
                                                <div className="w-2/3 h-8 bg-white/10 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                            <div className="w-1/2 h-4 bg-brand-gold/20 rounded mb-4"></div>
                                            <div className="h-32 bg-brand-gold/5 rounded-xl border border-brand-gold/10 relative">
                                                <div className="absolute inset-x-4 bottom-4 h-1/2 bg-brand-gold/20 rounded-t-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">The Industry Reality</span>
                            <h2 className="text-3xl md:text-4xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                The <span className="text-red-500/80">Paperwork Tax</span> is killing your growth.
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                                Most home-care agencies lose 30% of their operational capacity to manual scheduling, compliance tracing, and miscommunication.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-red-500/60" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-brand-navy uppercase mb-2 tracking-tight">Scheduling Chaos</h4>
                                        <p className="text-xs text-slate-400 font-medium">Manual coordination leads to missed visits and frustrated caregivers.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-red-500/60" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-brand-navy uppercase mb-2 tracking-tight">Compliance Anxiety</h4>
                                        <p className="text-xs text-slate-400 font-medium">Audit risks increase with every handwritten log and physical folder.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 flex flex-col justify-center">
                                <div className="text-center mb-12">
                                    <span className="text-6xl font-black text-brand-navy tracking-tighter leading-none mb-2 block">30%</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Waste Recovery Potential</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-gold w-full transition-all duration-1000"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-brand-navy/40">
                                        <span>Manual Tracking Cost</span>
                                        <span>High Risk</span>
                                    </div>
                                </div>
                                <div className="mt-12 p-6 bg-brand-navy text-white rounded-2xl text-center">
                                    <p className="text-xs font-bold leading-relaxed italic opacity-80">
                                        "Since switching to Ezer, our admin team has reclaimed 40 hours a week previously spent on scheduling drills."
                                    </p>
                                </div>
                            </div>
                            {/* Decorative gold ring */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-brand-gold/10 rounded-full -z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities - Grid Layout */}
            <section id="features" className="py-32 relative overflow-hidden bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">Performance Infrastructure</span>
                        <h2 className="text-5xl md:text-7xl font-black text-brand-navy uppercase tracking-tighter leading-[0.85] mb-8">
                            Command & <br /><span className="text-brand-gold/80">Control.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {product.coreFeatures.map((feature, idx) => (
                            <div key={idx} className="group p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(7,42,82,0.12)] hover:scale-[1.02] hover:border-brand-gold/30">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors duration-500">
                                    <Activity className="w-8 h-8 text-brand-gold group-hover:text-brand-navy transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-black text-brand-navy uppercase tracking-tight mb-4 group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI / Stats Section */}
            <section className="py-24 bg-brand-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold blur-[200px] rounded-full" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                        <div>
                            <span className="text-6xl font-black text-brand-gold tracking-tighter block mb-2">99.9%</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Compliance Accuracy</span>
                        </div>
                        <div>
                            <span className="text-6xl font-black text-white tracking-tighter block mb-2">-40%</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Admin Overhead</span>
                        </div>
                        <div>
                            <span className="text-6xl font-black text-white tracking-tighter block mb-2">24/7</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Real-time Intelligence</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customization & Security */}
            <section className="py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
                            <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-8">Bespoke Configuration</h3>
                            <div className="space-y-4">
                                {product.customizationOptions.map((opt, i) => (
                                    <div key={i} className="flex items-center space-x-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                        <span className="text-sm font-bold text-slate-600 uppercase tracking-tight">{opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                <Lock className="w-8 h-8 text-brand-gold" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                Built for <br /> <span className="text-brand-gold">Security First.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Medical data requires more than just encryption. Ezer is built with enterprise-grade security protocols, ensuring patient privacy and agency liability protection are never compromised.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {product.deploymentOptions.map((opt, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Available Infrastructure</span>
                                        <span className="text-sm font-black text-brand-navy uppercase tracking-tight">{opt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="bg-brand-navy rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                                Ready to reclaim <br /><span className="text-brand-gold">Your Time?</span>
                            </h2>
                            <p className="text-lg text-slate-300 font-medium leading-relaxed mb-12">
                                Join elite care agencies who have automated their administrative backbone. Schedule your free operational audit today.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-16 py-6 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl group"
                            >
                                START YOUR AUDIT
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EzerLanding;
