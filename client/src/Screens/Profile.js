import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as Icon from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editProfile, getcurrent } from "../js/action/user";
import { getUserPosts } from "../js/action/post";
import ReactAudioPlayer from "react-audio-player";
import Player from "../components/Player";
import ImageGallery from "react-image-gallery";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const myPosts = useSelector((state) => state.postReducer.posts);
  const loadPosts = useSelector((state) => state.postReducer.loadPosts);

  const [play, setplay] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(
    "http://example.com/audio.mp3"
  );
  const [myImages, setmyImages] = useState([]);
  const images = [
    {
      original:
        "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1485120750507-a3bf477acd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1485120750507-a3bf477acd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      original:
        "https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const handlePlay = (src) => {
    setplay(true);
    setSelectedAudio(src);
  };
  useEffect(() => {
    dispatch(getUserPosts());
    dispatch(getcurrent());
    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    };
    let URI = process.env.REACT_APP_API;
    console.log(URI, "URI");
    axios
      .get(URI + "/myImages", options)
      .then((res) => {
        setmyImages([...res.data.myImages]);
        console.log(res.data.myImages);
      })
      .catch((err) => console.log(err));
  }, []);

  const [toChange, setToChange] = useState({
    name: "",
    email: "",
    url: "",
    phone: "",
    description: "",
  });
  const [image, setImage] = useState("");
  const [imageUrl, setimageUrl] = useState(undefined);

  const dispatch = useDispatch();
  const current = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    setToChange({
      name: current?.name,
      email: current?.email,
      url: current?.url,
      phone: current?.phone,
      description: current?.description,
      facebook: current?.facebook,
      instagram: current?.instagram,
      twitter: current?.twitter,
    });
  }, [current]);

  const handleChange = (e) => {
    e.preventDefault();
    setToChange({ ...toChange, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    uploadPic();
  }, [image]);

  const uploadPic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ywtxhaze");
    data.append("cloud_name", "dh8bgpvun");
    fetch("https://api.cloudinary.com/v1_1/dh8bgpvun/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setimageUrl(data.url);
        console.log(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    dispatch(editProfile(current._id, { ...toChange, url: imageUrl }));
    navigate("/profile");
  };

  //////////////////////////////:GALERIE////////////////////////
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChangeIMG = ({ fileList }) => setFileList(fileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
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
                    src={imageUrl || toChange.url}
                    width="150"
                    height="150"
                    style={{ borderRadius: "50%" }}
                  />
                  {/* <input
                    type="file"
                    placeholder="modifier"
                    onChange={(e) => setImage(e.target.files[0])}
                  /> */}
                  <div class="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="file-input__input"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <label class="file-input__label" for="file-input">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        class="svg-inline--fa fa-upload fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        ></path>
                      </svg>
                      <span>Modifier</span>
                    </label>
                  </div>
                  <h1 className="display-3 font-weight-bold text-white">
                    {toChange.name}
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
                      <span className="d-inline">Follow</span>
                      <span className="d-none">Following</span>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Sponsoriser l'artiste</span>
                      <span className="d-none">contacter lartiste !</span>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Devenir Manager</span>
                      <span className="d-none">contacter lartiste !</span>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-light btn-rounded mx-3"
                      data-toggle-class=""
                    >
                      <span className="d-inline">Contacter l'artiste</span>
                      <span className="d-none">Contacter l'artiste</span>
                    </button>
                    <span className="text-muted">502</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Social: </span>
                    <a
                      href="https://www.facebook.com/djsnake.fr"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                    <a
                      href="https://www.instagram.com/djsnake/"
                      target="_blank"
                    >
                      <Icon.Instagram style={{ marginLeft: "0.5rem" }} />
                    </a>
                    <a href="https://twitter.com/djsnake" target="_blank">
                      <Icon.Twitter style={{ marginLeft: "0.5rem" }} />
                    </a>
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Name</span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="name"
                      value={toChange.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-2">
                    <span className="text-muted">Email: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="email"
                      value={toChange.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Telephone: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="Telephone"
                      value={toChange.phone}
                      name="phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="text-muted">Description: </span>
                    <input
                      className="my_in"
                      type="text"
                      placeholder="description"
                      value={toChange.description}
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn waves-effect blue darken-1"
                    onClick={() => handleEdit()}
                  >
                    Enregistrer
                  </button>
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
                      {/* <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#playlist"
                          data-toggle="tab"
                        >
                          Playlist
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="#liked" data-toggle="tab">
                          Youtube
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
                        {loadPosts ? (
                          <div className="progress">
                            <div className="indeterminate"></div>
                          </div>
                        ) : (
                          myPosts.map((el) => (
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
                          ))
                        )}
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
                      <div className="container">
                        <div
                          className="col-12"
                          data-id={438387803}
                          data-category="Dance"
                          data-tag="Other"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/23/17/88/23178814-ef4f-1b4d-294d-89cd434941a2/mzaf_8868960744652419987.plus.aac.p.m4a"
                        >
                          {/* <ImageGallery items={images} /> */}
                          <>
                            <h3>Galerie</h3>
                            <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={handlePreview}
                              onChange={handleChangeIMG}
                            >
                              {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            <Modal
                              visible={previewVisible}
                              title={previewTitle}
                              footer={null}
                              onCancel={handleCancel}
                            >
                              <img
                                alt="example"
                                style={{ width: "100%" }}
                                src={previewImage}
                              />
                            </Modal>
                          </>
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
                      <div className="container">
                        <div
                          className="col-6"
                          data-id={414883687}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/93/7c/36/937c363d-9099-71c3-a66c-070273c1c1a6/mzaf_2341219213485232355.plus.aac.p.m4a"
                        >
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/KqvwljTr-Ro"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>

                        <div
                          className="col-6"
                          data-id={414883687}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/93/7c/36/937c363d-9099-71c3-a66c-070273c1c1a6/mzaf_2341219213485232355.plus.aac.p.m4a"
                        >
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/bPJFLMbBRdg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>

                        <div
                          className="col-6"
                          data-id={414883687}
                          data-category="Pop"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/93/7c/36/937c363d-9099-71c3-a66c-070273c1c1a6/mzaf_2341219213485232355.plus.aac.p.m4a"
                        >
                          <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/LFnDMC0gZl8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="following">
                      <div className="container">
                        <div
                          className="col-4 col-sm-3 col-md-2-4 col-lg-2 py-3"
                          style={{ height: "40px" }}
                          data-id={430776855}
                          data-category="other"
                          data-tag="USA"
                          data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/bb/45/0e/bb450e27-beb6-6006-3add-b01a40cad68d/mzaf_4073501669713213306.plus.aac.p.m4a"
                        >
                          <blockquote
                            className="instagram-media"
                            data-instgrm-captioned=""
                            data-instgrm-permalink="https://www.instagram.com/tv/CbqMpO-gSbn/?utm_source=ig_embed&utm_campaign=loading"
                            data-instgrm-version={14}
                            style={{
                              background: "#FFF",
                              border: 0,
                              borderRadius: 3,
                              boxShadow:
                                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                              margin: 1,
                              maxWidth: 540,
                              minWidth: 326,
                              padding: 0,
                              width: "calc(100% - 2px)",
                            }}
                          >
                            <div style={{ padding: 16 }}>
                              {" "}
                              <a
                                href="https://www.instagram.com/tv/CbqMpO-gSbn/?utm_source=ig_embed&utm_campaign=loading"
                                style={{
                                  background: "#FFFFFF",
                                  lineHeight: 0,
                                  padding: "0 0",
                                  textAlign: "center",
                                  textDecoration: "none",
                                  width: "100%",
                                }}
                                target="_blank"
                              >
                                {" "}
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  {" "}
                                  <div
                                    style={{
                                      backgroundColor: "#F4F4F4",
                                      borderRadius: "50%",
                                      flexGrow: 0,
                                      height: 40,
                                      marginRight: 14,
                                      width: 40,
                                    }}
                                  />{" "}
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      flexGrow: 1,
                                      justifyContent: "center",
                                    }}
                                  >
                                    {" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: 4,
                                        flexGrow: 0,
                                        height: 14,
                                        marginBottom: 6,
                                        width: 100,
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: 4,
                                        flexGrow: 0,
                                        height: 14,
                                        width: 60,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div style={{ padding: "19% 0" }} />{" "}
                                <div
                                  style={{
                                    display: "block",
                                    height: 50,
                                    margin: "0 auto 12px",
                                    width: 50,
                                  }}
                                >
                                  <svg
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 60 60"
                                    version="1.1"
                                    xmlns="https://www.w3.org/2000/svg"
                                    xmlnsXlink="https://www.w3.org/1999/xlink"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        transform="translate(-511.000000, -20.000000)"
                                        fill="#000000"
                                      >
                                        <g>
                                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div style={{ paddingTop: 8 }}>
                                  {" "}
                                  <div
                                    style={{
                                      color: "#3897f0",
                                      fontFamily: "Arial,sans-serif",
                                      fontSize: 14,
                                      fontStyle: "normal",
                                      fontWeight: 550,
                                      lineHeight: 18,
                                    }}
                                  >
                                    View this post on Instagram
                                  </div>
                                </div>
                                <div style={{ padding: "12.5% 0" }} />{" "}
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    marginBottom: 14,
                                    alignItems: "center",
                                  }}
                                >
                                  <div>
                                    {" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "50%",
                                        height: "12.5px",
                                        width: "12.5px",
                                        transform:
                                          "translateX(0px) translateY(7px)",
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        height: "12.5px",
                                        transform:
                                          "rotate(-45deg) translateX(3px) translateY(1px)",
                                        width: "12.5px",
                                        flexGrow: 0,
                                        marginRight: 14,
                                        marginLeft: 2,
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "50%",
                                        height: "12.5px",
                                        width: "12.5px",
                                        transform:
                                          "translateX(9px) translateY(-18px)",
                                      }}
                                    />
                                  </div>
                                  <div style={{ marginLeft: 8 }}>
                                    {" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "50%",
                                        flexGrow: 0,
                                        height: 20,
                                        width: 20,
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "2px solid transparent",
                                        borderLeft: "6px solid #f4f4f4",
                                        borderBottom: "2px solid transparent",
                                        transform:
                                          "translateX(16px) translateY(-4px) rotate(30deg)",
                                      }}
                                    />
                                  </div>
                                  <div style={{ marginLeft: "auto" }}>
                                    {" "}
                                    <div
                                      style={{
                                        width: 0,
                                        borderTop: "8px solid #F4F4F4",
                                        borderRight: "8px solid transparent",
                                        transform: "translateY(16px)",
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        backgroundColor: "#F4F4F4",
                                        flexGrow: 0,
                                        height: 12,
                                        width: 16,
                                        transform: "translateY(-4px)",
                                      }}
                                    />{" "}
                                    <div
                                      style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: "8px solid #F4F4F4",
                                        borderLeft: "8px solid transparent",
                                        transform:
                                          "translateY(-4px) translateX(8px)",
                                      }}
                                    />
                                  </div>
                                </div>{" "}
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexGrow: 1,
                                    justifyContent: "center",
                                    marginBottom: 24,
                                  }}
                                >
                                  {" "}
                                  <div
                                    style={{
                                      backgroundColor: "#F4F4F4",
                                      borderRadius: 4,
                                      flexGrow: 0,
                                      height: 14,
                                      marginBottom: 6,
                                      width: 224,
                                    }}
                                  />{" "}
                                  <div
                                    style={{
                                      backgroundColor: "#F4F4F4",
                                      borderRadius: 4,
                                      flexGrow: 0,
                                      height: 14,
                                      width: 144,
                                    }}
                                  />
                                </div>
                              </a>
                              <p
                                style={{
                                  color: "#c9c8cd",
                                  fontFamily: "Arial,sans-serif",
                                  fontSize: 14,
                                  lineHeight: 17,
                                  marginBottom: 0,
                                  marginTop: 8,
                                  overflow: "hidden",
                                  padding: "8px 0 7px",
                                  textAlign: "center",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                <a
                                  href="https://www.instagram.com/tv/CbqMpO-gSbn/?utm_source=ig_embed&utm_campaign=loading"
                                  style={{
                                    color: "#c9c8cd",
                                    fontFamily: "Arial,sans-serif",
                                    fontSize: 14,
                                    fontStyle: "normal",
                                    fontWeight: "normal",
                                    lineHeight: 17,
                                    textDecoration: "none",
                                  }}
                                  target="_blank"
                                >
                                  A post shared by djsnake (@djsnake)
                                </a>
                              </p>
                            </div>
                          </blockquote>
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

export default Profile;
