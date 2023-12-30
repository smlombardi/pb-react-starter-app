import styles from "./Spinner.module.css";

export default function Spinner({ size = 48 }) {
  return (
    <>
      <span role="alert" aria-live="assertive">
        <span
          className={styles.spinner}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderWidth: `${size / 8}px`,
          }}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Loading</span>
      </span>
    </>
  );
}
