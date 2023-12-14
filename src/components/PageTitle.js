import classNames from "classnames";
export default function PageTitle({ ttl, sub, layout }) {
  const titleClasses = classNames({
    "mb-0": sub,
    "has-sub": !sub,
  });

  return (
    <div className="page-header">
      <div className={classNames("page-title", layout)}>
        <div className="row">
          <div className="col">
            <h1 className={titleClasses}>{ttl}</h1>
            {sub && <h2>{sub}</h2>}
          </div>
        </div>
      </div>
    </div>
  );
}
