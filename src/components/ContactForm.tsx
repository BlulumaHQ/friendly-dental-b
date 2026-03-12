import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{t("form.thankYou")}</h3>
        <p className="text-muted-foreground">{t("form.thankYouMsg")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t("form.firstName")}</label>
          <input
            name="firstName"
            type="text"
            required
            placeholder={t("form.firstName")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t("form.lastName")}</label>
          <input
            name="lastName"
            type="text"
            required
            placeholder={t("form.lastName")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t("form.email")}</label>
          <input
            name="email"
            type="email"
            required
            placeholder={t("form.emailPlaceholder")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">{t("form.phone")}</label>
          <input
            name="phone"
            type="tel"
            placeholder={t("form.phonePlaceholder")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-1">{t("form.message")}</label>
        <textarea
          name="message"
          rows={3}
          placeholder={t("form.messagePlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto justify-center"
      >
        {isSubmitting ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  );
};

export default ContactForm;
