import './ImagesGrid.css'

const ImagesGrid = ({ images, name }: { images: string[]; name: string }) => {
  return (
    <div className='images-grid'>
      <div className='images-grid__cover'>
        <h2>{name}</h2>
      </div>
      {images.slice(0, 4).map((img) => (
        <div className='images-grid__item'>
          <img className='images-grid__img' src={img} alt='carousel' />
        </div>
      ))}
    </div>
  )
}

export default ImagesGrid
