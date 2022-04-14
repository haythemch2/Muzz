import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as Icon from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  editProfile,
  followUser,
  getcurrent,
  getUser,
  unfollowUser,
} from "../js/action/user";
import { getUserPosts, getUserPosts1 } from "../js/action/post";
import ReactAudioPlayer from "react-audio-player";
import Player from "../components/Player";

const ViewProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer.toshow.user);
  const posts = useSelector((state) => state.userReducer.toshow.posts);
  const current = useSelector((state) => state.userReducer.user);

  const [play, setplay] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(
    "http://example.com/audio.mp3"
  );

  const handlePlay = (src) => {
    setplay(true);
    setSelectedAudio(src);
  };

  const [image, setImage] = useState("");
  const [imageUrl, setimageUrl] = useState(undefined);

  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return (
    <div id="main" className="layout-row flex">
      {/* ############ Content START*/}
      <div id="content" className="flex">
        {/* ############ Main START*/}
        <div>
          <div className="page-content page-container" id="page-content">
            <div className="padding sr">
              <div
                className="page-hero"
                data-id={2}
                data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/2c/59/072c59fe-549d-bd0e-f93d-3e4a1f673af5/mzaf_4035597378145374075.plus.aac.p.m4a"
              >
                <div className="media bg-media">
                  <div
                    className="media-content"
                    style={{ backgroundImage: "url(../assets/img/b10.jpg)" }}
                  />
                </div>

                <div className="pos-rlt">
                  <img
                    src={user?.url}
                    width="150"
                    height="150"
                    style={{ borderRadius: "50%" }}
                  />
                  {/* <input
                type="file"
                placeholder="modifier"
                onChange={(e) => setImage(e.target.files[0])}
              /> */}

                  <h1 className="display-3 font-weight-bold text-white">
                    {user?.name}
                  </h1>
                  <span className="hide title">Shallow</span>
                  <span className="hide subtitle">
                    Lady Gaga &amp; Bradley Cooper
                  </span>
                  <div className="py-4 toolbar align-items-center">
                    <button
                      className="btn btn-icon btn-play btn-rounded gd-primary"
                      data-toggle-class=""
                    />
                    <span className="text-muted">10 tracks, 5 playlist</span>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      {user?.followers.find((el) => el == current._id) ? (
                        <span
                          onClick={() => dispatch(unfollowUser(user._id))}
                          className="d-none"
                        >
                          Following
                        </span>
                      ) : (
                        <span
                          onClick={() => dispatch(followUser(user._id))}
                          className="d-inline"
                        >
                          Follow
                        </span>
                      )}
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Sponsoriser l'artiste</span>
                      <span className="d-none">Following</span>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Devenir Manager</span>
                      <span className="d-none">Following</span>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Contacter l'artiste</span>
                      <span className="d-none">Following</span>
                    </button>
                    <span className="text-muted">502</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Social: </span>
                    <Icon.Facebook />
                    <Icon.Instagram />
                    <Icon.Twitter />
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Name</span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="name"
                      value={user?.name}
                      name="name"
                    />
                  </div>

                  <div className="mb-2">
                    <span className="text-muted">Email: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="email"
                      value={user?.email}
                      name="email"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Telephone: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="Telephone"
                      value={user?.phone}
                      name="telephone"
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Description: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="description"
                      value={user?.description}
                      name="description"
                    />
                  </div>
                  {play && <Player src={selectedAudio} />}
                </div>
              </div>
              <div className="d-md-flex pos-rlt">
                <div className="flex">
                  <div className="d-flex">
                    <ul className="nav nav-sm text-sm nav-pills nav-rounded py-4">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#overview"
                          data-toggle="tab"
                        >
                          Presentation
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#tracks"
                          data-toggle="tab"
                        >
                          Galerie
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#albums"
                          data-toggle="tab"
                        >
                          Albums
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#playlist"
                          data-toggle="tab"
                        >
                          Playlist
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#liked" data-toggle="tab">
                          Chaines youtube
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#following"
                          data-toggle="tab"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="overview">
                      <div className="heading pt-5 pb-3 d-flex">
                        <div>
                          <div className="text-muted sr-item">Popular</div>
                          <h5 className="text-highlight sr-item">Tracks</h5>
                        </div>
                        <span className="flex" />
                      </div>
                      <div className="row list-row list-index">
                        {posts?.map((el) => (
                          <div
                            className="col-12"
                            data-id={434202110}
                            data-category="Hip-Hop"
                            data-tag="USA"
                            data-source={el.url}
                          >
                            <div className="list-item r">
                              <div
                                className="media"
                                onClick={() => handlePlay(el.url)}
                              >
                                <a
                                  href="item.detail.html#434202110"
                                  className="ajax media-content"
                                  style={{
                                    backgroundImage:
                                      "url(../assets/img/c13.jpg)",
                                  }}
                                ></a>
                                <div className="media-action media-action-overlay">
                                  <button
                                    className="btn btn-icon no-bg no-shadow hide-row"
                                    data-toggle-class=""
                                  >
                                    <i
                                      data-feather="heart"
                                      className="active-fill"
                                    />
                                  </button>
                                  <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                  <button
                                    className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                    data-toggle="dropdown"
                                  >
                                    <Icon.MoreHorizontal />{" "}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right" />
                                </div>
                              </div>
                              <div className="list-content text-center">
                                <div className="list-body">
                                  <a
                                    href="item.detail.html#434202110"
                                    className="list-title title ajax h-1x"
                                  >
                                    {el.title}
                                  </a>
                                  <a
                                    href="artist.detail.html#434202110"
                                    className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                  >
                                    {el.body}
                                  </a>
                                </div>
                              </div>
                              <div className="list-action show-row">
                                <div className="d-flex align-items-center">
                                  <div className="px-3 text-sm text-muted d-none d-md-block">
                                    03:24
                                  </div>
                                  <button
                                    className="btn btn-icon no-bg no-shadow"
                                    data-toggle-class=""
                                  >
                                    <i
                                      data-feather="heart"
                                      className="active-primary"
                                    />
                                  </button>
                                  <button
                                    className="btn btn-icon no-bg no-shadow btn-more"
                                    data-toggle="dropdown"
                                  >
                                    <Icon.MoreHorizontal />{" "}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          className="col-12"
                          data-id={440180182}
                          data-category="Pop"
                          data-tag="Kosovo"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/d0/94/1a/d0941aed-432a-7b25-44fb-6e16c58cbc86/mzaf_2496381949757242114.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#440180182"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c18.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#440180182"
                                  className="list-title title ajax h-1x"
                                >
                                  Let You Love Me
                                </a>
                                <a
                                  href="artist.detail.html#440180182"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Rita Ora
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  05:40
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={439309038}
                          data-category="R&B"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/26/d1/f1/26d1f10f-723e-66c9-4355-9575f40bc85b/mzaf_5907372873406991062.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#439309038"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c34.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#439309038"
                                  className="list-title title ajax h-1x"
                                >
                                  Better
                                </a>
                                <a
                                  href="artist.detail.html#439309038"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Khalid
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  02:39
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={417333490}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/27/a0/69/27a0692a-0205-87f2-1fbf-eec75a5dc94d/mzaf_8399436585982263723.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#417333490"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c10.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#417333490"
                                  className="list-title title ajax h-1x"
                                >
                                  Girls Like You
                                </a>
                                <a
                                  href="artist.detail.html#417333490"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Maroon 5 Feat. Cardi B
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:34
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={402107013}
                          data-category="Dance"
                          data-tag="All"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/03/e5/25/03e52558-25b4-e41a-8b0a-c5ee14cf51de/mzaf_7464768196891763269.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#402107013"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c15.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#402107013"
                                  className="list-title title ajax h-1x"
                                >
                                  Later Bitches
                                </a>
                                <a
                                  href="artist.detail.html#402107013"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  The Prince Karma
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  05:45
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="heading pt-5 pb-3 d-flex">
                        <div>
                          <div className="text-muted sr-item">More</div>
                          <h5 className="text-highlight sr-item">Tracks</h5>
                        </div>
                        <span className="flex" />
                      </div>
                      <div className="row list mb-4">
                        <div
                          className="col-6 col-md-3"
                          data-id={438387803}
                          data-category="Dance"
                          data-tag="Other"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/23/17/88/23178814-ef4f-1b4d-294d-89cd434941a2/mzaf_8868960744652419987.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r">
                            <div className="media">
                              <a
                                href="item.detail.html#438387803"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c35.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#438387803"
                                  className="list-title title ajax h-1x"
                                >
                                  Electricity
                                </a>
                                <a
                                  href="artist.detail.html#438387803"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Silk City &amp; Dua Lipa Feat. Diplo &amp;
                                  Mark Ronson
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-md-3"
                          data-id={402107013}
                          data-category="Dance"
                          data-tag="All"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/03/e5/25/03e52558-25b4-e41a-8b0a-c5ee14cf51de/mzaf_7464768196891763269.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r">
                            <div className="media">
                              <a
                                href="item.detail.html#402107013"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c15.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#402107013"
                                  className="list-title title ajax h-1x"
                                >
                                  Later Bitches
                                </a>
                                <a
                                  href="artist.detail.html#402107013"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  The Prince Karma
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-md-3"
                          data-id={378918899}
                          data-category="Dance"
                          data-tag="Canada"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r">
                            <div className="media">
                              <a
                                href="item.detail.html#378918899"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c20.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#378918899"
                                  className="list-title title ajax h-1x"
                                >
                                  Body
                                </a>
                                <a
                                  href="artist.detail.html#378918899"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Loud Luxury Feat. Brando
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-md-3"
                          data-id={440180182}
                          data-category="Pop"
                          data-tag="Kosovo"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/d0/94/1a/d0941aed-432a-7b25-44fb-6e16c58cbc86/mzaf_2496381949757242114.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r">
                            <div className="media">
                              <a
                                href="item.detail.html#440180182"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c18.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#440180182"
                                  className="list-title title ajax h-1x"
                                >
                                  Let You Love Me
                                </a>
                                <a
                                  href="artist.detail.html#440180182"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Rita Ora
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tracks">
                      <div className="row list-row">
                        <div
                          className="col-12"
                          data-id={438387803}
                          data-category="Dance"
                          data-tag="Other"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/23/17/88/23178814-ef4f-1b4d-294d-89cd434941a2/mzaf_8868960744652419987.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#438387803"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c35.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#438387803"
                                  className="list-title title ajax h-1x"
                                >
                                  Electricity
                                </a>
                                <a
                                  href="artist.detail.html#438387803"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Silk City &amp; Dua Lipa Feat. Diplo &amp;
                                  Mark Ronson
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:20
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={408576846}
                          data-category="Rap"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#408576846"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c25.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#408576846"
                                  className="list-title title ajax h-1x"
                                >
                                  Shotgun
                                </a>
                                <a
                                  href="artist.detail.html#408576846"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  George Ezra
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:48
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={439575216}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#439575216"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c21.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#439575216"
                                  className="list-title title ajax h-1x"
                                >
                                  Wake Up In The Sky
                                </a>
                                <a
                                  href="artist.detail.html#439575216"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Gucci Mane, Bruno Mars &amp; Kodak Black
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:34
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={443321905}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/aa/41/38/aa413803-5b2d-a5de-381f-351d5ebcc3cb/mzaf_2919139327828656331.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#443321905"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c16.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#443321905"
                                  className="list-title title ajax h-1x"
                                >
                                  ZEZE
                                </a>
                                <a
                                  href="artist.detail.html#443321905"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Kodak Black Feat. Offset &amp; Travis Scott
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:23
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={433873297}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/61/21/7d/61217d02-2aea-96cc-f2f8-ff29a90cf043/mzaf_3962092115674978972.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#433873297"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c27.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#433873297"
                                  className="list-title title ajax h-1x"
                                >
                                  Beautiful
                                </a>
                                <a
                                  href="artist.detail.html#433873297"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Bazzi Feat. Camila Cabello
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:49
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={435950080}
                          data-category="Dance"
                          data-tag="United Kingdom"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bd/28/a1/bd28a103-b17f-540a-eae3-9bfe992e2562/mzaf_6343854158099733867.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#435950080"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c2.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#435950080"
                                  className="list-title title ajax h-1x"
                                >
                                  Promises
                                </a>
                                <a
                                  href="artist.detail.html#435950080"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Calvin Harris &amp; Sam Smith
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:48
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={413103901}
                          data-category="Pop"
                          data-tag="Australia"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/a7/34/5a/a7345af4-5d3c-3736-5dd0-e9d051b0ded3/mzaf_6009557953366571039.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#413103901"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c17.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#413103901"
                                  className="list-title title ajax h-1x"
                                >
                                  Youngblood
                                </a>
                                <a
                                  href="artist.detail.html#413103901"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  5 Seconds Of Summer
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:30
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={440557235}
                          data-category="Dance"
                          data-tag="France"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/2c/59/072c59fe-549d-bd0e-f93d-3e4a1f673af5/mzaf_4035597378145374075.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#440557235"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c1.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#440557235"
                                  className="list-title title ajax h-1x"
                                >
                                  Taki Taki
                                </a>
                                <a
                                  href="artist.detail.html#440557235"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  DJ Snake Feat. Selena Gomez &amp; Ozuna &amp;
                                  Cardi B
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  03:28
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={442009655}
                          data-category="Pop"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/7e/24/077e2447-0d02-1c40-729b-a4a87e7ecd51/mzaf_3261492558713394996.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#442009655"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c19.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#442009655"
                                  className="list-title title ajax h-1x"
                                >
                                  Woman Like Me
                                </a>
                                <a
                                  href="artist.detail.html#442009655"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Little Mix Feat. Nicki Minaj
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:48
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={441677734}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/f0/96/02/f09602fc-40df-8f2e-1a19-e69b7bf746aa/mzaf_4452217425399550549.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#441677734"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c32.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#441677734"
                                  className="list-title title ajax h-1x"
                                >
                                  Uproar
                                </a>
                                <a
                                  href="artist.detail.html#441677734"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Lil Wayne
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  05:23
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={416888150}
                          data-category="Dance"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/80/9c/c6/809cc6e9-c2e4-f300-921c-e37b5a4a6569/mzaf_4199798196739675159.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#416888150"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c24.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#416888150"
                                  className="list-title title ajax h-1x"
                                >
                                  Solo
                                </a>
                                <a
                                  href="artist.detail.html#416888150"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Clean Bandit Feat. Demi Lovato
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  02:50
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={447549756}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/f0/93/72/f093723b-35d0-d99e-c89e-53ac67bcf24e/mzaf_6054509368688935276.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#447549756"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c33.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#447549756"
                                  className="list-title title ajax h-1x"
                                >
                                  thank u, next
                                </a>
                                <a
                                  href="artist.detail.html#447549756"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Ariana Grande
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:35
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={378918899}
                          data-category="Dance"
                          data-tag="Canada"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#378918899"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c20.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#378918899"
                                  className="list-title title ajax h-1x"
                                >
                                  Body
                                </a>
                                <a
                                  href="artist.detail.html#378918899"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Loud Luxury Feat. Brando
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  05:26
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={439309038}
                          data-category="R&B"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/26/d1/f1/26d1f10f-723e-66c9-4355-9575f40bc85b/mzaf_5907372873406991062.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#439309038"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c34.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#439309038"
                                  className="list-title title ajax h-1x"
                                >
                                  Better
                                </a>
                                <a
                                  href="artist.detail.html#439309038"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Khalid
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  05:21
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          data-id={402107013}
                          data-category="Dance"
                          data-tag="All"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/03/e5/25/03e52558-25b4-e41a-8b0a-c5ee14cf51de/mzaf_7464768196891763269.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="item.detail.html#402107013"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c15.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#402107013"
                                  className="list-title title ajax h-1x"
                                >
                                  Later Bitches
                                </a>
                                <a
                                  href="artist.detail.html#402107013"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  The Prince Karma
                                </a>
                              </div>
                            </div>
                            <div className="list-action show-row">
                              <div className="d-flex align-items-center">
                                <div className="px-3 text-sm text-muted d-none d-md-block">
                                  04:39
                                </div>
                                <button
                                  className="btn btn-icon no-bg no-shadow"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-primary"
                                  />
                                </button>
                                <button
                                  className="btn btn-icon no-bg no-shadow btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="albums">
                      <div className="row list mb-4">
                        <div
                          className="col-4 col-sm-3"
                          data-id={402107013}
                          data-category="Dance"
                          data-tag="All"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/03/e5/25/03e52558-25b4-e41a-8b0a-c5ee14cf51de/mzaf_7464768196891763269.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#402107013"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c15.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#402107013"
                                  className="list-title title ajax h-1x"
                                >
                                  Later Bitches
                                </a>
                                <a
                                  href="artist.detail.html#402107013"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  The Prince Karma
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={443321905}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/aa/41/38/aa413803-5b2d-a5de-381f-351d5ebcc3cb/mzaf_2919139327828656331.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#443321905"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c16.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#443321905"
                                  className="list-title title ajax h-1x"
                                >
                                  ZEZE
                                </a>
                                <a
                                  href="artist.detail.html#443321905"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Kodak Black Feat. Offset &amp; Travis Scott
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={434628736}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/1d/44/74/1d447462-1811-5cfd-90f7-13edea1193d9/mzaf_5901924055590298818.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#434628736"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c9.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#434628736"
                                  className="list-title title ajax h-1x"
                                >
                                  Thunderclouds
                                </a>
                                <a
                                  href="artist.detail.html#434628736"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  LSD Feat. Sia &amp; Diplo &amp; Labrinth
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={428550515}
                          data-category="RAP"
                          data-tag="Australia"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview115/v4/4c/58/f4/4c58f4f0-ec84-c5e3-15ed-39beb0933e38/mzaf_3604425775820894823.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#428550515"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c3.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#428550515"
                                  className="list-title title ajax h-1x"
                                >
                                  Be Alright
                                </a>
                                <a
                                  href="artist.detail.html#428550515"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Dean Lewis
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={439309038}
                          data-category="R&B"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/26/d1/f1/26d1f10f-723e-66c9-4355-9575f40bc85b/mzaf_5907372873406991062.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#439309038"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c34.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#439309038"
                                  className="list-title title ajax h-1x"
                                >
                                  Better
                                </a>
                                <a
                                  href="artist.detail.html#439309038"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Khalid
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={374705210}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/dc/c4/0b/dcc40b4d-283b-e9a2-6209-ca988087cc0e/mzaf_8137717147287964110.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#374705210"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c22.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#374705210"
                                  className="list-title title ajax h-1x"
                                >
                                  Mo Bamba
                                </a>
                                <a
                                  href="artist.detail.html#374705210"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Sheck Wes
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={442009655}
                          data-category="Pop"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/7e/24/077e2447-0d02-1c40-729b-a4a87e7ecd51/mzaf_3261492558713394996.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#442009655"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c19.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#442009655"
                                  className="list-title title ajax h-1x"
                                >
                                  Woman Like Me
                                </a>
                                <a
                                  href="artist.detail.html#442009655"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Little Mix Feat. Nicki Minaj
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3"
                          data-id={438654695}
                          data-category="Dance"
                          data-tag="France"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c1/60/68/c1606821-459e-0575-ad3b-6b291f2dbf66/mzaf_3521330005736623852.plus.aac.p.m4a"
                        >
                          <div className="list-item list-hover r mb-4">
                            <div className="media">
                              <a
                                href="item.detail.html#438654695"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c23.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#438654695"
                                  className="list-title title ajax h-1x"
                                >
                                  Say My Name
                                </a>
                                <a
                                  href="artist.detail.html#438654695"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  David Guetta &amp; Bebe Rexha &amp; J Balvin
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="playlist">
                      <div className="row list-row">
                        <div
                          className="col-6 col-sm-4"
                          data-id={435160184}
                          data-category="Dance"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/9c/e6/fd/9ce6fd38-1225-6ac3-f7a6-da80cb50346e/mzaf_1582186890349153418.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#435160184"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c8.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#435160184"
                                  className="list-title title ajax h-1x"
                                >
                                  Happier
                                </a>
                                <a
                                  href="artist.detail.html#435160184"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Marshmello &amp; Bastille
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={441677734}
                          data-category="Rap"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/f0/96/02/f09602fc-40df-8f2e-1a19-e69b7bf746aa/mzaf_4452217425399550549.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#441677734"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c32.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#441677734"
                                  className="list-title title ajax h-1x"
                                >
                                  Uproar
                                </a>
                                <a
                                  href="artist.detail.html#441677734"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Lil Wayne
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={439309038}
                          data-category="R&B"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/26/d1/f1/26d1f10f-723e-66c9-4355-9575f40bc85b/mzaf_5907372873406991062.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#439309038"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c34.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#439309038"
                                  className="list-title title ajax h-1x"
                                >
                                  Better
                                </a>
                                <a
                                  href="artist.detail.html#439309038"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Khalid
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={445112226}
                          data-category="Dance"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/2d/ea/7e/2dea7e42-b98b-a7d2-10d5-6dbc835da539/mzaf_7531992205888527800.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#445112226"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c29.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#445112226"
                                  className="list-title title ajax h-1x"
                                >
                                  Baby
                                </a>
                                <a
                                  href="artist.detail.html#445112226"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Clean Bandit Feat. Marina and the Diamonds
                                  &amp; Luis Fonsi
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={408576846}
                          data-category="Rap"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#408576846"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c25.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#408576846"
                                  className="list-title title ajax h-1x"
                                >
                                  Shotgun
                                </a>
                                <a
                                  href="artist.detail.html#408576846"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  George Ezra
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={417333490}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/27/a0/69/27a0692a-0205-87f2-1fbf-eec75a5dc94d/mzaf_8399436585982263723.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#417333490"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c10.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#417333490"
                                  className="list-title title ajax h-1x"
                                >
                                  Girls Like You
                                </a>
                                <a
                                  href="artist.detail.html#417333490"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Maroon 5 Feat. Cardi B
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={434202110}
                          data-category="Hip-Hop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/95/83/ee/9583ee9b-68bb-7e91-c032-1f8805157854/mzaf_896336562892407790.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#434202110"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c13.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#434202110"
                                  className="list-title title ajax h-1x"
                                >
                                  SICKO MODE
                                </a>
                                <a
                                  href="artist.detail.html#434202110"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Travis Scott
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6 col-sm-4"
                          data-id={378918899}
                          data-category="Dance"
                          data-tag="Canada"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#378918899"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c20.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#378918899"
                                  className="list-title title ajax h-1x"
                                >
                                  Body
                                </a>
                                <a
                                  href="artist.detail.html#378918899"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Loud Luxury Feat. Brando
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liked">
                      <div className="row list-row">
                        <div
                          className="col-6"
                          data-id={414883687}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/93/7c/36/937c363d-9099-71c3-a66c-070273c1c1a6/mzaf_2341219213485232355.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#414883687"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c30.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#414883687"
                                  className="list-title title ajax h-1x"
                                >
                                  Trampoline
                                </a>
                                <a
                                  href="artist.detail.html#414883687"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  SHAED
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6"
                          data-id={440180182}
                          data-category="Pop"
                          data-tag="Kosovo"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/d0/94/1a/d0941aed-432a-7b25-44fb-6e16c58cbc86/mzaf_2496381949757242114.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#440180182"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c18.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#440180182"
                                  className="list-title title ajax h-1x"
                                >
                                  Let You Love Me
                                </a>
                                <a
                                  href="artist.detail.html#440180182"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Rita Ora
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6"
                          data-id={435950080}
                          data-category="Dance"
                          data-tag="United Kingdom"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bd/28/a1/bd28a103-b17f-540a-eae3-9bfe992e2562/mzaf_6343854158099733867.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#435950080"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c2.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#435950080"
                                  className="list-title title ajax h-1x"
                                >
                                  Promises
                                </a>
                                <a
                                  href="artist.detail.html#435950080"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Calvin Harris &amp; Sam Smith
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-6"
                          data-id={413103901}
                          data-category="Pop"
                          data-tag="Australia"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/a7/34/5a/a7345af4-5d3c-3736-5dd0-e9d051b0ded3/mzaf_6009557953366571039.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media col-4">
                              <a
                                href="item.detail.html#413103901"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/c17.jpg)",
                                }}
                              ></a>
                              <div className="media-action media-action-overlay">
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row"
                                  data-toggle-class=""
                                >
                                  <i
                                    data-feather="heart"
                                    className="active-fill"
                                  />
                                </button>
                                <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                                <button
                                  className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                  data-toggle="dropdown"
                                >
                                  <Icon.MoreHorizontal />{" "}
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" />
                              </div>
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="item.detail.html#413103901"
                                  className="list-title title ajax h-1x"
                                >
                                  Youngblood
                                </a>
                                <a
                                  href="artist.detail.html#413103901"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  5 Seconds Of Summer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="following">
                      <div className="row list media-circle">
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={430776855}
                          data-category="other"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bb/45/0e/bb450e27-beb6-6006-3add-b01a40cad68d/mzaf_4073501669713213306.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#430776855"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/b7.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#430776855"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Imagine Dragons
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={408576846}
                          data-category="Rap"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#408576846"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/a6.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#408576846"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  George Ezra
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={416888150}
                          data-category="Dance"
                          data-tag="England"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/80/9c/c6/809cc6e9-c2e4-f300-921c-e37b5a4a6569/mzaf_4199798196739675159.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#416888150"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/a5.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#416888150"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Clean Bandit Feat. Demi Lovato
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={417333490}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/27/a0/69/27a0692a-0205-87f2-1fbf-eec75a5dc94d/mzaf_8399436585982263723.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#417333490"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/b11.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#417333490"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Maroon 5 Feat. Cardi B
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={418888835}
                          data-category="other"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/eb/e4/2e/ebe42efd-bbce-75cd-63a2-5813637e25bb/mzaf_6529454398103897146.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#418888835"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/b8.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#418888835"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Panic! At The Disco
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={438387803}
                          data-category="Dance"
                          data-tag="Other"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/23/17/88/23178814-ef4f-1b4d-294d-89cd434941a2/mzaf_8868960744652419987.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#438387803"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/a16.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#438387803"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  Silk City &amp; Dua Lipa Feat. Diplo &amp;
                                  Mark Ronson
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={413103901}
                          data-category="Pop"
                          data-tag="Australia"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/a7/34/5a/a7345af4-5d3c-3736-5dd0-e9d051b0ded3/mzaf_6009557953366571039.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#413103901"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/b18.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#413103901"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  5 Seconds Of Summer
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          data-id={438654695}
                          data-category="Dance"
                          data-tag="France"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c1/60/68/c1606821-459e-0575-ad3b-6b291f2dbf66/mzaf_3521330005736623852.plus.aac.p.m4a"
                        >
                          <div className="list-item r">
                            <div className="media">
                              <a
                                href="artist.detail.html#438654695"
                                className="ajax media-content"
                                style={{
                                  backgroundImage: "url(../assets/img/a4.jpg)",
                                }}
                              ></a>
                              <div className="media-action" />
                            </div>
                            <div className="list-content text-center">
                              <div className="list-body">
                                <a
                                  href="artist.detail.html#438654695"
                                  className="list-subtitle d-block text-muted h-1x subtitle ajax"
                                >
                                  David Guetta &amp; Bebe Rexha &amp; J Balvin
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ minWidth: "4rem" }} />
                <div className="w-xl w-auto-sm no-shrink">
                  <div className="sticky">
                    <div className="list mb-5">
                      <div className="list-item list-overlay r">
                        <div className="media">
                          <a
                            href="item.detail.html#"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/b17.jpg)",
                            }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content p-5 text-center">
                          <div className="list-body">
                            <a
                              href="item.detail.html#"
                              className="list-title title ajax h3 font-weight-bold"
                            >
                              Partager moi
                            </a>
                            <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=Hello%20world&choe=UTF-8" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="text text-muted sr-item">Top tracks</h6>
                    <div className="row list-row">
                      <div
                        className="col-12"
                        data-id={408576846}
                        data-category="Rap"
                        data-tag="England"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#408576846"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c25.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#408576846"
                                className="list-title title ajax h-1x"
                              >
                                Shotgun
                              </a>
                              <a
                                href="artist.detail.html#408576846"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                George Ezra
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={374705210}
                        data-category="Rap"
                        data-tag="USA"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/dc/c4/0b/dcc40b4d-283b-e9a2-6209-ca988087cc0e/mzaf_8137717147287964110.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#374705210"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c22.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#374705210"
                                className="list-title title ajax h-1x"
                              >
                                Mo Bamba
                              </a>
                              <a
                                href="artist.detail.html#374705210"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                Sheck Wes
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={442173657}
                        data-category="Rap"
                        data-tag="USA"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/11/72/7e/11727eb5-b6c6-f80f-ddd9-2fb9135c07b1/mzaf_3150787160306402060.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#442173657"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c12.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#442173657"
                                className="list-title title ajax h-1x"
                              >
                                Sunflower (Spider-Man: Into the Spider-Verse)
                              </a>
                              <a
                                href="artist.detail.html#442173657"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                Post Malone &amp; Swae Lee
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={441677734}
                        data-category="Rap"
                        data-tag="USA"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/f0/96/02/f09602fc-40df-8f2e-1a19-e69b7bf746aa/mzaf_4452217425399550549.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#441677734"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c32.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#441677734"
                                className="list-title title ajax h-1x"
                              >
                                Uproar
                              </a>
                              <a
                                href="artist.detail.html#441677734"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                Lil Wayne
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={383727904}
                        data-category="Dance"
                        data-tag="Italy"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/91/65/e8/9165e84a-49ed-1728-54b4-32360df0eeea/mzaf_7952964905769903156.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#383727904"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c4.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#383727904"
                                className="list-title title ajax h-1x"
                              >
                                In My Mind
                              </a>
                              <a
                                href="artist.detail.html#383727904"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                Dynoro &amp; Gigi D’Agostino
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={437608186}
                        data-category="Pop"
                        data-tag="Denmark"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/20/c7/47/20c74768-5ce8-52ca-c13e-d51fd1641ddb/mzaf_8197938095341255443.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media">
                            <a
                              href="item.detail.html#437608186"
                              className="ajax media-content"
                              style={{
                                backgroundImage: "url(../assets/img/c28.jpg)",
                              }}
                            ></a>
                            <div className="media-action">
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row"
                                data-toggle-class=""
                              >
                                <i
                                  data-feather="heart"
                                  className="active-fill"
                                />
                              </button>
                              <button className="btn btn-raised btn-icon btn-rounded bg--white btn-play" />
                              <button
                                className="btn btn-icon no-bg no-shadow hide-row btn-more"
                                data-toggle="dropdown"
                              >
                                <Icon.MoreHorizontal />{" "}
                              </button>
                              <div className="dropdown-menu dropdown-menu-right" />
                            </div>
                          </div>
                          <div className="list-content">
                            <div className="list-body">
                              <a
                                href="item.detail.html#437608186"
                                className="list-title title ajax h-1x"
                              >
                                Love Someone
                              </a>
                              <a
                                href="artist.detail.html#437608186"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax"
                              >
                                Lukas Graham
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ############ Main END*/}
      </div>
      {/* ############ Content END*/}
    </div>
  );
};

export default ViewProfile;
