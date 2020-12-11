import React from 'react'
import { genId } from '@/util'
import Button from '@/component/button'
import styles from './child.less'

export default function Child () {
  return (
    <div className={styles.wrapper}>
      <span data-id={genId()}>child</span>
      <Button />
    </div>
  )
}
