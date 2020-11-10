import React from 'react';

import { CSSTransition } from 'react-transition-group';

type State = {
  open: boolean;
};

class Sidebar extends React.Component<{}, State> {
  readonly state: State = {
    open: true,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 900) {
      this.setState({ open: true });
    }
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <CSSTransition in={open} timeout={100} classNames="sidebar-animation">
          <div className="sidebar">
            <div className="sidebar__overlay">
              <button
                onClick={() => {
                  this.setState({ open: false });
                }}
                type="button"
              >
                <svg className="sidebar__exit" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="sidebar__content">
              <img
                alt="logo"
                className="sidebar__logo"
                src="https://static.kojistreet.com/logo-only.png"
              />
              <div className="sidebar__item sidebar__item--selected">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p>Dashboard</p>
              </div>
              <div className="sidebar__item">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <p>Team</p>
              </div>
              <div className="sidebar__item">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <p>Projects</p>
              </div>
              <div className="sidebar__item">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>Calendar</p>
              </div>
              <div className="sidebar__item">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p>Documents</p>
              </div>
              <div className="sidebar__item">
                <svg
                  className="sidebar__icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <p>Reports</p>
              </div>
              <div className="sidebar__profile">
                <img
                  className="sidebar__profile-image"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />

                <p>asdf</p>
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!open}
          timeout={{
            enter: 1000,
            exit: 100,
          }}
          classNames="hamburger-animation"
        >
          <button
            onClick={() => {
              this.setState({ open: true });

              console.log('test');
            }}
            type="button"
            className="sidebar__hamburger"
            aria-label="Open sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </CSSTransition>
      </>
    );
  }
}

export default Sidebar;
