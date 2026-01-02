import { Droplet, Leaf, Sprout, Heart, ShieldCheck } from "lucide-react";

const QualitySection = () => {
    const benefits = [
        {
            icon: Droplet,
            title: "100% Pure",
            description: "Extracted from the finest groundnuts with zero adulteration."
        },
        {
            icon: ShieldCheck,
            title: "No Chemicals",
            description: "Chemical-free filtration process ensuring natural goodness."
        },
        {
            icon: Sprout,
            title: "Traditional Process",
            description: "Cold-pressed techniques to retain essential nutrients."
        },
        {
            icon: Leaf,
            title: "Rich Aroma & Taste",
            description: "Authentic nutty flavor that enhances every meal."
        },
        {
            icon: Heart,
            title: "Healthy Choice",
            description: "Packed with heart-healthy MUFA and unsaturated fats."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-primary/5">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Nature's Best</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Why Quality Matters</h2>
                    <p className="text-foreground/60 mt-4 text-lg max-w-2xl mx-auto">
                        We don't just sell oil; we deliver health, purity, and tradition to your kitchen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {benefits.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center shadow-inner mb-6 text-blue-600">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
