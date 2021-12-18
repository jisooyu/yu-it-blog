import React from 'react';
// import { BrowserRouter, Route } from "react-router-dom";
// import { AuthContextProvider } from "../contexts/AuthContext";
// import { AirDataContextProvider } from "../contexts/AirDataContext";
// import Login from "./Login";
// import Display from "./Display";
// import Search from "./Search";

const App = () => {
  return (
    <div>
      <header>
        <h1 className="display-3 text-center my-4">Cards</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-block dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  2: Utilities
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="2_2_basic_typography.html">
                    2.2 Basic Typography
                  </a>
                  <a
                    className="dropdown-item"
                    href="2_3_text_alignment_display.html"
                  >
                    2.3 Text Alignment & Display
                  </a>
                  <a className="dropdown-item" href="2_4_floats_position.html">
                    2.4 Floats & Position
                  </a>
                  <a
                    className="dropdown-item"
                    href="2_5_colors_background.html"
                  >
                    2.5: Colors & Background
                  </a>
                  <a className="dropdown-item" href="2_6_spacing.html">
                    2.6 Spacing
                  </a>
                  <a className="dropdown-item" href="2_7_sizing.html">
                    2.7 Sizing
                  </a>
                  <a className="dropdown-item" href="2_8_breakpoints.html">
                    2.8 Breakpoints
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-success btn-block dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  3: CSS Components
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="3_2_buttons.html">
                    3.2 Buttons
                  </a>
                  <a className="dropdown-item" href="3_3_navbar.html">
                    3.3 Navbar
                  </a>
                  <a
                    className="dropdown-item"
                    href="3_4_list_groups_badges.html"
                  >
                    3.4 List Groups & Badges
                  </a>
                  <a className="dropdown-item" href="3_5_forms.html">
                    3.5 Forms
                  </a>
                  <a className="dropdown-item" href="3_6_input_groups.html">
                    3.6 Input Groups
                  </a>
                  <a className="dropdown-item" href="3_7_alerts_progress.html">
                    3.7 Alerts & Progress
                  </a>
                  <a
                    className="dropdown-item"
                    href="3_8_tables_pagination.html"
                  >
                    3.8 Tables & Pagination
                  </a>
                  <a className="dropdown-item" href="3_9_cards.html">
                    3.9 Cards
                  </a>
                  <a className="dropdown-item" href="3_10_media_object.html">
                    3.10 Media Objects
                  </a>
                  <a className="dropdown-item" href="3_11_jumbotron.html">
                    3.11 Jumbotron
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-warning btn-block dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  4: Grid & Flexbox
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="4_2_grid_system.html">
                    4.2 Grid System
                  </a>
                  <a className="dropdown-item" href="4_3_grid_alignment.html">
                    4.3 Grid Alignment
                  </a>
                  <a className="dropdown-item" href="4_4_flexbox.html">
                    4.4 Flexbox
                  </a>
                  <a
                    className="dropdown-item"
                    href="4_5_auto_margins_wrapping_order.html"
                  >
                    4.5 Auto Margins & Wrap
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dropdown">
                <button
                  className="btn btn-danger btn-block dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                >
                  5: JavaScript Widgets
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="5_2_carousel.html">
                    5.2 Carousel
                  </a>
                  <a className="dropdown-item" href="5_3_collapse.html">
                    5.3 Collapse
                  </a>
                  <a className="dropdown-item" href="5_4_tooltips.html">
                    5.4 Tooltips
                  </a>
                  <a className="dropdown-item" href="5_5_popovers.html">
                    5.5 Popovers
                  </a>
                  <a className="dropdown-item" href="5_6_modals.html">
                    5.6 Modals
                  </a>
                  <a className="dropdown-item" href="5_7_scrollspy.html">
                    5.7 ScrollSpy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="card">
          <div className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            voluptate.
          </div>
        </div>

        {/* <div className="card" style="width: 20rem;"> */}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <h6 className="card-subtitle text-muted">Card subtitle</h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
            {/* <a className="btn btn-outline-primary" href="#">
              Read More
            </a> */}
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://source.unsplash.com/random/300x200"
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quas.
            </p>
            <a className="btn btn-success btn-block" href="#">
              Read More
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">My Card</div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            <a className="btn btn-danger" href="#">
              Read More
            </a>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">My Card</div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            {/* <a className="btn btn-dark" href="#">
              Read More
            </a> */}
          </div>
          <div className="card-footer text-muted">2 Days Ago</div>
        </div>

        <div className="card">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                {/* <a className="nav-link active" href="#">
                  Active
                </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  Link
                </a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link disabled" href="#">
                  Disabled
                </a> */}
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              perspiciatis.
            </p>
            {/* <a className="btn btn-primary" href="#">
              Read More
            </a> */}
          </div>
        </div>

        <div className="card text-white">
          <img
            className="card-img"
            src="https://source.unsplash.com/random/1000x300"
            alt=""
          />
          <div className="card-img-overlay">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div className="card bg-primary text-white mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card bg-danger text-white mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card bg-info text-white mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card border-danger mb-3">
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card border-info mb-3">
          <div className="card-body">
            <h4 className="card-title">Card Title</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
        </div>

        <div className="card-columns">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="https://source.unsplash.com/random/300x200"
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">
                Card title that wraps to a new line
              </h4>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card p-3">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer>
                <small>
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="https://source.unsplash.com/random/301x200"
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card bg-dark text-white p-3">
            <blockquote className="card-bodyquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer className="blockquote-footer">
                <small>
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src="https://source.unsplash.com/random/302x200"
              alt=""
            />
          </div>
          <div className="card p-3 text-right">
            <blockquote className="card-bodyquote">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small>
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
