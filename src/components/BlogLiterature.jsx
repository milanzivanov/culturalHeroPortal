/* eslint-disable react/prop-types */
function BlogLiterature({ blogLiteratureData }) {
  const { literature_data } = blogLiteratureData;

  return (
    <div className="pb-10">
      {literature_data[0].literature.length !== 0 ? (
        <h3 className="pb-3 text-lg font-semibold">Literatura</h3>
      ) : null}

      {literature_data[0].literature.map((literature, index) => (
        <div key={literature.id}>
          <p className="md:text-md pb-2 text-xs leading-6 text-gray-700">
            <span className="font-bold">{index + 1}</span> -{" "}
            {literature.literature_title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogLiterature;
