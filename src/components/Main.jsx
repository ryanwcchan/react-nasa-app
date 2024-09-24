export default function Main(props) {
  const { data } = props
  return (
    <div className="img-container">
        <img className="bg-image" src={data.hdurl} alt={data.title} />
    </div>
  )
}
