import { ArrowRight, ChevronRight, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage2 from "@/assets/product-5l.jpg"; // Utilizing existing asset
import heroImage from "@/assets/hero-oil.jpg"; // Utilizing existing asset

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                    style={{ backgroundImage: `url(${heroImage})` }}
                ></div>
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-transparent backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6 animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-blue-900 font-semibold text-sm shadow-sm animate-fade-in">
                        <Droplet className="w-4 h-4 fill-blue-500 text-blue-500" />
                        <span>100% Pure & Natural</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary drop-shadow-sm leading-tight">
                        Pure. Natural. <br />
                        <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                            Trusted Oil.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed">
                        Experience the richness of cold-pressed groundnut oil.
                        Quality you can taste, health you can feel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                        <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-1" asChild>
                            <Link to="/products">
                                View Products <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-lg bg-white/50 backdrop-blur-sm border-white/40 hover:bg-white/80" asChild>
                            <Link to="/contact">
                                Contact Us <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Glass Card Product Highlight - Right Side */}
                <div className="flex-1 w-full max-w-md animate-scale-in delay-200 hidden md:block">
                    <div className="glass-card p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Premium Choice</span>
                            <h3 className="text-3xl font-bold text-primary mb-4">5 Litre Pack</h3>

                            <div className="relative w-full aspect-[4/5] my-6">
                                {/* Using placeholder for bottle visual if actual transparent image not available, but trying to use css to fake a nice container if image is just rectangular */}
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform"></div>
                                <img src={heroImage2} alt="Product Bottle" className="relative w-full h-full object-cover rounded-xl shadow-2xl mix-blend-overlay opacity-80" />
                                {/* Re-using heroImage as placeholder product image for now since product-5l is not imported here yet, but ideally should be product-5l */}
                            </div>

                            <div className="space-y-2">
                                <p className="text-lg font-medium text-foreground/80">Perfect for Families</p>
                                <div className="text-2xl font-bold text-primary">Price on Request</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
                <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 bg-white/20 backdrop-blur-sm">
                    <div className="w-1 h-3 bg-primary rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
