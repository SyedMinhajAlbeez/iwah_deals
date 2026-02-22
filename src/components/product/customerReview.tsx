"use client";

import { FC, useCallback, useState } from "react";
import { AskQuestionLoginModal, WriteReviewModal } from "./CustomerReviewModals";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  name: string;
  avatarUrl?: string | null;
  verified: boolean;
  stars: number;
  date: string;
  title: string;
  body: string;
}

// ── Static Data ───────────────────────────────────────────────────────────────

const RATING_BREAKDOWN = [
  { stars: 5, count: 443 },
  { stars: 4, count: 43 },
  { stars: 3, count: 15 },
  { stars: 2, count: 13 },
  { stars: 1, count: 32 },
];

const TOTAL_RATINGS = 546;
const AVG_RATING = 4.6;
const MAX_BAR = 443;

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Talha Shakir",
    avatarUrl: "https://i.pravatar.cc/44?img=11",
    verified: true,
    stars: 5,
    date: "02/18/2026",
    title: "Alhamduliilah sy farq parna shuru hwa hai mairy baity ko biogrow and nucal z syp sy",
    body: "Alhamduliilah sy farqq parna shuru hwa hai mairy baity ko biogrow and nucal z syp sy, highly recommend, maira 3rd order hai ye ❤️",
  },
  {
    id: 2,
    name: "Babar Khan",
    avatarUrl: null,
    verified: true,
    stars: 5,
    date: "02/10/2026",
    title: "Best",
    body: "Best syrup",
  },
  {
    id: 3,
    name: "Ayaz Akram",
    avatarUrl: null,
    verified: true,
    stars: 5,
    date: "01/25/2026",
    title: "It's",
    body: "It's amazing",
  },
  {
    id: 4,
    name: "Nouman Khan",
    avatarUrl: null,
    verified: true,
    stars: 5,
    date: "12/23/2025",
    title: "Good",
    body: "Good product",
  },
  {
    id: 5,
    name: "Anonymous",
    avatarUrl: null,
    verified: true,
    stars: 5,
    date: "12/18/2025",
    title: "Great",
    body: "Great product, highly recommend.",
  },
];

// ── StarIcon with half-star support ──────────────────────────────────────────

let halfStarCounter = 0;

const StarIcon: FC<{ fill: "full" | "half" | "empty"; className?: string }> = ({
  fill,
  className = "w-4 h-4",
}) => {
  const gradId = `hsg-${++halfStarCounter}`;
  return (
    <svg className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      {fill === "half" && (
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="50%" stopColor="#E0E0E0" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={
          fill === "full" ? "#F5A623" : fill === "half" ? `url(#${gradId})` : "#E0E0E0"
        }
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
};

const Stars: FC<{ rating: number; className?: string }> = ({
  rating,
  className = "w-4 h-4",
}) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => {
      const fill: "full" | "half" | "empty" =
        rating >= i + 1 ? "full" : rating >= i + 0.5 ? "half" : "empty";
      return <StarIcon key={i} fill={fill} className={className} />;
    })}
  </div>
);

// ── Avatar ────────────────────────────────────────────────────────────────────

const Avatar: FC<{ src?: string | null; name: string }> = ({ src, name }) => (
  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200">
    {src ? (
      <img src={src} alt={name} className="w-full h-full object-cover" />
    ) : (
      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    )}
  </div>
);

// ── Review Card ───────────────────────────────────────────────────────────────

