import React from "react";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { chaptersData } from "@/data/silmarillion-data";
import { Check, ChevronRight, Circle, BookOpen, Lock } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  showCompendium: boolean;
  onToggleCompendium: () => void;
};

export function ChapterSidebar({ showCompendium, onToggleCompendium }: Props) {
  const { currentChapterIndex, setCurrentChapterIndex } = useSilmarillion();

  return (
    <div className="w-[260px] flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      {/* Title */}
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="font-serif text-lg text-primary tracking-[0.15em] uppercase font-bold text-center leading-tight">
          Silmarillion<br />Companion
        </h1>
      </div>

      {/* Compendio toggle button */}
      <div className="px-3 pt-3 pb-1">
        <button
          data-testid="compendium-toggle"
          onClick={onToggleCompendium}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-sm transition-colors border",
            showCompendium
              ? "bg-primary/15 border-primary/40 text-primary"
              : "bg-muted/40 border-border text-muted-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 hover:border-primary/30"
          )}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="font-serif tracking-wider text-xs uppercase font-medium">
            Compendio
          </span>
          {showCompendium && (
            <span className="ml-auto text-[10px] uppercase tracking-wider opacity-60">activo</span>
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="px-3 pt-3 pb-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-sidebar-border" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Lectura</span>
          <div className="flex-1 h-px bg-sidebar-border" />
        </div>
      </div>

      {/* Chapter list */}
      <TooltipProvider>
        <ScrollArea className="flex-1 py-1">
          <div className="px-3 space-y-0.5">
            {chaptersData.map((chapter, index) => {
            const isCompleted = index < currentChapterIndex;
            const isCurrent = index === currentChapterIndex;
            const isLocked = index >= 12;

            return (
              <Tooltip key={chapter.id}>
                <TooltipTrigger asChild>
                  <button
                    data-testid={`chapter-btn-${index}`}
                    onClick={() => {
                      setCurrentChapterIndex(index);
                      if (showCompendium) onToggleCompendium();
                    }}
                    disabled={isLocked}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-sm flex items-start gap-3 transition-colors text-sm relative group",
                      isCurrent
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground",
                      !isLocked && !isCurrent
                        ? "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        : "",
                      isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    )}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isCompleted && <Check className="w-4 h-4 text-muted-foreground" />}
                      {isCurrent && !isLocked && <ChevronRight className="w-4 h-4 text-primary" />}
                      {isLocked && <Lock className="w-4 h-4 text-muted-foreground/60" />}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className={cn(
                          "font-medium truncate font-serif text-[13px] tracking-wide",
                          isCurrent ? "text-primary" : ""
                        )}
                      >
                        {chapter.id === 0
                          ? "Prólogo"
                          : chapter.id === 1
                          ? "Valaquenta"
                          : `Capítulo ${chapter.id - 1}`}
                      </span>
                      <span
                        className={cn(
                          "text-xs truncate",
                          isCurrent ? "text-primary/80" : "text-muted-foreground"
                        )}
                      >
                        {chapter.title}
                      </span>
                    </div>
                  </button>
                </TooltipTrigger>
                {isLocked && (
                  <TooltipContent side="right" className="bg-muted-foreground text-primary-foreground">
                    Trabajando en esto
                  </TooltipContent>
                )}
              </Tooltip>
            );
            })}
          </div>
        </ScrollArea>
      </TooltipProvider>
    </div>
  );
}
