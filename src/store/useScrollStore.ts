import { create } from "zustand";
import { RefObject } from "react";
type ScrollStore = {
  sections: Record<string, RefObject<HTMLElement | null>>;
  registeredSection: (id: string, ref: RefObject<HTMLElement | null>) => void;
  scrollToSection: (id: string) => void;
};

export const useScrollStore = create<ScrollStore>((set, get) => ({
  sections: {},
  registeredSection: (id, ref) => {
    set((state) => ({
      sections: {
        ...state.sections,
        [id]: ref,
      },
    }));
  },
  scrollToSection: (id) => {
    const { sections } = get();
    const targetRef = sections[id];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`La sección con ID "${id}" no está registrada.`);
    }
  },
}));
