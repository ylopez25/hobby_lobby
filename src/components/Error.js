import "./Error.css";

export default function Error({ err }) {
  return (
    <div className="Error">
      There is an Error: {err}
      Please refresh or contact customer Support.
    </div>
  );
}
