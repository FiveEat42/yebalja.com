import React from "react";
import styles from "./LogoWhite.module.css";

export default function LogoWhite() {
  return (
    <div className={styles.logo}>
      <svg
        width="27"
        height="27"
        viewBox="0 0 39 39"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.4866 18.0782H19.2286V34.5129H15.4866V18.0782Z" />
        <path d="M23.0085 11.5043L19.2286 14.2653V34.5128V34.5128C21.3162 34.5128 23.0085 32.8205 23.0085 30.7328V11.5043Z" />
        <path d="M19.2285 9.61429C19.2285 4.30446 23.533 0 28.8428 0V0V7.3956L19.2285 14.7912V9.61429Z" />
        <path d="M38.457 7.3956C38.457 11.4801 35.1459 14.7912 31.0614 14.7912H19.2285L28.8427 7.3956H38.457V7.3956Z" />
        <path d="M28.8428 0H38.4571L28.8428 7.3956V0Z" />
        <path d="M38.4571 0V7.3956H28.8428L38.4571 0Z" />
        <path d="M19.2283 12.9012C19.2283 7.59139 14.9238 3.28693 9.61399 3.28693V3.28693V10.6825L19.2283 18.0781V12.9012Z" />
        <path d="M0 10.6826C0 14.7671 3.31112 18.0782 7.3956 18.0782H19.2286L9.61428 10.6826H0V10.6826Z" />
        <path d="M9.61426 3.28693H-2.38419e-05L9.61426 10.6825V3.28693Z" />
        <path d="M-2.38419e-05 3.28693V10.6825H9.61426L-2.38419e-05 3.28693Z" />
      </svg>
    </div>
  );
}
