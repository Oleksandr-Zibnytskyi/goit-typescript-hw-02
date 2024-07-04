import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Audio height="80" width="80" color="blue" ariaLabel="loading" />
      <p>please wait...</p>
    </div>
  );
}
