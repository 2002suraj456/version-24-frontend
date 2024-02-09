import "./NotFound.css"
import notFound from "../../../public/404.svg"

const NotFound = () => {
  return (
    <div id="not-found-container">
      <img id="not-found" alt="not found" src={notFound} />
    </div>
  )
}

export default NotFound