"use client"

// src/components/ui/badge.tsx
import * as React from "react"

import { cn } from "@/lib/utils"

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'bg-blue-500' }) => {
  return (
    <span className={`${color} text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded`}>
      {text}
    </span>
  );
};

export {Badge};
