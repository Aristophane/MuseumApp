import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css"
import PropTypes from 'prop-types';

ImageContainer.propTypes = {
    imagesData : PropTypes.array.isRequired
  };

function ImageContainer({imagesData}){
    const images = imagesData.map((image, index) => {
        return (
          <PaintingDisplay 
            key={index}
            title={image.title} 
            painter={image.principalOrFirstMaker} 
            url={image.webImage.url}
            isPortrait={image.webImage.width < image.webImage.height}
          />
        );
      });
      

    return(<>
    <div className={styles.imageContainer}>
        {images}
    </div>
    </>)
}

export default ImageContainer;