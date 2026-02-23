'use client';

import React from 'react';
import Link from 'next/link';
import {
    GraduationCap,
    ArrowRight,
    BookOpen,
    BarChart3,
    ShieldCheck,
    Zap,
    Users2,
    Wallet,
    Globe,
    LayoutDashboard,
    CheckCircle2
} from 'lucide-react';
import { Product } from '@/data/product';

interface SchoolLandingProps {
    product: Product;
}

const SchoolLanding: React.FC<SchoolLandingProps> = ({ product }) => {
    return (
        <div className="bg-white font-sans text-slate-800 selection:bg-brand-gold/30">
            {/* Academic Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#F8FAFC]">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#072a52 1px, transparent 1px), linear-gradient(90deg, #072a52 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full mb-8">
                                <GraduationCap className="w-4 h-4 text-brand-gold" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Institutional Excellence</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                Academy <br />Administration, <span className="text-brand-gold">Automated.</span>
                            </h1>

                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl mb-12">
                                Term-end report stresses and manual enrollment friction are relics of the past. Modernize your institution with the most intuitive school management engine.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto px-12 py-5 bg-brand-navy text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-2xl flex items-center justify-center group"
                                >
                                    UPGRADE YOUR SCHOOL
                                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                            <div className="w-full h-full bg-brand-gold/20" />
                                        </div>
                                    ))}
                                    <div className="pl-6 text-[10px] font-bold text-slate-400 flex flex-col justify-center">
                                        <span>JOIN 50+ ELITE</span>
                                        <span>INSTITUTIONS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Academic Shield / Mockup Illustration */}
                            <div className="aspect-square bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(7,42,82,0.15)] border border-slate-100 p-8 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent" />
                                <div className="h-full border-2 border-dashed border-slate-100 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center">
                                    <div className="w-24 h-24 bg-brand-navy rounded-[2rem] flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                                        <GraduationCap className="w-12 h-12 text-brand-gold" />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-navy uppercase mb-4">The Digital Registrar</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        A centralized intelligence hub for faculty, students, and financial oversight.
                                    </p>
                                    <div className="mt-10 grid grid-cols-2 gap-4 w-full">
                                        <div className="h-12 bg-slate-50 rounded-xl" />
                                        <div className="h-12 bg-slate-50 rounded-xl" />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative accents */}
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-[80px]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* The "Admin Friction" Section */}
            <section className="py-32 bg-white relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="max-w-3xl mb-24">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">The Burden of Legacy Systems</span>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9]">
                            Eradicate the <br /><span className="text-slate-300">Administrative Grind.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 group hover:border-brand-gold/40 transition-all duration-500">
                            <div className="flex items-center space-x-6 mb-8">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                    <Zap className="w-8 h-8 text-brand-gold" />
                                </div>
                                <h4 className="text-2xl font-black text-brand-navy uppercase tracking-tight">Instant Result Processing</h4>
                            </div>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Manual grading and report generation are the primary bottlenecks of school management. Our system reduces the term-end reporting cycle by 85%.
                            </p>
                            <ul className="space-y-4">
                                {['Automated Grade Aggregation', 'One-Click Report Generation', 'Real-time Class Performance Data'].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm font-bold text-brand-navy/60 uppercase tracking-tight">
                                        <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-rows-2 gap-8">
                            <div className="p-10 bg-brand-navy text-white rounded-[3rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16" />
                                <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-brand-gold">Revenue Guard Finance</h4>
                                <p className="text-sm text-white/60 font-medium leading-relaxed">
                                    Ensure 100% fee collection transparency. Intelligent reminders and automated reconciliation mean your finance team stays sharp, not stressed.
                                </p>
                            </div>
                            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem]">
                                <h4 className="text-xl font-black text-brand-navy uppercase tracking-tight mb-4">Campus Flow Manager</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                    From prospective lead to graduation day, track every touchpoint of the student journey in a unified CRM designed for educators.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parent Assurance Showcase */}
            <section className="py-32 bg-[#F8FAFC]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/5] bg-brand-navy rounded-[4rem] overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12 text-white">
                                    <div className="p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                                                <Users2 className="text-brand-navy w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/50 block">Portal Active</span>
                                                <span className="text-sm font-black uppercase tracking-tight">Parent-Teacher Bridge</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-2 bg-white/20 rounded-full w-full" />
                                            <div className="h-2 bg-white/20 rounded-full w-2/3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating decorative element */}
                            <div className="absolute -top-10 -right-10 p-8 bg-brand-gold rounded-[2rem] shadow-2xl text-brand-navy text-center">
                                <span className="text-4xl font-black tracking-tighter block">98%</span>
                                <span className="text-[10px] font-black uppercase tracking-widest">Parent Engagement</span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">Reputational ROI</span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                                The Parent <br /> <span className="text-brand-gold">Assurance Portal.</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                Reputation is built on transparency. Our dedicated parent hub provides instant access to grades, attendance, and school updates, turning parents into your most vocal advocates.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <BookOpen className="w-8 h-8 text-brand-gold" />
                                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-tight">Academic Tracking</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Real-time insight into performance trends and assignment submissions.</p>
                                </div>
                                <div className="space-y-4">
                                    <Wallet className="w-8 h-8 text-brand-gold" />
                                    <h4 className="text-sm font-black text-brand-navy uppercase tracking-tight">Simplified Payments</h4>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">One-touch fee payments and historical receipt management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Infrastructure Stats */}
            <section className="py-24 bg-brand-navy overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="border-r border-white/10 md:px-8">
                            <span className="text-6xl font-black text-brand-gold tracking-tighter block mb-2">1,500+</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Staff Hours Reclaimed</span>
                        </div>
                        <div className="border-r border-white/10 md:px-8">
                            <span className="text-6xl font-black text-white tracking-tighter block mb-2">100%</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Financial Integrity</span>
                        </div>
                        <div className="md:px-8">
                            <span className="text-6xl font-black text-white tracking-tighter block mb-2">3s</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Average Data Retrieval</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Campus & Scale */}
            <section className="py-32 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-6 block">Future-Proof Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-navy uppercase tracking-tighter leading-[0.9]">
                            Scale from One Classroom to <br /><span className="text-brand-gold/80">Multiple Cities.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Global Faculty Registry', icon: Globe, desc: 'Centralized management for multi-campus talent pools.' },
                            { title: 'Enterprise Analytics', icon: BarChart3, desc: 'Institutional level reporting for multi-school owners.' },
                            { title: 'Cloud Infrastructure', icon: ShieldCheck, desc: '99.99% uptime with bank-grade security protocols.' }
                        ].map((card, i) => (
                            <div key={i} className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-brand-gold/40 transition-all duration-500 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-colors duration-500">
                                    <card.icon className="w-7 h-7 text-brand-gold group-hover:text-brand-navy transition-colors duration-500" />
                                </div>
                                <h4 className="text-lg font-black text-brand-navy uppercase tracking-tight mb-4">{card.title}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Advantage CTA */}
            <section className="pb-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">
                    <div className="bg-brand-navy rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                                Join the Elite <br /><span className="text-brand-gold">Academic Tier.</span>
                            </h2>
                            <p className="text-lg text-white/60 font-medium leading-relaxed mb-12">
                                Don't let administrative friction hold back your school's potential. Partner with Bold Ideas to modernize your student experience and faculty flow.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-16 py-6 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all duration-300 shadow-2xl group"
                            >
                                START YOUR TRANSFORMATION
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SchoolLanding;
