import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState<{
        name?: string;
        phone?: string;
        message?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        // Clear error when user types
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors: typeof errors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d+$/.test(formData.phone.replace(/[\s-]/g, ''))) {
            newErrors.phone = "Please enter a valid phone number";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // WhatsApp Redirection
        const destinationNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "9408500689";
        const text = `Hello 👋\nNew Contact Inquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const url = `https://wa.me/${destinationNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-gradient-to-t from-blue-50 to-white relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-right">
                        <div>
                            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">Contact Us</h2>
                            <p className="text-foreground/60 mt-4 text-lg">
                                Have questions or want to place a bulk order? Reach out to us directly.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-primary">Call Us</h3>
                                    <p className="text-foreground/70">+91 94085 00689</p>
                                    <p className="text-sm text-foreground/50">Mon-Sat, 9am - 7pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-primary">Visit Us</h3>
                                    <p className="text-foreground/70">
                                        Near Vishnudham Temple, Kapadvanj, Modasa Road, Demai, Gujarat - 383330
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-primary">Email</h3>
                                    <p className="text-foreground/70">pateljatin1906@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glass Form */}
                    <div className="glass-card p-8 md:p-10 animate-fade-left">
                        <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                        <form className="space-y-4" onSubmit={handleSendMessage}>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/70">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${errors.name ? 'border-red-500' : 'border-white/60'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground/70">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${errors.phone ? 'border-red-500' : 'border-white/60'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
                                        placeholder="Your Phone Number"
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground/70">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className={`w-full px-4 py-3 rounded-lg bg-white/50 border ${errors.message ? 'border-red-500' : 'border-white/60'} focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none`}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>
                            </div>
                            <Button type="submit" className="w-full h-12 mt-2 font-medium text-lg rounded-xl shadow-lg hover:shadow-blue-500/25">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>

                </div>

                {/* Map Placeholder or Embed */}
                <div className="mt-20 flex flex-col gap-6 animate-fade-up">
                    <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[400px] w-full relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29343.80643591905!2d73.19229039244648!3d23.171083164451908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e090e6111d3f3%3A0xd25bed8b339bb8b1!2sDemai%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1767349641637!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        {/* Overlay Button */}
                        <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                            <Button asChild className="shadow-lg bg-white text-blue-600 hover:bg-blue-50">
                                <a href="https://maps.app.goo.gl/V1Ccgmo256tgNSBR7" target="_blank" rel="noopener noreferrer">
                                    Open in Google Maps <MapPin className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
