import { create } from "zustand";

interface PropertyData {
  propertyData: any;
  hoveredPropertyId: string | null;
  selectedPropertyId: string | null;
  setPropertyData: (data: any) => void;
  setHoveredPropertyId: (id: string | null) => void;
  setSelectedPropertyId: (id: string | null) => void;
}

export const usePropertyData = create<PropertyData>((set, get) => ({
  propertyData: null,
  hoveredPropertyId: null,
  selectedPropertyId: null,
  setPropertyData: (data) => set({ propertyData: data }),
  setHoveredPropertyId: (id) => set({ hoveredPropertyId: id }),
  setSelectedPropertyId: (id) => {
    console.log('Setting selectedPropertyId:', id); // Debug log
    set({ selectedPropertyId: id });
  },
}));
