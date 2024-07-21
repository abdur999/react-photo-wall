import React,{Component} from "react"

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.Link.value
        const description = event.target.elements.description.value
        const addPost = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink){
            this.props.onAddPhoto(addPost)
        }

    }
    render() {
            return (
                <div>
                    <h1> Photo Wall </h1>
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name ="Link"/>
                        <input type="text" placeholder="Description" name= "description"/>
                        <button>Post</button>
                    </form>
                    </div>
                 </div>
        )
    }
}

export default AddPhoto