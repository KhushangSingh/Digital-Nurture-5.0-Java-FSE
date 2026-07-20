import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    // 1. Initialize the component state
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    // 2. Fetch API method
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const postList = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: postList });
            })
            .catch(error => {
                throw new Error("Failed to fetch posts!");
            });
    }

    // 3. Lifecycle hook: Runs automatically after component is rendered on screen
    componentDidMount() {
        this.loadPosts();
    }

    // 4. Lifecycle hook: Catches errors happening in component tree
    componentDidCatch(error, info) {
        alert("An error occurred: " + error.toString());
    }

    // 5. Render the HTML
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid gray', marginBottom: '10px' }}>
                        {/* Displays title as heading and body as paragraph */}
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;