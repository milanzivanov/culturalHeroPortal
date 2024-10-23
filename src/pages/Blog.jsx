/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getBlog } from "../services/apiGetData";

import BlogEndnote from "../components/BlogEndnote";
import BlogLiterature from "../components/BlogLiterature";
import BlogFootnote from "../components/BlogFootnote";

export async function loader({ params }) {
  const id = params.blogId;
  const blog = await getBlog(id);
  return blog;
}

function BlogItem() {
  const blog = useLoaderData();

  console.log(blog);

  return (
    <div>
      <div className="bg-slate-300 py-5 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col rounded-md p-5 md:flex md:flex-row">
          <img
            className="mb-5 w-full rounded-md md:w-[25vh]"
            src={blog.blog_img}
            alt={blog.blog_title}
          />
          <div className="flex max-w-3xl flex-col items-start justify-center p-0 md:p-5">
            <h1 className="text-pretty text-xl font-semibold uppercase text-gray-800 md:text-3xl">
              {blog.blog_title}
            </h1>
            <p className="text-sm text-gray-700 md:text-lg">
              (Autor:
              <span className="font-semibold"> {blog.members.member_name}</span>
              )
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mx-auto max-w-7xl">
        <div className="bg-white p-5 shadow-sm md:py-10">
          {/* {console.log(.blog_posts)} */}
          {blog.blog_body_posts.map((data) => (
            // console.log(data),
            <div key={data.created_at} className="pb-5">
              <h2 className="pb-2 text-lg font-semibold">{data.blog_title}</h2>
              <p className="text-sm leading-6 text-gray-700 md:text-lg">
                {data.blog_text}
              </p>
              <p className="text-sm font-semibold italic leading-6 text-gray-700 md:text-lg">
                {data.blog_poem}
              </p>
            </div>
          ))}

          {/* Endnotes Section */}
          <BlogEndnote blogEndnoteData={blog} />

          {/* Literature Section */}
          <BlogLiterature blogLiteratureData={blog} />

          <BlogFootnote blogFootnoteData={blog} />

          {/* Back to Blogs List Link */}
          <div className="flex justify-end">
            <Link
              className="flex items-center rounded bg-blue-500 px-3 py-2 text-slate-100"
              to="/blogovi"
            >
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <span>Vrati se na naslove</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
