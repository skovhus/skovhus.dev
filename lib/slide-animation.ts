import styles from './slide-animation.module.css'

export function getSlideAnimationProps({ stage = 0 }: { stage?: number }) {
  return {
    className: styles.SlideAnimation,
    style: { animationDelay: `${stage * 150}ms` },
  }
}
