import { useState } from "react";

import type { Role } from "@/types/content.ts";

export const useStationPreview = (roles: Role[]) => {
  const latest = roles.at(-1);
  const [previewSlug, setPreviewSlug] = useState(latest?.slug ?? "");
  const previewRole =
    roles.find((role) => role.slug === previewSlug) ?? latest ?? null;
  return { previewRole, setPreviewSlug };
};
