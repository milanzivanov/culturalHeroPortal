/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getBlog } from "../services/apiGetData";

export async function loader({ params }) {
  const id = params.blogId;
  const blog = await getBlog(id);
  return blog;
}

function BlogItem() {
  const blog = useLoaderData();

  // console.log(blog);

  return (
    <div>
      <div className="bg-slate-300 py-16">
        <h1 className="mx-auto max-w-screen-md text-pretty py-3 text-center text-xl font-semibold uppercase text-gray-800 md:text-3xl">
          {blog.title}
        </h1>
        <p className="text-center text-sm text-gray-700 md:text-lg">
          (Autor:
          <span className="font-semibold"> {blog.author}</span>)
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl bg-slate-50 p-5 shadow-sm">
          <div className="mb-5 flex flex-col items-center justify-center">
            <img
              className="mb-5 w-3/4 rounded-md md:w-1/2"
              src={blog.img}
              alt={blog.title}
            />
            <span>{blog.img_author}</span>
          </div>
          <p className="mb-10 text-sm text-gray-700 md:text-lg">
            {blog.text_body}
          </p>
          <div className="flex justify-center">
            <Link
              className="flex items-center rounded bg-blue-500 px-3 py-2 text-slate-100"
              to="/blogovi"
            >
              <span className="mr-2">Vrati se na naslove</span>
              <div>
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
