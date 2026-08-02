export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-16 text-slate-900">
      <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          LedgerMemo
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          AI-powered bookkeeping for everyday shop owners.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          This first milestone sets up the app shell for a voice-first business
          workflow focused on simple sales, inventory, and customer tracking.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Next.js app ready
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            Project structure prepared
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            Ready for the next milestone
          </span>
        </div>
      </div>
    </main>
  );
}
