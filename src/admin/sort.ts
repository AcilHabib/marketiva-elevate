/** Ascending sortOrder; missing values sink to the end, then by createdAt. */
export function compareBySortOrder<
  T extends { sortOrder?: number | null; createdAt?: string; id: string },
>(a: T, b: T): number {
  const ao = a.sortOrder ?? Number.MAX_SAFE_INTEGER;
  const bo = b.sortOrder ?? Number.MAX_SAFE_INTEGER;
  if (ao !== bo) return ao - bo;
  const ac = a.createdAt ?? "";
  const bc = b.createdAt ?? "";
  if (ac !== bc) return ac.localeCompare(bc);
  return a.id.localeCompare(b.id);
}

/** Next sortOrder so new items append to the end of the list. */
export function nextSortOrder(items: Array<{ sortOrder?: number | null }>): number {
  if (items.length === 0) return 0;
  let max = -1;
  for (const item of items) {
    const value = item.sortOrder;
    if (typeof value === "number" && Number.isFinite(value) && value > max) max = value;
  }
  return max + 1;
}

/** Swap two indices and return the resulting id order. */
export function moveOrderedIds(ids: string[], index: number, direction: "up" | "down"): string[] {
  const target = direction === "up" ? index - 1 : index + 1;
  if (target < 0 || target >= ids.length) return ids;
  const next = [...ids];
  const tmp = next[index]!;
  next[index] = next[target]!;
  next[target] = tmp;
  return next;
}
