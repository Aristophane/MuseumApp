import PaintingDisplay from "./PaintingDisplay";
import styles from "./ImageContainer.module.css"
import PropTypes from 'prop-types';

ImageContainer.propTypes = {
  imagesData: PropTypes.array.isRequired
};

const splitImageDate = (longDesc) => {
  let valeurs = longDesc?.split(", ");
  if (valeurs && valeurs.length > 0) {
    return valeurs[valeurs.length - 1];
  }
}

const checkUrl = (url) => {
  return url.startsWith('http');
}


function ImageContainer({ imagesData }) {
  const images = imagesData.map((image, index) => {
    if (checkUrl(image.webImage.url)) {
      return (
        <PaintingDisplay
          key={index}
          title={image.title}
          painter={image.principalOrFirstMaker}
          url={image.webImage.url}
          isPortrait={image.webImage.width < image.webImage.height}
          year={splitImageDate(image.longTitle)}
        />
      );
    }
  });


  return (<>
    <div className={styles.imageContainer}>
      {images}
    </div>
  </>)
}

export default ImageContainer;