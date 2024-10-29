import { create } from 'zustand';
import { applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer';

const useStore = create((set) => ({
  nodes: [],
  edges: [],
  history: [], // To keep track of the history for undo
  addNode: (node) => set((state) => {
    const newHistory = [...state.history, { nodes: state.nodes, edges: state.edges }];
    return {
      nodes: [...state.nodes, node],
      edges: state.edges,
      history: newHistory,
    };
  }),
  onNodesChange: (changes) => set((state) => {
    const newHistory = [...state.history, { nodes: state.nodes, edges: state.edges }];
    return {
      nodes: applyNodeChanges(changes, state.nodes),
      edges: state.edges,
      history: newHistory,
    };
  }),
  onEdgesChange: (changes) => set((state) => {
    const newHistory = [...state.history, { nodes: state.nodes, edges: state.edges }];
    return {
      nodes: state.nodes,
      edges: applyEdgeChanges(changes, state.edges.map((edge) => ({
        ...edge,
        id: edge.id || `edge-${Math.random()}`, // Ensure unique edge ID
      }))),
      history: newHistory,
    };
  }),
  onConnect: (connection) => set((state) => {
    const newHistory = [...state.history, { nodes: state.nodes, edges: state.edges }];
    return {
      nodes: state.nodes,
      edges: [
        ...state.edges,
        { ...connection, id: `edge-${Math.random()}` },  // Ensure unique ID for new connection
      ],
      history: newHistory,
    };
  }),
  undo: () => set((state) => {
    if (state.history.length === 0) return {};
    const lastHistory = state.history[state.history.length - 1];
    return {
      nodes: lastHistory.nodes,
      edges: lastHistory.edges,
      history: state.history.slice(0, -1),
    };
  }),
  clearGraph: () => set(() => ({
    nodes: [],
    edges: [],
    history: [],
  })),
}));

export { useStore };
