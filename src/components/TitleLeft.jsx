import PropTypes from 'prop-types';

function TitleLeft(props) {
  return (
    <div className="titlePortLeft">
        <h2> {props.titleleft}</h2>
        {props.children}
    </div>

  )
}

TitleLeft.propTypes = {
    title: PropTypes.string.isRequired,
    titleleft: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
export default TitleLeft