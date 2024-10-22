/* eslint-disable react/prop-types */
function BlogLiterature({ blogLiteratureData }) {
  const { literatures } = blogLiteratureData;

  return (
    <div className="pb-10">
      {literatures.length !== 0 ? (
        <h3 className="pb-3 text-lg font-semibold">Literatura</h3>
      ) : null}

      {literatures.map((literature, index) => (
        <div key={literature.title}>
          {/* {console.log(literature.title)} */}
          <p className="md:text-md pb-2 text-xs leading-6 text-gray-700">
            <span className="font-bold">{index + 1}</span> - {literature.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogLiterature;
