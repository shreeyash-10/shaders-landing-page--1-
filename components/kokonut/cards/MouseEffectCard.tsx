export function MouseEffectCard({ children }: any) {
  return (
    <div className="group [perspective:1000px]">
      <div className="rounded-2xl bg-white p-6 shadow-xl transition-transform duration-300 group-hover:[transform:rotateX(6deg)_rotateY(6deg)]">
        {children}
      </div>
    </div>
  )
}
