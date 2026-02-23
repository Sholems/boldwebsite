import React from 'react';
import {
    Cpu,
    Workflow,
    TrendingUp,
    MonitorSmartphone,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Service } from '@/data/services';
import Link from 'next/link';

interface ServiceSectionProps {
    service: Service;
    isEven: boolean;
}

const getIcon = (name: string) => {
    switch (name) {
        case 'cpu': return <Cpu className="w-12 h-12 text-brand-gold" />;
        case 'workflow': return <Workflow className="w-12 h-12 text-brand-gold" />;
        case 'trending-up': return <TrendingUp className="w-12 h-12 text-brand-gold" />;
        case 'monitor-smartphone': return <MonitorSmartphone className="w-12 h-12 text-brand-gold" />;
        default: return <Cpu className="w-12 h-12 text-brand-gold" />;
    }
};

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, isEven }) => {
    const isTraining = service.slug === 'ai-productivity-training';
    const isAutomation = service.slug === 'ai-workflow-automation';
    const isMarketing = service.slug === 'ai-marketing-systems';
    const isWebsites = service.slug === 'websites-custom-tools';

    if (isTraining) {
        return (
            <section className="py-24 relative overflow-hidden bg-brand-navy text-white">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold blur-[120px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <div className="flex flex-col items-center mb-20">
                        <div className="flex items-center space-x-4 mb-6">
                            {getIcon(service.iconName)}
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            {service.title}
                        </h2>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-brand-gold mb-6">
                            {service.subtitle}
                        </span>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {service.coreFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group/card bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-brand-gold/40 hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8 border border-brand-gold/20 group-hover/card:bg-brand-gold/20 transition-colors">
                                        <div className="text-brand-gold scale-125">
                                            {getIcon(service.iconName)}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight group-hover/card:text-brand-gold transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-12 py-5 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-2xl group"
                    >
                        GET STARTED
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        );
    }

    if (isAutomation) {
        return (
            <section className="py-24 relative overflow-hidden bg-white text-brand-navy border-b border-slate-100">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-gold blur-[100px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <div className="flex flex-col items-center mb-20">
                        <div className="flex items-center space-x-4 mb-6">
                            {getIcon(service.iconName)}
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            {service.title}
                        </h2>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-6">
                            {service.subtitle}
                        </span>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {service.coreFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group/card bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(7,42,82,0.1)] hover:-translate-y-2 hover:border-brand-gold/30 hover:bg-white"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-50 group-hover/card:border-brand-gold/20 transition-colors">
                                        <div className="text-brand-gold scale-125">
                                            {getIcon(service.iconName)}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight group-hover/card:text-brand-gold transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-12 py-5 bg-brand-navy text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-xl group"
                    >
                        GET STARTED
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        );
    }

    if (isMarketing) {
        return (
            <section className="py-24 relative overflow-hidden bg-brand-navy text-white">
                {/* Subtle Ambient Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-brand-gold blur-[140px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center space-x-4 mb-6">
                            {getIcon(service.iconName)}
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            {service.title}
                        </h2>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-brand-gold mb-6">
                            {service.subtitle}
                        </span>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {service.coreFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group/card bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-brand-gold/40 hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-8 border border-brand-gold/20 group-hover/card:bg-brand-gold/20 transition-colors">
                                        <div className="text-brand-gold scale-125">
                                            {getIcon(service.iconName)}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight group-hover/card:text-brand-gold transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-12 py-5 bg-brand-gold text-brand-navy text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-2xl group"
                    >
                        GET STARTED
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        );
    }

    if (isWebsites) {
        return (
            <section className="py-24 relative overflow-hidden bg-white text-brand-navy border-b border-slate-100">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-brand-gold blur-[100px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
                    <div className="flex flex-col items-center mb-16">
                        <div className="flex items-center space-x-4 mb-6">
                            {getIcon(service.iconName)}
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            {service.title}
                        </h2>
                        <span className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-6">
                            {service.subtitle}
                        </span>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {service.coreFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group/card bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(7,42,82,0.1)] hover:-translate-y-2 hover:border-brand-gold/30 hover:bg-white"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm border border-slate-50 group-hover/card:border-brand-gold/20 transition-colors">
                                        <div className="text-brand-gold scale-125">
                                            {getIcon(service.iconName)}
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-black uppercase mb-4 tracking-tight group-hover/card:text-brand-gold transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-12 py-5 bg-brand-navy text-white text-[12px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-xl group"
                    >
                        GET STARTED
                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className={`py-24 relative overflow-hidden ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}>
            {/* Ambient Background Elements */}
            {!isEven && (
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent pointer-events-none" />
            )}
            {isEven && (
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-gold/5 to-transparent pointer-events-none" />
            )}

            <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(7,42,82,0.15)] transition-transform duration-700 group-hover:scale-[1.02]">
                            <img
                                src={service.heroImage}
                                alt={service.title}
                                className="w-full h-[450px] md:h-[550px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-60"></div>
                        </div>
                        {/* Premium Decorative elements */}
                        <div className={`absolute -inset-6 z-0 rounded-[2.5rem] opacity-20 border border-brand-gold/30 ${isEven ? 'translate-x-6 translate-y-6' : '-translate-x-6 translate-y-6'}`}></div>
                        <div className={`absolute -inset-3 z-0 rounded-[2.2rem] opacity-10 bg-brand-gold/10 ${isEven ? 'translate-x-3 translate-y-3' : '-translate-x-3 translate-y-3'}`}></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center space-x-4 mb-6">
                            {getIcon(service.iconName)}
                            <div className="h-[1px] w-12 bg-brand-gold"></div>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-navy/40">
                                {service.subtitle}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-brand-navy uppercase tracking-tighter mb-8 leading-[0.9] lg:max-w-md">
                            {service.title}
                        </h2>

                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                            {service.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {service.coreFeatures.map((feature, idx) => (
                                <div key={idx} className="group/card bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(7,42,82,0.05)] transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(7,42,82,0.08)] hover:-translate-y-1 hover:border-brand-gold/20">
                                    <h4 className="text-sm font-black text-brand-navy uppercase mb-3 tracking-wider group-hover/card:text-brand-gold transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-[13px] text-slate-400 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 mb-12">
                            <h4 className="text-xs font-black text-brand-navy/60 uppercase tracking-widest mb-4">Strategic Benefits:</h4>
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-slate-500">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center px-10 py-4 bg-brand-navy text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 shadow-xl group"
                        >
                            GET STARTED
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
