import React, { useMemo, useState } from "react";
import { Character, charactersData } from "@/data/silmarillion-data";
import { useSilmarillion } from "@/context/SilmarillionContext";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CharacterDetailSheet } from "@/components/CharacterDetailSheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export function CharacterGrid() {
  const { currentChapterIndex } = useSilmarillion();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImportance, setSelectedImportance] = useState<string>("ALL");
  const [selectedAlignment, setSelectedAlignment] = useState<string>("ALL");
  const [selectedDetailCharacterId, setSelectedDetailCharacterId] = useState<string | null>(null);

  // Filter characters based on:
  // 1. Chapter availability (introduced by current chapter)
  // 2. Search query (name, aliases, role)
  // 3. Importance level
  // 4. Alignment
  const filteredCharacters = useMemo(() => {
    return charactersData.filter((char) => {
      // 1. Character must be introduced by current chapter
      if (char.firstChapter > currentChapterIndex) {
        return false;
      }

      // 2. Search filter (name, aliases, role)
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        char.name.toLowerCase().includes(searchLower) ||
        char.role.toLowerCase().includes(searchLower) ||
        (char.aliases?.some((alias) => alias.toLowerCase().includes(searchLower)) ?? false);

      if (!matchesSearch) return false;

      // 3. Importance filter
      if (selectedImportance !== "ALL" && char.importance !== selectedImportance) {
        return false;
      }

      // 4. Alignment filter
      if (selectedAlignment !== "ALL" && char.alignment !== selectedAlignment) {
        return false;
      }

      return true;
    });
  }, [currentChapterIndex, searchQuery, selectedImportance, selectedAlignment]);

  const charactersByImportance = useMemo(() => {
    const grouped: Record<string, Character[]> = {
      CRITICAL: [],
      HIGH: [],
      MEDIUM: [],
      LOW: [],
    };

    filteredCharacters.forEach((char) => {
      grouped[char.importance].push(char);
    });

    return grouped;
  }, [filteredCharacters]);

  const importanceBadgeColors = {
    CRITICAL: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    HIGH: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
    MEDIUM: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    LOW: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100",
  };

  const alignmentBadgeColors = {
    good: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    evil: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    neutral: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-serif font-bold mb-4">Personajes</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Mostrando personajes que han aparecido hasta el capítulo {currentChapterIndex}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 mb-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre, rol, alias..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter row */}
        <div className="flex gap-3">
          <Select value={selectedImportance} onValueChange={setSelectedImportance}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Importancia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todas las importancias</SelectItem>
              <SelectItem value="CRITICAL">⚠️ CRITICAL</SelectItem>
              <SelectItem value="HIGH">🔴 HIGH</SelectItem>
              <SelectItem value="MEDIUM">🔵 MEDIUM</SelectItem>
              <SelectItem value="LOW">⚪ LOW</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedAlignment} onValueChange={setSelectedAlignment}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Alineación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todas las alineaciones</SelectItem>
              <SelectItem value="good">✨ Good (Bueno)</SelectItem>
              <SelectItem value="evil">🌑 Evil (Malo)</SelectItem>
              <SelectItem value="neutral">⚖️ Neutral</SelectItem>
            </SelectContent>
          </Select>

          {(searchQuery || selectedImportance !== "ALL" || selectedAlignment !== "ALL") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedImportance("ALL");
                setSelectedAlignment("ALL");
              }}
            >
              Limpiar filtros
            </Button>
          )}
        </div>
      </div>

      {/* Character Grid */}
      <ScrollArea className="flex-1">
        <div className="space-y-6 pr-4">
          {["CRITICAL", "HIGH", "MEDIUM", "LOW"].map((importance) => {
            const chars = charactersByImportance[importance as keyof typeof charactersByImportance];
            if (chars.length === 0) return null;

            return (
              <div key={importance}>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    {importance}
                  </h3>
                  <Badge variant="secondary">{chars.length}</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {chars.map((char) => {
                    const isAlive = currentChapterIndex < (char.lastChapter ?? Infinity);

                    return (
                      <div
                        key={char.id}
                        onClick={() => setSelectedDetailCharacterId(char.id)}
                        className="p-3 border border-border rounded-lg hover:bg-accent hover:border-primary transition-all cursor-pointer group"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm group-hover:text-primary truncate">
                              {char.name}
                            </h4>
                            <p className="text-xs text-muted-foreground truncate">{char.role}</p>
                          </div>
                          <Badge className={importanceBadgeColors[char.importance]}>
                            {char.importance}
                          </Badge>
                        </div>

                        {/* Metadata */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              alignmentBadgeColors[char.alignment as keyof typeof alignmentBadgeColors]
                            }`}
                          >
                            {char.alignment}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {char.race}
                          </Badge>
                          {!isAlive && (
                            <Badge variant="destructive" className="text-xs">
                              Cap. {char.lastChapter}
                            </Badge>
                          )}
                        </div>

                        {/* Description preview */}
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {char.description}
                        </p>

                        {/* Aliases if any */}
                        {char.aliases && char.aliases.length > 0 && (
                          <p className="text-xs italic text-muted-foreground line-clamp-1">
                            También: {char.aliases.join(", ")}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredCharacters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron personajes que coincidan con los filtros.
              </p>
            </div>
          )}
        </div>
      </ScrollArea>

      <CharacterDetailSheet
        characterId={selectedDetailCharacterId}
        onClose={() => setSelectedDetailCharacterId(null)}
        onCharacterSelect={setSelectedDetailCharacterId}
      />
    </div>
  );
}
