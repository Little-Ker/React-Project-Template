import React from 'react'
import clsx from 'clsx'
import {
  Link, useLocation
} from 'react-router-dom'
import styles from './navbar.module.sass'

const linkList = [
  {
    name: 'ViewA',
    to: '/viewA',
  },
  {
    name: 'ViewB',
    to: '/viewB',
  },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <div className={styles.navbar}>
      {linkList.map((link, index) => (
        <Link
          key={`${index.toString()}`}
          to={link.to}
          className={clsx(styles.link, location.pathname === `${link.to}` && styles.active)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}
