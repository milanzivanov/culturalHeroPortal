/* eslint-disable react/prop-types */
function BlogFootnote({ blogFootnoteData }) {
  const { footnotes } = blogFootnoteData;

  return (
    <div className="pb-10">
      {footnotes.length !== 0 ? (
        <h3 className="w-80 border-b-2 border-black pb-2 text-lg font-semibold">
          Fusnote
        </h3>
      ) : null}

      {footnotes.map((foot, index) => (
        <div key={foot.id}>
          <p className="md:text-md py-2 text-xs leading-6 text-gray-700">
            <sup className="font-bold">{index + 1}</sup>
            {foot.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogFootnote;
