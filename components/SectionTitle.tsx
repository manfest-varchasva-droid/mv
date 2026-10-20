type Props = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  /** Sitewide by default; pass masked={false} for an intentional static exception. */
  masked?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  masked = true,
}: Props) {
  return (
    <div className={`section-title section-title-${align}${masked ? " b3-section-title" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>
        {masked ? (
          <>
            <span className="b3-heading-mask b3-heading-base">
              <span className="b3-heading-ink">{title}</span>
            </span>
            {accent ? (
              <>
                {" "}
                <span className="b3-heading-mask b3-heading-accent">
                  <span className="b3-heading-ink">{accent}</span>
                </span>
              </>
            ) : null}
          </>
        ) : (
          <>
            {title} {accent ? <span>{accent}</span> : null}
          </>
        )}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
