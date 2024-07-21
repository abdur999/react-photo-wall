import React from "react"
import PropTypes from 'prop-types'

function FPhoto(props) {
    const post = props.post
    return <figure className="figure"> 
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption><p> {post.description} </p></figcaption>
        <div className="button-container">
        <button className="remove-button" onClick={() => {
            props.onRemovePhoto(post)
        }}>Remove</button>
        </div>
      </figure> 
}

//It's sepecified the mandatory parameter which we need to pass from calling function
FPhoto.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired 
}

export default FPhoto