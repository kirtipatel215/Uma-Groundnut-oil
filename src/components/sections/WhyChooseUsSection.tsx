import { ThumbsUp, Wallet, Package, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
    const features = [
        {
            icon: ThumbsUp,
            title: "Trusted Quality",
            text: "Over the years, Uma Groundnut Oil has built a legacy of trust with thousands of happy households.",
            colSpan: "col-span-1 md:col-span-2"
        },
        {
            icon: Wallet,
            title: "Affordable Pricing",
            text: "Premium quality at the best market rates. We believe healthy food should be accessible to all.",
            colSpan: "col-span-1"
        },
        {
            icon: Package,
            title: "Bulk Supply",
            text: "Special rates and dedicated delivery for restaurants, caterers, and wholesalers.",
            colSpan: "col-span-1"
        },
        {
            icon: Clock,
            title: "Hygienic Packaging",
            text: "Automated filling and sealing process ensures zero human contact and maximum hygiene.",
            colSpan: "col-span-1 md:col-span-2"
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">The Uma Promise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Why Choose Us</h2>
                </div>

                {/* Apple-style Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`glass p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group ${feature.colSpan}`}
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
