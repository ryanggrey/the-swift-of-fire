export default function ShopLoading() {
  return (
    <div className="container-page py-12">
      <div className="h-10 w-32 bg-brand-grey/50 rounded-lg animate-pulse mb-8" />
      <div className="flex gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-10 w-24 bg-brand-grey/30 rounded-lg animate-pulse"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-xl bg-brand-grey/30 overflow-hidden animate-pulse"
          >
            <div className="aspect-square bg-brand-grey/50" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-20 bg-brand-grey/50 rounded" />
              <div className="h-6 w-40 bg-brand-grey/50 rounded" />
              <div className="h-4 w-full bg-brand-grey/50 rounded" />
              <div className="h-8 w-16 bg-brand-grey/50 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
