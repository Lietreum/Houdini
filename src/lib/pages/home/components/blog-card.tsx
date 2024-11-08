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

const BlogPostSkeleton = () => (
  <div className="flex items-start my-4 animate-pulse">
    <div className="flex-shrink-0 mr-4 w-[120px] h-[80px] bg-gray-300 rounded-md"></div>
    <div className="max-w-xs">
      <div className="h-5 bg-gray-300 rounded-md my-1 w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded-md my-1 w-1/2"></div>
    </div>
  </div>
);

const BlogPostList = () => {
  const [blogs, setBlogs] = useState<Array<BlogPost>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://houdini-api.vercel.app/api/blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setBlogs(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching blog data:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col items-start max-w-xs md:max-w-md lg:max-w-lg">
      {loading
        ? Array.from({ length: 3 }).map((_, idx) => <BlogPostSkeleton key={idx} />)
        : blogs.map(blog => (
          <div key={blog._id} className="flex items-start my-4">
            <div className="flex-shrink-0 mr-4 relative z-10">
              <a href={blog.postUrl} target="_blank" rel="noopener noreferrer">
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
                  <a href={blog.postUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {blog.title}
                  </a>
                </h2>
                <p className="text-sm text-gray-500">
                  <time className="italic">{new Date(blog.timestamp).toLocaleString()}</time> by
                  <a href={blog.authorUrl} target="_blank" rel="noopener noreferrer" className="hover:underline ml-1">
                    {blog.author}
                  </a>
                </p>
              </header>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default BlogPostList;
