import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { charactersData } from "@/data/silmarillion-data";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { Badge } from "@/components/ui/badge";
import { Map, Network, Clock } from "lucide-react";

export function CharacterDrawer({ characterId, onClose }: { characterId: string | null; onClose: () => void }) {
  const { currentChapterIndex } = useSilmarillion();
  
  const character = charactersData.find(c => c.id === characterId);

  if (!character) return null;

  // Filter relationships to only show those where both characters are unlocked
  const knownRelationships = character.relationships.filter(rel => {
    const relative = charactersData.find(c => c.name === rel.name);
    return relative && relative.firstChapter <= currentChapterIndex;
  });

  return (
    <Sheet open={!!characterId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-[400px] sm:w-[540px] border-l border-primary/20 bg-background overflow-y-auto sm:max-w-md">
        <SheetHeader className="pb-6 border-b border-border text-left">
          <SheetTitle className="font-serif text-3xl font-bold text-foreground">
            {character.name}
          </SheetTitle>
          <div className="flex gap-2 mt-2 flex-wrap">
            <Badge variant="secondary" className="font-serif uppercase tracking-widest text-[10px] text-primary bg-primary/10 border border-primary/20">
              {character.race}
            </Badge>
            <Badge variant="outline" className="uppercase tracking-widest text-[10px] border-border text-muted-foreground">
              {character.alignment === 'good' ? 'Luz' : character.alignment === 'evil' ? 'Oscuridad' : 'Gris'}
            </Badge>
          </div>
        </SheetHeader>

        <div className="py-6 space-y-8">
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {character.description}
            </p>
          </div>

          {knownRelationships.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Network className="w-4 h-4" />
                <h3 className="font-serif text-sm font-semibold tracking-wider uppercase">Relaciones Conocidas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {knownRelationships.map((rel, i) => (
                  <div key={i} className="text-xs bg-secondary px-3 py-1.5 rounded-sm border border-border">
                    <span className="text-muted-foreground mr-2">{rel.type === 'spouse' ? 'Espos@' : rel.type === 'parent' ? 'Padre/Madre' : 'Hij@'}:</span>
                    <span className="font-medium text-foreground">{rel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {character.locations.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Map className="w-4 h-4" />
                <h3 className="font-serif text-sm font-semibold tracking-wider uppercase">Lugares Asociados</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {character.locations.map((loc, i) => (
                  <Badge key={i} variant="outline" className="bg-background">
                    {loc}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {character.events.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="w-4 h-4" />
                <h3 className="font-serif text-sm font-semibold tracking-wider uppercase">Eventos Clave</h3>
              </div>
              <ul className="space-y-2">
                {character.events.map((event, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0"></span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
