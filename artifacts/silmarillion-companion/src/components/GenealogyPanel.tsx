import React, { useMemo } from 'react';
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useSilmarillion } from '@/context/SilmarillionContext';
import { flowNodesData, flowEdgesData, charactersData } from '@/data/silmarillion-data';

// Custom node styling requires inline styles or tailwind classes passed through ReactFlow
const nodeStyle = {
  background: 'hsl(var(--card))',
  color: 'hsl(var(--card-foreground))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '4px',
  padding: '10px 15px',
  fontSize: '12px',
  fontFamily: 'Inter, sans-serif',
  minWidth: '150px',
  textAlign: 'center' as const,
};

const activeNodeStyle = {
  ...nodeStyle,
  borderColor: 'hsl(var(--primary))',
  boxShadow: '0 0 10px hsla(var(--primary), 0.2)',
};

export function GenealogyPanel() {
  const { currentChapterIndex } = useSilmarillion();

  const nodes = useMemo(() => {
    return flowNodesData
      .filter(n => {
        const char = charactersData.find(c => c.id === n.characterId);
        return char && char.firstChapter <= currentChapterIndex;
      })
      .map(n => {
        const char = charactersData.find(c => c.id === n.characterId)!;
        const isActive = char.firstChapter === currentChapterIndex;
        
        return {
          id: n.id,
          position: n.position,
          data: { 
            label: (
              <div className="flex flex-col items-center">
                <span className="font-serif font-bold text-sm mb-1">{char.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{char.race}</span>
              </div>
            ) 
          },
          style: isActive ? activeNodeStyle : nodeStyle,
        };
      });
  }, [currentChapterIndex]);

  const edges = useMemo(() => {
    // Only show edges where both source and target are visible
    return flowEdgesData
      .filter(e => {
        const sourceVisible = nodes.some(n => n.id === e.source);
        const targetVisible = nodes.some(n => n.id === e.target);
        return sourceVisible && targetVisible;
      })
      .map(e => ({
        id: e.id,
        source: e.source,
        target: e.target,
        label: e.label,
        type: 'smoothstep',
        animated: false,
        style: { stroke: 'hsl(var(--primary))', strokeWidth: 1.5 },
        labelStyle: { fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontFamily: 'Inter' },
        labelBgStyle: { fill: 'hsl(var(--background))', fillOpacity: 0.8 },
      }));
  }, [nodes]);

  return (
    <div className="w-full h-full relative bg-background">
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        fitView
        minZoom={0.2}
        maxZoom={2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#333" gap={16} />
        <Controls className="fill-foreground !bg-card !border-border" />
        <MiniMap 
          nodeColor="hsl(var(--card))" 
          maskColor="hsl(var(--background) / 0.8)"
          className="!bg-background !border-border"
        />
      </ReactFlow>
    </div>
  );
}
