import Head from "next/head";

import VideoPlayer from "./componetns/VideoPlayer";

export default function Home() {

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: true,
    muted: true,
    preload: "auto",
    sources: [
      {
        src: "https://content.apisystem.tech/hls/medias/fYeUf1rxIJu7ZCmCYQr6/media/transcoded_videos/cts-be190ba9286afac8_,360,480,720,1080,p.mp4.urlset/master.m3u8",
        type: "application/x-mpegURL", // This is key for HLS
      },
    ],
  };

  return (
    <>
      <Head>
        <title>The Wealthery Paid Advertising Masterclass</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="The Wealthery Paid Advertising Masterclass"
        />
        <meta name="author" content="Wealthery" />
        <meta name="keywords" content="7-Figure Short Term Rental Bundle" />
        <meta
          property="og:title"
          content="The Wealthery Paid Advertising Masterclass"
        />
        <meta property="og:author" content="Wealthery" />
        <meta property="og:type" content="website" />
        <meta
          property="og:keywords"
          content="7-Figure Short Term Rental Bundle"
        />
        <meta property="twitter:type" content="website" />       
      </Head>
      <div>
        <div className="bgCover bg-fixed" />

        <div>
          <div>
            <div>
              <div
                id="nav-menu-popup"
                style={{ display: "none" }}
                className="hide"
              >
                <div className="nav-menu-body">
                  <i className="close-menu fas fa-times" />
                  <ul className="nav-menu"></ul>
                </div>
              </div>
            </div>

            <div
              id="preview-container"
              className="preview-container hl_page-preview--content"
            >
              <div>
                <div
                  className="radius0 noBorder c-section c-wrapper section-0VNQ2OZUPV"
                  style={{}}
                  id="section-0VNQ2OZUPV"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-GYMX007VOO"
                      id="row-GYMX007VOO"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-ICLQJC5MGU"
                          id="col-ICLQJC5MGU"
                        >
                          <div className="noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="sub-heading-QK66M5TZML"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-QK66M5TZML text-output csub-heading-QK66M5TZML noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h2>
                                    Attention Digital Marketers and Business
                                    Leaders
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-6CHAP2USMB"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-6CHAP2USMB text-output cheading-6CHAP2USMB noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    <strong>The Organic Content Trap</strong>:
                                    Why I Abandoned social media and made $6M
                                    with Paid Ads Instead
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-7D98EO50WR"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-7D98EO50WR text-output csub-heading-7D98EO50WR noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h2>
                                    Without wasted money, starting with a huge
                                    budget, or needing some secret targeting
                                    strategy
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-P402PN2RQG"
                      id="row-P402PN2RQG"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-zgq88SQXmG"
                          id="col-zgq88SQXmG"
                        >
                          <div className="vertical inner">
                            <div
                              id="video-2KJ81WRLMP"
                              className="c-video c-wrapper video-2KJ81WRLMP"
                            >
                              <div
                                className="mx-auto w-100 cvideo-2KJ81WRLMP noBorder radius0"
                                data-v-9069ad15=""
                              >
                                <div className="h-100 w-100">
                                  <VideoPlayer options={videoJsOptions} />
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-ufpGfxO9PB"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-ufpGfxO9PB text-output cparagraph-ufpGfxO9PB np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    🔒 100% Secure 256-Bit Security Encryption
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-I14WPDOODV"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-I14WPDOODV text-output cheading-I14WPDOODV noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>You’ve Been Scammed.</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-T6gG0sOxXe"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-T6gG0sOxXe text-output cparagraph-T6gG0sOxXe noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    You’ve been scammed into believing that the
                                    best way to build an online business{" "}
                                    <u>is to post content every day</u> and
                                    somehow, magically, your ideal clients will
                                    “magnetically” be drawn to you.
                                  </p>
                                  <p>
                                    (I love when they say “Magnetically,” as if
                                    it’s some magical force that pulls people
                                    into your world.)
                                  </p>
                                  <p>
                                    While they are promising you that dance
                                    videos will make you rich, I'm creating
                                    brand new digital products using my
                                    "Experience Engine" system...{" "}
                                    <strong>
                                      and I'm generate $4,320.06 in RAW PROFIT
                                      in just 14 days..{" "}
                                    </strong>
                                    <br />
                                    <br />
                                    And now, you can watch over my shoulder as I
                                    do EVERYTHING... every step of the way.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-6QlT92C0Bd"
                              className="c-button c-wrapper button-6QlT92C0Bd desktop-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-6QlT92C0Bd_btn"
                                style={{ display: "none" }}
                                className="cbutton-6QlT92C0Bd revealbtn custom btn-vp btn-hp  borderFull radius75 none"
                                aria-label="See The Full Page here "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    See The Full Page here
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>

                            <div
                              id="custom-code-LRvTUjMvME"
                              className="c-custom-code c-wrapper custom-code-LRvTUjMvME"
                            >
                              <div
                                id="custom-code-LRvTUjMvME"
                                className="custom-code-container ccustom-code-LRvTUjMvME"
                              >
                                {" "}
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n        .hidden-section {\n            display: none;\n        }\n        .shown {\n            display: block;\n        }\n    ",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="borderFull radius10 none c-column c-wrapper col-I0sYxFe1mn"
                          id="col-I0sYxFe1mn"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-9BPG62KWRH"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-9BPG62KWRH text-output cheading-9BPG62KWRH noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Join Now For $97</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-NRWKU49989"
                              className="c-image c-wrapper image-NRWKU49989"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-NRWKU49989"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/4f723426-6ece-4e44-9374-3cce47f912fb.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="two-setp-order-Pdp_9qtIPk"
                              className="c-order c-wrapper two-setp-order-Pdp_9qtIPk"
                            >
                              <div className="container-order-form-two-step ctwo-setp-order-Pdp_9qtIPk">
                                <div className="form-title">
                                  <div className="form-step">
                                    <span className="form-heading active">
                                      Step #1
                                    </span>
                                    <span className="form-sub-heading">
                                      Contact Details
                                    </span>
                                  </div>
                                  <div className="form-step">
                                    <span className="form-heading active">
                                      Step #2
                                    </span>
                                    <span className="form-sub-heading">
                                      Billing Info
                                    </span>
                                  </div>
                                </div>
                                <div className="divider-form">
                                  <i className="fas fa-caret-up caret-up" />
                                </div>
                                <div
                                  className="form-body"
                                  id="div-ctwo-setp-order-Pdp_9qtIPk"
                                >
                                  <div>
                                    <section className="info">
                                      <input
                                        defaultValue=""
                                        type="text"
                                        name="name"
                                        placeholder="Full Name..."
                                        className="form-input input"
                                      />

                                      <input
                                        defaultValue=""
                                        type="text"
                                        name="email"
                                        placeholder="Email Address..."
                                        className="form-input input"
                                        autoComplete="new"
                                      />
                                      <input
                                        defaultValue=""
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number..."
                                        className="form-input input"
                                        autoComplete="off"
                                      />
                                    </section>

                                    <section>
                                      <button
                                        className="form-btn"
                                        data-v-bb614710=""
                                      >
                                        <span
                                          className="main-text"
                                          data-v-bb614710=""
                                        >
                                          Go To Step #2
                                        </span>
                                        <br data-v-bb614710="" />
                                        <span
                                          className="sub-text"
                                          data-v-bb614710=""
                                        />
                                      </button>
                                    </section>
                                    <section className="order-form-footer">
                                      <span>
                                        We Respect Your Privacy &amp;
                                        Information.
                                      </span>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-1CRUE5C7ZL"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-1CRUE5C7ZL text-output csub-heading-1CRUE5C7ZL noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>
                                    <strong>YOU’RE SAVING $997+ TODAY</strong>
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-Z2FUYMNCD3"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-Z2FUYMNCD3 text-output cparagraph-Z2FUYMNCD3 np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    <strong>
                                      Join The Wealthery Paid Advertising
                                      Masterclass’ For $97
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-TUFGZ46ZF4"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-TUFGZ46ZF4 text-output cparagraph-TUFGZ46ZF4 np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>Bonuses Will Be Delivered Instantly.</p>
                                  <p>Get Full Access Right Away.</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-CL25CF09C3"
                              className="c-image c-wrapper image-CL25CF09C3"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-CL25CF09C3"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/a6196103-c653-4e88-ab22-b328a0dd49a1.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-9JHLUJ96OJ"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-9JHLUJ96OJ text-output cparagraph-9JHLUJ96OJ np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    🔒100% Secure 256-Bit Security Encryption
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-TLCWQVFT4F"
                              className="c-image c-wrapper image-TLCWQVFT4F"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-TLCWQVFT4F"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/62fd1d3d-2806-44b0-a306-f32e44602f2a.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-NT38QE4307"
                              className="c-button c-wrapper button-NT38QE4307 mobile-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-NT38QE4307_btn"
                                style={{}}
                                className="cbutton-NT38QE4307 main-btn button-vp-10 btn-hp-25 noBorder radius0"
                                aria-label="See The Rest 👇 "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    See The Rest 👇
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-8dkzqlbuJI mobile-only"
                      id="row-8dkzqlbuJI"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-dRh6YYK2m2 mobile-only"
                          id="col-dRh6YYK2m2"
                        >
                          <div className="vertical inner">
                            <div
                              id="button-RDOJysE-JK"
                              className="c-button c-wrapper button-RDOJysE-JK mobile-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-RDOJysE-JK_btn"
                                style={{ display: "none" }}
                                className="cbutton-RDOJysE-JK revealbtn custom btn-vp btn-hp  borderFull radius75 none"
                                aria-label="See The Full Page here "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    See The Full Page here
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-22MCA5G24F shown"
                  style={{}}
                  id="section-22MCA5G24F"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-hv4hMf3YBG"
                      id="row-hv4hMf3YBG"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-Ycua_J7JW1"
                          id="col-Ycua_J7JW1"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-K7XnMFmVNF"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-K7XnMFmVNF text-output cheading-K7XnMFmVNF noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    Organic content is the{" "}
                                    <strong>SINGLE most expensive way</strong>{" "}
                                    to build a business.
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-vLkiQl1CIS"
                      id="row-vLkiQl1CIS"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-BiAtL4Z9rR"
                          id="col-BiAtL4Z9rR"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-WhOL1s_CLS"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-WhOL1s_CLS text-output cparagraph-WhOL1s_CLS noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    <strong>I Know Because I Tried.</strong>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-8aPSzkANzg"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-8aPSzkANzg text-output cparagraph-8aPSzkANzg noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    I did everything the "experts" told me to
                                    do:
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-FAgVt5QUUc"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-FAgVt5QUUc text-output cbulletList-FAgVt5QUUc noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        I posted every single day for 30 days
                                        straight.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        I used the most viral hooks I could find
                                        and modeled my content after successful
                                        creators.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        I followed every trend, used trending
                                        audios, and even did voiceovers.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        I included callouts, engagement tricks,
                                        and comment strategies.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-uwcyzgeiN0"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-uwcyzgeiN0 text-output cparagraph-uwcyzgeiN0 noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    And you know how many{" "}
                                    <strong>sales </strong>it made me?
                                  </p>
                                  <p>
                                    <strong>ZERO.</strong>
                                  </p>
                                  <p>Not a single one.</p>
                                  <p>
                                    And it’s not just me. I’ve seen{" "}
                                    <strong>thousands </strong>of people
                                    struggle because they’ve been lied to about
                                    what actually <strong>works</strong>.
                                  </p>
                                  <p>
                                    Not only did organic content not work—it was{" "}
                                    <strong>
                                      costing me something far more valuable
                                      than money.
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>MY TIME... </strong>
                                  </p>
                                  <p>
                                    I wasted hours every day filming, editing,
                                    and strategizing for content that ultimately
                                    made me nothing. It took my attention away
                                    from my business, my family, and my ability
                                    to actually grow.
                                  </p>
                                  <p>
                                    Meanwhile, the only people making money from
                                    organic content are the ones{" "}
                                    <strong>
                                      selling you a course on how to go viral.
                                    </strong>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-fWzLQ9gGbl"
                          id="col-fWzLQ9gGbl"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-8k09wVFRKv"
                              className="c-image c-wrapper image-8k09wVFRKv"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-8k09wVFRKv"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/7cb08713-01d6-4124-9758-68a6bb4fde15.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
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

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-0YTUVMI94P shown"
                  style={{}}
                  id="section-0YTUVMI94P"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-4ferSWmB19"
                      id="row-4ferSWmB19"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-q3jM2Uldkb"
                          id="col-q3jM2Uldkb"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-ckmhKudn51"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-ckmhKudn51 text-output cheading-ckmhKudn51 noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    <strong>The Good News? </strong>We Don’t
                                    Need Followers to Make Money.
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-jJEhCOEoqJ"
                      id="row-jJEhCOEoqJ"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-B8WVj-T6Fn"
                          id="col-B8WVj-T6Fn"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-iAFfLutZev"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-iAFfLutZev text-output cparagraph-iAFfLutZev noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Over the last 2 years, I’ve built a business
                                    that has generated{" "}
                                    <strong>over $6,000,000 in revenue</strong>{" "}
                                    without a single penny coming from an
                                    Instagram Reel, a TikTok video, or a YouTube
                                    short.
                                  </p>
                                  <p>
                                    Again—I TRIED those things. They didn’t work
                                    for me.
                                  </p>
                                  <p>So what did I do instead?</p>
                                  <p>
                                    How was I able to build a{" "}
                                    <strong>
                                      highly profitable digital business
                                    </strong>{" "}
                                    while traveling the world with my wife and
                                    kids—
                                    <strong>
                                      without needing a massive audience,
                                      influencer status, or going viral?
                                    </strong>
                                  </p>
                                  <p>
                                    I focused on <strong>the #1 method</strong>{" "}
                                    that allows anyone to build a{" "}
                                    <strong>predictable </strong>online
                                    business, scale up or down as needed, and
                                    works for complete beginners and advanced
                                    marketers alike.
                                  </p>
                                  <p>
                                    <strong>
                                      That method is Paid Advertising.
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>
                                      Why Paid Ads Work When Everything Else
                                      Fails.
                                    </strong>
                                  </p>
                                  <p>Before you freak out and think:</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-HOCIogSxja"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-HOCIogSxja text-output cbulletList-HOCIogSxja noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>“I can’t afford paid ads!”</p>
                                    </li>
                                    <li>
                                      <p>“I don’t know how to create ads!”</p>
                                    </li>
                                    <li>
                                      <p>“Ads are complicated!”</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-rBvOhD_nAm"
                              className="c-image c-wrapper image-rBvOhD_nAm"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-rBvOhD_nAm"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/f4586b99-f8a7-4ce4-9eb6-9c02e2e2ad2e.png"
                                      alt=""
                                      className="img1 img-round-corners img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-goJg1U8_MV"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-goJg1U8_MV text-output cparagraph-goJg1U8_MV noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>Let me break it down for you.</p>
                                  <p>
                                    In the last 2 years, I’ve personally spent
                                    over $1,000,000 on Facebook and Instagram
                                    ads.
                                  </p>
                                  <p>
                                    I took a simple digital product, made 6
                                    different ads to test and slapped my credit
                                    card down on Facebook and said “let’s go”.
                                  </p>
                                  <p>Day 1 I spent $50 and made Zero…</p>
                                  <p>
                                    Day 2 I spent $50 and made 1 sale… $97…
                                    basically broke even.
                                  </p>
                                  <p>
                                    What happened after that changed my life
                                    forever…
                                  </p>
                                  <p>
                                    Not long after I started I was able to spend
                                    $3,000/ day profitably because I figured out
                                    the two biggest secrets to making Paid
                                    advertising simple, and I’ll share them
                                    later on.
                                  </p>
                                  <p>
                                    Anyone, yes you… and I have no idea who you
                                    are… but even you can invest in paid ads and
                                    turn $1.00 into $1.25 and while that alone
                                    won’t put lobster on the table… it can, when
                                    you do it 100x a day passively.
                                  </p>
                                  <p>
                                    Then we tweak our system and get that $1.00
                                    to $1.50… then we add recurring income so
                                    that next month we are making more without
                                    spending more and things start to spiral.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-X3T6_Ww9ch"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-X3T6_Ww9ch text-output cparagraph-X3T6_Ww9ch noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Next thing you know you’ve been at it for a
                                    few months and you have several HUNDRED
                                    people paying you every month and you’re
                                    raking in commissions without having to
                                    change a single thing in your daily
                                    activity.{" "}
                                  </p>
                                  <p>
                                    That’s how it went for me. I went from
                                    having NO product, no ads running, no social
                                    media audience… to a year later having made
                                    over $5,000,000 in revenue and over 400
                                    customers paying me between $49/mo and $497/
                                    mo. to boot.
                                  </p>
                                  <p>
                                    I still… to this day… make money from people
                                    who’ve been in my recurring programs for
                                    over 2.5 years.{" "}
                                  </p>
                                  <p>
                                    All thanks to taking the “risk” of running
                                    paid ads and just spending the time to
                                    figure out how to rig the game in my favor.{" "}
                                  </p>
                                  <p>
                                    While everyone else is trying to figure out
                                    the next viral dance video they can make and
                                    living and dying by how many likes and
                                    followers they get… meanwhile not making any
                                    money even if they are successful… Trading
                                    their time for the hope of money
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-ylvRrxaffJ"
                          id="col-ylvRrxaffJ"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-TRHhyUlAHV"
                              className="c-image c-wrapper image-TRHhyUlAHV"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-TRHhyUlAHV"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/151b4f90-e2b5-4b60-a358-41250838a1e7.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-4qEQVgrZVW"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-4qEQVgrZVW text-output cheading-4qEQVgrZVW noBorder radius0 none animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    <strong>I've Been Doing This A</strong> Long
                                    Time
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-nAJV4_R5dG shown"
                  style={{}}
                  id="section-nAJV4_R5dG"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-rj1BSbnIXq"
                      id="row-rj1BSbnIXq"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-iP1wPkbxZe"
                          id="col-iP1wPkbxZe"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-AFJwcdsUhk"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-AFJwcdsUhk text-output cheading-AFJwcdsUhk noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    I’m letting my MONEY{" "}
                                    <strong>make me money</strong>…
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-KK8dTGA3VJ"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-KK8dTGA3VJ text-output csub-heading-KK8dTGA3VJ noBorder radius0 none animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h2>
                                    and that is such an amazing trade off.
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-_rSYuhWgbS"
                      id="row-_rSYuhWgbS"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-uh2FEOjag3"
                          id="col-uh2FEOjag3"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-q_IxQFMALx"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-q_IxQFMALx text-output cparagraph-q_IxQFMALx noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    It’s a trade off that I think everyone
                                    should be making, and when realizing that I
                                    also had the realization that I am UNIQUELY
                                    positioned to help you profit from paid ads
                                    for several reasons.
                                  </p>
                                  <p>
                                    <strong>#1 -</strong> I’ve obviously done it
                                    myself and I can teach you how to avoid the
                                    failure pitfalls and how to tap into the big
                                    wins.
                                  </p>
                                  <p>
                                    I’ve spent MY OWN money (not other peoples)
                                    to grow my business from the GROUND UP using
                                    nothing but paid advertising.
                                  </p>
                                  <p>
                                    I’ve learned the essential keys to spending
                                    money, seeing it come out of MY account, and
                                    figure out how to make that money
                                    profitable.
                                  </p>
                                  <p>
                                    But honestly, my experience having done this
                                    is only a small part of why I’m uniquely
                                    qualified to help you do this.
                                  </p>
                                  <p>
                                    <strong>#2 -</strong> Because I’ve done this
                                    myself and I have an offer that works with
                                    paid ads RIGHT NOW I have this very unique
                                    ability to actually allow you to promote our
                                    offer instead of having to create your own.
                                  </p>
                                  <p>
                                    One of the biggest issues with most “paid
                                    ads” trainers is they try to teach you how
                                    to run ads to made up offers, they can’t
                                    show you real ads, and therefore when it’s
                                    time for you to actually do this… you
                                    haven’t actually seen it happen in real
                                    life.
                                  </p>
                                  <p>
                                    These number below represent a 14 day "Case
                                    Study" I made of me starting a BRAND NEW
                                    offer and running it to cold audiences on
                                    Meta ads... as you can see..
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-ntIwWjbOfR"
                              className="c-image c-wrapper image-ntIwWjbOfR"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-ntIwWjbOfR"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/67dc3f5d76f60c1c43fb6dc8.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-IJhR_5acZf"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-IJhR_5acZf text-output cparagraph-IJhR_5acZf noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Within 14 days I had $4,320.06 in NET
                                    profit. Just from within my product funnel
                                    and this had nothing to do with my email
                                    list, my upsells, nothing... We are
                                    currently about 2 months in on this project
                                    and yesterday we spent $5,500 on ads and
                                    generated $11,385... it was a glorious day.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-8QPbVYkKb7"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-8QPbVYkKb7 text-output csub-heading-8QPbVYkKb7 noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>
                                    Would you rather have someone "teach you" or
                                    to have someone SHOW YOU
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-i19kY7bm6b"
                              className="c-paragraph c-wrapper mobile-only"
                            >
                              <div
                                className="paragraph-i19kY7bm6b text-output cparagraph-i19kY7bm6b noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>--</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="borderFull radius15 none c-column c-wrapper col-AY9CrINYie"
                          id="col-AY9CrINYie"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-ID9AQftf83"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-ID9AQftf83 text-output cheading-ID9AQftf83 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>INCLUDED WITH YOUR ORDER</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-ZJR-f0WZmn"
                              className="c-image c-wrapper image-ZJR-f0WZmn"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-ZJR-f0WZmn"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/6db88505-3feb-4967-8233-b7826dde0a69.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-YOx1Y_OclA"
                              className="c-image c-wrapper image-YOx1Y_OclA"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-YOx1Y_OclA"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/84fd57f3-5cd5-4722-85f7-da8fd9f65ed0.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature-ROip_GzXHu"
                              className="c-image-feature c-wrapper image-feature-ROip_GzXHu"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-70-30 cimage-feature-ROip_GzXHu feature-bonus feature-cols-70-30 feature-img-left noBorder radius0">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0f9fe726-9397-4800-ac26-47dca35124d0.png"
                                          alt=""
                                          className="feature-bonus feature-cols-70-30 feature-img-left noBorder radius0 img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-ROip_GzXHu-headline text-output featureHeadline">
                                    <div>
                                      <p>
                                        <strong>The Profit Playbook</strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="image-feature-ROip_GzXHu-text text-output featureText">
                                    <div>
                                      <p>
                                        A list of the exact offers I promote on
                                        a day to day basis. My offers and other
                                        peoples products.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="divider-BPpuqUJjSC"
                              className="c-divider c-wrapper dividerContainer divider-BPpuqUJjSC"
                            >
                              <div
                                id="divider-BPpuqUJjSC-divider-inner"
                                className="cdivider-BPpuqUJjSC"
                              >
                                <div className="divider-element" />
                              </div>
                            </div>

                            <div
                              id="image-feature-uWCbOkf_7_"
                              className="c-image-feature c-wrapper image-feature-uWCbOkf_7_"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-70-30 cimage-feature-uWCbOkf_7_ feature-bonus feature-cols-70-30 feature-img-left noBorder radius0">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/dddaec62-31b1-49fe-a360-ae1ce10a28a2.png"
                                          alt=""
                                          className="feature-bonus feature-cols-70-30 feature-img-left noBorder radius0 img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-uWCbOkf_7_-headline text-output featureHeadline">
                                    <div>
                                      <p>
                                        <strong>The 6 Cognitive</strong>
                                      </p>
                                      <p>
                                        <strong>Bias Email Sequence</strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="image-feature-uWCbOkf_7_-text text-output featureText">
                                    <div>
                                      <p>
                                        My exact{" "}
                                        <strong>email follow-up system</strong>{" "}
                                        that gets people to buy{" "}
                                        <strong>
                                          NOW. Personally I made over $250,000
                                          from this follow up sequence…{" "}
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="divider-jKnHMvTffU"
                              className="c-divider c-wrapper dividerContainer divider-jKnHMvTffU"
                            >
                              <div
                                id="divider-jKnHMvTffU-divider-inner"
                                className="cdivider-jKnHMvTffU"
                              >
                                <div className="divider-element" />
                              </div>
                            </div>

                            <div
                              id="image-feature-cubr4rnSOw"
                              className="c-image-feature c-wrapper image-feature-cubr4rnSOw"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-70-30 cimage-feature-cubr4rnSOw feature-bonus feature-cols-70-30 feature-img-left noBorder radius0">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/a2d69bed-c1a2-49f0-9484-b858c0bb773a.png"
                                          alt=""
                                          className="feature-bonus feature-cols-70-30 feature-img-left noBorder radius0 img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-cubr4rnSOw-headline text-output featureHeadline">
                                    <div>
                                      <p>
                                        <strong>Weekly Coaching Calls</strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="image-feature-cubr4rnSOw-text text-output featureText">
                                    <div>
                                      <p>
                                        Get <strong>LIVE access</strong> to me
                                        every week to break down what’s working
                                        NOW. I’ve been running these calls for
                                        over 2.5 years, just one hour every
                                        Wednesday!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="divider-0tujzARBIh"
                              className="c-divider c-wrapper dividerContainer divider-0tujzARBIh"
                            >
                              <div
                                id="divider-0tujzARBIh-divider-inner"
                                className="cdivider-0tujzARBIh"
                              >
                                <div className="divider-element" />
                              </div>
                            </div>

                            <div
                              id="image-feature-Drc1sizCjB"
                              className="c-image-feature c-wrapper image-feature-Drc1sizCjB"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-70-30 cimage-feature-Drc1sizCjB feature-bonus feature-cols-70-30 feature-img-left noBorder radius0">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/c9e838ec-14b8-4140-b031-2b55327f556d.png"
                                          alt=""
                                          className="feature-bonus feature-cols-70-30 feature-img-left noBorder radius0 img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-Drc1sizCjB-headline text-output featureHeadline">
                                    <div>
                                      <p>
                                        <strong>My Exact Ads</strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="image-feature-Drc1sizCjB-text text-output featureText">
                                    <div>
                                      <p>
                                        Watch live as I create my ads from
                                        scratch and break down exactly why they
                                        work, which ones work best, and give you
                                        the ability to copy them!{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="divider-2f7bFk7HFj"
                              className="c-divider c-wrapper dividerContainer divider-2f7bFk7HFj"
                            >
                              <div
                                id="divider-2f7bFk7HFj-divider-inner"
                                className="cdivider-2f7bFk7HFj"
                              >
                                <div className="divider-element" />
                              </div>
                            </div>

                            <div
                              id="image-feature-FYyeorWVkP"
                              className="c-image-feature c-wrapper image-feature-FYyeorWVkP"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-70-30 cimage-feature-FYyeorWVkP feature-bonus feature-cols-70-30 feature-img-left noBorder radius0">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/7d8b3d84-15a9-48ee-aae7-a86f9d19ec07.png"
                                          alt=""
                                          className="feature-bonus feature-cols-70-30 feature-img-left noBorder radius0 img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-FYyeorWVkP-headline text-output featureHeadline">
                                    <div>
                                      <p>
                                        <strong>
                                          Facebook Ads Triple Hook Playbook
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="image-feature-FYyeorWVkP-text text-output featureText">
                                    <div>
                                      <p>
                                        I turned my best ad strategy into a 16
                                        page book and an AI prompt that will
                                        allow you to copy my best performing
                                        campaign!
                                      </p>
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

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-IYYEZ9TFTW shown"
                  style={{}}
                  id="section-IYYEZ9TFTW"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-RUJDUUkcdN"
                      id="row-RUJDUUkcdN"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-egVHVmX15J"
                          id="col-egVHVmX15J"
                        >
                          <div className="vertical inner">
                            <div
                              id="sub-heading-AdWDxdC8Th"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-AdWDxdC8Th text-output csub-heading-AdWDxdC8Th noBorder radius0 none animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h2>Introducing...</h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-Djp-qiQQSU"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-Djp-qiQQSU text-output cheading-Djp-qiQQSU noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    The Wealthery Paid Advertising{" "}
                                    <strong>Masterclass</strong>
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-gA1QmVxiyP"
                      id="row-gA1QmVxiyP"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-h7PQis9mQD"
                          id="col-h7PQis9mQD"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-NDWiANJTnA"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-NDWiANJTnA text-output cparagraph-NDWiANJTnA noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    This is a follow along style (almost like a
                                    daily VLOG) of me building my actual
                                    business. Not a structured course but a
                                    follow along "learn by doing" style
                                    training.
                                    <br />
                                    <br />
                                    Courses are boring and no one ever finishes
                                    them, with our PaidMasterclass you'll get
                                    addicted to watching the progress and get to
                                    see how I increase our income day by day...
                                    the exact steps I'm taking to make ads,
                                    everything!{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-M6H9VE9KUI"
                      id="row-M6H9VE9KUI"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-7BTLIUXMQA"
                          id="col-7BTLIUXMQA"
                        >
                          <div className="noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-2R84DPEGFQ"
                              className="c-image c-wrapper image-2R84DPEGFQ"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-2R84DPEGFQ"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/985579f2-0225-4428-92f8-e70933a33208.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
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

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-a7y3HTJA9c shown"
                  style={{}}
                  id="section-a7y3HTJA9c"
                >
                  <div className="inner">
                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-B0G5C793N4"
                      id="row-B0G5C793N4"
                      style={{ display: "block" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-DC7T1WRIDK desktop-only"
                          id="col-DC7T1WRIDK"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-K35AURGMX3"
                              className="c-image c-wrapper image-K35AURGMX3 desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-K35AURGMX3"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-Y0TGYDPWYQ"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-Y0TGYDPWYQ text-output cheading-Y0TGYDPWYQ noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-FdV7KLYHxU"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-FdV7KLYHxU text-output cheading-FdV7KLYHxU noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-ANZNNM8BXF"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-ANZNNM8BXF text-output cbulletList-ANZNNM8BXF noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-XCFWGP7HML"
                          id="col-XCFWGP7HML"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-13IR6U94KQ"
                              className="c-image c-wrapper image-13IR6U94KQ"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-13IR6U94KQ"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/1800f40a-f2f4-48fe-bbdb-ba278b6ac86a.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-oQG_c5vLEN"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-oQG_c5vLEN text-output cheading-oQG_c5vLEN noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-jr3_IX29Ee"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-jr3_IX29Ee text-output cheading-jr3_IX29Ee noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Starting The First Campaign</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-N4n_AQ4UaX"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-N4n_AQ4UaX text-output cbulletList-N4n_AQ4UaX noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        Watch me setup my ads account and my
                                        funnel
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Watch as I structure the campaigns to
                                        get results fast
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Get a live view of me writing my first
                                        ads
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-TK9EO24O4G desktop-only"
                          id="col-TK9EO24O4G"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-RXPDRHAPNJ"
                              className="c-image c-wrapper image-RXPDRHAPNJ desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-RXPDRHAPNJ"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-HrRRT4Hyg_"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-HrRRT4Hyg_ text-output cheading-HrRRT4Hyg_ noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-JRsGPV6q4d"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-JRsGPV6q4d text-output cheading-JRsGPV6q4d noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-kQaZK8RwSw"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-kQaZK8RwSw text-output cbulletList-kQaZK8RwSw noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-8gjCIue36V"
                      id="row-8gjCIue36V"
                      style={{ display: "none" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-fQPn1lHQGI desktop-only"
                          id="col-fQPn1lHQGI"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-tMWPqyrw9p"
                              className="c-image c-wrapper image-tMWPqyrw9p desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-tMWPqyrw9p"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-xfcJ4sEEfQ"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-xfcJ4sEEfQ text-output cheading-xfcJ4sEEfQ noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-gRH-P2PAgC"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-gRH-P2PAgC text-output cheading-gRH-P2PAgC noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-gOpbEOM4Ee"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-gOpbEOM4Ee text-output cbulletList-gOpbEOM4Ee noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-CKdCDtM8dg"
                          id="col-CKdCDtM8dg"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-Faq5x643E3"
                              className="c-image c-wrapper image-Faq5x643E3"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-Faq5x643E3"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-NqiGHlIyQx"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-NqiGHlIyQx text-output cheading-NqiGHlIyQx noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step TWO</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-ipS_4tgs7s"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-ipS_4tgs7s text-output cheading-ipS_4tgs7s noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Defining the high income strategy</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-C-OJYBuEjP"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-C-OJYBuEjP text-output cbulletList-C-OJYBuEjP noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        I'll break down exactly how to turn
                                        momentum into money
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        You&rsquo;ll see me outline how I derive
                                        profit from my campaigns
                                      </p>
                                    </li>
                                    <li>
                                      <p>We&rsquo;ll start slow and grow quickly!</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-pt1CUj8NT4 desktop-only"
                          id="col-pt1CUj8NT4"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-8p3zx5WjqR"
                              className="c-image c-wrapper image-8p3zx5WjqR desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-8p3zx5WjqR"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-DQVDUiYJOF"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-DQVDUiYJOF text-output cheading-DQVDUiYJOF noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-aa-F4-UIk-"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-aa-F4-UIk- text-output cheading-aa-F4-UIk- noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-EJ96NMht01"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-EJ96NMht01 text-output cbulletList-EJ96NMht01 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-t9YpSH4my7"
                      id="row-t9YpSH4my7"
                      style={{ display: "none" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-ki8tVj7-bL desktop-only"
                          id="col-ki8tVj7-bL"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-Ck6kHRGME9"
                              className="c-image c-wrapper image-Ck6kHRGME9 desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-Ck6kHRGME9"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-UzeKwL5ULp"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-UzeKwL5ULp text-output cheading-UzeKwL5ULp noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-wHlkOPVMHP"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-wHlkOPVMHP text-output cheading-wHlkOPVMHP noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-Ehx9mqu2xL"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-Ehx9mqu2xL text-output cbulletList-Ehx9mqu2xL noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-a3O7RbZswL"
                          id="col-a3O7RbZswL"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-M5TgmlVBNq"
                              className="c-image c-wrapper image-M5TgmlVBNq"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-M5TgmlVBNq"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/acd42814-4228-42ad-8654-e44b33ea2750.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-PFgutmrl-P"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-PFgutmrl-P text-output cheading-PFgutmrl-P noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step Three</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-UFWp__mVH9"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-UFWp__mVH9 text-output cheading-UFWp__mVH9 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Scale From $122 to over $2,000/ day in 14
                                    days
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-w13i89G-T8"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-w13i89G-T8 text-output cbulletList-w13i89G-T8 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>Watch me scale my ads EVERY DAY</p>
                                    </li>
                                    <li>
                                      <p>
                                        You'll see exactly what I turn up, what
                                        I turn off, and why!
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        I'll break down how I figure out EXACTLY
                                        how to make my ads profitable
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-7ieziIUGkb desktop-only"
                          id="col-7ieziIUGkb"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-tfaeU5sgZw"
                              className="c-image c-wrapper image-tfaeU5sgZw desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-tfaeU5sgZw"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-WGLqU4YDQf"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-WGLqU4YDQf text-output cheading-WGLqU4YDQf noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-VGT4K36TiD"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-VGT4K36TiD text-output cheading-VGT4K36TiD noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-6mMDagJyPz"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-6mMDagJyPz text-output cbulletList-6mMDagJyPz noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-q0Z5p3bAey"
                      id="row-q0Z5p3bAey"
                      style={{ display: "none" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-2l25pLCDXZ desktop-only"
                          id="col-2l25pLCDXZ"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-xYUdnZPDZv"
                              className="c-image c-wrapper image-xYUdnZPDZv desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-xYUdnZPDZv"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-tQ9WQRTxuv"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-tQ9WQRTxuv text-output cheading-tQ9WQRTxuv noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-DWLWYgV5vK"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-DWLWYgV5vK text-output cheading-DWLWYgV5vK noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-vvRJwQizCs"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-vvRJwQizCs text-output cbulletList-vvRJwQizCs noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-kqmXX4DEzz"
                          id="col-kqmXX4DEzz"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-0VtKXJhU2T"
                              className="c-image c-wrapper image-0VtKXJhU2T"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-0VtKXJhU2T"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/68f0b219-b7c1-460c-a03f-48c05513ceca.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading--ndTuyitoK"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading--ndTuyitoK text-output cheading--ndTuyitoK noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step Four</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-jMPAlzNdYv"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-jMPAlzNdYv text-output cheading-jMPAlzNdYv noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Crafting Ads That Stop The Scroll &amp;
                                    Convert
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-2fKGCej-_P"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-2fKGCej-_P text-output cbulletList-2fKGCej-_P noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        My{" "}
                                        <strong>
                                          step-by-step ad creation formula.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>
                                          copy &amp; creative framework
                                        </strong>{" "}
                                        I use for every winning ad.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Real examples of{" "}
                                        <strong>
                                          ads that made me millions.
                                        </strong>
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-WZ7Zex90FS desktop-only"
                          id="col-WZ7Zex90FS"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-sQPYQU7d3P"
                              className="c-image c-wrapper image-sQPYQU7d3P desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-sQPYQU7d3P"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-79iWp9jV0b"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-79iWp9jV0b text-output cheading-79iWp9jV0b noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-RN5HvJDL4-"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-RN5HvJDL4- text-output cheading-RN5HvJDL4- noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-2VIh7kjdbn"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-2VIh7kjdbn text-output cbulletList-2VIh7kjdbn noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-BLuifwH2jt"
                      id="row-BLuifwH2jt"
                      style={{ display: "none" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-Uule2X_PC6 desktop-only"
                          id="col-Uule2X_PC6"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-BWmZ8Taa7o"
                              className="c-image c-wrapper image-BWmZ8Taa7o desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-BWmZ8Taa7o"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-t3VNLhqdH8"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-t3VNLhqdH8 text-output cheading-t3VNLhqdH8 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading--FgxaPhj8a"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading--FgxaPhj8a text-output cheading--FgxaPhj8a noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-hM15tj5Lj5"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-hM15tj5Lj5 text-output cbulletList-hM15tj5Lj5 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-V4clO66Fni"
                          id="col-V4clO66Fni"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-PLprXrpk1H"
                              className="c-image c-wrapper image-PLprXrpk1H"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-PLprXrpk1H"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/c6ba8868-6a1b-40b0-8beb-6100a068943d.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-fB8z1aS_1E"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-fB8z1aS_1E text-output cheading-fB8z1aS_1E noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step Five</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-bbCZX8ejRo"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-bbCZX8ejRo text-output cheading-bbCZX8ejRo noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Mastering The Most Important Metric in
                                    Business
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-mP2rrHkwEo"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList-mP2rrHkwEo text-output cbulletList-mP2rrHkwEo noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The #1{" "}
                                        <strong>
                                          factor that determines success in paid
                                          ads.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to increase{" "}
                                        <strong>Lifetime Value (LTV) </strong>
                                        and make MORE money from every customer.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The exact
                                        <strong>
                                          {" "}
                                          LTV growth strategy I use
                                        </strong>{" "}
                                        to turn small budgets into BIG results.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-RWqiONaCBD desktop-only"
                          id="col-RWqiONaCBD"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-sh3etZRlLu"
                              className="c-image c-wrapper image-sh3etZRlLu desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-sh3etZRlLu"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-4cGVLYiBky"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-4cGVLYiBky text-output cheading-4cGVLYiBky noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-qzGvkpiJww"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-qzGvkpiJww text-output cheading-qzGvkpiJww noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-E0WPW2pZR5"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-E0WPW2pZR5 text-output cbulletList-E0WPW2pZR5 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="phases-box slide row-align-center noBorder radius0 c-row c-wrapper row-Gmi_7gHz2N"
                      id="row-Gmi_7gHz2N"
                      style={{ display: "none" }}
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-arVtNBpZ6O desktop-only"
                          id="col-arVtNBpZ6O"
                        >
                          <div className="previous-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-4ViyY-uhac"
                              className="c-image c-wrapper image-4ViyY-uhac desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-4ViyY-uhac"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-gH9bi9Umu3"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-gH9bi9Umu3 text-output cheading-gH9bi9Umu3 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-bvxBMi13g-"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-bvxBMi13g- text-output cheading-bvxBMi13g- noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-aayTGBu15l"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-aayTGBu15l text-output cbulletList-aayTGBu15l noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-5G0ZxGL4X-"
                          id="col-5G0ZxGL4X-"
                        >
                          <div className="borderFull radius10 bg bgCover vertical inner">
                            <div
                              id="image-yERLCz8Tkb"
                              className="c-image c-wrapper image-yERLCz8Tkb"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-yERLCz8Tkb"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0805e46d-23e8-458e-86bc-c6cf3f3edcad.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-dHONN_BKIy"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-dHONN_BKIy text-output cheading-dHONN_BKIy noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step Six</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-_b0x14vsBd"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-_b0x14vsBd text-output cheading-_b0x14vsBd noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Leveraging Your New Assets for Maximum
                                    Profit
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList--dTlF9P293"
                              className="c-bullet-list c-wrapper"
                            >
                              <div
                                className="bulletList--dTlF9P293 text-output cbulletList--dTlF9P293 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        How to
                                        <strong>
                                          {" "}
                                          convert ad leads into long-term
                                          customers.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Why your{" "}
                                        <strong>
                                          email list becomes your most valuable
                                          asset.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The simple{" "}
                                        <strong>follow-up system </strong>that
                                        increases conversions by 30%+.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="c-column c-wrapper col-_a4gdeht5b desktop-only"
                          id="col-_a4gdeht5b"
                        >
                          <div className="next-step noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="image-RJEHgaZVsI"
                              className="c-image c-wrapper image-RJEHgaZVsI desktop-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-RJEHgaZVsI"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/9e988b78-7240-4040-b728-5775d1f0f366.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-IF5zzaP-0s"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-IF5zzaP-0s text-output cheading-IF5zzaP-0s noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Step one</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="heading-gBVNh_cr3-"
                              className="c-heading c-wrapper desktop-only"
                            >
                              <div
                                className="heading-gBVNh_cr3- text-output cheading-gBVNh_cr3- noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>
                                    Understanding How Paid Advertising Works
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="bulletList-Xgrf6DeW0k"
                              className="c-bullet-list c-wrapper desktop-only"
                            >
                              <div
                                className="bulletList-Xgrf6DeW0k text-output cbulletList-Xgrf6DeW0k noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <ul>
                                    <li>
                                      <p>
                                        The biggest <strong>mistakes </strong>
                                        that kill ad performance.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        How to structure{" "}
                                        <strong>
                                          campaigns for maximum profit.
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        The{" "}
                                        <strong>truth about ad costs </strong>
                                        (and why most people fail).
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-w0zFkSBDrG shown"
                  style={{}}
                  id="section-w0zFkSBDrG"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-tpdv-w1FdG"
                      id="row-tpdv-w1FdG"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-Oc2_QT-MoJ"
                          id="col-Oc2_QT-MoJ"
                        >
                          <div className="horizontal inner">
                            <div
                              id="button-FwRc8T-_3m"
                              className="c-button c-wrapper button-FwRc8T-_3m"
                            >
                              <button
                                data-animation-class=""
                                id="button-FwRc8T-_3m_btn"
                                style={{}}
                                className="cbutton-FwRc8T-_3m prevBtn custom btn-vp btn-hp  noBorder radius0 none"
                                aria-label="Previous "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    Previous
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>

                            <div
                              id="button-6R8hTruTm_"
                              className="c-button c-wrapper button-6R8hTruTm_"
                            >
                              <button
                                data-animation-class=""
                                id="button-6R8hTruTm__btn"
                                style={{}}
                                className="cbutton-6R8hTruTm_ nextBtn custom btn-vp btn-hp  noBorder radius0 none"
                                aria-label="Next "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    Next
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-7A7QJGX4K6 shown"
                  style={{}}
                  id="section-7A7QJGX4K6"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-NEYXSI9K9P"
                      id="row-NEYXSI9K9P"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-A9A13ZEY52"
                          id="col-A9A13ZEY52"
                        >
                          <div className="noBorder radius0 bg bgCover vertical inner">
                            <div
                              id="button-8225Q0Q4WL"
                              className="c-button c-wrapper button-8225Q0Q4WL desktop-only"
                            >
                              <a
                                id="button-8225Q0Q4WL_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-8225Q0Q4WL main-btn btn-hp-25 button-vp-15 noBorder radius0 text-center"
                                aria-label="OK, That’s Enough! I Want To Join "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    OK, That’s Enough! I Want To Join
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="button-EovePw7hkV"
                              className="c-button c-wrapper button-EovePw7hkV mobile-only"
                            >
                              <a
                                id="button-EovePw7hkV_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-EovePw7hkV main-btn btn-hp-25 button-vp-15 noBorder radius0 text-center"
                                aria-label="OK, I Want To Join Now! "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    OK, I Want To Join Now!
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="paragraph-iuxdBqwBEy"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-iuxdBqwBEy text-output cparagraph-iuxdBqwBEy np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-zCAeR3SEg4 shown"
                  style={{}}
                  id="section-zCAeR3SEg4"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-HrymkqsFSI"
                      id="row-HrymkqsFSI"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-AQvp947BGA"
                          id="col-AQvp947BGA"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-Yako0UPolA"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-Yako0UPolA text-output cheading-Yako0UPolA noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    Develop <strong>In-Depth Knowledge</strong>{" "}
                                    of Paid Advertising Techniques
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-CSyIwAZI2z"
                      id="row-CSyIwAZI2z"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-Eoc7t40WPz"
                          id="col-Eoc7t40WPz"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-NxGQh6okpk"
                              className="c-image c-wrapper image-NxGQh6okpk"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-NxGQh6okpk"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/6f5c8976-dc24-4b44-b3b6-c3eba80717e7.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-FllY6woI6u"
                          id="col-FllY6woI6u"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-tLDEV4puDs"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-tLDEV4puDs text-output cparagraph-tLDEV4puDs noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Once you take the program, and assuming you
                                    actually do as I show you, you’ll have a
                                    better understanding of how to make paid
                                    advertising work than 99% of people on the
                                    planet.
                                  </p>
                                  <p>
                                    Second important piece to understand is that
                                    I am going to be teaching you how to promote
                                    MY product (No, not this product, a
                                    different one). The EXACT same product that
                                    I know already works… a product that I
                                    control so I can give you REAL information
                                    on it.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-9ZampIN0Yb"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-9ZampIN0Yb text-output csub-heading-9ZampIN0Yb noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>
                                    Follow what I show you and implement, and
                                    you'll have leads in 7 days GUARANTEED!
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-Mu2yXhMOR0"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-Mu2yXhMOR0 text-output cparagraph-Mu2yXhMOR0 noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>But what do you do with those leads?</p>
                                  <p>
                                    Well, this brings me to Bonus #1 you get
                                    when you join right now. I’m going to give
                                    you the EXACT emails you can send to every
                                    lead. It’s a 7 day set of emails that you
                                    can trigger to fire off IMMEDIATELY. And you
                                    guessed it, I can only do this because I
                                    know the exact offer you are going to
                                    promote.
                                  </p>
                                  <p>
                                    So now you’ve got ads running that are
                                    generating leads for your email list…
                                    instantly leading people over to my product
                                    that we already know works with paid ads
                                    because I’ve turned $1.00 into $5.00
                                    promoting this offer for 5 years.
                                  </p>
                                  <p>
                                    Essentially eliminating most of the hurdles
                                    you’ve run into before.
                                  </p>
                                  <p>
                                    Once you start seeing some results from
                                    this… the world becomes your oyster.
                                  </p>
                                  <p>
                                    You now have an email list and can promote
                                    whatever you want to that audience… anything
                                    that could help them you get to tell them
                                    about.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-66_i3XdYPC"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-66_i3XdYPC text-output cparagraph-66_i3XdYPC noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    This email isn’t going to pay off your debt
                                    but every penny counts and you can see this
                                    is $60 just from 98 people.
                                  </p>
                                  <p>
                                    So even just a few days in you should be
                                    seeing sales happen just by tapping into our
                                    process that we already know works, and then
                                    you can start leveraging this new email list
                                    to make more sales on other products.
                                  </p>
                                  <p>
                                    Then… maybe… you’ll create your own product.
                                    That would be amazing and I’d love to see
                                    that.{" "}
                                  </p>
                                  <p>
                                    But to get started and to get you your first
                                    win I decided to build this Paid Ads
                                    Masterclass around how to promote one of our
                                    products.{" "}
                                  </p>
                                  <p>
                                    That is what allows me to get you moving
                                    faster… otherwise I’d have to teach you how
                                    to make an offer, how to make a product,
                                    then you have to build it…
                                  </p>
                                  <p>
                                    I’d rather you build an audience and EARN
                                    while you LEARN…
                                  </p>
                                  <p>
                                    And that’s what we are doing in our
                                    Masterclass.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="sliding-text-section hidden-section fullSection noBorder radius0 none c-section c-wrapper section-qvAUpThG3O shown"
                  style={{}}
                  id="section-qvAUpThG3O"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-Ua5_kjziKd"
                      id="row-Ua5_kjziKd"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-hCuxGYLV8a"
                          id="col-hCuxGYLV8a"
                        >
                          <div className="vertical inner">
                            <div
                              id="custom-code-mgsdtr5-wx"
                              className="c-custom-code c-wrapper custom-code-mgsdtr5-wx"
                            >
                              <div
                                id="custom-code-mgsdtr5-wx"
                                className="custom-code-container ccustom-code-mgsdtr5-wx"
                              >
                                <div className="marquee-wrapper">
                                  <div
                                    className="marquee"
                                    style={{ transform: "translateX(-823px)" }}
                                  >
                                    <span className="marquee-item">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item alt">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item alt">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item alt">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item">
                                      THE OLD WAY
                                    </span>
                                    <span className="marquee-item alt">
                                      THE OLD WAY
                                    </span>
                                    {/* Duplicate the items for continuous scrolling */}
                                  </div>
                                </div>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      '\n  .marquee-wrapper {\n    overflow: hidden;\n    white-space: nowrap;\n    width: 100%;\n    position: relative;\n    left: 0;\n  }\n  \n  .marquee {\n    display: inline-block;\n    white-space: nowrap;\n    transition: transform 0.1s linear;\n  }\n  \n  .marquee-item {\n    display: inline-block;\n    padding: 0 20px;\n    font-size: 46px;\n    color: #fff;\n    font-family: "Akira Expanded"!important;\n    font-weight: 600;\n  }\n  \n  @media only screen and (max-width: 767px) {\n    .marquee-item {\n      font-size: 24px;\n    }\n  }\n  \n  .marquee-item.alt {\n    padding: 0 0 2px 0!important;\n    font-family: "Akira Expanded Outline"!important;\n    color: #fff!important;\n  }\n',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-tkHRJNfJ8s shown"
                  style={{}}
                  id="section-tkHRJNfJ8s"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-wmQx50Pbqp"
                      id="row-wmQx50Pbqp"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-YXjLK1sIhv"
                          id="col-YXjLK1sIhv"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-N9vF9zQSU_"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-N9vF9zQSU_ text-output cheading-N9vF9zQSU_ noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    <strong>The Old Way </strong>of Online
                                    Marketing Is Over
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-TwmmiblZ09"
                      id="row-TwmmiblZ09"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-Yi_3QhQohu"
                          id="col-Yi_3QhQohu"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-weGUXFwujI"
                              className="c-image c-wrapper image-weGUXFwujI"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-weGUXFwujI"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/e365b596-98d8-460b-a15c-9be7bb2068cc.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none animate__fadeInUp"
                                      data-animation-class="animate__animated animate__fadeInUp"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-7A0D1boCEZ"
                          id="col-7A0D1boCEZ"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-lvv91HSbyi"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-lvv91HSbyi text-output cparagraph-lvv91HSbyi noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    The old way of online marketing is
                                    short-sighted, confusing, unpredictable, and
                                    most importantly, it doesn’t provide you
                                    with real leverage.
                                  </p>
                                  <p>
                                    We’re talking about the kind of leverage
                                    that enables you to reach your ideal
                                    audience, create any kind of product or
                                    business, and have people desperate to
                                    support and buy from you.
                                  </p>
                                  <p>
                                    A marketing strategy without leverage is
                                    nothing more than a glorified shot in the
                                    dark.
                                  </p>
                                  <p>
                                    You could swap out your content with another
                                    creator’s, and no one would even notice.
                                  </p>
                                  <p>
                                    Your audience doesn't see the value in what
                                    you're offering.
                                  </p>
                                  <p>
                                    Your growth is slow and inconsistent, and
                                    you feel that your efforts lack purpose and
                                    depth.
                                  </p>
                                  <p>
                                    You create content because you feel like
                                    "you have to," not because you think you're
                                    genuinely making a difference.
                                  </p>
                                  <p>
                                    So when you stop posting or change your
                                    content strategy, everything comes crumbling
                                    down. You're not free to experiment and
                                    adapt with your audience.
                                  </p>
                                  <p>
                                    You're not running a business—your business
                                    is running you.
                                  </p>
                                  <p>
                                    This is how marketers can end up with a
                                    large following but can't make an income
                                    from it, no matter what they do…
                                  </p>
                                  <p>
                                    While others with smaller audiences make
                                    thousands of dollars every month on
                                    autopilot. They struggle to pay their bills
                                    and keep up with the demands of constant
                                    content creation.
                                  </p>
                                  <p>
                                    Content creation becomes a chore, and
                                    burnout is extremely common.
                                  </p>
                                  <p>
                                    It is not sustainable and it is not
                                    enjoyable.
                                  </p>
                                  <p>
                                    Your marketing efforts just become a
                                    burdensome job you created for yourself.
                                  </p>
                                  <p>
                                    That lack of passion manifests in everything
                                    you do, including the way you manage your
                                    business.
                                  </p>
                                  <p>
                                    This is when you have to heavily rely on the
                                    latest trends and growth hacks to keep your
                                    engagement and account alive.
                                  </p>
                                  <p>
                                    Chasing that is a game you can only win for
                                    a short period.
                                  </p>
                                  <p>
                                    But the demand for effective, data-driven
                                    marketing strategies is growing every single
                                    day.
                                  </p>
                                  <p>
                                    This is the perfect opportunity for you to
                                    enter the market and absolutely crush it
                                    with a smarter, more sustainable approach.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="sliding-text-section hidden-section fullSection noBorder radius0 none c-section c-wrapper section-8UArTG8_c7 shown"
                  style={{}}
                  id="section-8UArTG8_c7"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-nksvfcQPo7"
                      id="row-nksvfcQPo7"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-LrX3dKOwOi"
                          id="col-LrX3dKOwOi"
                        >
                          <div className="vertical inner">
                            <div
                              id="custom-code-Jt-uDocdIA"
                              className="c-custom-code c-wrapper custom-code-Jt-uDocdIA"
                            >
                              <div
                                id="custom-code-Jt-uDocdIA"
                                className="custom-code-container ccustom-code-Jt-uDocdIA"
                              >
                                <div className="marquee-wrapper-new">
                                  <div
                                    className="marquee-new"
                                    style={{ transform: "translateX(-1451px)" }}
                                  >
                                    <span className="item-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new alt-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new alt-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new alt-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new">
                                      THE NEW WAY
                                    </span>
                                    <span className="item-new alt-new">
                                      THE NEW WAY
                                    </span>
                                    {/* Duplicate the items for continuous scrolling */}
                                  </div>
                                </div>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      ' \n  .marquee-wrapper-new { \n    overflow: hidden; \n    white-space: nowrap; \n    width: 100%; \n    position: relative; \n    left: 0; \n  } \n  \n  .marquee-new { \n    display: inline-block; \n    white-space: nowrap; \n    transition: transform 0.1s linear; \n  } \n  \n  .item-new { \n    display: inline-block; \n    padding: 0 20px; \n    font-size: 46px; \n    color: #fff; \n    font-family: "Akira Expanded"!important; \n    font-weight: 600; \n  } \n  \n  @media only screen and (max-width: 767px) { \n    .item-new { \n      font-size: 24px; \n    } \n  } \n  \n  .item-new.alt-new { \n    padding: 0 0 2px 0!important; \n    font-family: "Akira Expanded Outline"!important; \n    color: #fff!important; \n  } \n',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section fullSection noBorder radius0 none c-section c-wrapper section-ih7rA9cTOC shown"
                  style={{}}
                  id="section-ih7rA9cTOC"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-jTA-Q2Mz5x"
                      id="row-jTA-Q2Mz5x"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-mlgwdr_JLo"
                          id="col-mlgwdr_JLo"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-5VSOrUlYzP"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-5VSOrUlYzP text-output cheading-5VSOrUlYzP noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    <strong>The New Proven Way </strong>of
                                    Leveraging Paid Advertising
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-IrSxS2HD5Q"
                      id="row-IrSxS2HD5Q"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-L-Ka8Y4_B3"
                          id="col-L-Ka8Y4_B3"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-IL91oNI4rx"
                              className="c-image c-wrapper image-IL91oNI4rx"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-IL91oNI4rx"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/1b561571-ed56-466c-a15f-286e3ef28423.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none animate__fadeInUp"
                                      data-animation-class="animate__animated animate__fadeInUp"
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-gxAqw5hguZ"
                          id="col-gxAqw5hguZ"
                        >
                          <div className="vertical inner">
                            <div
                              id="paragraph-bqk5oeAowV"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-bqk5oeAowV text-output cparagraph-bqk5oeAowV noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>The new way creates infinite leverage.</p>
                                  <p>
                                    You are a unique individual with diverse
                                    passions, interests, skills, and talents.
                                    That uniqueness is your superpower.
                                  </p>
                                  <p>
                                    By leveraging paid advertising, you can
                                    reach your ideal audience quickly and
                                    efficiently, without relying on organic
                                    growth.
                                  </p>
                                  <p>
                                    You become the niche, attracting followers
                                    who seek that unique combination of
                                    qualities that make you “YOU.”
                                  </p>
                                  <p>
                                    With this model, your marketing efforts are
                                    targeted and data-driven, ensuring maximum
                                    return on investment.
                                  </p>
                                  <p>
                                    You’re not overexerting yourself to create
                                    endless content.
                                  </p>
                                  <p>
                                    Everything you produce serves a purpose and
                                    aligns with a single mission.
                                  </p>
                                  <p>
                                    This approach ensures consistent and
                                    predictable growth.
                                  </p>
                                  <p>And the best part?</p>
                                  <p>
                                    You don’t need a large following to start
                                    seeing results. Paid advertising enables you
                                    to start monetizing from day one, creating a
                                    profitable business without the need for
                                    endless content creation.
                                  </p>
                                  <p>
                                    You create valuable products that genuinely
                                    help your audience and generate income while
                                    you sleep.
                                  </p>
                                  <p>
                                    You build stronger relationships with your
                                    core customers and drive higher lifetime
                                    customer value than most content creators
                                    can even imagine.
                                  </p>
                                  <p>
                                    This approach gives you the freedom to hire
                                    a team, pay them well, and build a
                                    sustainable business and brand that supports
                                    a lifestyle of freedom and fulfillment.
                                  </p>
                                  <p>
                                    With paid advertising, you are not
                                    constrained by the whims of social media
                                    algorithms. Instead, you have control over
                                    your marketing efforts and can scale your
                                    business as needed.
                                  </p>
                                  <p>
                                    By adopting this new model, you can escape
                                    the constraints of traditional content
                                    creation and create a thriving digital
                                    business that aligns with your passions and
                                    goals.
                                  </p>
                                  <p>
                                    This is your chance to enter the market and
                                    excel by leveraging the power of paid
                                    advertising.
                                  </p>
                                  <p>
                                    Let me know if this works for you or if
                                    there are any adjustments you'd like!
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-hwoI2DdFeB shown"
                  style={{}}
                  id="section-hwoI2DdFeB"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-dgQSLzomO_"
                      id="row-dgQSLzomO_"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-U12F24NQpr mobile-only"
                          id="col-U12F24NQpr"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-3O20hYT7CA"
                              className="c-image c-wrapper image-3O20hYT7CA mobile-only"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-3O20hYT7CA"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/4e995fc8-d180-4e20-b17d-4146689a4828.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-QfHLrAIWsC"
                          id="col-QfHLrAIWsC"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-B-3EdPUHCR"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-B-3EdPUHCR text-output cheading-B-3EdPUHCR has-color noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    Now, as if all of that wasn’t enough, I’m
                                    also going to <u>sweeten the deal.</u>
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-xkv-vQbIZt desktop-only"
                          id="col-xkv-vQbIZt"
                        >
                          <div className="vertical inner">
                            <div
                              id="image-3Azwz1DnRT"
                              className="c-image c-wrapper image-3Azwz1DnRT desktop-only"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-3Azwz1DnRT"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/4e995fc8-d180-4e20-b17d-4146689a4828.png"
                                      alt=""
                                      className="img-none img-border-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-EX0MXfMsQP"
                      id="row-EX0MXfMsQP"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-eOVrM36Zje"
                          id="col-eOVrM36Zje"
                        >
                          <div className="noBorder radius10 shadow20 bg bgCover vertical inner">
                            <div
                              id="paragraph-oPWMi_749W"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-oPWMi_749W text-output cparagraph-oPWMi_749W noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    If you join our program, follow the steps I
                                    outline in our 6 step system… and you ARE
                                    NOT generating leads by day 7 you can ask my
                                    team for a refund and get your money back.
                                  </p>
                                  <p>
                                    But wait… we can do better than that right?
                                  </p>
                                  <p>Oh yes we can…</p>
                                  <p>
                                    Leads are great, but you want sales right?
                                    You want actual income… so here’s what I’m
                                    going to do.
                                  </p>
                                  <p>
                                    I’m going to give you 30 days to use my
                                    training, implement, and get results… and if
                                    you aren’t generating sales, you email my
                                    support system and you can have your money
                                    back.
                                  </p>
                                  <p>
                                    To be honest with you, I don’t want people
                                    in the program that aren’t getting sales
                                    because I’m only going to win here if you
                                    win.{" "}
                                  </p>
                                  <p>
                                    The Masterclass is only $97 one time… we can
                                    all agree that you purchasing access to this
                                    isn’t going to change my life right? Maybe
                                    it gets me a tank of gas?{" "}
                                  </p>
                                  <p>
                                    That said, I’m setting it up so that it
                                    COULD change your life. Giving you the keys
                                    to be able to invest in growing your own
                                    business without having to rely on luck or
                                    going viral.{" "}
                                  </p>
                                  <p>
                                    Well, I’m putting a lot into this to make
                                    you successful so that you actually generate
                                    sales, when you generate sales… I make money
                                    too.{" "}
                                  </p>
                                  <p>
                                    So the real win/win here will be when you
                                    start making money from this system, so will
                                    I.{" "}
                                  </p>
                                  <p>We are in this together actually. </p>
                                  <p>
                                    I get an army of people like you that are
                                    now building your list and driving traffic
                                    with ads… and I make sales ONLY when you do.{" "}
                                  </p>
                                  <p>
                                    The best news is, we’ve done this before… In
                                    fact, as of this moment I’ve paid out over
                                    $600,000 to people just like you who
                                    promoted the exact product I’m going to
                                    teach you to promote.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-mq3HrAX4tF"
                              className="c-image c-wrapper image-mq3HrAX4tF"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-mq3HrAX4tF"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/306dd870-b91e-43bb-9514-9f45f5b8f0b5.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-BN6BbloA1R"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-BN6BbloA1R text-output cparagraph-BN6BbloA1R noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Many of them have gone on to build their own
                                    product, promote other products, or continue
                                    to promote this one and that’s fine by me.
                                    And our best affiliate, to date, has made
                                    over $117,000 in commissions (please
                                    recognize that I said the BEST, this is not
                                    insinuating any average result).
                                  </p>
                                  <p>
                                    While I can’t guarantee that you personally
                                    get results, we have had multiple people
                                    earn over $10,000 in a single month from
                                    this and if something has happened multiple
                                    times already… it’s at least possible that
                                    this could happen again right?
                                  </p>
                                  <p>
                                    What’s more likely to happen for most people
                                    is that they build a consistent income that
                                    opens doors for them unlike any other
                                    program. See, we’re teaching you a skillset
                                    that can NEVER be taken from you… and you
                                    can apply in thousands of different ways to
                                    generate income.
                                  </p>
                                  <p>
                                    What we know will happen is that you will
                                    start building a list of people you can
                                    market to and promote products to as often
                                    as you’d like, and those leads will
                                    eventually turn into sales. We know this
                                    because not only have I done EXACTLY This
                                    for 15 years, I’ve helped over 400 other
                                    people pull this off… and now I’m giving you
                                    the keys to the paid ads kingdom that I’ve
                                    built.
                                  </p>
                                  <p>
                                    My job is to teach you how to get Paid
                                    advertising to work for you and to bend to
                                    your every will and command.
                                  </p>
                                  <p>
                                    The best way to do that is to give you the
                                    exact system I already know works and then
                                    you can apply that same system to anything
                                    you’d like to promote because you’ll know it
                                    works.
                                  </p>
                                  <p>
                                    Whether your goal is to make an extra $100/
                                    day or you want to get into the 5 figure
                                    months… PAID ADVERTISING is the most
                                    reliable and guaranteed ways to get there.
                                  </p>
                                  <p>
                                    You can absolutely try making content, and I
                                    hope that it works for you at some point…
                                    but in the meantime you need leads and you
                                    need sales and paid advertising is the only
                                    way to get that moving inside of the next
                                    week.
                                  </p>
                                  <p>
                                    If you can follow my 6 step plan and are
                                    willing to commit to seeing it through, I
                                    can’t wait to help you accomplish your dream
                                    of having an online income of whatever size
                                    you want.
                                  </p>
                                  <p>See you at the top,</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-PGCy4wU4Nn"
                              className="c-image c-wrapper image-PGCy4wU4Nn"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-PGCy4wU4Nn"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/887e8722-9dd3-46da-960d-19aa998ca2e5.jpeg"
                                      alt=""
                                      className="img-round-corners image-white-border img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-IhMrWxrGbY"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-IhMrWxrGbY text-output csub-heading-IhMrWxrGbY noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>Travis Stephenson</h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-nMyb4oci6X"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-nMyb4oci6X text-output cparagraph-nMyb4oci6X noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    All that’s left for you to do is register
                                    and dive into the material… Take action
                                    after each of the 6 steps and you’ll be
                                    generating leads within 7 days from right
                                    now.
                                  </p>
                                  <p>
                                    Oh… and you might be thinking “This is
                                    great, I’ll come back some other time” but I
                                    want to warn you…
                                  </p>
                                  <p>
                                    Not only will that mindset of “I’ll do this
                                    later” hold you back in life… but due to the
                                    nature of this program we have NO plans of
                                    making this a permanently available offer.
                                  </p>
                                  <p>
                                    In fact I would call this somewhat temporary
                                    and while I’m not going to “restrict it to
                                    100 people” or anything like that… we don’t
                                    need 10’s of thousands of people for this to
                                    work the way we all need it to.
                                  </p>
                                  <p>
                                    So if you want to join in on the Win/win of
                                    not only learning to profit from paid
                                    advertising but also being able to do so
                                    while promoting an offer that’s already
                                    proven to work…
                                  </p>
                                  <p>
                                    <strong>
                                      <u>RIGHT NOW is the time…</u>
                                    </strong>
                                  </p>
                                  <p>
                                    Once you have access you have access for
                                    life, it’ll never be taken from you and is
                                    available on demand whenever you want it.
                                  </p>
                                  <p>
                                    If you’re ready to make that change in your
                                    life and build an online business that
                                    doesn’t rely on having to go viral, get
                                    likes, or do any crazy dance trends hoping
                                    for 8 likes…
                                  </p>
                                  <p>
                                    Join us inside the Wealthery Paid
                                    Advertising Masterclass and I’ll see you
                                    inside.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-pujJafnVAz"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-pujJafnVAz text-output cparagraph-pujJafnVAz noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    PS. when you get access you’ll see a section
                                    called “Bonus” that will have several things
                                    included that will make your Advertising
                                    process MUCH easier…
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature-XSgZrHONR1"
                              className="c-image-feature c-wrapper image-feature-XSgZrHONR1"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-80-20 cimage-feature-XSgZrHONR1 feature-bonus feature-cols-80-20 feature-img-left">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/0f9fe726-9397-4800-ac26-47dca35124d0.png"
                                          alt="Image"
                                          className="feature-bonus feature-cols-80-20 feature-img-left img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-XSgZrHONR1-headline text-output featureHeadline">
                                    <div>
                                      <h2>
                                        <u>Bonus #1:</u>
                                      </h2>
                                      <h2>
                                        The Profit Playbook{" "}
                                        <strong>(Value: $49)</strong>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="image-feature-XSgZrHONR1-text text-output featureText">
                                    <div>
                                      <p>
                                        A{" "}
                                        <strong>
                                          list of high-profit offers
                                        </strong>{" "}
                                        you can promote IMMEDIATELY to start
                                        driving more income from your
                                        activities!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature-uXY4sBIW6S"
                              className="c-image-feature c-wrapper image-feature-uXY4sBIW6S"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-80-20 cimage-feature-uXY4sBIW6S feature-bonus feature-cols-80-20 feature-img-left">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/dddaec62-31b1-49fe-a360-ae1ce10a28a2.png"
                                          alt="Image"
                                          className="feature-bonus feature-cols-80-20 feature-img-left img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-uXY4sBIW6S-headline text-output featureHeadline">
                                    <div>
                                      <h2>
                                        <u>Bonus #2:</u>
                                      </h2>
                                      <h2>
                                        The 6 Cognitive Bias Email Sequence{" "}
                                        <strong>(Value: $197)</strong>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="image-feature-uXY4sBIW6S-text text-output featureText">
                                    <div>
                                      <p>
                                        My exact{" "}
                                        <strong>email follow-up system</strong>{" "}
                                        that gets people to buy NOW.{" "}
                                        <strong>
                                          Personally I made over $250,000 from
                                          this follow up sequence…
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature-rUgHncWJIF"
                              className="c-image-feature c-wrapper image-feature-rUgHncWJIF"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-80-20 cimage-feature-rUgHncWJIF feature-bonus feature-cols-80-20 feature-img-left">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/a2d69bed-c1a2-49f0-9484-b858c0bb773a.png"
                                          alt="Image"
                                          className="feature-bonus feature-cols-80-20 feature-img-left img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-rUgHncWJIF-headline text-output featureHeadline">
                                    <div>
                                      <h2>
                                        <u>Bonus #3:</u>
                                      </h2>
                                      <h2>
                                        Weekly Coaching Calls (Value: $497)
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="image-feature-rUgHncWJIF-text text-output featureText">
                                    <div>
                                      <p>
                                        Get{" "}
                                        <strong>
                                          LIVE access to me every week{" "}
                                        </strong>
                                        to break down what’s working NOW. I’ve
                                        been running these calls for over 2.5
                                        years, just one hour every Wednesday!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature--dg_P3D4F2"
                              className="c-image-feature c-wrapper image-feature--dg_P3D4F2"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-80-20 cimage-feature--dg_P3D4F2 feature-bonus feature-cols-80-20 feature-img-left">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/c9e838ec-14b8-4140-b031-2b55327f556d.png"
                                          alt="Image"
                                          className="feature-bonus feature-cols-80-20 feature-img-left img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature--dg_P3D4F2-headline text-output featureHeadline">
                                    <div>
                                      <h2>
                                        <u>Bonus #4:</u>
                                      </h2>
                                      <h2>
                                        The Ad Library Vault{" "}
                                        <strong>(Value: $197)</strong>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="image-feature--dg_P3D4F2-text text-output featureText">
                                    <div>
                                      <p>
                                        My exact{" "}
                                        <strong>email follow-up system</strong>{" "}
                                        that gets people to buy NOW.{" "}
                                        <strong>
                                          Personally I made over $250,000 from
                                          this follow up sequence…
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-feature-9jp2CQoKDw"
                              className="c-image-feature c-wrapper image-feature-9jp2CQoKDw"
                            >
                              <div className="img-feature-container feature-img-left feature-cols-80-20 cimage-feature-9jp2CQoKDw feature-bonus feature-cols-80-20 feature-img-left">
                                <div className="img-container text-center">
                                  <div
                                    style={{ cursor: "default" }}
                                    className="image-container"
                                  >
                                    <div>
                                      <div>
                                        <img
                                          style={{ width: 150, height: "auto" }}
                                          src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/7d8b3d84-15a9-48ee-aae7-a86f9d19ec07.png"
                                          alt="Image"
                                          className="feature-bonus feature-cols-80-20 feature-img-left img-shadow-none img-round-corners img-border-none img-effects-none"
                                          data-animation-class=""
                                          loading="lazy"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="txt-container">
                                  <div className="image-feature-9jp2CQoKDw-headline text-output featureHeadline">
                                    <div>
                                      <h2>
                                        <u>Bonus #5:</u>
                                      </h2>
                                      <h2>
                                        Copy &amp; Paste Ad Templates{" "}
                                        <strong>(Value: $197)</strong>
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="image-feature-9jp2CQoKDw-text text-output featureText">
                                    <div>
                                      <p>
                                        Tested and{" "}
                                        <strong>ready-to-go ad copy</strong>
                                        —just plug &amp; play!
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-uhwVV4YM3c"
                              className="c-button c-wrapper button-uhwVV4YM3c desktop-only"
                            >
                              <a
                                id="button-uhwVV4YM3c_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-uhwVV4YM3c main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                                aria-label="Secure My Free Exclusive Bonus Today "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    Secure My Free Exclusive Bonus Today
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="button-bsz6cb206C"
                              className="c-button c-wrapper button-bsz6cb206C mobile-only"
                            >
                              <a
                                id="button-bsz6cb206C_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-bsz6cb206C main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                                aria-label="Secure My  Bonuses Today "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    Secure My Bonuses Today
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="paragraph-yyicadtvXV"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-yyicadtvXV text-output cparagraph-yyicadtvXV np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="parent-sticky borderFull radius15 none c-column c-wrapper col-_l1Q-5-l7C"
                          id="col-_l1Q-5-l7C"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-7Goww_iGJ7"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-7Goww_iGJ7 text-output cheading-7Goww_iGJ7 borderFull radius10 cornersTop"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Now For ONLY $97</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-3Jm9LtB3LM"
                              className="c-image c-wrapper image-3Jm9LtB3LM"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-3Jm9LtB3LM"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/6db88505-3feb-4967-8233-b7826dde0a69.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-Q7K51BAA0U"
                              className="c-sub-heading c-wrapper"
                            >
                              <div
                                className="sub-heading-Q7K51BAA0U text-output csub-heading-Q7K51BAA0U noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>
                                    <strong>YOU’RE SAVING $1,000+ TODAY</strong>
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-bBaA456V9e"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-bBaA456V9e text-output cparagraph-bBaA456V9e noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Join The Wealthery Paid Advertising
                                    Masterclass’ For $97
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-3AtBrdI280"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-3AtBrdI280 text-output cparagraph-3AtBrdI280 noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Bonuses Will Be Delivered Instantly. Get
                                    Full Access Right Away.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-7sHj3FcWOi"
                              className="c-button c-wrapper button-7sHj3FcWOi"
                            >
                              <a
                                id="button-7sHj3FcWOi_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-7sHj3FcWOi main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                                aria-label="Get Instant Access! "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    Get Instant Access!
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="image-CEWZpPJ92s"
                              className="c-image c-wrapper image-CEWZpPJ92s"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-CEWZpPJ92s"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/a6196103-c653-4e88-ab22-b328a0dd49a1.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-SPNykZ5EO1"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-SPNykZ5EO1 text-output cparagraph-SPNykZ5EO1 noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-PsI9STKksO"
                              className="c-image c-wrapper image-PsI9STKksO"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-PsI9STKksO"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/62fd1d3d-2806-44b0-a306-f32e44602f2a.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
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

                <div
                  className="radius0 noBorder c-section c-wrapper section-SZRSXPSVZE desktop-only mobile-only"
                  style={{}}
                  id="section-SZRSXPSVZE"
                >
                  <div className="inner">
                    <div
                      className="row-align-left noBorder radius0 none c-row c-wrapper row-bcVIizVki5 desktop-only mobile-only"
                      id="row-bcVIizVki5"
                    >
                      <div className="inner">
                        <div
                          className="noBorder radius0 none c-column c-wrapper col-MqW0wLJrFv desktop-only mobile-only"
                          id="col-MqW0wLJrFv"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-j3PsUupwxO"
                              className="c-heading c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="heading-j3PsUupwxO text-output cheading-j3PsUupwxO noBorder radius0"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    Now, as if all of that wasn’t enough, I’m
                                    also
                                    <strong> going to sweeten the deal.</strong>
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="row-align-center noBorder radius0 c-row c-wrapper row-7OKWKSPLSO desktop-only mobile-only"
                      id="row-7OKWKSPLSO"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-CTOYFB4ERK desktop-only mobile-only"
                          id="col-CTOYFB4ERK"
                        >
                          <div className="noBorder radius10 shadow20 bg bgCover vertical inner">
                            <div
                              id="paragraph-P0I7jGYQgx"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-P0I7jGYQgx text-output cparagraph-P0I7jGYQgx noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    If you join our program, follow the steps I
                                    outline in our 6 step system… and you ARE
                                    NOT generating leads by day 7 you can ask my
                                    team for a refund and get your money back.
                                  </p>
                                  <p>
                                    But wait… we can do better than that right?
                                  </p>
                                  <p>Oh yes we can…</p>
                                  <p>
                                    Leads are great, but you want sales right?
                                    You want actual income… so here’s what I’m
                                    going to do.
                                  </p>
                                  <p>
                                    I’m going to give you 30 days to use my
                                    training, implement, and get results… and if
                                    you aren’t generating sales, you email my
                                    support system and you can have your money
                                    back.
                                  </p>
                                  <p>
                                    To be honest with you, I don’t want people
                                    in the program that aren’t getting sales
                                    because I’m only going to win here if you
                                    win.{" "}
                                  </p>
                                  <p>
                                    The Masterclass is only $97 one time… we can
                                    all agree that you purchasing access to this
                                    isn’t going to change my life right? Maybe
                                    it gets me a tank of gas?{" "}
                                  </p>
                                  <p>
                                    That said, I’m setting it up so that it
                                    COULD change your life. Giving you the keys
                                    to be able to invest in growing your own
                                    business without having to rely on luck or
                                    going viral.{" "}
                                  </p>
                                  <p>
                                    Well, I’m putting a lot into this to make
                                    you successful so that you actually generate
                                    sales, when you generate sales… I make money
                                    too.{" "}
                                  </p>
                                  <p>
                                    So the real win/win here will be when you
                                    start making money from this system, so will
                                    I.{" "}
                                  </p>
                                  <p>We are in this together actually. </p>
                                  <p>
                                    I get an army of people like you that are
                                    now building your list and driving traffic
                                    with ads… and I make sales ONLY when you do.{" "}
                                  </p>
                                  <p>
                                    The best news is, we’ve done this before… In
                                    fact, as of this moment I’ve paid out over
                                    $600,000 to people just like you who
                                    promoted the exact product I’m going to
                                    teach you to promote.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-EGZBJLGN0G"
                              className="c-image c-wrapper image-EGZBJLGN0G desktop-only mobile-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-EGZBJLGN0G"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/306dd870-b91e-43bb-9514-9f45f5b8f0b5.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-AaVevhi3FN"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-AaVevhi3FN text-output cparagraph-AaVevhi3FN noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Many of them have gone on to build their own
                                    product, promote other products, or continue
                                    to promote this one and that’s fine by me.
                                    And our best affiliate, to date, has made
                                    over $117,000 in commissions (please
                                    recognize that I said the BEST, this is not
                                    insinuating any average result).
                                  </p>
                                  <p>
                                    While I can’t guarantee that you personally
                                    get results, we have had multiple people
                                    earn over $10,000 in a single month from
                                    this and if something has happened multiple
                                    times already… it’s at least possible that
                                    this could happen again right?{" "}
                                  </p>
                                  <p>
                                    What’s more likely to happen for most people
                                    is that they build a consistent income that
                                    opens doors for them unlike any other
                                    program. See, we’re teaching you a skillset
                                    that can NEVER be taken from you… and you
                                    can apply in thousands of different ways to
                                    generate income.{" "}
                                  </p>
                                  <p>
                                    What we know will happen is that you will
                                    start building a list of people you can
                                    market to and promote products to as often
                                    as you’d like, and those leads will
                                    eventually turn into sales. We know this
                                    because not only have I done EXACTLY This
                                    for 15 years, I’ve helped over 400 other
                                    people pull this off… and now I’m giving you
                                    the keys to the paid ads kingdom that I’ve
                                    built.{" "}
                                  </p>
                                  <p>
                                    My job is to teach you how to get Paid
                                    advertising to work for you and to bend to
                                    your every will and command.{" "}
                                  </p>
                                  <p>
                                    The best way to do that is to give you the
                                    exact system I already know works and then
                                    you can apply that same system to anything
                                    you’d like to promote because you’ll know it
                                    works.{" "}
                                  </p>
                                  <p>
                                    Whether your goal is to make an extra $100/
                                    day or you want to get into the 5 figure
                                    months… PAID ADVERTISING is the most
                                    reliable and guaranteed ways to get there.
                                  </p>
                                  <p>
                                    You can absolutely try making content, and I
                                    hope that it works for you at some point…
                                    but in the meantime you need leads and you
                                    need sales and paid advertising is the only
                                    way to get that moving inside of the next
                                    week.{" "}
                                  </p>
                                  <p>
                                    If you can follow my 6 step plan and are
                                    willing to commit to seeing it through, I
                                    can’t wait to help you accomplish your dream
                                    of having an online income of whatever size
                                    you want.
                                  </p>
                                  <p>
                                    All that’s left for you to do is register
                                    and dive into the material… Take action
                                    after each of the 6 steps and you’ll be
                                    generating leads within 7 days from right
                                    now.
                                  </p>
                                  <p>
                                    Oh… and you might be thinking “This is
                                    great, I’ll come back some other time” but I
                                    want to warn you…
                                  </p>
                                  <p>
                                    Not only will that mindset of “I’ll do this
                                    later” hold you back in life… but due to the
                                    nature of this program we have NO plans of
                                    making this a permanently available offer.{" "}
                                  </p>
                                  <p>
                                    In fact I would call this somewhat temporary
                                    and while I’m not going to “restrict it to
                                    100 people” or anything like that… we don’t
                                    need 10’s of thousands of people for this to
                                    work the way we all need it to.
                                  </p>
                                  <p>
                                    So if you want to join in on the Win/win of
                                    not only learning to profit from paid
                                    advertising but also being able to do so
                                    while promoting an offer that’s already
                                    proven to work…
                                  </p>
                                  <p>RIGHT NOW is the time… </p>
                                  <p>
                                    Once you have access you have access for
                                    life, it’ll never be taken from you and is
                                    available on demand whenever you want it.{" "}
                                  </p>
                                  <p>
                                    If you’re ready to make that change in your
                                    life and build an online business that
                                    doesn’t rely on having to go viral, get
                                    likes, or do any crazy dance trends hoping
                                    for 8 likes…
                                  </p>
                                  <p>
                                    Join us inside the Wealthery Paid
                                    Advertising Masterclass and I’ll see you
                                    inside.
                                  </p>
                                  <p />
                                  <p>See you at the top,</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-tk6EDj0hmd"
                              className="c-sub-heading c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="sub-heading-tk6EDj0hmd text-output csub-heading-tk6EDj0hmd noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>Travis Stephenson</h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-5WIH9Tkknv"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-5WIH9Tkknv text-output cparagraph-5WIH9Tkknv noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    PS. when you get access you’ll see a section
                                    called “Bonus” that will have several things
                                    included that will make your Advertising
                                    process MUCH easier…
                                  </p>
                                  <p>
                                    <strong>
                                      Bonus #1: The Profit Playbook{" "}
                                      <u>(Value: $49)</u>
                                    </strong>
                                  </p>
                                  <p>
                                    A{" "}
                                    <strong>list of high-profit offers</strong>{" "}
                                    you can promote IMMEDIATELY to start driving
                                    more income from your activities!
                                  </p>
                                  <p>
                                    <strong>
                                      Bonus #2: The 6 Cognitive Bias Email
                                      Sequence <u>(Value: $197)</u>
                                    </strong>
                                  </p>
                                  <p>
                                    My exact e
                                    <strong>mail follow-up system</strong> that
                                    gets people to buy <strong>NOW</strong>.{" "}
                                    <strong>
                                      Personally I made over $250,000 from this
                                      follow up sequence…{" "}
                                    </strong>
                                  </p>
                                  <p>
                                    <strong>
                                      Bonus #3: Weekly Coaching Calls{" "}
                                      <u>(Value: $497)</u>
                                    </strong>
                                  </p>
                                  <p>
                                    Get <strong>LIVE access </strong>to me every
                                    week to break down what’s working NOW. I’ve
                                    been running these calls for over 2.5 years,
                                    just one hour every Wednesday!
                                  </p>
                                  <p>
                                    <strong>
                                      Bonus #4: The Ad Library Vault{" "}
                                      <u>(Value: $197)</u>
                                    </strong>
                                  </p>
                                  <p>
                                    A{" "}
                                    <strong>
                                      look inside my BEST performing ads
                                    </strong>{" "}
                                    and why they worked. We’ll not only give you
                                    swipe files but we’ll analyze why they
                                    worked and help you use them as frameworks.{" "}
                                  </p>
                                  <p>
                                    <strong>
                                      Bonus #5: Copy &amp; Paste Ad Templates{" "}
                                      <u>(Value: $197)</u>
                                    </strong>
                                  </p>
                                  <p>
                                    Tested and{" "}
                                    <strong>ready-to-go ad copy</strong>
                                    —just plug &amp; play!{" "}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-SUOL9K72UG"
                              className="c-button c-wrapper button-SUOL9K72UG desktop-only mobile-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-SUOL9K72UG_btn"
                                style={{}}
                                className="cbutton-SUOL9K72UG main-btn button-vp-10 btn-hp-25 noBorder radius0"
                                aria-label="Secure My Free Exclusive Bonus Today "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    Secure My Free Exclusive Bonus Today
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>

                            <div
                              id="button-d2jypa8ipO"
                              className="c-button c-wrapper button-d2jypa8ipO desktop-only mobile-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-d2jypa8ipO_btn"
                                style={{}}
                                className="cbutton-d2jypa8ipO main-btn button-vp-10 btn-hp-25 noBorder radius0"
                                aria-label="Secure My  Bonuses Today "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    Secure My Bonuses Today
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>

                            <div
                              id="paragraph-vAs0R2t5SB"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-vAs0R2t5SB text-output cparagraph-vAs0R2t5SB np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-GwrpYtLxJE desktop-only mobile-only"
                          id="col-GwrpYtLxJE"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-B2XS9C450A"
                              className="c-heading c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="heading-B2XS9C450A text-output cheading-B2XS9C450A noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h1>Now For ONLY $97</h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-D7DLTAG6U2"
                              className="c-image c-wrapper image-D7DLTAG6U2 desktop-only mobile-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-D7DLTAG6U2"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/6db88505-3feb-4967-8233-b7826dde0a69.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="sub-heading-9MS6EJJBXK"
                              className="c-sub-heading c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="sub-heading-9MS6EJJBXK text-output csub-heading-9MS6EJJBXK noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <h2>
                                    <strong>YOU’RE SAVING $997+ TODAY</strong>
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-DG2WKT1FMC"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-DG2WKT1FMC text-output cparagraph-DG2WKT1FMC noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Join The Wealthery Paid Advertising
                                    Masterclass’ For $97
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-cDFRNkRmvs"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-cDFRNkRmvs text-output cparagraph-cDFRNkRmvs noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Bonuses Will Be Delivered Instantly. Get
                                    Full Access Right Away.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-EK2U8OTXHB"
                              className="c-button c-wrapper button-EK2U8OTXHB desktop-only mobile-only"
                            >
                              <button
                                data-animation-class=""
                                id="button-EK2U8OTXHB_btn"
                                style={{}}
                                className="cbutton-EK2U8OTXHB main-btn button-vp-10 btn-hp-25 noBorder radius0"
                                aria-label="Get Instant Access! "
                              >
                                <div style={{}} className="main-heading-group">
                                  <div className="button-icon-start" />
                                  <div className="main-heading-button">
                                    Get Instant Access!
                                  </div>
                                  <div className="button-icon-end" />
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    left: "50%",
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                  }}
                                  className="btn-loader-position"
                                >
                                  <div
                                    style={{ display: "none" }}
                                    className="v-spinner"
                                  >
                                    <div
                                      className="v-moon v-moon1"
                                      style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: "100%",
                                      }}
                                    >
                                      <div
                                        className="v-moon v-moon2"
                                        style={{
                                          height: "4.285714285714286px",
                                          width: "4.285714285714286px",
                                          borderRadius: "100%",
                                          top: "12.857142857142858px",
                                          backgroundColor: "rgb(255, 255, 255)",
                                        }}
                                      />
                                      <div
                                        className="v-moon v-moon3"
                                        style={{
                                          height: 30,
                                          width: 30,
                                          borderRadius: "100%",
                                          border:
                                            "4.285714285714286px solid rgb(255, 255, 255)",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </button>
                              <div></div>
                            </div>

                            <div
                              id="image-B5ARGJ4EUW"
                              className="c-image c-wrapper image-B5ARGJ4EUW desktop-only mobile-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-B5ARGJ4EUW"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/a6196103-c653-4e88-ab22-b328a0dd49a1.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-8gj6PcOqrl"
                              className="c-paragraph c-wrapper desktop-only mobile-only"
                            >
                              <div
                                className="paragraph-8gj6PcOqrl text-output cparagraph-8gj6PcOqrl noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="image-9eRjHmorho"
                              className="c-image c-wrapper image-9eRjHmorho desktop-only mobile-only"
                            >
                              <div
                                style={{ cursor: "pointer" }}
                                className="image-container cimage-9eRjHmorho"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/62fd1d3d-2806-44b0-a306-f32e44602f2a.png"
                                      alt=""
                                      className="radius0"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
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

                <div
                  className="hidden-section radius0 noBorder c-section c-wrapper section-SG1NE07V86 shown"
                  style={{}}
                  id="section-SG1NE07V86"
                >
                  <div className="inner">
                    <div
                      className="row-align-center noBorder radius0 none c-row c-wrapper row-g2qDABQmkZ"
                      id="row-g2qDABQmkZ"
                    >
                      <div className="inner">
                        <div
                          className="parent-sticky noBorder radius0 none c-column c-wrapper col-M67ugTNZxA"
                          id="col-M67ugTNZxA"
                        >
                          <div className="vertical inner">
                            <div
                              id="heading-O36D5D14DF"
                              className="c-heading c-wrapper"
                            >
                              <div
                                className="heading-O36D5D14DF text-output cheading-O36D5D14DF noBorder radius0 animate__fadeInUp"
                                data-animation-class="animate__animated animate__fadeInUp"
                              >
                                <div>
                                  <h1>
                                    Frequently<strong> </strong>Asked{" "}
                                    <strong>Questions</strong>
                                  </h1>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-BIWRGNI32V"
                              className="c-button c-wrapper button-BIWRGNI32V desktop-only"
                            >
                              <a
                                id="button-BIWRGNI32V_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-BIWRGNI32V main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                                aria-label="Get Instant Access! "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    Get Instant Access!
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="paragraph-03HUBKJ1MS"
                              className="c-paragraph c-wrapper desktop-only"
                            >
                              <div
                                className="paragraph-03HUBKJ1MS text-output cparagraph-03HUBKJ1MS np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="noBorder radius0 none c-column c-wrapper col-xddjg3OXS5"
                          id="col-xddjg3OXS5"
                        >
                          <div className="vertical inner">
                            <div
                              id="faq-7J4UTWjSHn"
                              className="c-faq c-wrapper faq-7J4UTWjSHn"
                            >
                              <div className="hl-faq cfaq-7J4UTWjSHn noBorder radius0 none">
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          1: How long does it take to see
                                          results from the Masterclass?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        Results can vary, but most participants
                                        start seeing leads and sales within the
                                        first 7 days of implementing our
                                        strategies. The key is to follow the
                                        steps and apply the techniques
                                        consistently.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          2: Do I need any prior experience with
                                          paid advertising?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        No prior experience is necessary! Our
                                        Masterclass is designed to guide
                                        beginners through the entire process,
                                        from setting up ads to optimizing for
                                        maximum ROI. We also provide support for
                                        more advanced marketers looking to
                                        refine their strategies.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          3: What types of businesses can
                                          benefit from this Masterclass?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        The strategies taught in the Masterclass
                                        are applicable to a wide range of
                                        businesses, including e-commerce,
                                        digital products, services, and more. If
                                        you want to drive leads and sales
                                        through paid advertising, this program
                                        is for you.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          4: What kind of support is available
                                          during the Masterclass?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        You'll have access to weekly coaching
                                        calls, a private community of fellow
                                        marketers, and direct support from our
                                        team. We're here to help you every step
                                        of the way to ensure your success.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          5: How is this Masterclass different
                                          from other advertising courses?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        Unlike traditional courses, our
                                        Masterclass provides hands-on, practical
                                        training with real-world applications.
                                        You'll not only learn the theory but
                                        also put it into practice with proven ad
                                        templates, swipe files, and step-by-step
                                        guidance.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          6: What if I don't see any results
                                          after following the Masterclass?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        We stand by our 100% Money Back
                                        Guarantee. If you implement the
                                        strategies and don't see results within
                                        30 days, you can request a full refund.
                                        We're committed to your success and
                                        confident in the effectiveness of our
                                        program.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          7: Can I promote my own products using
                                          the strategies taught in the
                                          Masterclass?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        7: Absolutely! While we teach you how to
                                        promote our offers, the principles and
                                        techniques can be applied to any product
                                        or service you wish to advertise. You'll
                                        gain the skills to drive traffic and
                                        generate sales for your own business.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                                <div className="faq-separated-child hl-faq-child">
                                  <div className="hl-faq-child-heading">
                                    <div className="hl-faq-child-head">
                                      <span className="hl-faq-child-heading-text">
                                        <h4>
                                          8: Is the Masterclass suitable for
                                          both beginners and advanced marketers?
                                        </h4>
                                      </span>
                                    </div>
                                    <i className="hl-faq-child-heading-icon right fa" />
                                  </div>
                                  <div
                                    style={{
                                      height: 0,
                                      padding: 0,
                                      opacity: 0,
                                    }}
                                    className="hl-faq-child-panel"
                                  >
                                    <span className="hl-faq-child-item-text item-text">
                                      <p>
                                        Yes, the Masterclass is designed to
                                        cater to all levels of experience.
                                        Beginners will find the step-by-step
                                        guidance easy to follow, while advanced
                                        marketers can benefit from the advanced
                                        strategies and optimization tips
                                        provided.
                                      </p>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="button-S6ALlEYww5"
                              className="c-button c-wrapper button-S6ALlEYww5 mobile-only"
                            >
                              <a
                                id="button-S6ALlEYww5_btn"
                                href="#col-I0sYxFe1mn"
                                target=""
                                data-animation-class=""
                                className="cbutton-S6ALlEYww5 main-btn button-vp-10 btn-hp-25 noBorder radius0 text-center"
                                aria-label="Get Instant Access! "
                              >
                                <span style={{}} className="main-heading-group">
                                  <span
                                    style={{ marginRight: 5 }}
                                    className="button-icon-start"
                                  />
                                  <span className="main-heading-button">
                                    Get Instant Access!
                                  </span>
                                  <span
                                    style={{ marginLeft: 5 }}
                                    className="button-icon-end"
                                  />
                                </span>
                              </a>

                              <div></div>
                            </div>

                            <div
                              id="paragraph-Trww3FfV0n"
                              className="c-paragraph c-wrapper mobile-only"
                            >
                              <div
                                className="paragraph-Trww3FfV0n text-output cparagraph-Trww3FfV0n np noBorder radius0"
                                data-animation-class=""
                              >
                                <div>
                                  <p>100% Secure 256-Bit Security Encryption</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="fullSection none noBorder radius0 none c-section c-wrapper section-VIkpQQPEen"
                  style={{}}
                  id="section-VIkpQQPEen"
                >
                  <div className="inner">
                    <div
                      className="row-align-center none noBorder radius0 none c-row c-wrapper row-MwAF3Pw-Hm"
                      id="row-MwAF3Pw-Hm"
                    >
                      <div className="inner">
                        <div
                          className="c-column c-wrapper col-DDwC7X-akd"
                          id="col-DDwC7X-akd"
                        >
                          <div className="none noBorder radius0 none bg bgCover vertical inner">
                            <div
                              id="image-J-Hz8K2_Yl"
                              className="c-image c-wrapper image-J-Hz8K2_Yl"
                            >
                              <div
                                style={{ cursor: "default" }}
                                className="image-container cimage-J-Hz8K2_Yl"
                              >
                                <div>
                                  <div>
                                    <img
                                      style={{}}
                                      src="https://assets.cdn.filesafe.space/fYeUf1rxIJu7ZCmCYQr6/media/ae2adefb-2542-40c7-8ef8-de9f6749ceb2.png"
                                      alt=""
                                      className="img-none img-border-none img-shadow-none img-effects-none"
                                      data-animation-class=""
                                      loading="lazy"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-l_WyQ2bJDc"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-l_WyQ2bJDc text-output cparagraph-l_WyQ2bJDc none noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    Copyright © 2023 | Wealthery | All Rights
                                    Reserved
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div
                              id="paragraph-_cFDZcXSdo"
                              className="c-paragraph c-wrapper"
                            >
                              <div
                                className="paragraph-_cFDZcXSdo text-output cparagraph-_cFDZcXSdo none noBorder radius0 none"
                                data-animation-class=""
                              >
                                <div>
                                  <p>
                                    NOT FACEBOOK™: This site is not a part of
                                    the Facebook™ website or Facebook Inc.
                                    Additionally, This site is NOT endorsed by
                                    Facebook™ in any way. FACEBOOK™ is a
                                    trademark of FACEBOOK™, Inc.
                                  </p>
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

            <div>
              <div id="ft-track-hl-custom-code">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      " \n   /* Basic styling for both desktop and mobile slider containers */ \n   .slider, .slider-mobile { \n     overflow: hidden; /* Hide overflowing content */ \n     width: 100%; /* Adjust to fit your design */ \n     position: relative; /* Required for absolute positioning of slides */ \n   } \n  \n   /* Styling for each slide on both desktop and mobile */ \n   .slide, .slide-mobile { \n     width: 100%; /* Adjust slide width */ \n     display: none; /* Hide all slides initially */ \n     position: relative; /* Position them absolutely within the slider */ \n     padding-top: 0 !important; \n     padding-bottom: 0 !important; \n   } \n  \n   /* Right column height adjustments */ \n   .slide-right-col, .slide-right-col-mobile { \n     min-height: 600px !important; \n   } \n    \n   /* Media query for mobile-specific height adjustments */ \n   @media only screen and (max-width: 767px) {  \n     .slide-right-col, .slide-right-col-mobile { \n       min-height: 500px !important; \n     } \n   } \n  \n   /* Show only the first slide initially for both desktop and mobile */ \n   .slide:first-child, .slide-mobile:first-child { \n     display: block; \n   } \n  \n   /* Button layout adjustments for mobile buttons */ \n   .btns-mobile .inner { \n     display: flex!important; \n     flex-direction: row!important; \n     justify-content: space-evenly!important; \n   } \n  \n /* Animation keyframes */ \n @keyframes fadeInFromBottom { \n   from { \n     opacity: 0; \n     transform: translateY(20px); \n   } \n   to { \n     opacity: 1; \n     transform: translateY(0); \n   } \n } \n  \n /* Apply animation to slides when they appear */ \n .slide, .slide-mobile { \n   animation: fadeInFromBottom 0.5s ease-in-out; \n } \n  \n ",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="teleports" />

      <script
        dangerouslySetInnerHTML={{
          __html: `
      document.addEventListener("DOMContentLoaded", function() {
        const marquee = document.querySelector('.marquee');
        const marqueeWrapper = document.querySelector('.marquee-wrapper');
        let lastScrollPosition = 0;

        function handleScroll() {
          const scrollPosition = window.scrollY;
          const scrollSpeed = 0.5;
          const marqueeWidth = marquee.scrollWidth / 2;
          let newScrollPosition = (scrollPosition * scrollSpeed) % marqueeWidth;
          marquee.style.transform = 'translateX(-' + newScrollPosition + 'px)';
          lastScrollPosition = scrollPosition;
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              window.addEventListener('scroll', handleScroll);
            } else {
              window.removeEventListener('scroll', handleScroll);
            }
          });
        }, {
          threshold: 0.1
        });

        if (marqueeWrapper) {
          observer.observe(marqueeWrapper);
        }
      });
    `,
        }}
      />
    </>
  );
}
