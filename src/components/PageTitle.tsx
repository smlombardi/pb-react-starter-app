import classNames from "classnames";

interface PageTitleProps {
  ttl: string;
  sub?: string;
  layout?: string;
}

const PageTitle = ({ ttl, sub, layout }: PageTitleProps) => {
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
};

export default PageTitle;
