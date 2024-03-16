import PropTypes from 'prop-types';

function Title(props) {
  return (
    <>
   
    <div className="titlePort">
        <h2> {props.title}</h2>
        {props.children}
    </div>



    </>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleleft: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default Title