const ReviewCard: FC<{ review: Review; isLast: boolean }> = ({ review, isLast }) => (
  <div className={`py-5 ${!isLast ? "border-b border-gray-100" : ""}`}>
    {/* Stars + date */}
    <div className="flex items-center justify-between mb-3">
      <Stars rating={review.stars} className="w-[18px] h-[18px]" />
      <span className="text-xs text-gray-400">{review.date}</span>
    </div>

    {/* Avatar + name + badge + sub-stars */}
    <div className="flex items-center gap-2.5 mb-3">
      <Avatar src={review.avatarUrl} name={review.name} />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-gray-900 leading-none">
            {review.name}
          </span>
          {review.verified && (
            <span className="bg-[#F5A623] text-white text-[10px] font-bold px-2 py-0.5 rounded-full leading-none">
              Verified
            </span>
          )}
        </div>
        <Stars rating={review.stars} className="w-3.5 h-3.5" />
      </div>
    </div>

    {/* Title */}
    <p className="text-sm font-bold text-gray-900 mb-1 leading-snug">{review.title}</p>
    {/* Body */}
    <p className="text-sm text-gray-500 leading-relaxed">{review.body}</p>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────

export const CustomerReviews: FC = () => {
  const [activeTab, setActiveTab] = useState<"reviews" | "questions">("reviews");
  const [currentPage, setCurrentPage] = useState(2);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [reviewFiles, setReviewFiles] = useState<FileList | null>(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const closeModal = useCallback(() => {
    setIsWriteReviewOpen(false);
    setIsAskQuestionOpen(false);
  }, []);

  return (
    <section className="w-full py-8">
      <div className="w-[311px] h-[46px]  flex  mb-6">
        <h2 className="font-['Poppins'] font-semibold text-[32px] leading-[23px] text-black">
          Customer Reviews
        </h2>
      </div>

      {/* ════════════════════════════════════════════════════════
          RATING SUMMARY
          Left: big score + stars + count
          Right: bar chart rows
      ════════════════════════════════════════════════════════ */}
      <div className="w-full max-w-[1393px] min-h-[246px]  flex flex-col sm:flex-row sm:items-center gap-6  px-6 py-6">

        {/* ── Score block ── */}
        <div className="flex-shrink-0 min-w-[120px]">
          {/* 4.6 / 5 */}
          <div className="flex items-baseline leading-none mb-2">
            <span className="text-[44px] font-extrabold text-gray-900 tracking-tight leading-none">
              {AVG_RATING}
            </span>
            <span className="text-xl text-gray-400 font-medium ml-0.5">/5</span>
          </div>
          {/* Stars with half star */}
          <Stars rating={AVG_RATING} className="w-[22px] h-[22px]" />
          {/* Count */}
          <p className="text-xs text-gray-400 mt-1.5">{TOTAL_RATINGS} Ratings</p>
        </div>

        {/* ── Bar chart ── */}
        <div className="flex-1 space-y-[9px] min-w-0">
          {RATING_BREAKDOWN.map(({ stars, count }) => (
            <div key={stars} className="flex items-center gap-3">
              {/* Star icons label */}
              <div className="flex-shrink-0">
                <Stars rating={stars} className="w-3.5 h-3.5" />
              </div>
              {/* Bar track */}
              <div className="flex-1 h-[10px] bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#F5A623] rounded-full transition-all duration-500"
                  style={{ width: `${(count / MAX_BAR) * 100}%` }}
                />
              </div>
              {/* Count */}
              <span className="text-xs text-gray-500 w-8 text-right flex-shrink-0">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          ACTION BUTTONS
      ════════════════════════════════════════════════════════ */}
      <div className="flex flex-wrap gap-3 py-5 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setIsWriteReviewOpen(true)}
          className="border border-[#C97A2A] text-[#C97A2A] bg-white rounded-full px-7 py-2.5 text-sm font-semibold hover:bg-[#C97A2A] hover:text-white transition-colors"
        >
          Write a Review
        </button>
        <button
          type="button"
          onClick={() => setIsAskQuestionOpen(true)}
          className="border border-[#098EB9] text-[#098EB9] bg-white rounded-full px-7 py-2.5 text-sm font-semibold hover:bg-[#098EB9] hover:text-white transition-colors"
        >
          Ask a Question
        </button>
      </div>

      {/* ════════════════════════════════════════════════════════
          TABS
      ════════════════════════════════════════════════════════ */}
      <div className="flex items-center gap-1 pt-4 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 text-sm font-semibold rounded-t-md transition-colors ${
            activeTab === "reviews"
              ? "bg-[#F5EBE4] text-[#8B3A0F]"
              : "text-gray-500 underline hover:text-gray-700"
          }`}
        >
          Reviews (171)
        </button>
        <button
          onClick={() => setActiveTab("questions")}
          className={`px-4 py-2 text-sm font-semibold rounded-t-md transition-colors ${
            activeTab === "questions"
              ? "bg-[#F5EBE4] text-[#8B3A0F]"
              : "text-gray-500 underline hover:text-gray-700"
          }`}
        >
          Questions (12)
        </button>
      </div>

      {/* ════════════════════════════════════════════════════════
          SORT
      ════════════════════════════════════════════════════════ */}
      <p className="text-xs text-gray-500 pt-4 pb-1">Most Recent</p>

      {/* ════════════════════════════════════════════════════════
          REVIEW LIST  (divider-separated, no card boxes)
      ════════════════════════════════════════════════════════ */}
      <div>
        {REVIEWS.map((review, idx) => (
          <ReviewCard
            key={review.id}
            review={review}
            isLast={idx === REVIEWS.length - 1}
          />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════
          PAGINATION
      ════════════════════════════════════════════════════════ */}
   <div className="pt-6 border-t border-gray-100">
  <div className="flex items-center gap-8 bg-[#FDFBF8] rounded-full px-6 py-4 w-fit">

    {/* Next Button */}
     <button
       onClick={() => setCurrentPage((p) => p + 1)}
       className="border border-[#F98814] text-[#F98814] rounded-2xl px-8 py-3 text-base font-medium transition-colors hover:bg-[#202020] hover:border-[#202020] hover:text-white"
     >
       Next
     </button>

    {/* Page Numbers */}
    <div className="flex items-center gap-8">
      {[1, 2, 3, 5].map((pg) => (
        <button
          key={pg}
          onClick={() => setCurrentPage(pg)}
          className={`text-lg font-medium transition-all ${
            pg === currentPage
              ? "text-[#F98814] underline underline-offset-8 decoration-2"
              : "text-[#F98814]/80 hover:text-[#F98814]"
          }`}
        >
          {pg}
        </button>
      ))}
    </div>

  </div>
 </div>

      <WriteReviewModal
        isOpen={isWriteReviewOpen}
        onClose={closeModal}
        rating={reviewRating}
        setRating={setReviewRating}
        title={reviewTitle}
        setTitle={setReviewTitle}
        email={reviewEmail}
        setEmail={setReviewEmail}
        content={reviewContent}
        setContent={setReviewContent}
        files={reviewFiles}
        setFiles={setReviewFiles}
      />

      <AskQuestionLoginModal
        isOpen={isAskQuestionOpen}
        onClose={closeModal}
        email={loginEmail}
        setEmail={setLoginEmail}
        password={loginPassword}
        setPassword={setLoginPassword}
      />

      {/* {isAskQuestionOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/40 flex items-start justify-center px-4 pt-24 pb-6 overflow-y-auto"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="relative"
            style={{
              width: `${1397 * writeReviewScale}px`,
              height: `${1134 * writeReviewScale}px`,
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Log in"
              className="absolute inset-0 bg-white rounded-[50px] border border-[#FDA33A] overflow-y-auto"
              style={{
                width: 1397,
                height: 1134,
                transform: `scale(${writeReviewScale})`,
                transformOrigin: "top left",
              }}
            >
              Close
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-8 right-8 w-11 h-11 rounded-full bg-[#FDA33A] flex items-center justify-center"
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="#FFFFFF"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className="w-full h-full px-6 sm:px-12 lg:px-[200px] pt-20 pb-16 flex flex-col items-center">
                <h3 className="font-['Poppins'] font-semibold text-[32px] text-[#202020]">
                  Log In
                </h3>

                <form
                  className="w-full mt-14"
                  onSubmit={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  <div className="w-full max-w-[980px] mx-auto space-y-8">
                    <div>
                      <label className="block text-xs font-semibold text-[#202020] mb-2">
                        Your Email
                      </label>
                      <input
                        ref={loginEmailRef}
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="Please enter your Phone or Email"
                        className="w-full h-[46px] border border-[#D3D6DC] rounded-md px-4 text-sm outline-none focus:border-[#0A9ACC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#202020] mb-2">
                        Your Password
                      </label>
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Please enter your Password"
                        className="w-full h-[46px] border border-[#D3D6DC] rounded-md px-4 text-sm outline-none focus:border-[#0A9ACC]"
                      />
                      <div className="mt-3 text-right">
                        <button
                          type="button"
                          className="text-sm text-gray-400 hover:text-gray-600"
                        >
                          Forgot password ?
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[54px] rounded-full bg-[#0A9ACC] text-white font-semibold text-sm"
                    >
                      Login
                    </button>

                    <p className="text-center text-sm text-gray-400">
                      Don’t have an account?{" "}
                      <button type="button" className="text-[#FDA33A] font-semibold">
                        Sign up
                      </button>
                    </p>

                    <div className="flex items-center justify-center gap-10 pt-4">
                      <button
                        type="button"
                        className="flex items-center gap-3 text-sm text-gray-500"
                      >
                        <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                          <span className="text-[18px] font-bold" style={{ color: "#EA4335" }}>
                            G
                          </span>
                        </span>
                        Google
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-3 text-sm text-gray-500"
                      >
                        <span className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold">
                          f
                        </span>
                        Facebook
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};
