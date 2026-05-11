import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground"
      >
        {t("hero.line1")}
        <br />
        <span className="text-gradient-accent">{t("hero.line2")}</span> {t("hero.line3")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-muted-foreground text-lg md:text-xl max-w-2xl font-body"
      >
        {t("hero.subtitle")}
      </motion.p>
    </section>
  );
};

export default HeroSection;
