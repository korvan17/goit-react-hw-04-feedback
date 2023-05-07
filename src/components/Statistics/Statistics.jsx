export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return good || neutral || bad ? (
    <div>
      <p>
        Good: <span> {good}</span>
      </p>
      <p>
        Neutral: <span> {neutral}</span>
      </p>
      <p>
        Bad: <span> {bad}</span>
      </p>
      <p>
        Total: <span> {total}</span>
      </p>
      <p>
        Positive feedback: <span> {positivePercentage}%</span>
      </p>
    </div>
  ) : (
    <p>Notification message="There is no feedback"</p>
  );
}

// Notification message="There is no feedback"
