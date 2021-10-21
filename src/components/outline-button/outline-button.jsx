import React from 'react';
import styles from './outline-button.module.scss';

export default function OutlineButton(props) {
  return (
    <a href={props.btn_url} className={styles.outline_btn} target='_blank'>
      {props.btn_text}
    </a>
  );
}
