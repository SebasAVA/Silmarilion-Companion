import React from "react";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { chaptersData } from "@/data/silmarillion-data";
import { Check, ChevronRight, Circle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function ChapterSidebar() {
  const { currentChapterIndex, setCurrentChapterIndex } = useSilmarillion();

  return (
    <div className="w-[260px] flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="font-serif text-lg text-primary tracking-[0.15em] uppercase font-bold text-center leading-tight">
          Silmarillion<br />Companion
        </h1>
      </div>
      
      <ScrollArea className="flex-1 py-4">
        <div className="px-3 space-y-1">
          {chaptersData.map((chapter, index) => {
            const isCompleted = index < currentChapterIndex;
            const isCurrent = index === currentChapterIndex;
            const isLocked = index > currentChapterIndex;
            
            return (
              <button
                key={chapter.id}
                onClick={() => {
                  if (!isLocked) {
                    setCurrentChapterIndex(index);
                  }
                }}
                disabled={isLocked}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-sm flex items-start gap-3 transition-colors text-sm relative group",
                  isCurrent ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground",
                  !isLocked && !isCurrent ? "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground" : "",
                  isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                )}
              >
                <div className="mt-0.5 shrink-0">
                  {isCompleted && <Check className="w-4 h-4 text-muted-foreground" />}
                  {isCurrent && <ChevronRight className="w-4 h-4 text-primary" />}
                  {isLocked && <Circle className="w-4 h-4 text-muted-foreground/40" />}
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className={cn(
                    "font-medium truncate font-serif text-[13px] tracking-wide",
                    isCurrent ? "text-primary" : ""
                  )}>
                    {chapter.id === 0 ? "Prólogo" : `Capítulo ${chapter.id}`}
                  </span>
                  <span className={cn(
                    "text-xs truncate",
                    isCurrent ? "text-primary/80" : "text-muted-foreground"
                  )}>
                    {chapter.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
