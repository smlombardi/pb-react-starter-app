export default function Footer() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  let date = "";

  if (startYear === currentYear) {
    date = currentYear;
  } else {
    date = `${startYear}-${currentYear}`;
  }

  return (
    <footer class="py-3">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xs-12 col-md-8 col-lg-6">
            <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-sm-center">
              <a
                class="footer-logo d-block d-sm-inline-block text-center text-sm-left mr-sm-2"
                href="http://www.pb.com"
                aria-label="Pitney Bowes"
              ></a>
              <span class="d-block d-sm-inline-block text-center text-sm-left pt-1 pb-3 p-sm-0">
                &copy;{date} Pitney Bowes Inc.
              </span>
            </div>
          </div>

          <div class="col-xs-12 col-md-4 col-lg-6">
            <div class="d-flex justify-content-center justify-content-sm-end align-items-sm-center">
              <a class="d-block" href="">
                Legal
              </a>
              <a class="d-block ml-3" href="">
                Accessibility
              </a>
              <a class="d-block ml-3" href="">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
