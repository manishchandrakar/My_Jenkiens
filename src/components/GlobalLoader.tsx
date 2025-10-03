// components/GlobalLoader.tsx
'use client';
export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <p className="text-lg font-semibold">Loading...</p>
    </div>
  );
}
