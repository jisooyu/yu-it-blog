import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';

const BlogForm = () => {
  const blogContext = useContext(BlogContext);
  const { addBlog, updateBlog, clearCurrent, current } = contactContext;
  const [blog, setBlog] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  useEffect(() => {
    if (current !== null) {
      setBlog(current);
    } else {
      setBlog({
        title: '',
        description: '',
      });
    }
  }, [contactContext, current]);

  const { title, description } = blog;

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(blog);
    } else {
      updateContact(blog);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className='text-primary'>{current ? 'Edit Blog' : 'Add Blog'}</h2>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={onChange}
        />
        {current && (
          <div>
            <button className='btn btn-light btn block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
