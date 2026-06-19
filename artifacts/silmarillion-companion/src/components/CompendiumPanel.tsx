import React, { useState, useMemo } from "react";
import { chaptersData, charactersData, locationsData, timelineData, Character } from "@/data/silmarillion-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  X, Search, Users, MapPin, Clock, BookOpen,
  ChevronRight, Circle, Check
} from "lucide-react";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { CharacterGrid } from "@/components/CharacterGrid";

type Props = {
  onClose: () => void;
};


export function CompendiumPanel({ onClose }: Props) {
  const [search, setSearch] = useState("");
  const { currentChapterIndex } = useSilmarillion();

  const filteredChars = useMemo(() => {
    const q = search.toLowerCase();
    return charactersData.filter(
      (c) => !q || c.name.toLowerCase().includes(q) || c.race.toLowerCase().includes(q) || c.role.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredLocations = useMemo(() => {
    const q = search.toLowerCase();
    return locationsData.filter(
      (l) => !q || l.name.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredEvents = useMemo(() => {
    const q = search.toLowerCase();
    return timelineData.filter(
      (e) => !q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.year.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredChapters = useMemo(() => {
    const q = search.toLowerCase();
    return chaptersData.filter(
      (c) => !q || c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="flex flex-col h-full bg-background border-l border-border">
      {/* Header */}
      <div className="h-14 border-b border-border bg-card flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-primary" />
          <h2 className="font-serif text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            Compendio
          </h2>
          <span className="text-[10px] text-muted-foreground border border-border px-2 py-0.5 rounded-sm uppercase tracking-wider">
            Enciclopedia completa
          </span>
        </div>
        <button
          data-testid="compendium-close"
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Search bar */}
      <div className="px-5 py-3 border-b border-border shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            data-testid="compendium-search"
            type="text"
            placeholder="Buscar personajes, lugares, eventos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-muted border border-border rounded-sm pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="characters" className="flex flex-col flex-1 min-h-0">
        <div className="px-5 pt-3 shrink-0">
          <TabsList className="bg-muted border border-border h-9 w-full grid grid-cols-4">
            <TabsTrigger
              value="characters"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs uppercase tracking-wider gap-1.5"
            >
              <Users className="w-3 h-3" />
              <span className="hidden sm:inline">Personajes</span>
              <span className="text-[10px] opacity-70">({filteredChars.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="locations"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs uppercase tracking-wider gap-1.5"
            >
              <MapPin className="w-3 h-3" />
              <span className="hidden sm:inline">Lugares</span>
              <span className="text-[10px] opacity-70">({filteredLocations.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs uppercase tracking-wider gap-1.5"
            >
              <Clock className="w-3 h-3" />
              <span className="hidden sm:inline">Eventos</span>
              <span className="text-[10px] opacity-70">({filteredEvents.length})</span>
            </TabsTrigger>
            <TabsTrigger
              value="chapters"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs uppercase tracking-wider gap-1.5"
            >
              <BookOpen className="w-3 h-3" />
              <span className="hidden sm:inline">Capítulos</span>
              <span className="text-[10px] opacity-70">({filteredChapters.length})</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* PERSONAJES */}
        <TabsContent value="characters" className="flex-1 min-h-0 m-0 mt-3 outline-none">
          <CharacterGrid />
        </TabsContent>

        {/* LUGARES */}
        <TabsContent value="locations" className="flex-1 min-h-0 m-0 mt-3 outline-none">
          <ScrollArea className="h-full">
            <div className="px-5 pb-6 grid gap-2">
              {filteredLocations.length === 0 && (
                <p className="text-sm text-muted-foreground py-8 text-center">Sin resultados.</p>
              )}
              {filteredLocations.map((loc) => (
                <div
                  key={loc.id}
                  data-testid={`compendium-loc-${loc.id}`}
                  className="border border-border bg-card rounded-sm p-4 hover:border-border/80 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-serif text-sm text-foreground font-semibold">{loc.name}</h3>
                    </div>
                    <Badge variant="outline" className="text-[10px] border border-border text-muted-foreground shrink-0">
                      Cap. {loc.firstChapter === 0 ? "Prólogo" : loc.firstChapter}
                    </Badge>
                  </div>
                  <p className="text-xs text-foreground/75 mt-2 leading-relaxed pl-6">{loc.description}</p>
                  <div className="pl-6 mt-2 flex gap-3 text-[10px] text-muted-foreground">
                    <span>Lat: {loc.lat}</span>
                    <span>Lng: {loc.lng}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        {/* EVENTOS */}
        <TabsContent value="events" className="flex-1 min-h-0 m-0 mt-3 outline-none">
          <ScrollArea className="h-full">
            <div className="px-5 pb-6">
              {filteredEvents.length === 0 && (
                <p className="text-sm text-muted-foreground py-8 text-center">Sin resultados.</p>
              )}
              <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-primary/20" />
                <div className="space-y-0">
                  {filteredEvents.map((ev, i) => {
                    const unlocked = ev.firstChapter <= currentChapterIndex;
                    return (
                      <div key={ev.id} data-testid={`compendium-event-${ev.id}`} className="flex gap-4 pl-1 pb-4">
                        <div className={cn(
                          "w-9 h-9 rounded-sm border flex items-center justify-center shrink-0 z-10 bg-background",
                          unlocked ? "border-primary/50 bg-primary/10" : "border-border"
                        )}>
                          {unlocked
                            ? <Check className="w-3.5 h-3.5 text-primary" />
                            : <Circle className="w-3.5 h-3.5 text-muted-foreground/40" />
                          }
                        </div>
                        <div className={cn("flex-1 pt-1.5", !unlocked && "opacity-60")}>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{ev.year}</p>
                          <h4 className="font-serif text-sm text-foreground font-medium mt-0.5">{ev.title}</h4>
                          <p className="text-xs text-foreground/70 mt-1 leading-relaxed">{ev.description}</p>
                          <Badge variant="outline" className="text-[10px] border border-border text-muted-foreground mt-1.5">
                            Cap. {ev.firstChapter === 0 ? "Prólogo" : ev.firstChapter}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        {/* CAPÍTULOS */}
        <TabsContent value="chapters" className="flex-1 min-h-0 m-0 mt-3 outline-none">
          <ScrollArea className="h-full">
            <div className="px-5 pb-6 space-y-2">
              {filteredChapters.length === 0 && (
                <p className="text-sm text-muted-foreground py-8 text-center">Sin resultados.</p>
              )}
              {filteredChapters.map((ch) => {
                const unlocked = ch.id <= currentChapterIndex;
                const isCurrent = ch.id === currentChapterIndex;
                return (
                  <div
                    key={ch.id}
                    data-testid={`compendium-chapter-${ch.id}`}
                    className={cn(
                      "border rounded-sm p-4 transition-colors",
                      isCurrent ? "border-primary/50 bg-primary/5" : "border-border bg-card",
                      !unlocked && "opacity-60"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-7 h-7 rounded-sm border flex items-center justify-center shrink-0",
                        isCurrent ? "border-primary bg-primary/20" : unlocked ? "border-primary/30" : "border-border"
                      )}>
                        {isCurrent
                          ? <ChevronRight className="w-3.5 h-3.5 text-primary" />
                          : unlocked
                            ? <Check className="w-3.5 h-3.5 text-primary/70" />
                            : <Circle className="w-3.5 h-3.5 text-muted-foreground/40" />
                        }
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            {ch.id === 0 ? "Prólogo" : `Cap. ${ch.id}`}
                          </span>
                          {isCurrent && (
                            <Badge className="text-[10px] bg-primary/20 text-primary border-primary/30 border">
                              Leyendo
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-serif text-sm font-semibold text-foreground mt-0.5">{ch.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{ch.subtitle}</p>
                        {unlocked && (
                          <p className="text-xs text-foreground/70 mt-2 leading-relaxed">{ch.description}</p>
                        )}
                        {unlocked && ch.needToKnow && (
                          <ul className="mt-2 space-y-1">
                            {ch.needToKnow.map((point, i) => (
                              <li key={i} className="text-xs text-foreground/60 flex gap-1.5">
                                <span className="text-primary shrink-0">—</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
