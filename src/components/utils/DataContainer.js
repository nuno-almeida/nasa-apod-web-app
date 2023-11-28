const DataContainer = ({ title, date, explanation, url }) => (
    <div
      className="p-0 border"
      style={{ borderRadius: "12px", maxWidth: "600px" }}
    >
      <img
        className="card-img-top"
        src={url}
        loading="lazy"
        alt=""
        style={{ borderRadius: "12px 12px 0 0", aspectRatio: "1/1" }}
      />
      <div className="card-body p-3">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-text">{date}</h6>
        <p className="card-text text-secondary py-2">{explanation}</p>
      </div>
    </div>
  );
  
  export default DataContainer;
  