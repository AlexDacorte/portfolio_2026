import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectKeys = [
  {
    key: "blogmdx",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "https://fatstruct.github.io/blogmdx/",
  },
  {
    key: "mrewear",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "https://alexdacorte.github.io/Misti_ReWear/",
  },
  {
    key: "covidtracker",
    tags: ["React", "Tailwind", "TypeScript"],
    href: "https://alexdacorte.github.io/CovidTracker/",
  },
  {
    key: "prontopizza",
    tags: ["React", "Tailwind", "Framer Motion", "Shadcdn", "TypeScript"],
    href: "https://alexdacorte.github.io/pronto_pizza_almagro/",
  },
  {
    key: "pokedex",
    tags: ["React", "Tailwind", "TypeScript"],
    href: "https://alexdacorte.github.io/mypkdex/",
  },
];

const FeaturedWork = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 py-20 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-foreground mb-10"
      >
        {t("projects.title")}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectKeys.map((project, i) => (
          <motion.a
            key={project.key}
            href={project.href}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group rounded-xl border border-border bg-card p-6 card-hover flex flex-col justify-between min-h-[240px]"
          >
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 flex items-center justify-between">
                {t(`projects.${project.key}.title`)}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`projects.${project.key}.description`)}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
