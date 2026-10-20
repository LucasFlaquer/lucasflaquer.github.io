import { cn } from "@/lib/utils";
import type { Track } from "@/types/content.ts";

interface TrackBulletsProps {
  className?: string;
  tracks: Track[];
}

const TRACK_COLOR: Record<Track, string> = {
  backend: "bg-line-backend",
  frontend: "bg-line-frontend",
};

const TrackBullets = ({ className, tracks }: TrackBulletsProps) => (
  <span aria-hidden="true" className={cn("inline-flex gap-1", className)}>
    {tracks.map((track) => (
      <span
        className={cn("block size-3 rounded-full", TRACK_COLOR[track])}
        key={track}
      />
    ))}
  </span>
);

export default TrackBullets;
