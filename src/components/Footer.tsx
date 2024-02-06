export default function Footer() {
  const startYear: number = 2021;
  const currentYear: number = new Date().getFullYear();
  let date = "";

  if (startYear === currentYear) {
    date = currentYear.toString();
  } else {
    date = `${startYear}-${currentYear}`;
  }

  return (
    <footer className="py-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xs-12 col-md-8 col-lg-6">
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-sm-center">
              <a
                className="footer-logo d-block d-sm-inline-block text-center text-sm-left mr-sm-2"
                href="https://www.pb.com"
                aria-label="Pitney Bowes"
              ></a>
              <span className="d-block d-sm-inline-block text-center text-sm-left pt-1 pb-3 p-sm-0">
                &copy;{date} Pitney Bowes Inc.
              </span>
            </div>
          </div>

          <div className="col-xs-12 col-md-4 col-lg-6">
            <div className="d-flex justify-content-center justify-content-sm-end align-items-sm-center">
              <a className="d-block" href="">
                Legal
              </a>
              <a className="d-block ml-3" href="">
                Accessibility
              </a>
              <a className="d-block ml-3" href="">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
