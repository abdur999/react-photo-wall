import React from "react"
import FPhoto from "./FPhoto"
import PropTypes from 'prop-types'

function FPhotoWall(props) {
    return <div className="photoGrid">
            {props.posts.map((post,index) => <FPhoto key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
}
//It's sepecified the mandatory parameter which we need to pass from calling function ( to specified type and parameter)
FPhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired 
}

export default FPhotoWall
