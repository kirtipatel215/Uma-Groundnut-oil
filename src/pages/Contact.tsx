import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The fastest way to reach us! Order products or ask questions directly.
                </p>
                <WhatsAppButton className="w-full" />
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Call us for immediate assistance</p>
                <a
                  href="tel:+919408500689"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +91 94085 00689
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Send us a detailed message</p>
                <a
                  href="mailto:pateljatin1906@gmail.com"
                  className="block text-lg font-semibold text-primary hover:underline"
                >
                  pateljatin1906@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Visit us at our location</p>
                <address className="text-lg not-italic">
                  Near Vishnudham Temple, Kapadvanj, Modasa Road, Demai, Gujarat - 383330
                </address>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-4">Business Hours</h2>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div>
                <p className="font-semibold mb-2">Monday - Saturday</p>
                <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Sunday</p>
                <p className="text-muted-foreground">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
};

export default Contact;
