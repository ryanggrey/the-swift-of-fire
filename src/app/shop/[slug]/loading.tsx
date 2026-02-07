export default function ProductLoading() {
  return (
    <div className="container-page py-12">
      <div className="h-4 w-24 bg-brand-grey/50 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square bg-brand-grey/30 rounded-xl animate-pulse" />
        <div className="space-y-4">
          <div className="h-4 w-20 bg-brand-grey/50 rounded animate-pulse" />
          <div className="h-10 w-64 bg-brand-grey/50 rounded animate-pulse" />
          <div className="h-8 w-24 bg-brand-grey/50 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-brand-grey/30 rounded animate-pulse" />
            <div className="h-4 w-full bg-brand-grey/30 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-brand-grey/30 rounded animate-pulse" />
          </div>
          <div className="h-12 w-full bg-brand-grey/50 rounded-lg animate-pulse mt-6" />
        </div>
      </div>
    </div>
  );
}
