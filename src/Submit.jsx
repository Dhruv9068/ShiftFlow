export const SubmitButton = () => {
  const handleClick = () => {
    alert('Submitted!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white p-2 rounded-md m-4"
    >
      Submit
    </button>
  );
};