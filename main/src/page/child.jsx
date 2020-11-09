import React from 'react'
import styles from './child.less'
import { genId } from '@/util';

export default function Child () {
  return (
    <div className={styles.wrapper}>
      <span data-id={genId()}>child</span>
    </div>
  )
}
