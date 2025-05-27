// ✅ File: src/types/AnnouncementTypes.ts

import {
  Wrench,
  CheckCircle,
  Shield,
  Bell,

  Lock,
  KeyRound,
  Eye,
} from 'lucide-react-native';
import { JSX } from 'react';

/**
 * Enum for announcement categories
 */
export type Announcement = {
   id: string;
  title: string;
  type: AnnouncementTypes;
  date: string;
  description: string;
};

// Define the props for the AnnouncementCard component

export enum AnnouncementTypes {
  MAINTENANCE = 'maintenance',
  INSTALLATION = 'installation',
  SECURITY = 'security',
  FIRE_DRILL = 'fire_drill',
  LOCK = 'lock',
  KEY = 'key',
  CCTV = 'cctv',
}

/**
 * Map announcement type to icon component
 */
export const announcementIcons: Record<AnnouncementTypes, React.ElementType> = {
  [AnnouncementTypes.MAINTENANCE]: Wrench,
  [AnnouncementTypes.INSTALLATION]: CheckCircle,
  [AnnouncementTypes.SECURITY]: Shield,
  [AnnouncementTypes.FIRE_DRILL]: Bell,
  [AnnouncementTypes.LOCK]: Lock,
  [AnnouncementTypes.KEY]: KeyRound,
  [AnnouncementTypes.CCTV]: Eye,
};
