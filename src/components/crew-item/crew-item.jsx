import React from 'react';
import styles from './crew-item.module.scss';
import { default as nasaLogo } from '../../assets/svg/nasa.svg';
import { default as esaLogo } from '../../assets/svg/esa.svg';
import { default as jaxaLogo } from '../../assets/svg/jaxa.svg';
import { default as spacexLogo } from '../../assets/svg/spacex.svg';

function CrewItem(props) {
  let agencyLogo;

  switch (props.crew_member_agency) {
    case 'NASA':
      agencyLogo = nasaLogo;
      break;
    case 'ESA':
      agencyLogo = esaLogo;
      break;
    case 'JAXA':
      agencyLogo = jaxaLogo;
      break;
    default:
      agencyLogo = spacexLogo;
  }

  return (
    <article className={styles.crew_item}>
      <a href={props.crew_member_wiki} target='_blank'>
        <figure className={styles.crew_item__fig}>
          <img src={props.crew_member_photo} className={styles.img} />
        </figure>
        <div className={styles.item_content}>
          <img src={agencyLogo} className={styles.crew_item__agency} />
          <h3 className={styles.crew_item__name}>{props.crew_member_name}</h3>
          <div className={styles.crew_item__status}>
            <span className={styles.status_heading}>status: </span>
            <span className={styles.crew_status}>
              {props.crew_member_status}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

export default CrewItem;
