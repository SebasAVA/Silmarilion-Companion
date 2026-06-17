import React from 'react';
import { useSilmarillion } from '@/context/SilmarillionContext';
import { timelineData } from '@/data/silmarillion-data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TimelinePanel() {
  const { currentChapterIndex } = useSilmarillion();

  return (
    <div className="w-full h-full bg-background relative flex flex-col">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
      
      <ScrollArea className="flex-1 px-8 py-12">
        <div className="max-w-2xl mx-auto space-y-8 relative">
          {timelineData.map((event, index) => {
            const isUnlocked = event.firstChapter <= currentChapterIndex;
            const isLeft = index % 2 === 0;
            
            return (
              <div key={event.id} className={cn(
                "relative flex items-center w-full",
                isLeft ? "justify-start" : "justify-end"
              )}>
                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary -translate-x-1/2 -translate-y-1/2 z-10"></div>
                
                {/* Event Card */}
                <div className={cn(
                  "w-[calc(50%-2rem)]",
                  !isUnlocked && "opacity-60"
                )}>
                  <div className={cn(
                    "p-4 rounded-md border bg-card transition-all",
                    isUnlocked ? "border-border hover:border-primary/50" : "border-border/50",
                    isLeft ? "text-right" : "text-left"
                  )}>
                    {isUnlocked ? (
                      <>
                        <div className="text-xs font-mono text-primary mb-1">{event.year}</div>
                        <h4 className="font-serif font-bold text-foreground text-base mb-2">{event.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-4 gap-2 text-muted-foreground">
                        <Lock className="w-5 h-5 opacity-50" />
                        <span className="text-xs uppercase tracking-widest font-serif">Evento Futuro</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
