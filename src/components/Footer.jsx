export default function Footer(props) {
  // eslint-disable-next-line react/prop-types
  const { handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bg-gradiant"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>NASA Astrology picture of the day</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
