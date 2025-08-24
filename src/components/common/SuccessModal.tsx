import React, { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  type?: "success" | "error";
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, message, onClose, type = "success" }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-8 right-8 z-50 flex items-center justify-center">
      <div
        className="rounded shadow-lg px-4 py-3 w-full max-w-xs text-center border-t-4 flex flex-col items-center animate-snackbar"
        style={{
          background: 'var(--card)',
          color: 'var(--card-foreground)',
          borderTopColor: type === 'success' ? 'var(--primary)' : 'var(--destructive)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}
      >
        <h2
          className="text-base font-semibold mb-1"
          style={{ color: type === 'success' ? 'var(--primary)' : 'var(--destructive)' }}
        >
          {type === 'success' ? 'Success' : 'Error'}
        </h2>
        <p className="mb-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>{message}</p>
        {/* <button
          onClick={onClose}
          className="px-3 py-1 text-xs rounded focus:outline-none focus:ring-2 mt-1"
          style={{
            background: 'var(--primary)',
            color: 'var(--primary-foreground)'
          }}
        >
          Close
        </button> */}
      </div>
      <style>{`
        @keyframes snackbar {
          0% { opacity: 0; transform: translateY(-30px) translateX(30px) scale(0.95); }
          20% { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
          80% { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
          100% { opacity: 0; transform: translateY(-30px) translateX(30px) scale(0.95); }
        }
        .animate-snackbar {
          animation: snackbar 3.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
