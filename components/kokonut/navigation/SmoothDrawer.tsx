export function SmoothDrawer({ open, children }: any) {
  return (
    <div
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {children}
    </div>
  )
}
