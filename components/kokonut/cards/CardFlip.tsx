export function CardFlip({ front, back }: any) {
  return (
    <div className="relative h-64 w-64 [perspective:1000px]">
      <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
      <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden]">{back}</div>
    </div>
  )
}
