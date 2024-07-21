import React,{Component} from "react"

//These import are for class component


// import List from "./List"
// import Title from "./Title"
// import PhotoWall from "./PhotoWall"

import FTitle from "../functionalcomponent/FTitle"
import FList from "../functionalcomponent/FList"
import FPhotoWall from "../functionalcomponent/FPhotoWall"

//When not use state uncomment this
//  const posts = [{
//    		id: "0",
//    		description: "beautiful landscape",
//    		imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//    		"3919321_1443393332_n.jpg"
//    		}, {
//    		id: "1",
//    		description: "Aliens???",
//    		imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//    		}, {
//    		id: "2",
//    		description: "On a vacation!",
//    		imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//    		}]

// This use class component only 
/*
class Main extends Component {
    render() {
      return <div>
        <Title mytitle={"Photo Wall : "}/>
        <PhotoWall posts={posts}/>
      </div>
    }
  }
*/



//This use functional component
/*
class Main extends Component {
    render() {
		return <div>
        <FTitle mytitle={"Photo Wall : "}/>
        <FPhotoWall posts={posts}/>
      </div>
	}
}
*/


// State management in posts
class Main extends Component {
	constructor() {
		super()
		this.state = {
			posts:[]
			/* Make the array empty by commenting to behave like api call
			[{
				id: "0",
				description: "beautiful landscape",
				imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
				"3919321_1443393332_n.jpg"
				}, {
				id: "1",
				description: "Aliens???",
				imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
				}, {
				id: "2",
				description: "On a vacation!",
				imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
				}]
				*/
		}
		//Without use this it will be broken, we don't have access to the removePhoto function 
		this.removePhoto = this.removePhoto.bind(this)
	}
	removePhoto(postRemoved) {
		console.log(postRemoved.description)
		this.setState((state) => ({
		posts: state.posts.filter(post => post !== postRemoved)
		}))
	}
	//after all the elements of the page have been rendered correctly
	componentDidMount() {	
		const data = SimpulateFetchDataFromDb()
		this.setState({
			posts: data
		})
	}
	//generally used to show a loader when the component is being loaded or when the data from the server is being fetched	
	componentWillMount( ){

	}
	//us to execute the React code when the component is updated
	componentDidUpdate(prevProps, prevState) {
			console.log(prevState.posts)
			console.log(this.state.posts)
	}
	
    render() {
		return <div>
        <FTitle mytitle={"Photo Wall : "}/>
	    <FPhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
      </div>
	}

	

}


//We are looking for dynamic behaviour like fetch data from api
function SimpulateFetchDataFromDb() {
   return [{
	   id: "0",
	   description: "beautiful landscape",
	   imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
	   "3919321_1443393332_n.jpg"
	   }, {
	   id: "1",
	   description: "Aliens???",
	   imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
	   }, {
	   id: "2",
	   description: "On a vacation!",
	   imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
	   }]
}


export default Main
