export function AppleActivityCard({ title, value }: any) {
  return (
    <div className="rounded-2xl bg-black p-6 text-white shadow-2xl">
      <h4 className="text-sm opacity-70">{title}</h4>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  )
}
