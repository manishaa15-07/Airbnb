"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, onClose, children }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Focus trap
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusable = overlay.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    overlay.addEventListener("keydown", trapFocus);
    return () => overlay.removeEventListener("keydown", trapFocus);
  }, []);

  return (
    <div
      className="modal-overlay animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content animate-slideUp">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button
            ref={closeRef}
            className="modal-close"
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
