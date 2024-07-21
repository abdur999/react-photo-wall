import React from "react"
import FPhoto from "./FPhoto"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function FPhotoWall(props) {
    return <div>
        {/* Before navigation it was like that but now it is something different we added below*/}
        {/* <a className="addIcon" onClick={props.onNavigate} href="/AddPhoto"> Click Me </a> */}
        {/* <button onClick={props.onNavigate} className="addIcon">  +  </button> */}
        <Link className="addIcon"  to="/AddPhoto"> Click Me </Link>
        <div className="photoGrid">
            {props.posts
            .sort(function(x,y){
                return y.id - x.id
            })
            .map((post, index) => <FPhoto key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
        </div>
    </div>
}
//It's sepecified the mandatory parameter which we need to pass from calling function ( to specified type and parameter)
FPhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default FPhotoWall
