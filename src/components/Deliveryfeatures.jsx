import React from 'react'

//icons

import {TbTruckDelivery} from 'react-icons/tb'
import {TbWallet} from 'react-icons/tb'
import {TbClockHour9} from 'react-icons/tb'


// Styles

import styles from '../styles/deliveryfeatures.module.scss'

export default function Deliveryfeatures() {
  return (
    <>
    <div className={styles.container}>
        <div className={styles.icon_box}>
        <TbTruckDelivery size={48} color='#fff' />
            <span>Free Shipping</span>
            <span>over €50</span>
        </div>

        <div className={styles.icon_box}>
        <TbClockHour9 size={48} color='#fff' />
            <span>Fast</span>
            <span>Delivery</span>
        </div>

        <div className={styles.icon_box}>
        <TbWallet size={48} color='#fff' />
            <span>Refund in up</span>
            <span>7 days</span>
        </div>
    </div>
    </>
  )
}
