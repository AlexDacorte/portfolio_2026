import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024",
    role: "Senior Software Engineer",
    company: "Tech Corp",
    description: "Leading frontend architecture and AI integration initiatives across multiple product lines.",
  },
  {
    year: "2022",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    description: "Built scalable web platforms from the ground up, handling everything from database design to pixel-perfect UIs.",
  },
  {
    year: "2020",
    role: "Frontend Developer",
    company: "Digital Agency",
    description: "Crafted interactive experiences and design systems for enterprise clients across various industries.",
  },
  {
    year: "2018",
    role: "Junior Developer",
    company: "Web Studio",
    description: "Started my journey building responsive websites and learning the fundamentals of modern web development.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 md:px-12 py-20 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4"
      >
        About me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-lg mb-14 max-w-2xl"
      >
        A passionate engineer with a love for clean code, thoughtful design, and solving complex problems.
      </motion.p>

      <div className="relative">
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
                  <div className="w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-background" />
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
