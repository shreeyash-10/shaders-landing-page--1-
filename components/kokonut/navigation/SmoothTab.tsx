export function SmoothTab({ tabs }: any) {
  return (
    <div className="flex gap-4 border-b">
      {tabs.map((t: string) => (
        <button key={t} className="pb-2 transition hover:border-b-2">
          {t}
        </button>
      ))}
    </div>
  )
}
