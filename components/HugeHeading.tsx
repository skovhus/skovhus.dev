export function HugeHeading(props: {
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return <h1 style={{ marginTop: '2rem', ...props.style }}>{props.children}</h1>
}

export function EmptyTopSpace() {
  return <div style={{ height: '2rem' }} />
}
