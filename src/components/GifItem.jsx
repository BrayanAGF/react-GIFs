export const GifItem = ( {url, title} ) => {
  return (
    <div className="card cardGif">
    <img src={url} className="card-img-top" alt={title} />
    <div className="card-body">
      <p className="card-text fw-bold text-center">{title}</p>
    </div>
  </div>
  )
}
