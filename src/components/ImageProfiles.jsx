import PropTypes from 'prop-types';

function ImageProfiles(props) {
  return (
    <div className="imageProfile">
      <img src={props.images} alt="" />
    </div>
  );
}

ImageProfiles.propTypes = {
  images: PropTypes.string.isRequired 
};

export default ImageProfiles;