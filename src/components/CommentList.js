import React,{Component} from 'react'
import {connect} from 'react-redux'

class CommentList extends Component{
    
    getComments()
    {
       
        return this.props.comments.map(comment=>{
            return <li key={comment}>{comment}</li>
        })
        
    }
    render()
    {
        return(
        <div>
            <h4>Comment List</h4>
            <ul>
                {this.getComments()}
            </ul>
        </div>);
    }
}

function mapStateToProps(state)
{
 return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)