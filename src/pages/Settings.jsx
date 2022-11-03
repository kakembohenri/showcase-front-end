import Layout from "../components/dashboard/Layout";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import { countries } from "../data/countries"

const Settings = () => {
  return (
    <Layout>
      <div className="dashboard-container">
        <DashboardSidebar />
        <div className="dashboard-content-container" data-simplebar>
          <div className="dashboard-content-inner">
            <div className="dashboard-headline">
              <h3>Settings</h3>

              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>Settings</li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-account-circle"></i>{" "}
                      My Account
                    </h3>
                  </div>

                  <div className="content with-padding padding-bottom-0">
                    <div className="row">
                      <div className="col-auto">
                        <div
                          className="avatar-wrapper"
                          data-tippy-placement="bottom"
                          title="Change Avatar"
                        >
                          <img
                            className="profile-pic"
                            src="images/user-avatar-placeholder.png"
                            alt=""
                          />
                          <div className="upload-button"></div>
                          <input
                            className="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>

                      <div className="col">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>First Name</h5>
                              <input
                                type="text"
                                className="with-border"
                                value="Tom"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Last Name</h5>
                              <input
                                type="text"
                                className="with-border"
                                value="Smith"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6">
                            {/* <!-- Account Type --> */}
                            <div className="submit-field">
                              <h5>Account Type</h5>
                              <div className="account-type">
                                <div>
                                  <input
                                    type="radio"
                                    name="account-type-radio"
                                    id="freelancer-radio"
                                    className="account-type-radio"
                                    checked
                                  />
                                  <label
                                    for="freelancer-radio"
                                    className="ripple-effect-dark"
                                  >
                                    <i className="icon-material-outline-account-circle"></i>{" "}
                                    Freelancer
                                  </label>
                                </div>

                                <div>
                                  <input
                                    type="radio"
                                    name="account-type-radio"
                                    id="employer-radio"
                                    className="account-type-radio"
                                  />
                                  <label
                                    for="employer-radio"
                                    className="ripple-effect-dark"
                                  >
                                    <i className="icon-material-outline-business-center"></i>{" "}
                                    Employer
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Email</h5>
                              <input
                                type="text"
                                className="with-border"
                                value="tom@example.com"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Dashboard Box --> */}
              <div className="col-xl-12">
                <div className="dashboard-box">
                  {/* <!-- Headline --> */}
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-face"></i> My Profile
                    </h3>
                  </div>

                  <div className="content">
                    <ul className="fields-ul">
                      <li>
                        <div className="row">
                          <div className="col-xl-4">
                            <div className="submit-field">
                              <div className="bidding-widget">
                                {/* <!-- Headline --> */}
                                <span className="bidding-detail">
                                  Set your <strong>minimal hourly rate</strong>
                                </span>

                                {/* <!-- Slider --> */}
                                <div className="bidding-value margin-bottom-10">
                                  $<span id="biddingVal"></span>
                                </div>
                                <input
                                  className="bidding-slider"
                                  type="text"
                                  value=""
                                  data-slider-handle="custom"
                                  data-slider-currency="$"
                                  data-slider-min="5"
                                  data-slider-max="150"
                                  data-slider-value="35"
                                  data-slider-step="1"
                                  data-slider-tooltip="hide"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4">
                            <div className="submit-field">
                              <h5>
                                Skills{" "}
                                <i
                                  className="help-icon"
                                  data-tippy-placement="right"
                                  title="Add up to 10 skills"
                                ></i>
                              </h5>

                              {/* <!-- Skills List --> */}
                              <div className="keywords-container">
                                <div className="keyword-input-container">
                                  <input
                                    type="text"
                                    className="keyword-input with-border"
                                    placeholder="e.g. Angular, Laravel"
                                  />
                                  <button className="keyword-input-button ripple-effect">
                                    <i className="icon-material-outline-add"></i>
                                  </button>
                                </div>
                                <div className="keywords-list">
                                  <span className="keyword">
                                    <span className="keyword-remove"></span>
                                    <span className="keyword-text">
                                      Angular
                                    </span>
                                  </span>
                                  <span className="keyword">
                                    <span className="keyword-remove"></span>
                                    <span className="keyword-text">Vue JS</span>
                                  </span>
                                  <span className="keyword">
                                    <span className="keyword-remove"></span>
                                    <span className="keyword-text">iOS</span>
                                  </span>
                                  <span className="keyword">
                                    <span className="keyword-remove"></span>
                                    <span className="keyword-text">
                                      Android
                                    </span>
                                  </span>
                                  <span className="keyword">
                                    <span className="keyword-remove"></span>
                                    <span className="keyword-text">
                                      Laravel
                                    </span>
                                  </span>
                                </div>
                                <div className="clearfix"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4">
                            <div className="submit-field">
                              <h5>Attachments</h5>

                              {/* <!-- Attachments --> */}
                              <div className="attachments-container margin-top-0 margin-bottom-0">
                                <div className="attachment-box ripple-effect">
                                  <span>Cover Letter</span>
                                  <i>PDF</i>
                                  <button
                                    className="remove-attachment"
                                    data-tippy-placement="top"
                                    title="Remove"
                                  ></button>
                                </div>
                                <div className="attachment-box ripple-effect">
                                  <span>Contract</span>
                                  <i>DOCX</i>
                                  <button
                                    className="remove-attachment"
                                    data-tippy-placement="top"
                                    title="Remove"
                                  ></button>
                                </div>
                              </div>
                              <div className="clearfix"></div>

                              {/* <!-- Upload Button --> */}
                              <div className="uploadButton margin-top-0">
                                <input
                                  className="uploadButton-input"
                                  type="file"
                                  accept="image/*, application/pdf"
                                  id="upload"
                                  multiple
                                />
                                <label
                                  className="uploadButton-button ripple-effect"
                                  for="upload"
                                >
                                  Upload Files
                                </label>
                                <span className="uploadButton-file-name">
                                  Maximum file size: 10 MB
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Tagline</h5>
                              <input
                                type="text"
                                className="with-border"
                                value="iOS Expert + Node Dev"
                              />
                            </div>
                          </div>

                          <div className="col-xl-6">
                            <div className="submit-field">
                              <h5>Nationality</h5>
                              <select
                                className="selectpicker with-border"
                                data-size="7"
                                title="Select Job Type"
                                data-live-search="true"
                              >
                                {countries.map((country, index) => (
                                  <option value={country.code} key={index}>
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="col-xl-12">
                            <div className="submit-field">
                              <h5>Introduce Yourself</h5>
                              <textarea
                                cols="30"
                                rows="5"
                                className="with-border"
                              >
                                Leverage agile frameworks to provide a robust
                                synopsis for high level overviews. Iterative
                                approaches to corporate strategy foster
                                collaborative thinking to further the overall
                                value proposition. Organically grow the holistic
                                world view of disruptive innovation via
                                workplace diversity and empowerment.
                              </textarea>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div id="test1" className="dashboard-box">
                  {/* <!-- Headline --> */}
                  <div className="headline">
                    <h3>
                      <i className="icon-material-outline-lock"></i> Password &
                      Security
                    </h3>
                  </div>

                  <div className="content with-padding">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Current Password</h5>
                          <input type="password" className="with-border" />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>New Password</h5>
                          <input type="password" className="with-border" />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Repeat New Password</h5>
                          <input type="password" className="with-border" />
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="checkbox">
                          <input type="checkbox" id="two-step" checked />
                          <label for="two-step">
                            <span className="checkbox-icon"></span> Enable
                            Two-Step Verification via Email
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <a href="#" className="button ripple-effect big margin-top-30">
                  Save Changes
                </a>
              </div>
            </div>
            <div className="dashboard-footer-spacer"></div>
            <div className="small-footer margin-top-15">
              <div className="small-footer-copyrights">
                © 2019 <strong>Hireo</strong>. All Rights Reserved.
              </div>
              <ul className="footer-social-links">
                <li>
                  <a href="#" title="Facebook" data-tippy-placement="top">
                    <i className="icon-brand-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter" data-tippy-placement="top">
                    <i className="icon-brand-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Google Plus" data-tippy-placement="top">
                    <i className="icon-brand-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="LinkedIn" data-tippy-placement="top">
                    <i className="icon-brand-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Settings;
