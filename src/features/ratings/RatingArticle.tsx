import { LOREM, REVIEWS } from "../../shared/config/content";

export function RatingArticle() {
  return (
    <div
      data-section="reviews"
      data-spy="reviews"
      className="mt-6 scroll-mt-24 border-t border-slate-100 pt-5 sm:mt-8 sm:pt-6"
    >
      <div className="space-y-3 text-[13px] leading-relaxed text-slate-600">
        <p>{LOREM[0]}</p>
        <p>{LOREM[1]}</p>
      </div>
      <h2 className="mt-7 text-[13px] font-extrabold uppercase tracking-wide text-slate-900 sm:text-base">
        ТОП 10 лучших онлайн казино в интернете
      </h2>
      <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-600">
        <p>{LOREM[2]}</p>
        <p>{LOREM[0]}</p>
      </div>
      <div className="mt-6 space-y-6">
        {REVIEWS.map((review) => (
          <div key={review.title}>
            <h3 className="text-sm font-bold text-slate-900">{review.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{LOREM[1]}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{LOREM[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
