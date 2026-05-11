import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const timeline = [
  {
    year: t("about.timeline.2024.year"),
    role: t("about.timeline.2024.role"),
    company: t("about.timeline.2024.company"),
    description: t("about.timeline.2024.description"),
  },
  {
    year: t("about.timeline.2022.year"),
    role: t("about.timeline.2022.role"),
    company: t("about.timeline.2022.company"),
    description: t("about.timeline.2022.description"),
  }
];

  return (
    <section id="about" className="relative px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
      >
        {t("about.title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-lg mb-14 max-w-2xl"
      >
        {t("about.subtitle")}
      </motion.p>

      <div className="relative mt-40">
        {/* Vertical line */}
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 z-10">
                  <motion.div className="w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-background" />
                </div>

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs font-medium tracking-widest text-primary uppercase">
                    {item.year}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-foreground mt-1">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 mb-2">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
