let shouldAnimate = false

export function triggerNavigationAnimation() {
  shouldAnimate = true
}

export function consumeNavigationAnimation(): boolean {
  const result = shouldAnimate
  shouldAnimate = false
  return result
}
