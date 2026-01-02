import { User, ShieldCheck } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-16 relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 animate-fade-up">
                        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Tradition of Purity</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="glass-card p-8 md:p-12 md:flex items-start gap-12 relative">
                        {/* Visual Element / Owner Placeholder */}
                        <div className="flex-shrink-0 w-32 h-32 md:w-56 md:h-56 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-xl mx-auto md:mx-0 mb-8 md:mb-0 relative group self-center">
                            <User className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                                Owner
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-center md:text-left space-y-6 flex-grow">
                            <h3 className="text-2xl font-bold text-foreground">
                                Uma Groundnut Oil
                            </h3>
                            <p className="text-lg text-foreground/70 leading-relaxed font-light">
                                For generations, our family has been rooted in the rich agricultural soil of Gujarat, prioritizing one thing above all else: <strong className="text-primary font-medium">uncompromising quality</strong>.
                                Founded and meticulously managed by <span className="text-primary font-semibold">Jatin Patel</span>,
                                Uma Groundnut Oil began not just as a business, but as a commitment to bringing pure, authentic flavor back to Indian kitchens.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-light">
                                We believe that great oil starts in the field. That's why we source our groundnuts directly from trusted local farmers who share our dedication to organic and sustainable practices.
                                By selecting only the finest, sun-dried nuts, we ensure the foundation of our oil is nothing short of perfection.
                            </p>
                            <p className="text-lg text-foreground/70 leading-relaxed font-light">
                                Preserving the natural goodness is our craft. We employ traditional extraction methods that gently press the oil without using harsh chemicals or excessive heat.
                                This process ensures that every drop of Uma Groundnut Oil retains its natural golden color, nutty aroma, and essential nutrients, making it not just a cooking ingredient, but a source of vitality for your family.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 transition-colors hover:bg-blue-100">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>Hygiene Certified</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 transition-colors hover:bg-blue-100">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>100% Natural</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-blue-800 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 transition-colors hover:bg-blue-100">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>Farm to Bottle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
