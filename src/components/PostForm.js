import React from 'react';

export default class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        // this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {

        const title = this.state.title;
        const body = this.state.body;

        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input 
                            type="text" 
                            name="title" 
                            value={title} 
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body" 
                            value={body} 
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}