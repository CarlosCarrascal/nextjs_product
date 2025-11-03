export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-br from-violet-50 via-white to-purple-50 border-b border-zinc-200">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl space-y-6">
            <div className="h-12 w-96 bg-zinc-200 rounded-xl animate-pulse"></div>
            <div className="h-8 w-full max-w-2xl bg-zinc-200 rounded-lg animate-pulse"></div>
            <div className="h-14 w-48 bg-zinc-200 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="h-10 w-48 bg-zinc-200 rounded-lg animate-pulse mb-2"></div>
            <div className="h-5 w-32 bg-zinc-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-zinc-200 to-zinc-100 animate-pulse"></div>
              <div className="p-5 space-y-4">
                <div className="h-6 bg-zinc-200 rounded animate-pulse"></div>
                <div className="h-4 bg-zinc-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-zinc-200 rounded animate-pulse w-4/6"></div>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-100">
                  <div className="h-8 w-24 bg-zinc-200 rounded animate-pulse"></div>
                  <div className="h-5 w-5 bg-zinc-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

