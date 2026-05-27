import { ReactNode, useEffect, useRef } from "react";
import { useScrollStore } from "@/store/useScrollStore";

export const ScrollableSection = ({ id, children, ...props }) => {
  const sectionRef = useRef(null);
  const registerSection = useScrollStore((state) => state.registeredSection);
  useEffect(() => {
    if (sectionRef.current) {
      registerSection(id, sectionRef);
    }
  }, [id, registerSection]);

  return (
    <div ref={sectionRef} id={id} {...props}>
      {children}
    </div>
  );
};
