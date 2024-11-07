import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Interface for the Blog
interface Blog {
  _id?: string;
  title: string;
  imageUrl: string;
  author: string;
  authorUrl: string;
  postUrl: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    imageUrl: '',
    author: '',
    authorUrl: '',
    postUrl: '',
    timestamp: new Date().toISOString(),
  });
  const [editBlog, setEditBlog] = useState<Blog | null>(null);

  // Fetch blogs from the API
  const fetchBlogs = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/blogs');
      setBlogs(response.data);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error fetching blogs:', error);
      }
    }
  }, []);

  // Create a new blog post
  const createBlog = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/blogs', newBlog);
      setBlogs([...blogs, response.data]);
      setNewBlog({ title: '', imageUrl: '', author: '', authorUrl: '', postUrl: '', timestamp: new Date().toISOString() });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error creating blog:', error);
      }
    }
  };

  // Update an existing blog post
  const updateBlog = async () => {
    if (editBlog?._id) {
      try {
        const response = await axios.put(`http://localhost:3000/api/blogs/${editBlog._id}`, editBlog);
        setBlogs(blogs.map(blog => (blog._id === editBlog._id ? response.data : blog)));
        setEditBlog(null);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error updating blog:', error);
        }
      }
    }
  };

  // Delete a blog post
  const deleteBlog = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error deleting blog:', error);
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Blog Management</h1>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Create New Blog</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Image URL"
          value={newBlog.imageUrl}
          onChange={(e) => setNewBlog({ ...newBlog, imageUrl: e.target.value })}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Author"
          value={newBlog.author}
          onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Author URL"
          value={newBlog.authorUrl}
          onChange={(e) => setNewBlog({ ...newBlog, authorUrl: e.target.value })}
        />
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Post URL"
          value={newBlog.postUrl}
          onChange={(e) => setNewBlog({ ...newBlog, postUrl: e.target.value })}
        />
        <button type="button" className="bg-blue-500 text-white p-2 mt-4" onClick={createBlog}>
          Create Blog
        </button>
      </div>

      {editBlog && (
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Edit Blog</h2>
          <input
            className="border p-2 mb-2 w-full"
            value={editBlog.title}
            onChange={(e) => setEditBlog({ ...editBlog, title: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={editBlog.imageUrl}
            onChange={(e) => setEditBlog({ ...editBlog, imageUrl: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={editBlog.author}
            onChange={(e) => setEditBlog({ ...editBlog, author: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={editBlog.authorUrl}
            onChange={(e) => setEditBlog({ ...editBlog, authorUrl: e.target.value })}
          />
          <input
            className="border p-2 mb-2 w-full"
            value={editBlog.postUrl}
            onChange={(e) => setEditBlog({ ...editBlog, postUrl: e.target.value })}
          />
          <button type="button" className="bg-yellow-500 text-white p-2 mt-4" onClick={updateBlog}>
            Update Blog
          </button>
        </div>
      )}

      <h2 className="text-2xl mb-4">Existing Blogs</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog._id} className="border p-4">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-500">{blog.author}</p>
            <a href={blog.postUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Read Post
            </a>
            <div className="mt-4 flex space-x-2">
              <button
                type="button"
                onClick={() => setEditBlog(blog)}
                className="bg-yellow-500 text-white p-2"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => blog._id && deleteBlog(blog._id)}
                className="bg-red-500 text-white p-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
