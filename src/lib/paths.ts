export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function homeAnchor(sectionId?: string) {
  return `${import.meta.env.BASE_URL}${sectionId ? `#${sectionId}` : ""}`;
}

export function workPath(slug: string) {
  return assetPath(`work/${slug}/`);
}

