import React from 'react';
import { books } from './Data';
import './App.css';

function App() {
  // --- Component 1: Book Details (Using standard Map & Keys) ---
  const bookdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {/* The map() function requires a unique 'key' prop for each element rendered */}
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '20px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  // --- Component 2: Blog Details (Using Logical && Conditional Rendering) ---
  const showBlog = true; // Toggle this to see conditional rendering in action
  const content = showBlog && (
    <div>
      <h3>React Learning</h3>
      <h4>Stephen Biz</h4>
      <p>Welcome to learning React!</p>
      
      <h3>Installation</h3>
      <h4>Schewzdenier</h4>
      <p>You can install React from npm.</p>
    </div>
  );

  // --- Component 3: Course Details (Using Ternary Operator Conditional Rendering) ---
  const showCourses = true; // Toggle this to see conditional rendering in action
  const coursedet = showCourses ? (
    <div>
      <h3>Angular</h3>
      <h4>4/5/2021</h4>
      
      <h3>React</h3>
      <h4>6/3/2021</h4>
    </div>
  ) : (
    <p>No courses available at this time.</p>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      
      {/* Course Details Column */}
      <div className="mystyle1" style={{ padding: '0 40px', borderRight: '4px solid green' }}>
        <h1>Course Details</h1>
        {coursedet}
      </div>

      {/* Book Details Column */}
      <div className="st2" style={{ padding: '0 40px', borderRight: '4px solid green' }}>
        <h1>Book Details</h1>
        {bookdet}
      </div>

      {/* Blog Details Column */}
      <div className="v1" style={{ padding: '0 40px' }}>
        <h1>Blog Details</h1>
        {content}
      </div>

    </div>
  );
}

export default App;