import React from "react";
import * as Icon from "react-feather";

const Categories = () => {
  return (
    <div id="main" className="layout-row flex">
      {/* ############ Content START*/}
      <div id="content" className="flex">
        {/* ############ Main START*/}
        <div>
          <div className="page-content page-container" id="page-content">
            <div className="padding sr" id="list" data-plugin="list">
              <div className="pos-rlt">
                <div className="py-5">
                  <div className="heading pt-5 pb-3 d-flex">
                    <div>
                      <div className="text-muted sr-item" />
                      <h5 className="text-highlight sr-item">Filtrer</h5>
                    </div>
                    <span className="flex" />
                  </div>
                  <div className="py-2 d-flex sr-item" id="filter-tag">
                    <div className="no-shrink my-2">Pays</div>
                    <div className="mx-3">
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Tout pays
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Australia
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Canada
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        France
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Germany
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Ireland
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Netherlands
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        New Zealand
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        United Kingdom
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        USA
                      </a>
                    </div>
                  </div>
                  <div className="py-2 d-flex sr-item" id="filter-category">
                    <div className="no-shrink my-2">Genres</div>
                    <div className="mx-3">
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Tout genres
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Acoustic
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Ambient{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Blues{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Classical
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Country{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Electronic
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Emo{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Folk{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Hardcore
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Hip-Hop{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Indie{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Jazz{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Latin{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Metal{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Pop{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        Pop punk
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Punk{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Reggae{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        R&amp;B{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Rock{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        Soul{" "}
                      </a>
                      <a href="#" className="btn btn-sm btn-white m-1">
                        {" "}
                        World{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row row-lg list hide">
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={439309038}
                    data-category="R&B"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/26/d1/f1/26d1f10f-723e-66c9-4355-9575f40bc85b/mzaf_5907372873406991062.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={433873297}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/61/21/7d/61217d02-2aea-96cc-f2f8-ff29a90cf043/mzaf_3962092115674978972.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={430776855}
                    data-category="other"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bb/45/0e/bb450e27-beb6-6006-3add-b01a40cad68d/mzaf_4073501669713213306.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#430776855"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c6.jpg)",
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={378918899}
                    data-category="Dance"
                    data-tag="Canada"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/c3/6c/db/c36cdbd0-304b-11b0-128d-eda635333cc8/mzaf_1033589088272334209.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={447549756}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/f0/93/72/f093723b-35d0-d99e-c89e-53ac67bcf24e/mzaf_6054509368688935276.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={416888150}
                    data-category="Dance"
                    data-tag="England"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/80/9c/c6/809cc6e9-c2e4-f300-921c-e37b5a4a6569/mzaf_4199798196739675159.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={440180182}
                    data-category="Pop"
                    data-tag="Kosovo"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/d0/94/1a/d0941aed-432a-7b25-44fb-6e16c58cbc86/mzaf_2496381949757242114.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={439575216}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/8f/84/bd/8f84bd09-94d3-d6f1-5fca-4b61d7ba135a/mzaf_69877628019454373.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={441677734}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/f0/96/02/f09602fc-40df-8f2e-1a19-e69b7bf746aa/mzaf_4452217425399550549.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={414883687}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/93/7c/36/937c363d-9099-71c3-a66c-070273c1c1a6/mzaf_2341219213485232355.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={443321905}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/aa/41/38/aa413803-5b2d-a5de-381f-351d5ebcc3cb/mzaf_2919139327828656331.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={417333490}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/27/a0/69/27a0692a-0205-87f2-1fbf-eec75a5dc94d/mzaf_8399436585982263723.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={434202110}
                    data-category="Hip-Hop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/95/83/ee/9583ee9b-68bb-7e91-c032-1f8805157854/mzaf_896336562892407790.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={438654695}
                    data-category="Dance"
                    data-tag="France"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c1/60/68/c1606821-459e-0575-ad3b-6b291f2dbf66/mzaf_3521330005736623852.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={437608186}
                    data-category="Pop"
                    data-tag="Denmark"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/20/c7/47/20c74768-5ce8-52ca-c13e-d51fd1641ddb/mzaf_8197938095341255443.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#437608186"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c28.jpg)",
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
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={428550515}
                    data-category="RAP"
                    data-tag="Australia"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview115/v4/4c/58/f4/4c58f4f0-ec84-c5e3-15ed-39beb0933e38/mzaf_3604425775820894823.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={413103901}
                    data-category="Pop"
                    data-tag="Australia"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/a7/34/5a/a7345af4-5d3c-3736-5dd0-e9d051b0ded3/mzaf_6009557953366571039.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={435950080}
                    data-category="Dance"
                    data-tag="United Kingdom"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bd/28/a1/bd28a103-b17f-540a-eae3-9bfe992e2562/mzaf_6343854158099733867.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={442009655}
                    data-category="Pop"
                    data-tag="England"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/7e/24/077e2447-0d02-1c40-729b-a4a87e7ecd51/mzaf_3261492558713394996.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={383727904}
                    data-category="Dance"
                    data-tag="Italy"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/91/65/e8/9165e84a-49ed-1728-54b4-32360df0eeea/mzaf_7952964905769903156.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={438387803}
                    data-category="Dance"
                    data-tag="Other"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/23/17/88/23178814-ef4f-1b4d-294d-89cd434941a2/mzaf_8868960744652419987.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                            href="item.detail.html#438387803"
                            className="list-title title ajax h-1x"
                          >
                            Electricity
                          </a>
                          <a
                            href="artist.detail.html#438387803"
                            className="list-subtitle d-block text-muted h-1x subtitle ajax"
                          >
                            Silk City &amp; Dua Lipa Feat. Diplo &amp; Mark
                            Ronson
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={427101360}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/03/78/b5/0378b505-0651-5d37-abaf-fdace32fa0a1/mzaf_4885861497912518049.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={374705210}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/dc/c4/0b/dcc40b4d-283b-e9a2-6209-ca988087cc0e/mzaf_8137717147287964110.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={402107013}
                    data-category="Dance"
                    data-tag="All"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/03/e5/25/03e52558-25b4-e41a-8b0a-c5ee14cf51de/mzaf_7464768196891763269.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={441990739}
                    data-category="Other"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/fa/cc/a3/facca3ab-51ea-11b8-e359-b2a200738fc5/mzaf_2669843299284584791.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#441990739"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c5.jpg)",
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={445112226}
                    data-category="Dance"
                    data-tag="England"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/2d/ea/7e/2dea7e42-b98b-a7d2-10d5-6dbc835da539/mzaf_7531992205888527800.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
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
                            href="item.detail.html#445112226"
                            className="list-title title ajax h-1x"
                          >
                            Baby
                          </a>
                          <a
                            href="artist.detail.html#445112226"
                            className="list-subtitle d-block text-muted h-1x subtitle ajax"
                          >
                            Clean Bandit Feat. Marina and the Diamonds &amp;
                            Luis Fonsi
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={442173657}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/11/72/7e/11727eb5-b6c6-f80f-ddd9-2fb9135c07b1/mzaf_3150787160306402060.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#442173657"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c12.jpg)",
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={408576846}
                    data-category="Rap"
                    data-tag="England"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/c9/1f/83/c91f83b2-38c7-3a93-fabe-2da29dc5c2a8/mzaf_5271705754245759426.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={434179154}
                    data-category="Rap"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/85/3a/89/853a8999-a985-b66a-4d8d-a260ce744728/mzaf_5634253487407986103.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#434179154"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c31.jpg)",
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
                            href="item.detail.html#434179154"
                            className="list-title title ajax h-1x"
                          >
                            Arms Around You
                          </a>
                          <a
                            href="artist.detail.html#434179154"
                            className="list-subtitle d-block text-muted h-1x subtitle ajax"
                          >
                            XXXTENTACION &amp; Lil Pump Feat. Swae Lee &amp;
                            Maluma
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={434628736}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/1d/44/74/1d447462-1811-5cfd-90f7-13edea1193d9/mzaf_5901924055590298818.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={438035781}
                    data-category="Dance"
                    data-tag="Netherlands"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/7f/d2/b9/7fd2b937-3565-7d34-ad20-eb820e995933/mzaf_1278318905199991361.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#438035781"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c26.jpg)",
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
                            href="item.detail.html#438035781"
                            className="list-title title ajax h-1x"
                          >
                            Survive
                          </a>
                          <a
                            href="artist.detail.html#438035781"
                            className="list-subtitle d-block text-muted h-1x subtitle ajax"
                          >
                            Don Diablo Feat. Emeli Sandé &amp; Gucci Mane
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={435160184}
                    data-category="Dance"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/9c/e6/fd/9ce6fd38-1225-6ac3-f7a6-da80cb50346e/mzaf_1582186890349153418.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
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
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={418888835}
                    data-category="other"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/eb/e4/2e/ebe42efd-bbce-75cd-63a2-5813637e25bb/mzaf_6529454398103897146.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={440557235}
                    data-category="Dance"
                    data-tag="France"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/2c/59/072c59fe-549d-bd0e-f93d-3e4a1f673af5/mzaf_4035597378145374075.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                            DJ Snake Feat. Selena Gomez &amp; Ozuna &amp; Cardi
                            B
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={416737862}
                    data-category="Latin"
                    data-tag="all"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/54/29/c1/5429c111-92a4-a647-6e85-0577343fbf45/mzaf_5955739319318374110.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
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
                    </div>
                  </div>
                  <div
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                    data-id={429946780}
                    data-category="Pop"
                    data-tag="USA"
                    data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview125/v4/53/85/65/538565bd-5529-4d94-c5b0-5030ad266024/mzaf_72019562509153648.plus.aac.p.m4a"
                  >
                    <div className="list-item list-hover r mb-5">
                      <div className="media">
                        <a
                          href="item.detail.html#429946780"
                          className="ajax media-content"
                          style={{
                            backgroundImage: "url(../assets/img/c14.jpg)",
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
                            href="item.detail.html#429946780"
                            className="list-title title ajax h-1x"
                          >
                            Eastside
                          </a>
                          <a
                            href="artist.detail.html#429946780"
                            className="list-subtitle d-block text-muted h-1x subtitle ajax"
                          >
                            Benny Blanco, Halsey &amp; Khalid
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="no-result hide">
                  <div className="p-5 text-center">
                    <h5>Nothing Found</h5>
                    <small>
                      It seems we can’t find what you’re looking for.
                    </small>
                  </div>
                </div>
                <div className="d-flex py-3 justify-content-center">
                  <ul className="pagination pagination-sm" />
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

export default Categories;
