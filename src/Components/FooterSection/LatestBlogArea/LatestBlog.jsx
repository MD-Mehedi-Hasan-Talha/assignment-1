const blogs = [
  {
    id: 0,
    imgUrl: "/assets/images/blog/blog-footer-01.jpg",
    description: "I think really important to design with",
  },
  {
    id: 1,
    imgUrl: "/assets/images/blog/blog-footer-02.jpg",
    description: "Recognizing the need is the primary",
  },
];

export default function LatestBlog() {
  return (
    <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-white">Latest blog</h4>
        <div className="flex flex-col gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href="blog-details.html"
              className="group flex items-center gap-[22px]"
            >
              <div className="overflow-hidden rounded">
                <img src={blog.imgUrl} alt="blog" />
              </div>
              <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                {blog.description}...
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
