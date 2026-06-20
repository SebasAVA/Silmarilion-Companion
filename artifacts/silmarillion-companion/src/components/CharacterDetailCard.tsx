import React, { useMemo } from "react";
import { Character, charactersData } from "@/data/silmarillion-data";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Book, Sword, Users, MapPin } from "lucide-react";

interface CharacterDetailCardProps {
  characterId: string;
  onCharacterSelect?: (characterId: string) => void;
}

export function CharacterDetailCard({ characterId, onCharacterSelect }: CharacterDetailCardProps) {
  const { currentChapterIndex } = useSilmarillion();

  const character = useMemo(
    () => charactersData.find((c) => c.id === characterId),
    [characterId]
  );

  if (!character) {
    return <div className="p-4 text-muted-foreground">Personaje no encontrado</div>;
  }

  // Chapter-aware logic: determine what to show based on current chapter
  const isCharacterAlive = currentChapterIndex < (character.lastChapter ?? Infinity);
  const isCharacterIntroduced = currentChapterIndex >= character.firstChapter;
  const hasDeathInfoAvailable = character.deathInfo && currentChapterIndex >= character.deathInfo.chapter;

  const knownTitles = (character.titles ?? []).filter((t) => t.chapter <= currentChapterIndex);
  const lockedTitlesCount = (character.titles?.length ?? 0) - knownTitles.length;
  const knownDeeds = (character.notableDeeds ?? []).filter((d) => d.chapter <= currentChapterIndex);
  const lockedDeedsCount = (character.notableDeeds?.length ?? 0) - knownDeeds.length;

  const importanceColors = {
    CRITICAL: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    HIGH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
    MEDIUM: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    LOW: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl font-serif">{character.name}</CardTitle>
            <CardDescription className="text-base mt-1">{character.role}</CardDescription>

            {/* Aliases */}
            {character.aliases && character.aliases.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {character.aliases.map((alias) => (
                  <span key={alias} className="text-xs text-muted-foreground italic">
                    {alias}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Status badge */}
          <div className="flex flex-col gap-2 items-end">
            <Badge className={importanceColors[character.importance]}>
              {character.importance}
            </Badge>

            {!isCharacterIntroduced && (
              <Badge variant="outline" className="text-yellow-700 border-yellow-300">
                No aparece aún
              </Badge>
            )}

            {isCharacterAlive ? (
              <Badge variant="outline" className="text-green-700 border-green-300">
                Activo
              </Badge>
            ) : (
              <Badge variant="outline" className="text-gray-600 border-gray-400">
                {character.lastChapter ? `Hasta Cap. ${character.lastChapter}` : "No aparece"}
              </Badge>
            )}
          </div>
        </div>

        {/* Basic info */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">Raza:</span> {character.race}
          </div>
          <div>
            <span className="font-semibold text-foreground">Alineación:</span> {character.alignment}
          </div>
          <div>
            <span className="font-semibold text-foreground">Aparición:</span> Cap. {character.firstChapter}
            {character.lastChapter && ` - Cap. ${character.lastChapter}`}
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {!isCharacterIntroduced && (
          <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-700 rounded-md p-3 mb-4 flex gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-700 dark:text-yellow-300 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Este personaje no ha aparecido en el capítulo actual. Aparecerá en el capítulo {character.firstChapter}.
            </p>
          </div>
        )}

        <Tabs defaultValue="biography" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="biography" className="text-xs">
              <Book className="w-3 h-3 mr-1" />
              Biografía
            </TabsTrigger>
            <TabsTrigger value="titles" className="text-xs">
              <Sword className="w-3 h-3 mr-1" />
              Títulos
            </TabsTrigger>
            <TabsTrigger value="relations" className="text-xs">
              <Users className="w-3 h-3 mr-1" />
              Relaciones
            </TabsTrigger>
            <TabsTrigger value="details" className="text-xs">
              <MapPin className="w-3 h-3 mr-1" />
              Más
            </TabsTrigger>
          </TabsList>

          {/* BIOGRAPHY Tab */}
          <TabsContent value="biography" className="mt-4">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{character.description}</p>
              </div>

              {character.details && isCharacterIntroduced && (
                <div className="bg-muted p-4 rounded-md border border-slate-200 dark:border-slate-700">
                  <p className="text-sm leading-relaxed text-foreground">{character.details}</p>
                </div>
              )}

              {!isCharacterAlive && hasDeathInfoAvailable && character.deathInfo && (
                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-700 rounded-md p-4">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    Destino en el Capítulo {character.deathInfo.chapter}
                  </h4>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {character.deathInfo.description}
                  </p>
                  {character.deathInfo.killer && (
                    <p className="text-xs text-red-700 dark:text-red-300 mt-2">
                      <span className="font-semibold">Causante:</span> {character.deathInfo.killer}
                    </p>
                  )}
                </div>
              )}
            </div>
          </TabsContent>

          {/* TITLES Tab */}
          <TabsContent value="titles" className="mt-4">
            {knownTitles.length > 0 ? (
              <div className="space-y-2">
                {knownTitles.map((title, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2 bg-muted rounded">
                    <Sword className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{title.text}</span>
                  </div>
                ))}
                {lockedTitlesCount > 0 && (
                  <p className="text-xs text-muted-foreground italic pt-1">
                    +{lockedTitlesCount} título{lockedTitlesCount > 1 ? "s" : ""} aún por descubrir a medida que avances.
                  </p>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {lockedTitlesCount > 0 ? "Aún no se conocen títulos de este personaje." : "Sin títulos registrados."}
              </p>
            )}
          </TabsContent>

          {/* RELATIONS Tab */}
          <TabsContent value="relations" className="mt-4">
            {character.relationships && character.relationships.length > 0 ? (
              <div className="space-y-3">
                {character.relationships.map((rel, idx) => {
                  const relatedChar = charactersData.find((c) => c.id === rel.characterId);
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 bg-muted rounded cursor-pointer hover:bg-muted/80 transition-colors"
                      onClick={() => onCharacterSelect?.(rel.characterId)}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate text-foreground">{relatedChar?.name || rel.characterId}</p>
                        <p className="text-xs text-muted-foreground capitalize">{rel.type}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2 shrink-0">
                        {rel.type}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Sin relaciones registradas.</p>
            )}
          </TabsContent>

          {/* DETAILS Tab */}
          <TabsContent value="details" className="mt-4">
            <div className="space-y-4">
              {/* Notable Deeds */}
              {(knownDeeds.length > 0 || lockedDeedsCount > 0) && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Logros Notables</h4>
                  {knownDeeds.length > 0 ? (
                    <div className="space-y-1">
                      {knownDeeds.map((deed, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">★</span>
                          <span>{deed.text}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Aún no se conocen logros de este personaje.</p>
                  )}
                  {lockedDeedsCount > 0 && (
                    <p className="text-xs text-muted-foreground italic pt-1">
                      +{lockedDeedsCount} logro{lockedDeedsCount > 1 ? "s" : ""} aún por descubrir a medida que avances.
                    </p>
                  )}
                </div>
              )}

              {/* Great Tales */}
              {character.greatTales && character.greatTales.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Aparece en Historias</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.greatTales.map((taleId) => (
                      <Badge key={taleId} variant="outline">
                        {taleId.replace("-", " ").toUpperCase()}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {character.events && character.events.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Eventos</h4>
                  <div className="space-y-1">
                    {character.events.map((event, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">• {event}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Locations */}
              {character.locations && character.locations.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-2">Lugares Clave</h4>
                  <div className="flex flex-wrap gap-2">
                    {character.locations.map((loc) => (
                      <Badge key={loc} variant="secondary">
                        {loc}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
