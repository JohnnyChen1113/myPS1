"use client";
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DraggableStateSnapshot, DroppableProvided } from 'react-beautiful-dnd';

interface Element {
  key: string;
  label: string;
  enabled: boolean;
  color: string;
}

interface ElementSelectorProps {
  elements: Element[];
  onChange: (key: string, enabled: boolean, color: string) => void;
  setElements: (elements: Element[]) => void;
}

const colorOptions = [
  '#4F46E5', // indigo
  '#16A34A', // green
  '#F59E42', // orange
  '#F43F5E', // pink
  '#0EA5E9', // blue
  '#64748B', // gray
  '#FACC15', // yellow
  '#A21CAF', // purple
  '#F472B6', // rose
  '#F87171', // red
  '#34D399', // emerald
  '#60A5FA', // sky
  '#FBBF24', // amber
  '#A3E635', // lime
  '#38BDF8', // cyan
  '#C084FC', // violet
  '#FDE68A', // light yellow
  '#FCA5A5', // light red
  '#6EE7B7', // light green
  '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#D65076', '#45B8AC', '#EFC050', '#5B5EA6', '#9B2335', '#DFCFBE', '#55B4B0', '#E15D44', '#7FCDCD', '#BC243C', '#C3447A',
];

// 解决react-beautiful-dnd在StrictMode下拖动无效问题
function StrictModeDroppable({ children, ...props }: any) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) return null;
  return <Droppable {...props}>{children}</Droppable>;
}

const ElementSelector: React.FC<ElementSelectorProps> = ({ elements, onChange, setElements }) => {
  // 拖拽结束时更新顺序
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(elements);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setElements(reordered);
  };

  return (
    <div>
      <h2 className="font-semibold mb-2 text-white">Select elements and colors:</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <StrictModeDroppable droppableId="elements-droppable">
          {(provided: DroppableProvided) => (
            <div className="space-y-3" ref={provided.innerRef} {...provided.droppableProps}>
              {elements.map((el, idx) => (
                <Draggable key={el.key} draggableId={el.key} index={idx}>
                  {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex items-center gap-4 bg-white/5 rounded-lg px-3 py-2 shadow border border-white/10 transition-transform ${snapshot.isDragging ? 'scale-105 ring-2 ring-blue-400' : ''}`}
                    >
                      <span className="cursor-grab text-xl text-blue-400 select-none mr-2">≡</span>
                      <input
                        type="checkbox"
                        checked={el.enabled}
                        onChange={e => onChange(el.key, e.target.checked, el.color)}
                        id={`el-${el.key}`}
                        className="accent-blue-500 w-5 h-5"
                      />
                      <label htmlFor={`el-${el.key}`} className="w-32 text-white font-medium">{el.key === 'newline' ? 'Newline (换行)' : el.label}</label>
                      {el.key !== 'newline' && (
                        <select
                          className="border border-white/20 bg-white/10 text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          value={el.color}
                          onChange={e => onChange(el.key, el.enabled, e.target.value)}
                        >
                          {colorOptions.map(c => (
                            <option key={c} value={c} style={{ color: c }}>{c}</option>
                          ))}
                        </select>
                      )}
                      {el.key !== 'newline' && (
                        <input
                          type="color"
                          value={el.color}
                          onChange={e => onChange(el.key, el.enabled, e.target.value)}
                          className="ml-2 w-8 h-8 border-none bg-transparent cursor-pointer"
                          title="Custom color"
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};

export default ElementSelector; 