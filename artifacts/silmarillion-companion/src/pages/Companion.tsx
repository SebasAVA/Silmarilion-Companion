import React, { useState } from "react";
import { ChapterSidebar } from "@/components/ChapterSidebar";
import { ChapterPanel } from "@/components/ChapterPanel";
import { GenealogyPanel } from "@/components/GenealogyPanel";
import { MapPanel } from "@/components/MapPanel";
import { TimelinePanel } from "@/components/TimelinePanel";
import { CompendiumPanel } from "@/components/CompendiumPanel";
import { CharacterGrid } from "@/components/CharacterGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network, Map, Clock, Users } from "lucide-react";

export default function Companion() {
  const [showCompendium, setShowCompendium] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-primary/30 text-foreground relative">
      {/* Left Sidebar - 260px */}
      <ChapterSidebar
        showCompendium={showCompendium}
        onToggleCompendium={() => setShowCompendium((v) => !v)}
      />

      {showCompendium ? (
        /* Compendium wiki mode — fills the rest of the viewport */
        <div className="flex-1 h-full min-w-0">
          <CompendiumPanel onClose={() => setShowCompendium(false)} />
        </div>
      ) : (
        <>
          {/* Center Panel - 380px */}
          <ChapterPanel />

          {/* Right Panel - Flexible */}
          <div className="flex-1 h-full flex flex-col min-w-0 bg-background relative z-0">
            <Tabs defaultValue="genealogy" className="flex flex-col h-full w-full">
              <div className="h-14 border-b border-border bg-card flex items-center px-4 shrink-0">
                <TabsList className="bg-background/50 border border-border h-9">
                  <TabsTrigger
                    value="characters"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2"
                  >
                    <Users className="w-3.5 h-3.5" />
                    Personajes
                  </TabsTrigger>
                  <TabsTrigger
                    value="genealogy"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2"
                  >
                    <Network className="w-3.5 h-3.5" />
                    Genealogía
                  </TabsTrigger>
                  <TabsTrigger
                    value="map"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2"
                  >
                    <Map className="w-3.5 h-3.5" />
                    Mapa
                  </TabsTrigger>
                  <TabsTrigger
                    value="timeline"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Cronología
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="flex-1 relative min-h-0">
                <TabsContent
                  value="characters"
                  className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none"
                >
                  <CharacterGrid />
                </TabsContent>

                <TabsContent
                  value="genealogy"
                  className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none"
                >
                  <GenealogyPanel />
                </TabsContent>

                <TabsContent
                  value="map"
                  className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none"
                >
                  <MapPanel />
                </TabsContent>

                <TabsContent
                  value="timeline"
                  className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none"
                >
                  <TimelinePanel />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </>
      )}

      {/* Footer Credit */}
      <div className="fixed bottom-4 left-4 text-xs text-muted-foreground hover:text-foreground transition-colors pointer-events-none">
        <p>
          Made with <span className="text-primary">♥</span> by{' '}
          <span className="text-primary font-semibold">its_perri</span> aka{' '}
          <span className="text-primary font-semibold">Sebastian Rojas</span>
        </p>
      </div>
    </div>
  );
}
