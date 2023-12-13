import React from "react";
export default function Header() {
  return (
    <>
      <header className="bg-brand-header fixed-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler p-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" routerLink="/home">
                  {" "}
                  Product Name{" "}
                </a>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item divider-vertical d-none d-lg-block"></li>

                    <li className="nav-item">
                      <a className="nav-link" routerLink="/item1">
                        Item 1
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Menu 1
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" routerLink="">
                          Menu Item 1
                        </a>
                        <a className="dropdown-item" routerLink="">
                          Menu Item 2
                        </a>
                        <a className="dropdown-item" routerLink="">
                          Menu Item 3
                        </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Menu 2
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" routerLink="">
                          Menu Item 1
                        </a>
                        <a className="dropdown-item" routerLink="">
                          Menu Item 2
                        </a>
                        <a className="dropdown-item" routerLink="">
                          Menu Item 3
                        </a>
                      </div>
                    </li>
                  </ul>

                  <ul className="navbar-nav navbar-right">
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-labelledby="app-offscreen"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i
                          className="pbi-icon-outline pbi-apps d-none d-lg-inline"
                          aria-hidden="true"
                        ></i>

                        <span className="d-lg-none" id="app-offscreen">
                          <i
                            className="pbi-icon-mini pbi-grid-4"
                            aria-hidden="true"
                          ></i>
                          &nbsp;Applications
                        </span>
                      </a>
                      <div className="dropdown-menu" role="menu">
                        <div className="section-head hidden-xs">Your Apps</div>
                        <a className="dropdown-item" href="">
                          App 1
                        </a>
                        <a className="dropdown-item" href="">
                          App 2
                        </a>
                        <a className="dropdown-item" href="">
                          App 3
                        </a>
                        <a
                          className="dropdown-item disabled"
                          aria-disabled="true"
                          href=""
                        >
                          App 4
                        </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown menu-help">
                      <a
                        href=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-labelledby="help-offscreen"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <i
                          className="pbi-icon-outline pbi-help-circle d-none d-lg-inline"
                          aria-hidden="true"
                        ></i>

                        <span className="d-lg-none" id="help-offscreen">
                          <i
                            className="pbi-icon-mini pbi-help-circle"
                            aria-hidden="true"
                          ></i>
                          &nbsp;Support
                        </span>
                      </a>

                      <div className="dropdown-menu" role="menu">
                        <div className="section-head hidden-xs">Support</div>
                        <input
                          type="text"
                          className="form-control form-control-sm dropdown-search-item"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <a className="dropdown-item" href="">
                          Support Topic 1
                        </a>
                        <a className="dropdown-item" href="">
                          Support Topic 2
                        </a>
                        <a className="dropdown-item" href="">
                          See All Support Topics
                        </a>
                        <div className="divider" role="separator"></div>
                        <a className="dropdown-item" href="">
                          <i
                            className="pbi-icon-mini pbi-chat-conversation"
                            aria-hidden="true"
                          ></i>{" "}
                          Chat
                          <span ng-if="patterns.offline">Offline</span>
                        </a>
                        <a className="dropdown-item" href="">
                          {" "}
                          <i
                            className="pbi-icon-mini pbi-mail"
                            aria-hidden="true"
                          ></i>{" "}
                          Email
                        </a>
                        <a className="dropdown-item" href="tel:1-800-555-45678">
                          <i
                            className="pbi-icon-mini pbi-phone"
                            aria-hidden="true"
                          ></i>{" "}
                          1-800-555-45678
                        </a>
                        <div className="divider" role="separator"></div>
                        <a className="dropdown-item" href="">
                          <i
                            className="pbi-icon-mini pbi-download"
                            aria-hidden="true"
                          ></i>{" "}
                          Printer/Scale Drivers
                        </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        href=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-labelledby="settings-offscreen"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <i
                          className="pbi-icon-outline pbi-settings d-none d-lg-inline"
                          aria-hidden="true"
                        ></i>

                        <span className="d-lg-none" id="settings-offscreen">
                          <i
                            className="pbi-icon-mini pbi-settings"
                            aria-hidden="true"
                          ></i>
                          &nbsp;Settings
                        </span>
                      </a>
                      <div className="dropdown-menu" role="menu">
                        <div className="section-head">Application Settings</div>
                        <a className="dropdown-item" href="">
                          Carriers
                        </a>
                        <a className="dropdown-item" href="">
                          Cost Accounts
                        </a>
                        <a className="dropdown-item" href="">
                          Postage Payment Methods
                        </a>
                        <a className="dropdown-item" href="">
                          Users
                        </a>
                        <div className="section-head hidden-xs">
                          Personal Preferences
                        </div>

                        <a className="dropdown-item" href="">
                          Label Options
                        </a>
                        <a className="dropdown-item" href="">
                          Automatic Emails
                        </a>
                        <a className="dropdown-item" href="">
                          Presets
                        </a>
                        <a className="dropdown-item" href="">
                          Return Label
                        </a>
                        <a className="dropdown-item" href="">
                          Preferences
                        </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown menu-user">
                      <a
                        href=""
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-labelledby="username-offscreen"
                        aria-expanded="false"
                      >
                        <div className="d-none d-lg-block header-user-lockup">
                          <div className="header-username">Melanie Daniels</div>
                        </div>

                        <span className="d-lg-none" id="username-offscreen">
                          <i
                            className="pbi-icon-mini pbi-user-circle"
                            aria-hidden="true"
                          ></i>
                          &nbsp;Melanie Daniels
                        </span>
                      </a>

                      <div className="dropdown-menu" role="menu">
                        <a className="dropdown-item" href="">
                          Profile <br />
                          <span className="menu-text-small">
                            Email, Passwords
                          </span>
                        </a>
                        <a className="dropdown-item" href="">
                          Your Account <br />
                          <span className="menu-text-small">
                            Financials, Usage, Products, Support
                          </span>
                        </a>
                        <div className="divider" role="separator"></div>
                        <a className="dropdown-item" href="">
                          Sign Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
