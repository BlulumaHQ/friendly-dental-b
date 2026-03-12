import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
          <input
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
          <input
            name="lastName"
            type="text"
            required
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-1">Message</label>
        <textarea
          name="message"
          rows={3}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto justify-center"
      >
        {isSubmitting ? "Sending..." : "Request a Call Back"}
      </button>
    </form>
  );
};

export default ContactForm;
