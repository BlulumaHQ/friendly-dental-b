import { CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BookNowButton = () => {
  const { t } = useLanguage();

  const handleClick = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-primary text-primary-foreground 
                 px-3 py-4 rounded-l-xl shadow-lg hover:bg-primary/90 transition-all duration-300 
                 flex flex-col items-center gap-2 group hover:px-4
                 md:px-4 md:py-5"
      aria-label="Book Now"
    >
      <CalendarCheck className="w-5 h-5" />
      <span className="text-xs font-semibold tracking-wide writing-vertical">
        {t("nav.bookNow")}
      </span>
    </button>
  );
};

export default BookNowButton;
