import { cn } from "./cn";

export type LogoMarqueeProps = {
    /** 横長に並べたロゴの画像（public/img/partner.png） */
    src: string;
    /** 画像の縦横（px）。比率の計算に使う */
    width: number;
    height: number;
    /** 表示する高さ（px） */
    displayHeight?: number;
    label: string;
    className?: string;
};

/**
 * 協力企業・団体のロゴを横に流す。同じ画像を 2 枚つなげて切れ目なく回す。
 * 動きを減らす設定の人には止めて、横スクロールできるようにする。
 */
export function LogoMarquee({ src, width, height, displayHeight = 56, label, className }: LogoMarqueeProps) {
    const w = Math.round((width / height) * displayHeight);
    return (
        <div className={cn("overflow-hidden motion-reduce:overflow-x-auto", className)} role="img" aria-label={label}>
            <div className="nc-marquee-track flex w-max">
                {[0, 1].map((i) => (
                    <img
                        key={i}
                        src={src}
                        alt=""
                        width={w}
                        height={displayHeight}
                        // 横にはみ出した位置に置くので lazy だと読み込まれないことがある
                        loading="eager"
                        decoding="async"
                        className="block max-w-none shrink-0 pr-12"
                        style={{ width: w, height: displayHeight }}
                        aria-hidden="true"
                    />
                ))}
            </div>
        </div>
    );
}
