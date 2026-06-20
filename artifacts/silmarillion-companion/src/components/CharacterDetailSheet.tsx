import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CharacterDetailCard } from "@/components/CharacterDetailCard";

type Props = {
  characterId: string | null;
  onClose: () => void;
  onCharacterSelect: (characterId: string) => void;
};

export function CharacterDetailSheet({ characterId, onClose, onCharacterSelect }: Props) {
  return (
    <Sheet open={!!characterId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Detalle del Personaje</SheetTitle>
        </SheetHeader>
        {characterId && (
          <div className="mt-6">
            <CharacterDetailCard characterId={characterId} onCharacterSelect={onCharacterSelect} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
