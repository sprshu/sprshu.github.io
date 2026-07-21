// クラス名を結合する小さなヘルパー。falsy（false/null/undefined/""）は除外する。
export function cx(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}
