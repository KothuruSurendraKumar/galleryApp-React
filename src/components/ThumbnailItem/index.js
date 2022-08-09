// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImage = () => {
    updateActiveId(id)
  }

  return (
    <li className="list-items">
      <button className="button" type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
