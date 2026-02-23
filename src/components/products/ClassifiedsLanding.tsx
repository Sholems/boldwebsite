'use client';

import React from 'react';
import Link from 'next/link';
import {
    LayoutGrid,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    Zap,
    Search,
    MapPin,
    BarChart3,
    Lock,
    Globe,
    CheckCircle2
} from 'lucide-react';
import { Product } from '@/data/product';

interface ClassifiedsLandingProps {
    product: Product;
}

const ClassifiedsLanding: React.FC<ClassifiedsLandingProps> = ({ product }) => {
    return (
        <div className="bg-white font-sans text-slate-800 selection:bg-brand-gold/30">
            {/* Marketplace Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-brand-navy">
                {/* Dynamic Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                            <LayoutGrid className="w-4 h-4 text-brand-gold" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Marketplace Engine v5.0</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                            Own Your <br />Regional <span className="text-brand-gold">Economy.</span>
                        </h1>

                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-12">
                            Transform your local community into a high-growth digital marketplace. The ultimate directory engine designed for regional authorities and entrepreneurs.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-12 py-5 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl flex items-center justify-center group"
                            >
                                LAUNCH YOUR PLATFORM
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <div className="flex items-center space-x-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Powered by</span>
                                <div className="h-[1px] w-12 bg-white/10"></div>
                                <span className="text-sm font-black text-white/80 tracking-tighter">BOLD IDEAS CORE</span>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Marketplace Mockup */}
                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-8 bg-slate-900 rounded-[3rem] border border-white/10 p-4 shadow-2xl relative overflow-hidden group">
                            <div className="bg-slate-800/50 rounded-[2.5rem] h-[400px] md:h-[500px] p-8 flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-brand-gold rounded-xl"></div>
                                        <div className="w-40 h-3 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="hidden md:flex space-x-3">
                                        {[1, 2, 3].map(i => <div key={i} className="w-20 h-8 bg-white/5 rounded-full"></div>)}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-end group-hover:bg-white/10 transition-colors">
                                            <div className="w-full h-2 bg-brand-gold/20 rounded mb-2"></div>
                                            <div className="w-2/3 h-2 bg-white/10 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 grid grid-rows-2 gap-10">
                            <div className="bg-brand-gold rounded-[3rem] p-10 flex flex-col justify-center shadow-2xl">
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy/60 mb-2">Daily Active Users</span>
                                <span className="text-5xl font-black text-brand-navy tracking-tighter mb-4">+25k</span>
                                <div className="h-2 bg-brand-navy/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-navy w-3/4"></div>
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 flex flex-col justify-center">
                                <TrendingUp className="w-10 h-10 text-brand-gold mb-4" />
                                <h4 className="text-xl font-black text-white uppercase mb-2">High Conversion</h4>
                                <p className="text-sm text-white/40 font-medium">Optimized for regional search intent and local trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Ecosystem Opportunity */}
            <section className="py-32 bg-white relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="max-w-3xl mb-24">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">The Digital Real Estate</span>
                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9]">
                            Regional Authorities <br /><span className="text-slate-300">Start Here.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Community Trust', desc: 'Verified local listings that build user confidence.' },
                            { title: 'Economic Hub', desc: 'The central point for regional trade and discovery.' },
                            { title: 'Ad Inventory', desc: 'Untapped potential for local business promotion.' },
                            { title: 'Data Assets', desc: 'Understand regional trends and consumer behavior.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:scale-[1.05] transition-transform duration-500">
                                <h4 className="text-sm font-black text-brand-navy uppercase mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monetization Matrix */}
            <section className="py-32 bg-[#F8FAFC] overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { name: 'Featured Spots', price: 'Premium' },
                                    { name: 'Banner Slots', price: 'Standard' },
                                    { name: 'Verified Badge', price: 'Subscription' },
                                    { name: 'Bulk Uploads', price: 'Enterprise' }
                                ].map((slot, i) => (
                                    <div key={i} className={`p-8 rounded-[3rem] border ${i % 2 === 0 ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy shadow-xl border-slate-100'}`}>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-8 block">{slot.price}</span>
                                        <h4 className="text-lg font-black uppercase mb-2">{slot.name}</h4>
                                        <div className="w-8 h-[1px] bg-brand-gold mt-4"></div>
                                    </div>
                                ))}
                            </div>
                            {/* Decorative shadow circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[100px] -z-0"></div>
                        </div>

                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">Revenue Infrastructure</span>
                            <h2 className="text-3xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                The Monetization <br /><span className="text-brand-gold">Matrix.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Directories only work when they scale profitably. Ezer features a built-in monetization engine allowing you to capture value at every level of user engagement.
                            </p>
                            <div className="space-y-6">
                                {[
                                    'Automated Subscription Billing',
                                    'Self-Service Ad Purchasing',
                                    'Performance Analytics for Advertisers'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="w-6 h-6 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                                        </div>
                                        <span className="text-sm font-bold text-brand-navy uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Growth Stats */}
            <section className="py-24 bg-brand-navy">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div>
                            <Search className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                            <span className="text-4xl font-black text-white block mb-2">99%</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Moderation Accuracy</span>
                        </div>
                        <div>
                            <MapPin className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                            <span className="text-4xl font-black text-white block mb-2">Global</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Scaling Capability</span>
                        </div>
                        <div>
                            <BarChart3 className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                            <span className="text-4xl font-black text-white block mb-2">Real-time</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Advertiser Insights</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Moderation Hub */}
            <section className="py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                                <ShieldCheck className="w-8 h-8 text-brand-navy" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                Clean, Safe, <br /><span className="text-brand-gold">Verified.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                A marketplace is only as strong as its trust. Our intelligent moderation hub uses pattern recognition and automated reporting to ensure common scams and spam never reach your users.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">System Logic</span>
                                    <span className="text-sm font-black text-brand-navy uppercase tracking-tight">AI Moderation Assist</span>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Transparency</span>
                                    <span className="text-sm font-black text-brand-navy uppercase tracking-tight">Fraud Detection</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-100 flex flex-col justify-center">
                            <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-8">Performance Core</h3>
                            <div className="space-y-6">
                                {product.coreFeatures.map((feature, i) => (
                                    <div key={i} className="flex flex-col p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                                        <span className="text-sm font-black text-brand-navy uppercase mb-2">{feature.title}</span>
                                        <span className="text-xs text-slate-400 font-medium">{feature.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Marketplace CTA */}
            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="bg-brand-navy rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-brand-gold/5"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                Launch Your <br /><span className="text-brand-gold">Regional Monopoly.</span>
                            </h2>
                            <p className="text-lg text-white/60 font-medium leading-relaxed mb-12">
                                Stop dreaming about ownership and start building. Secure your territory with the most powerful marketplace infrastructure available.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-16 py-6 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl group"
                            >
                                START YOUR PLATFORM
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClassifiedsLanding;
