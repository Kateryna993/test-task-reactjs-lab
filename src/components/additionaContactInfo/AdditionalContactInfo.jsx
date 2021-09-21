import React from "react";
import styles from "./AdditionalContactInfo.module.css";

export default function AdditionalContactInfo({ detailedItemData }) {
  const city =
    detailedItemData && detailedItemData.adress
      ? detailedItemData.adress.city
      : null;

  const streetAddress =
    detailedItemData && detailedItemData.adress
      ? detailedItemData.adress.streetAddress
      : null;

  const state =
    detailedItemData && detailedItemData.adress
      ? detailedItemData.adress.state
      : null;

  const zip =
    detailedItemData && detailedItemData.adress
      ? detailedItemData.adress.zip
      : null;

  return (
    <div className={styles.addInfoContainer}>
      <ul className={styles.addInfoList}>
        <li className={styles.addInfoItem}>Profile Info:</li>
        <li className={styles.addInfoItem}>
          Selected profile: {detailedItemData.firstName}{" "}
          {detailedItemData.lastName}
        </li>
        <li className={styles.addInfoItem}>
          Decription: {detailedItemData.description}...
        </li>
        <li className={styles.addInfoItem}>Address: {streetAddress}</li>
        <li className={styles.addInfoItem}>City: {city}</li>
        <li className={styles.addInfoItem}>State: {state}</li>
        <li className={styles.addInfoItem}>Index: {zip}</li>
      </ul>
    </div>
  );
}
