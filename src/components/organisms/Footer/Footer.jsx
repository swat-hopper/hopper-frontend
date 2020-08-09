import React from 'react'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <p className={styles.Footer__element}>
          All rights reserved: &copy;Hopper
        </p>
        <p className={`${styles.Footer__element} ${styles.Footer__message}`}>
          &ldquo;Challenge your abilities&rdquo;
        </p>
        <ul
          className={`${styles.Footer__element} ${styles['Footer__social-media']}`}
        >
          <li className={styles['Footer__social-media--item']}>
            <a
              href="https://github.com/swat-hopper"
              target="_blank"
              rel="noopener noreferrer"
              title="Hopper organization on GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
