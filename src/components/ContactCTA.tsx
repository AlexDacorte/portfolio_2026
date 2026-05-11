import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
      >
        {t("contact.title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
      >
        {t("contact.subtitle")}
      </motion.p>
      <motion.a
        href="mailto:hello@example.com"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        {t("contact.cta")}
        <ArrowRight className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default ContactCTA;
