"use client";

import { FC, ReactNode, RefObject, useEffect, useRef, useState } from "react";

type ScaledModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel: string;
  children: ReactNode;
  width?: number;
  height?: number;
  gutterPx?: number;
  topOffsetPx?: number;
  initialFocusRef?: RefObject<HTMLElement | null>;
};

const ScaledModal: FC<ScaledModalProps> = ({
  isOpen,
  onClose,
  ariaLabel,
  children,
  width = 1397,
  height = 1134,
  gutterPx = 32,
  topOffsetPx = 96,
  initialFocusRef,
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isOpen) return;

    const computeScale = () => {
      const vw = Math.max(0, window.innerWidth - gutterPx);
      const vh = Math.max(0, window.innerHeight - gutterPx - topOffsetPx);
      setScale(Math.min(1, vw / width, vh / height));
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      initialFocusRef?.current?.focus?.();
    }, 0);

    computeScale();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("resize", computeScale);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", computeScale);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [gutterPx, height, initialFocusRef, isOpen, onClose, topOffsetPx, width]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/40 flex items-start justify-center px-4 pt-24 pb-6 overflow-y-auto"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative"
        style={{
          width: `${width * scale}px`,
          height: `${height * scale}px`,
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          className="absolute inset-0 bg-white rounded-[50px] border border-[#FDA33A] overflow-y-auto"
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <button
            type="button"
            onClick={onClose}
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

          {children}
        </div>
      </div>
    </div>
  );
};

export type WriteReviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  rating: number;
  setRating: (n: number) => void;
  title: string;
  setTitle: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  content: string;
  setContent: (v: string) => void;
  files: FileList | null;
  setFiles: (v: FileList | null) => void;
};

export const WriteReviewModal: FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  rating,
  setRating,
  title,
  setTitle,
  email,
  setEmail,
  content,
  setContent,
  files,
  setFiles,
}) => {
  const titleRef = useRef<HTMLInputElement | null>(null);

  return (
    <ScaledModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Write a review"
      initialFocusRef={titleRef as unknown as RefObject<HTMLElement | null>}
    >
      <div className="w-full h-full px-6 sm:px-12 lg:px-[120px] pt-14 pb-12 flex flex-col">
        <div className="flex flex-col items-center">
          <h3 className="font-['Poppins'] font-semibold text-[28px] text-[#202020]">
            Write a review
          </h3>

          <div className="flex items-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i + 1)}
                className="w-6 h-6"
                aria-label={`Set rating ${i + 1}`}
              >
                <svg className="w-6 h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill={i < rating ? "#F5A623" : "#E0E0E0"}
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <form
          className="mt-10 flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs font-semibold text-[#202020] mb-2">
                Review Title *
              </label>
              <input
                ref={titleRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Review Title"
                className="w-full h-[42px] border border-[#D3D6DC] rounded-md px-4 text-sm outline-none focus:border-[#0A9ACC]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#202020] mb-2">
                Your Email *
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full h-[42px] border border-[#D3D6DC] rounded-md px-4 text-sm outline-none focus:border-[#0A9ACC]"
              />
            </div>
          </div>

          <div className="mt-7">
            <label className="block text-xs font-semibold text-[#202020] mb-2">
              Review Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Description of Review"
              className="w-full h-[300px] border border-[#D3D6DC] rounded-md px-4 py-3 text-sm outline-none focus:border-[#0A9ACC] resize-none"
            />
          </div>

          <div className="mt-7">
            <label className="block text-xs font-semibold text-[#202020] mb-3">
              Pictures/Video (optional)
            </label>

            <div className="flex items-center justify-center">
              <label className="cursor-pointer w-[120px] h-[120px] rounded-2xl border border-[#FDA33A] bg-[#FFF6ED] flex items-center justify-center">
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3v10"
                    stroke="#FDA33A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 7l4-4 4 4"
                    stroke="#FDA33A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 14v5a2 2 0 002 2h12a2 2 0 002-2v-5"
                    stroke="#202020"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                </svg>
              </label>
            </div>

            {files?.length ? (
              <p className="mt-3 text-center text-xs text-gray-500">
                {files.length} file(s) selected
              </p>
            ) : null}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="h-[44px] px-10 rounded-full border border-[#B7B7B7] text-[#202020] text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-[44px] px-10 rounded-full bg-[#0A9ACC] text-white text-sm font-semibold"
            >
              Leave Review
            </button>
          </div>
        </form>
      </div>
    </ScaledModal>
  );
};

export type AskQuestionLoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
};

export const AskQuestionLoginModal: FC<AskQuestionLoginModalProps> = ({
  isOpen,
  onClose,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const emailRef = useRef<HTMLInputElement | null>(null);

  return (
    <ScaledModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Log in"
      initialFocusRef={emailRef as unknown as RefObject<HTMLElement | null>}
    >
      <div className="w-full h-full px-6 sm:px-12 lg:px-[200px] pt-20 pb-16 flex flex-col items-center">
        <h3 className="font-['Poppins'] font-semibold text-[32px] text-[#202020]">
          Log In
        </h3>

        <form
          className="w-full mt-14"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div className="w-full max-w-[980px] mx-auto space-y-8">
            <div>
              <label className="block text-xs font-semibold text-[#202020] mb-2">
                Your Email
              </label>
              <input
                ref={emailRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <button type="button" className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <span className="text-[18px] font-bold" style={{ color: "#EA4335" }}>
                    G
                  </span>
                </span>
                Google
              </button>
              <button type="button" className="flex items-center gap-3 text-sm text-gray-500">
                <span className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold">
                  f
                </span>
                Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </ScaledModal>
  );
};
