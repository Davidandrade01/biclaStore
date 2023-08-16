import React from 'react'

//styles

import styles from '../styles/socialbar.module.scss';

export default function Socialbar() {
  return (
    <>
    <div className={styles.social_bar}>
        <img src='/images/socialicons/instagram.png' alt='Icon Istagram'/>
        <img src='/images/socialicons/twitch.png' alt='Icon Istagram'/>
        <img src='/images/socialicons/youtube.png' alt='Icon Istagram'/>
       
    </div>
    </>
  )
}
