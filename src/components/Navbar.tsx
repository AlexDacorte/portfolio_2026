import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const links = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        <span className="font-display font-semibold text-foreground tracking-tight">
          Alex Da Corte
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ rotate: 3 , scale: 1.05}}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-lg border border-border hover:border-primary/50 text-foreground transition-all duration-200"
          >
            {t("nav.letsTalk")}
          </a>
        </div>

        {/* Language switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase font-medium">{i18n.language?.substring(0, 2)}</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full mt-2 rounded-lg border border-border bg-card p-1 min-w-[80px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setLangOpen(false);
                  }}
                  className={`block w-full text-left text-sm px-3 py-1.5 rounded-md transition-colors ${
                    i18n.language?.startsWith(lang.code)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
