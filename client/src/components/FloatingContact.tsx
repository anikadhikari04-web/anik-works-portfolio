import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function FloatingContact() {

  const openWhatsApp = () => {
    window.open("https://wa.me/919434190516", "_blank");
  };

  const openDiscord = () => {
    window.open("https://discord.com/users/1261207302443241605", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* WhatsApp */}

      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 10px #25D366",
            "0 0 25px #25D366",
            "0 0 10px #25D366"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg"
      >
        <MessageCircle size={26} />
      </motion.button>

      {/* Discord */}

      <motion.button
        onClick={openDiscord}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 10px #5865F2",
            "0 0 25px #5865F2",
            "0 0 10px #5865F2"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-14 h-14 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-lg"
      >
        <FaDiscord size={26} />
      </motion.button>

    </div>
  );
}
