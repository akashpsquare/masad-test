"global function here";

export function generateUniqueId(length = 16, prefix = ""): string {
  const base = `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
  const cleanBase = base.replace(/[^a-z0-9]/gi, "");
  const trimmed = cleanBase.substring(0, Math.max(0, length - prefix.length));
  return prefix + trimmed;
}
