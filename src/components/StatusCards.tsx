import { motion } from "framer-motion";
import { ArrowRight, Compass, Music } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatusCards = () => {
  const { t } = useTranslation();

  const cards = [
    {
      label: t("status.now"),
      title: t("status.nowTitle"),
      description: t("status.nowDesc"),
      icon: null,
      actions: [
        { text: t("status.exploreProjects"), href: "#projects" },
        { text: t("status.viewJourney"), href: "#about" },
      ],
    },
    {
      label: t("status.radar"),
      title: t("status.radarTitle"),
      description: t("status.radarDesc"),
      icon: Compass,
      actions: [],
    },
    {
      label: t("status.interests"),
      title: t("status.interestsTitle"),
      description: t("status.interestsDesc"),
      icon: Music,
      actions: [],
    },
  ];

  return (
    <section className="relative px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="rounded-xl border border-border bg-card p-6 card-hover flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {card.label}
              </span>
              <h3 className="font-display font-semibold text-xl text-foreground mt-3 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
            {card.actions.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                {card.actions.map((action) => (
                  <a
                    key={action.text}
                    href={action.href}
                    className="text-sm px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-foreground transition-all duration-200 flex items-center gap-1.5"
                  >
                    {action.text}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatusCards;
