import React, { useState } from "react";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { charactersData } from "@/data/silmarillion-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CharacterDetailSheet } from "./CharacterDetailSheet";
import { Badge } from "@/components/ui/badge";

export function ChapterPanel() {
  const { currentChapter, currentChapterIndex } = useSilmarillion();
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [revealedSpoilers, setRevealedSpoilers] = useState(false);

  const unlockedCharacters = charactersData.filter(c => c.firstChapter <= currentChapterIndex);

  return (
    <>
      <div className="w-[380px] h-full flex flex-col bg-card border-r border-border">
        <ScrollArea className="flex-1">
          <div className="p-8 space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="font-serif text-sm tracking-widest text-muted-foreground uppercase">{currentChapter.subtitle}</h2>
              <h1 className="font-serif text-4xl text-foreground font-bold">{currentChapter.title}</h1>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-primary/20"></div>
                <div className="w-2 h-2 rounded-full bg-primary mx-3"></div>
                <div className="h-px w-12 bg-primary/20"></div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed italic text-[15px]">
              "{currentChapter.description}"
            </p>

            <div className="space-y-4">
              <h3 className="font-serif text-sm font-semibold tracking-wider text-primary uppercase border-b border-border pb-2">
                Lo que necesitas saber
              </h3>
              <ul className="space-y-3">
                {currentChapter.needToKnow.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-card-foreground">
                    <span className="text-primary mt-1 text-[10px]">♦</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentChapter.shouldKnowAfter && currentChapter.shouldKnowAfter.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-sm font-semibold tracking-wider text-primary uppercase">
                    Deberías Saber Después
                  </h3>
                  {!revealedSpoilers && (
                    <button
                      onClick={() => setRevealedSpoilers(true)}
                      className="text-xs px-2 py-1 rounded bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    >
                      Revelar
                    </button>
                  )}
                </div>
                <ul className={`space-y-3 transition-all ${revealedSpoilers ? "" : "blur-sm"}`}>
                  {currentChapter.shouldKnowAfter.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-card-foreground">
                      <span className="text-primary mt-1 text-[10px]">★</span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4 pt-4">
              <h3 className="font-serif text-sm font-semibold tracking-wider text-primary uppercase border-b border-border pb-2">
                Personajes Conocidos
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {unlockedCharacters.map(char => (
                  <button
                    key={char.id}
                    onClick={() => setSelectedCharacterId(char.id)}
                    className="text-left p-3 rounded-md bg-secondary/50 border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex justify-between items-start gap-2">
                      <div className="space-y-1 min-w-0">
                        <div className="font-serif font-bold text-foreground truncate">{char.name}</div>
                        <div className="text-xs text-muted-foreground truncate">{char.role}</div>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-[10px] uppercase tracking-wider bg-background/50 border-primary/20 text-primary">
                        {char.race}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <CharacterDetailSheet
        characterId={selectedCharacterId}
        onClose={() => setSelectedCharacterId(null)}
        onCharacterSelect={setSelectedCharacterId}
      />
    </>
  );
}
