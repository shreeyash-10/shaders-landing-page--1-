export function CurrencyTransfer() {
  return (
    <div className="flex gap-2">
      <input className="rounded border px-3 py-2" placeholder="Amount" />
      <select className="rounded border px-3 py-2">
        <option>USD</option>
        <option>INR</option>
      </select>
    </div>
  )
}
