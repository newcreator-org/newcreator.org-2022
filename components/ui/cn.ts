/** クラス名を連結する。falsy は捨てる */
export function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(" ");
}

/** 外部リンク（http・mailto・tel）かどうか */
export function isExternal(href: string): boolean {
    return /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
