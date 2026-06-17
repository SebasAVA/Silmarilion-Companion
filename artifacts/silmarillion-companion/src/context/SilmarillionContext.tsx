import React, { createContext, useContext, useState, ReactNode } from "react";
import { chaptersData, Chapter } from "@/data/silmarillion-data";

type SilmarillionContextType = {
  currentChapterIndex: number;
  setCurrentChapterIndex: (index: number) => void;
  currentChapter: Chapter;
};

const SilmarillionContext = createContext<SilmarillionContextType | undefined>(undefined);

export function SilmarillionProvider({ children }: { children: ReactNode }) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  const currentChapter = chaptersData[currentChapterIndex];

  return (
    <SilmarillionContext.Provider value={{ currentChapterIndex, setCurrentChapterIndex, currentChapter }}>
      {children}
    </SilmarillionContext.Provider>
  );
}

export function useSilmarillion() {
  const context = useContext(SilmarillionContext);
  if (context === undefined) {
    throw new Error("useSilmarillion must be used within a SilmarillionProvider");
  }
  return context;
}
