import React from "react";
import { ChapterSidebar } from "@/components/ChapterSidebar";
import { ChapterPanel } from "@/components/ChapterPanel";
import { GenealogyPanel } from "@/components/GenealogyPanel";
import { MapPanel } from "@/components/MapPanel";
import { TimelinePanel } from "@/components/TimelinePanel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network, Map, Clock } from "lucide-react";

export default function Companion() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-primary/30 text-foreground">
      {/* Left Sidebar - 260px */}
      <ChapterSidebar />
      
      {/* Center Panel - 380px */}
      <ChapterPanel />
      
      {/* Right Panel - Flexible */}
      <div className="flex-1 h-full flex flex-col min-w-0 bg-background relative z-0">
        <Tabs defaultValue="genealogy" className="flex flex-col h-full w-full">
          <div className="h-14 border-b border-border bg-card flex items-center px-4 shrink-0">
            <TabsList className="bg-background/50 border border-border h-9">
              <TabsTrigger value="genealogy" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2">
                <Network className="w-3.5 h-3.5" />
                Genealogía
              </TabsTrigger>
              <TabsTrigger value="map" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2">
                <Map className="w-3.5 h-3.5" />
                Mapa
              </TabsTrigger>
              <TabsTrigger value="timeline" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif tracking-widest text-xs uppercase gap-2">
                <Clock className="w-3.5 h-3.5" />
                Cronología
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1 relative min-h-0">
            <TabsContent value="genealogy" className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none">
              <GenealogyPanel />
            </TabsContent>
            
            <TabsContent value="map" className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none">
              <MapPanel />
            </TabsContent>
            
            <TabsContent value="timeline" className="h-full w-full m-0 p-0 border-0 data-[state=inactive]:hidden outline-none">
              <TimelinePanel />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
