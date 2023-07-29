import PropTypes from "prop-types"

function Footer({responseMessage}) {
  return (
        <div className="response-message">
            {responseMessage}
        </div>
    )
}

export default Footer   

Footer.propTypes = {
    responseMessage:PropTypes.string
}