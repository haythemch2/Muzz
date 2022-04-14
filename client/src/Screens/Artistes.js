import React, { useEffect } from "react";
import * as Icon from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUsers } from "../js/action/user";
import { CURRENT_USER } from "../js/const/user";

const Artistes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userReducer.users);
  const current = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div id="main" className="layout-row flex">
      {/* ############ Content START*/}
      <div id="content" className="flex ">
        {/* ############ Main START*/}
        <div>
          <div className="page-content page-container" id="page-content">
            <div
              className="padding sr"
              id="list"
              data-plugin="list"
              data-page={50}
            >
              <div className="page-hero">
                <div className="media bg-media">
                  <div className="media-content"></div>
                </div>
                <div className="pos-rlt">
                  <h1 className="display-3 font-weight-bold text-white">
                    Weekly Top Artistes
                  </h1>
                </div>
              </div>
              <div className="d-lg-flex pos-rlt">
                <div className="flex">
                  <div className="heading pt-5 pb-3 d-flex ">
                    <div>
                      <div className="text-muted sr-item">Top</div>
                      <h5 className="text-highlight sr-item">Artistes</h5>
                    </div>
                    <span className="flex" />
                  </div>
                  <div className="pos-rlt z-index-1">
                    <div className="d-flex py-2 sr-item">
                      <div className="dropdown my-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          data-toggle="dropdown"
                        >
                          <span>New</span>
                        </button>
                        <div className="dropdown-menu">
                          <a
                            href="#"
                            className="dropdown-item sort"
                            data-sort="num"
                            data-order="desc"
                          >
                            Popular
                          </a>
                          <a
                            href="#"
                            className="dropdown-item sort"
                            data-sort="author"
                            data-order="desc"
                          >
                            New
                          </a>
                        </div>
                      </div>
                      <div className="flex" />
                      <div className="dropdown my-2 mx-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          data-toggle="dropdown"
                        >
                          <span>All countries</span>
                        </button>
                        <div className="dropdown-menu" id="filter-tag">
                          <a href="#" className="dropdown-item">
                            All countries
                          </a>
                          <a href="#" className="dropdown-item">
                            Australia
                          </a>
                          <a href="#" className="dropdown-item">
                            Canada
                          </a>
                          <a href="#" className="dropdown-item">
                            France
                          </a>
                          <a href="#" className="dropdown-item">
                            Germany
                          </a>
                          <a href="#" className="dropdown-item">
                            Ireland
                          </a>
                          <a href="#" className="dropdown-item">
                            Netherlands
                          </a>
                          <a href="#" className="dropdown-item">
                            New Zealand
                          </a>
                          <a href="#" className="dropdown-item">
                            United Kingdom
                          </a>
                          <a href="#" className="dropdown-item">
                            USA
                          </a>
                        </div>
                      </div>
                      <div className="dropdown my-2">
                        <button
                          className="btn btn-outline-light sorting w-sm w-auto-xs text-align-auto"
                          data-toggle="dropdown"
                        >
                          <span>All genres</span>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right scrollable hover"
                          id="filter-category"
                          style={{ maxHeight: 310 }}
                        >
                          <a href="#" className="dropdown-item">
                            All genres
                          </a>
                          <a href="#" className="dropdown-item">
                            Acoustic
                          </a>
                          <a href="#" className="dropdown-item">
                            Ambient
                          </a>
                          <a href="#" className="dropdown-item">
                            Blues
                          </a>
                          <a href="#" className="dropdown-item">
                            Classical
                          </a>
                          <a href="#" className="dropdown-item">
                            Country
                          </a>
                          <a href="#" className="dropdown-item">
                            Electronic
                          </a>
                          <a href="#" className="dropdown-item">
                            Emo
                          </a>
                          <a href="#" className="dropdown-item">
                            Folk
                          </a>
                          <a href="#" className="dropdown-item">
                            Hardcore
                          </a>
                          <a href="#" className="dropdown-item">
                            Hip-Hop
                          </a>
                          <a href="#" className="dropdown-item">
                            Indie
                          </a>
                          <a href="#" className="dropdown-item">
                            Jazz
                          </a>
                          <a href="#" className="dropdown-item">
                            Latin
                          </a>
                          <a href="#" className="dropdown-item">
                            Metal
                          </a>
                          <a href="#" className="dropdown-item">
                            Pop
                          </a>
                          <a href="#" className="dropdown-item">
                            Pop punk
                          </a>
                          <a href="#" className="dropdown-item">
                            Punk
                          </a>
                          <a href="#" className="dropdown-item">
                            Reggae
                          </a>
                          <a href="#" className="dropdown-item">
                            R&amp;B
                          </a>
                          <a href="#" className="dropdown-item">
                            Rock
                          </a>
                          <a href="#" className="dropdown-item">
                            Soul
                          </a>
                          <a href="#" className="dropdown-item">
                            World
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row list list-row list-index ">
                    {users &&
                      users.length &&
                      users
                        .filter((e) => e._id != current?._id)
                        .map((user) => (
                          <div
                            className="col-12"
                            data-id={427101360}
                            data-category="Pop"
                            data-tag="USA"
                            data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/03/78/b5/0378b505-0651-5d37-abaf-fdace32fa0a1/mzaf_4885861497912518049.plus.aac.p.m4a"
                          >
                            <div className="list-item r">
                              <div className="media ">
                                <a
                                  className="ajax media-content "
                                  style={{
                                    backgroundImage: "url(" + user.url + ")",
                                  }}
                                ></a>
                                <div className="media-action media-action-overlay">
                                  <button
                                    className="btn btn-icon no-bg no-shadow hide-row"
                                    data-toggle-class=""
                                  >
                                    <Icon.Heart />
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
                              <div
                                className="list-content text-center"
                                onClick={() => navigate("/user/" + user._id)}
                              >
                                <div className="list-body ">
                                  <a className="list-title title ajax h-1x">
                                    {user.name}
                                  </a>
                                  <a className="list-subtitle d-block text-muted h-1x subtitle ajax ">
                                    {user.description}
                                  </a>
                                </div>
                              </div>
                              <div className="list-action  show-row">
                                <div className="d-flex align-items-center">
                                  <div className="px-3 text-sm text-muted d-none d-md-block num">
                                    {user.followers.length}
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
                  </div>
                  <div className="no-result hide">
                    <div className="p-5 text-center">
                      <h5>Nothing Found</h5>
                      <small>
                        It seems we can’t find what you’re looking for.
                      </small>
                    </div>
                  </div>
                  <div className="d-flex py-3 justify-content-center hide">
                    <ul className="pagination pagination-sm" />
                  </div>
                </div>
                <div style={{ minWidth: "4rem" }} />
                <div className="w-xl w-auto-sm no-shrink">
                  <div className="sticky">
                    <div className="list mb-5">
                      <div className="list-item list-overlay r">
                        <div className="media ">
                          <a
                            href="item.detail.html#"
                            className="ajax media-content "
                            style={{
                              backgroundImage: "url(../assets/img/b16.jpg)",
                            }}
                          ></a>
                          <div className="media-action "></div>
                        </div>
                        <div className="list-content p-5 text-center">
                          <div className="list-body ">
                            <a
                              href="item.detail.html#"
                              className="list-title title ajax h3 font-weight-bold"
                            >
                              Hip-Hop Chart 100
                            </a>
                            <a
                              href="artist.detail.html#"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax "
                            >
                              The hottest rap right now.
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="text text-muted sr-item">Top tracks</h6>
                    <div className="row list-row">
                      <div
                        className="col-12"
                        data-id={438654695}
                        data-category="Dance"
                        data-tag="France"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c1/60/68/c1606821-459e-0575-ad3b-6b291f2dbf66/mzaf_3521330005736623852.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media ">
                            <a
                              href="item.detail.html#438654695"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c23.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#438654695"
                                className="list-title title ajax h-1x"
                              >
                                Say My Name
                              </a>
                              <a
                                href="artist.detail.html#438654695"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                David Guetta &amp; Bebe Rexha &amp; J Balvin
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={434179154}
                        data-category="Rap"
                        data-tag="USA"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/85/3a/89/853a8999-a985-b66a-4d8d-a260ce744728/mzaf_5634253487407986103.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media ">
                            <a
                              href="item.detail.html#434179154"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c31.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#434179154"
                                className="list-title title ajax h-1x"
                              >
                                Arms Around You
                              </a>
                              <a
                                href="artist.detail.html#434179154"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                XXXTENTACION &amp; Lil Pump Feat. Swae Lee &amp;
                                Maluma
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={416737862}
                        data-category="Latin"
                        data-tag="all"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/54/29/c1/5429c111-92a4-a647-6e85-0577343fbf45/mzaf_5955739319318374110.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media ">
                            <a
                              href="item.detail.html#416737862"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c11.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#416737862"
                                className="list-title title ajax h-1x"
                              >
                                MIA
                              </a>
                              <a
                                href="artist.detail.html#416737862"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                Bad Bunny Feat. Drake
                              </a>
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
                          <div className="media ">
                            <a
                              href="item.detail.html#440557235"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c1.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#440557235"
                                className="list-title title ajax h-1x"
                              >
                                Taki Taki
                              </a>
                              <a
                                href="artist.detail.html#440557235"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                DJ Snake Feat. Selena Gomez &amp; Ozuna &amp;
                                Cardi B
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-12"
                        data-id={418888835}
                        data-category="other"
                        data-tag="USA"
                        data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/eb/e4/2e/ebe42efd-bbce-75cd-63a2-5813637e25bb/mzaf_6529454398103897146.plus.aac.p.m4a"
                      >
                        <div className="list-item r">
                          <div className="media ">
                            <a
                              href="item.detail.html#418888835"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c7.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#418888835"
                                className="list-title title ajax h-1x"
                              >
                                High Hopes
                              </a>
                              <a
                                href="artist.detail.html#418888835"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                Panic! At The Disco
                              </a>
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
                          <div className="media ">
                            <a
                              href="item.detail.html#416888150"
                              className="ajax media-content "
                              style={{
                                backgroundImage: "url(../assets/img/c24.jpg)",
                              }}
                            ></a>
                            <div className="media-action ">
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
                          <div className="list-content ">
                            <div className="list-body ">
                              <a
                                href="item.detail.html#416888150"
                                className="list-title title ajax h-1x"
                              >
                                Solo
                              </a>
                              <a
                                href="artist.detail.html#416888150"
                                className="list-subtitle d-block text-muted h-1x subtitle ajax "
                              >
                                Clean Bandit Feat. Demi Lovato
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

export default Artistes;
