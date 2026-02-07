export default function Loading() {
  return (
    <div className="container-page py-20 flex justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-grey border-t-brand-red animate-spin" />
        <p className="font-heading text-lg tracking-wide text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}
