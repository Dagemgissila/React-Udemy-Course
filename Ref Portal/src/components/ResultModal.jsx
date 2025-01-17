const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>you {result}</h2>
      <p>
        The target time <strong>{targetTime}</strong> seconds
      </p>
      <form action="dialog">
        <button type="submit"> close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
