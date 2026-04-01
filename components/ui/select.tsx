export function Select({ children }: any) {
  return <select className="border p-2 rounded">{children}</select>
}

export function SelectTrigger({ children }: any) {
  return <>{children}</>
}

export function SelectValue({ placeholder }: any) {
  return <option>{placeholder}</option>
}

export function SelectContent({ children }: any) {
  return <>{children}</>
}

export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>
}