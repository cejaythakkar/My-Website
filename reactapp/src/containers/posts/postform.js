import React from 'react';
import axios from 'axios';
export default class PostForm extends React.Component{
    state = {
        title:'',
        body : ''
    }
    onChangeHandler = ( e ) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = ( e ) => {
        e.preventDefault();
        let newpost = {
            title:this.state.title,
            body : this.state.body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',newpost).then(response => console.log(response));
    }
    render(){
        return (
            <React.Fragment>
                <h1>Post Form</h1>
                <div className="postform-wrapper">
                    <form onSubmit={this.submitHandler} style={formStyle} className="postform-form">
                        <input 
                            style={formControl} 
                            type="text" 
                            placeholder="Add Post title here..." 
                            value={this.state.title}
                            onChange={this.onChangeHandler}
                            name="title"
                        />
                        <textarea 
                            style={formControl}
                            placeholder="Add post content here..."
                            value={this.state.body}
                            onChange={this.onChangeHandler}
                            name="body">
                        </textarea>
                        <input 
                            type="submit" 
                            style={formControl} 
                            value="Submit" 
                        />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

const formStyle = {
    display:'flex',
    flexDirection:'column'
}

const formControl = {
    margin:'.3rem 0'
}