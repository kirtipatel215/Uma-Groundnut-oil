import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "default" | "floating";
  className?: string;
}

const WhatsAppButton = ({
  message = "Hello, I'd like to know more about Gorounet Oil.",
  variant = "default",
  className = ""
}: WhatsAppButtonProps) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    );
  }

  return (
    <Button
      asChild
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2" size={20} />
        Order on WhatsApp
      </a>
    </Button>
  );
};

export default WhatsAppButton;
