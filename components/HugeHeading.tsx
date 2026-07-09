export function HugeHeading(props: {
  children: React.ReactNode
  style?: React.CSSProperties
  'aria-label'?: string
}) {
  return (
    <h1 style={{ marginTop: '1.3rem', ...props.style }} aria-label={props['aria-label']}>
      {props.children}
    </h1>
  )
}

export function EmptyTopSpace() {
  return <div style={{ height: '1.3rem' }} />
}
