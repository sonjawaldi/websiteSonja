export default function ProgressBar({ percent }) {
  const done = percent >= 100
  return (
    <div
      className="h-2 w-full overflow-hidden rounded-full bg-stone-200"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${
          done ? 'bg-emerald-500' : 'bg-amber-500'
        }`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
