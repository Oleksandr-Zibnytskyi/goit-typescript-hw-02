import { Audio } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Audio height="80" width="80" color="blue" ariaLabel="loading" />
      <p>Loading data, please wait...</p>
    </div>
  );
}
