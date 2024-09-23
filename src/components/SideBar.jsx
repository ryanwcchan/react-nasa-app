export default function SideBar(props) {
    const { handleToggleModal } = props
  return (
    <div className="sidebar">
        <div onClick={handleToggleModal} className="bg-overlay"></div>
        <div className="sidebar-contents">
            <h2>Mars Poster</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam officiis doloremque quibusdam nobis reprehenderit aspernatur veritatis. Facere expedita laborum provident accusantium delectus distinctio modi sunt, inventore libero necessitatibus laudantium!</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
  )
}
