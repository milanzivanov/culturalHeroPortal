/* eslint-disable react/prop-types */
function BlogEndnote({ blogEndnoteData }) {
  const { endnote_data } = blogEndnoteData;

  return (
    <div className="pb-10">
      {endnote_data[0].endnotes.length !== 0 ? (
        <h3 className="pb-3 text-lg font-semibold">Endnote</h3>
      ) : null}

      {endnote_data[0].endnotes.map((endnote, index) => (
        <div key={endnote.id}>
          <p className="md:text-md pb-2 text-xs leading-6 text-gray-700">
            <span className="font-bold">[{index + 1}]</span> -{" "}
            {endnote.endnote_title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogEndnote;
