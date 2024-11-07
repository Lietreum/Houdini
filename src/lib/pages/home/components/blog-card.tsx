import { useEffect, useState } from 'react';

interface BlogPost {
  _id: string;
  title: string;
  imageUrl: string;
  author: string;
  authorUrl: string;
  postUrl: string;
  timestamp: string;
}

const BlogPostList = () => {
  const [blogs, setBlogs] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <div className="flex flex-col items-start max-w-xs md:max-w-md lg:max-w-lg">
      {blogs.map(blog => (
        <div key={blog._id} className="flex items-start my-4">
          <div className="flex-shrink-0 mr-4 relative z-10">
            <a href={blog.postUrl}>
              <img
                src={blog.imageUrl}
                alt="Thumbnail"
                loading="lazy"
                decoding="async"
                className="w-[120px] h-auto rounded-md"
              />
            </a>
          </div>
          <div className="max-w-xs">
            <header>
              <h2 className="text-lg font-bold my-1 text-gray-800">
                <a href={blog.postUrl} className="hover:underline">
                  {blog.title}
                </a>
              </h2>
              <p className="text-sm text-gray-500">
                <time className="italic">{new Date(blog.timestamp).toLocaleString()}</time> by
                <a href={blog.authorUrl} className="hover:underline ml-1">
                  {blog.author}
                </a>
              </p>
            </header>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
