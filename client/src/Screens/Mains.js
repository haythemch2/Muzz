import React from "react";
import b9 from "../img/b9.jpg";
import * as Icon from "react-feather";

const Mains = () => {
  return (
    <div id="main" className="layout-row flex">
      {/* ############ Content START*/}
      <div id="content" className="flex">
        {/* ############ Main START*/}
        <div>
          <div className="page-content page-container" id="page-content">
            <div className="padding sr">
              <div className="page-hero">
                <div className="media bg-media">
                  <div
                    className="media-content"
                    style={{ backgroundImage: "url(../assets/img/b9.jpg)" }}
                  />
                </div>
                <div
                  className="slick"
                  data-plugin="slick"
                  data-option="{
            slidesToShow: 1,
        slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: true,
            autoplay: false,
            rtl: false
          }"
                >
                  <div>
                    <div className="pos-rlt">
                      <h2 className="display-3 font-weight-bold text-white">
                        Créer votre compte pour
                        <b style={{ color: "#8e44ad" }}>
                          {" "}
                          <br />
                          3,99€
                        </b>
                        seulement/mois
                      </h2>
                      <div className="col-6 px-0 py-3 text-muted" />
                      <a
                        href="genres.html"
                        className="btn ajax btn-rounded gd-primary text-white"
                      >
                        Explorer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading pt-5 pb-3 d-flex">
                <div>
                  <h5 className="text-highlight sr-item">Catégories</h5>
                </div>
                <span className="flex" />
              </div>
              <div
                className="slick slick-visible slick-arrow-top row sr-item"
                data-plugin="slick"
                data-option="{
      slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  rtl: false,
  responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
      }"
              >
                <div
                  className="col-2"
                  data-id={378918899}
                  data-category="Dance"
                  data-tag="Canada"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#378918899"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/512/123/123581.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#378918899"
                          className="list-title title ajax h-1x"
                        >
                          DJ
                        </a>
                        <a
                          href="artist.detail.html#378918899"
                          className="list-subtitle d-block text-muted h-1x subtitle ajax"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={439575216}
                  data-category="Rap"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#439575216"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/128/3048/3048387.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#439575216"
                          className="list-title title ajax h-1x"
                        >
                          Artistes
                        </a>
                        <a
                          href="artist.detail.html#439575216"
                          className="list-subtitle d-block text-muted h-1x subtitle ajax"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={374705210}
                  data-category="Rap"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/dc/c4/0b/dcc40b4d-283b-e9a2-6209-ca988087cc0e/mzaf_8137717147287964110.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#374705210"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/512/2037/2037746.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#374705210"
                          className="list-title title ajax h-1x"
                        >
                          Maison de disques
                        </a>
                        <a
                          href="artist.detail.html#374705210"
                          className="list-subtitle d-block text-muted h-1x subtitle ajax"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={438654695}
                  data-category="Dance"
                  data-tag="France"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c1/60/68/c1606821-459e-0575-ad3b-6b291f2dbf66/mzaf_3521330005736623852.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#438654695"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://lh3.googleusercontent.com/IMoUdHvS3SvyajU2bv1D5Df7-_LV-8GdAVQ-RQ6hmCgco3FDsDTD8t8qtJQJXrX8pWVK)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#438654695"
                          className="list-title title ajax h-1x"
                        >
                          Managers
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={416888150}
                  data-category="Dance"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/80/9c/c6/809cc6e9-c2e4-f300-921c-e37b5a4a6569/mzaf_4199798196739675159.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#416888150"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/512/1496/1496134.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#416888150"
                          className="list-title title ajax h-1x"
                        >
                          Sponsors
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={408576846}
                  data-category="Rap"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#408576846"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/512/3225/3225415.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#408576846"
                          className="list-title title ajax h-1x"
                        >
                          Studios
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={408576846}
                  data-category="Rap"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#408576846"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://png.pngtree.com/png-vector/20190810/ourlarge/pngtree-camera-image-photo-photography-flat-color-icon-vector-icon-png-image_1654626.jpg)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#408576846"
                          className="list-title title ajax h-1x"
                        >
                          Photographe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={408576846}
                  data-category="Rap"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#408576846"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://static.vecteezy.com/system/resources/previews/001/196/957/large_2x/flat-icon-microphone-png.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#408576846"
                          className="list-title title ajax h-1x"
                        >
                          Ingernieur son
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={408576846}
                  data-category="Rap"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#408576846"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#408576846"
                          className="list-title title ajax h-1x"
                        >
                          Directeur artistique
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-2"
                  data-id={408576846}
                  data-category="Rap"
                  data-tag="England"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                >
                  <div className="list-item slick-item r list-hover mb-3">
                    <div className="media">
                      <a
                        href="item.detail.html#408576846"
                        className="ajax media-content"
                        style={{
                          backgroundImage:
                            "url(https://cdn-icons-png.flaticon.com/512/3578/3578749.png)",
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#408576846"
                          className="list-title title ajax h-1x"
                        >
                          Media
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading pt-5 pb-3 d-flex">
                <div>
                  <div className="text-muted sr-item">Featured</div>
                  <h5 className="text-highlight sr-item">Albums</h5>
                </div>
                <span className="flex" />
              </div>
              <div className="row row-md">
                <div
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={427101360}
                  data-category="Pop"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/03/78/b5/0378b505-0651-5d37-abaf-fdace32fa0a1/mzaf_4885861497912518049.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#427101360"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c0.jpg)" }}
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#427101360"
                          className="list-title title ajax h-1x"
                        >
                          Shallow
                        </a>
                        <a
                          href="artist.detail.html#427101360"
                          className="list-subtitle d-block text-muted h-1x subtitle ajax"
                        >
                          Lady Gaga &amp; Bradley Cooper
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={440557235}
                  data-category="Dance"
                  data-tag="France"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/2c/59/072c59fe-549d-bd0e-f93d-3e4a1f673af5/mzaf_4035597378145374075.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#440557235"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c1.jpg)" }}
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
                          DJ Snake Feat. Selena Gomez &amp; Ozuna &amp; Cardi B
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={435950080}
                  data-category="Dance"
                  data-tag="United Kingdom"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bd/28/a1/bd28a103-b17f-540a-eae3-9bfe992e2562/mzaf_6343854158099733867.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#435950080"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c2.jpg)" }}
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
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={428550515}
                  data-category="RAP"
                  data-tag="Australia"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview115/v4/4c/58/f4/4c58f4f0-ec84-c5e3-15ed-39beb0933e38/mzaf_3604425775820894823.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#428550515"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c3.jpg)" }}
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
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={383727904}
                  data-category="Dance"
                  data-tag="Italy"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/91/65/e8/9165e84a-49ed-1728-54b4-32360df0eeea/mzaf_7952964905769903156.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#383727904"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c4.jpg)" }}
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
                    <div className="list-content text-center">
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
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={441990739}
                  data-category="Other"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/fa/cc/a3/facca3ab-51ea-11b8-e359-b2a200738fc5/mzaf_2669843299284584791.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#441990739"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c5.jpg)" }}
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#441990739"
                          className="list-title title ajax h-1x"
                        >
                          Without Me
                        </a>
                        <a
                          href="artist.detail.html#441990739"
                          className="list-subtitle d-block text-muted h-1x subtitle ajax"
                        >
                          Halsey
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={430776855}
                  data-category="other"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bb/45/0e/bb450e27-beb6-6006-3add-b01a40cad68d/mzaf_4073501669713213306.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#430776855"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c6.jpg)" }}
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#430776855"
                          className="list-title title ajax h-1x"
                        >
                          Natural
                        </a>
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
                  className="col-4 col-md-3 col-lg-2 col-xl-1-8"
                  data-id={418888835}
                  data-category="other"
                  data-tag="USA"
                  data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/eb/e4/2e/ebe42efd-bbce-75cd-63a2-5813637e25bb/mzaf_6529454398103897146.plus.aac.p.m4a"
                >
                  <div className="list-item r list-hover">
                    <div className="media">
                      <a
                        href="item.detail.html#418888835"
                        className="ajax media-content"
                        style={{ backgroundImage: "url(../assets/img/c7.jpg)" }}
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
                    <div className="list-content text-center">
                      <div className="list-body">
                        <a
                          href="item.detail.html#418888835"
                          className="list-title title ajax h-1x"
                        >
                          High Hopes
                        </a>
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
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="heading pt-5 pb-3 d-flex">
                    <div>
                      <div className="text-muted sr-item">User</div>
                      <h5 className="text-highlight sr-item">Recently added</h5>
                    </div>
                    <span className="flex" />
                  </div>
                  <div className="row list-row list-index">
                    <div
                      className="col-12"
                      data-id={416737862}
                      data-category="Latin"
                      data-tag="all"
                      data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/54/29/c1/5429c111-92a4-a647-6e85-0577343fbf45/mzaf_5955739319318374110.plus.aac.p.m4a"
                    >
                      <div className="list-item r">
                        <div className="media">
                          <a
                            href="item.detail.html#416737862"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/c11.jpg)",
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
                        <div className="list-content text-center">
                          <div className="list-body">
                            <a
                              href="item.detail.html#416737862"
                              className="list-title title ajax h-1x"
                            >
                              MIA
                            </a>
                            <a
                              href="artist.detail.html#416737862"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              Bad Bunny Feat. Drake
                            </a>
                          </div>
                        </div>
                        <div className="list-action show-row">
                          <div className="d-flex align-items-center">
                            <div className="px-3 text-sm text-muted d-none d-md-block">
                              04:50
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
                      data-id={427101360}
                      data-category="Pop"
                      data-tag="USA"
                      data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/03/78/b5/0378b505-0651-5d37-abaf-fdace32fa0a1/mzaf_4885861497912518049.plus.aac.p.m4a"
                    >
                      <div className="list-item r">
                        <div className="media">
                          <a
                            href="item.detail.html#427101360"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/c0.jpg)",
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
                        <div className="list-content text-center">
                          <div className="list-body">
                            <a
                              href="item.detail.html#427101360"
                              className="list-title title ajax h-1x"
                            >
                              Shallow
                            </a>
                            <a
                              href="artist.detail.html#427101360"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              Lady Gaga &amp; Bradley Cooper
                            </a>
                          </div>
                        </div>
                        <div className="list-action show-row">
                          <div className="d-flex align-items-center">
                            <div className="px-3 text-sm text-muted d-none d-md-block">
                              03:36
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
                              02:48
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
                        <div className="list-content text-center">
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
                        <div className="list-action show-row">
                          <div className="d-flex align-items-center">
                            <div className="px-3 text-sm text-muted d-none d-md-block">
                              03:25
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
                      data-id={418888835}
                      data-category="other"
                      data-tag="USA"
                      data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/eb/e4/2e/ebe42efd-bbce-75cd-63a2-5813637e25bb/mzaf_6529454398103897146.plus.aac.p.m4a"
                    >
                      <div className="list-item r">
                        <div className="media">
                          <a
                            href="item.detail.html#418888835"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/c7.jpg)",
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
                        <div className="list-content text-center">
                          <div className="list-body">
                            <a
                              href="item.detail.html#418888835"
                              className="list-title title ajax h-1x"
                            >
                              High Hopes
                            </a>
                            <a
                              href="artist.detail.html#418888835"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              Panic! At The Disco
                            </a>
                          </div>
                        </div>
                        <div className="list-action show-row">
                          <div className="d-flex align-items-center">
                            <div className="px-3 text-sm text-muted d-none d-md-block">
                              04:37
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
                <div className="col-md-6">
                  <div className="heading pt-5 pb-3 d-flex">
                    <div>
                      <div className="text-muted sr-item">Upcoming</div>
                      <h5 className="text-highlight sr-item">Events</h5>
                    </div>
                    <span className="flex" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="list-item list-overlay r mb-3">
                        <div className="media media-4x3 gd-primary">
                          <a
                            href="blog.detail.html#"
                            className="ajax media-content"
                            style={{ backgroundImage: "url()" }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content p-4">
                          <div className="list-body">
                            <a
                              href="blog.detail.html#"
                              className="list-title title ajax h5 font-weight-bold"
                            >
                              Spring Festival
                            </a>
                            <a
                              href="artist.detail.html#"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              Nec sed in rutrum non eu malesuada senectus a
                            </a>
                          </div>
                          <div className="list-footer">
                            <div className="text-muted text-sm">
                              Feb 11, 3:39 am
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="list-item list-overlay r mb-3">
                        <div className="media media-4x3 gd-success">
                          <a
                            href="blog.detail.html#"
                            className="ajax media-content"
                            style={{ backgroundImage: "url()" }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content p-4">
                          <div className="list-body">
                            <a
                              href="blog.detail.html#"
                              className="list-title title ajax h5 font-weight-bold"
                            >
                              Music Hub 2020
                            </a>
                            <a
                              href="artist.detail.html#"
                              className="list-subtitle d-block text-muted h-1x subtitle ajax"
                            >
                              Pharetra, nisi semper enim pulvinar in gravida
                              lectus et
                            </a>
                          </div>
                          <div className="list-footer">
                            <div className="text-muted text-sm">
                              Feb 8, 3:34 am
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="heading pt-5 pb-3 d-flex">
                    <div>
                      <div className="text-muted sr-item">Blog</div>
                      <h5 className="text-highlight sr-item">News</h5>
                    </div>
                    <span className="flex" />
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="list-item r">
                        <div className="media media-16x9">
                          <a
                            href="blog.detail.html#"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/b15.jpg)",
                            }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content">
                          <div className="list-body">
                            <a
                              href="blog.detail.html#"
                              className="list-title title ajax"
                            >
                              Adipiscing urna quis consectetur
                            </a>
                          </div>
                          <div className="list-footer">
                            <div className="text-muted text-sm">
                              Feb 24, 12:43 am
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="list-item r">
                        <div className="media media-16x9">
                          <a
                            href="blog.detail.html#"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/b16.jpg)",
                            }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content">
                          <div className="list-body">
                            <a
                              href="blog.detail.html#"
                              className="list-title title ajax"
                            >
                              Malesuada non magna iaculis in
                            </a>
                          </div>
                          <div className="list-footer">
                            <div className="text-muted text-sm">
                              Feb 26, 1:29 am
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="list-item r">
                        <div className="media media-16x9">
                          <a
                            href="blog.detail.html#"
                            className="ajax media-content"
                            style={{
                              backgroundImage: "url(../assets/img/b17.jpg)",
                            }}
                          ></a>
                          <div className="media-action" />
                        </div>
                        <div className="list-content">
                          <div className="list-body">
                            <a
                              href="blog.detail.html#"
                              className="list-title title ajax"
                            >
                              Ultrices enim et
                            </a>
                          </div>
                          <div className="list-footer">
                            <div className="text-muted text-sm">
                              Feb 9, 9:34 am
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

export default Mains;
