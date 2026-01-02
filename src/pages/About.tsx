import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sparkles, Heart, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">About Gorounet Oil</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for premium edible oil
            </p>
          </div>

          <div className="prose prose-lg mx-auto space-y-8">
            <section className="bg-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Sparkles className="text-primary" />
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gorounet Oil was born from a simple belief: every family deserves access to pure, 
                healthy cooking oil. We carefully source and filter our oil to ensure the highest 
                quality reaches your kitchen. Our commitment to purity and health has made us a 
                trusted name in premium edible oils.
              </p>
            </section>

            <section className="bg-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Heart className="text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide families with premium filtered edible oil that is pure, healthy, and 
                affordable. We believe that good health starts in the kitchen, and our mission is 
                to ensure every meal is prepared with the finest quality oil.
              </p>
            </section>

            <section className="bg-secondary rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Leaf className="text-primary" />
                Our Values
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Purity</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Our oil goes through rigorous filtering to 
                    ensure you get nothing but the purest product.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health</h3>
                  <p className="text-muted-foreground">
                    Your family's health is our priority. We maintain the highest standards to 
                    deliver oil that's good for your heart and body.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to sustainable practices that protect our planet for future 
                    generations while delivering quality products today.
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center pt-8">
              <h2 className="text-2xl font-bold mb-4">Experience the Gorounet Difference</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of satisfied families who trust Gorounet Oil for their daily cooking needs.
              </p>
              <WhatsAppButton message="Hello, I'd like to learn more about Gorounet Oil." />
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
};

export default About;
