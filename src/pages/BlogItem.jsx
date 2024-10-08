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
  console.log(blog);

  return (
    <div>
      <div className="bg-slate-300 py-5 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-center rounded-md p-5 md:flex md:flex-row">
          <img
            className="mb-5 w-[25vh] rounded-md"
            src={blog.img}
            alt={blog.title}
          />
          <div className="flex max-w-3xl flex-col justify-center p-0 md:p-5">
            <h1 className="text-pretty text-xl font-semibold uppercase text-gray-800 md:text-3xl">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-700 md:text-lg">
              (Autor:
              <span className="font-semibold"> {blog.author}</span>)
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="bg-white p-5 shadow-sm md:py-10">
          {blog.data_json.map((data) => (
            <div key={data.id} className="pb-10">
              {data.text_body.map((data) => (
                <p
                  className="pb-5 text-sm leading-6 text-gray-700 md:text-lg"
                  key={data.created_at}
                >
                  {data.text}
                </p>
              ))}
              <ul>
                <h3 className="pb-1 text-lg font-semibold">Literatura</h3>
                {data.literature.length !== 0 ? (
                  data.literature.map((literature, i) => (
                    <li
                      key={literature.id}
                      className="pb-2 text-sm leading-6 text-gray-700"
                    >
                      {i + 1} - {literature.literature_title}
                    </li>
                  ))
                ) : (
                  <p>Nije dostupna nikakava literatura</p>
                )}
              </ul>
            </div>
          ))}

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
