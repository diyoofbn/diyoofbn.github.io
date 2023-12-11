import React from "react";
import { Config } from './config'
import { Link } from 'react-router-dom'
import AboutBg from '../aboutbg.png'
// import { SliderData } from '../components/imageslider/Sliderdata';
// import ImageSlider from "../components/imageslider/ImageSlider";
// import { FaJava } from 'react-icons/fa'
// import { IconContext } from "react-icons/lib";
// import { HiOutlineCpuChip } from "react-icons/hi2";
// import { LiaPython } from "react-icons/lia";
// import { FaLaptopCode } from "react-icons/fa";
// import { IoBulbOutline } from "react-icons/io5";
// import { FaUsers } from "react-icons/fa";
// import { GiMechanicalArm } from "react-icons/gi";
// import { FaCircleNodes } from "react-icons/fa6";
// import { FaPlay } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaArrowLeftLong } from "react-icons/fa6";


function Home() {
    // console.log(slugFinding.title)
  var divStyle = {
    backgroundImage: 'url('+AboutBg+')'
  }

    return (
        <>
            <div>


                <div class="header-placeholder"></div>
                <div class="masthead js-masthead-fixed" data-context="page.masthead" data-hover-hint="mastheadOptions"
                    data-hover-hint-placement="top-start" style={divStyle}>
                    <div class="masthead-contents">
                        <div class="masthead-text js-masthead-text" style={{ opacity: 1 }}>
                            <div data-context="page.masthead" data-hover-hint="mastheadTitle">
                                <h1 decorator="inlineTextEditable" contenteditable="false"
                                    class="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
                                    data-text-keypath="customizations.masthead.title.text" value="Jack of most trades.">{Config.aboutmetitle}
                                </h1>
                            </div>
                            <div data-context="page.masthead" data-hover-hint="mastheadText">
                                <p decorator="inlineTextEditable" contenteditable="false"
                                    class="js-inline-text-editable preserve-whitespace main-text rich-text module-text"
                                    data-text-keypath="page.masthead.text.text"
                                    value="London-based visual designer with a broad range of skills: art direction, illustration, photography, retouching, branding, scamping, UI, animation, video, audio, and very occasionally, words...">
                                    {Config.aboutme}</p>
                            </div>
                            <div class="masthead-buttons">

                            </div>
                            <div class="masthead-arrow-container js-masthead-arrow" data-context="page.masthead"
                                data-hover-hint="scrollDownArrow">
                                <div class="masthead-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="masthead-placeholder"></div>
                <div class="site-wrap cfix js-site-wrap">
                    <div class="site-container">
                        <div class="site-content e2e-site-content">
                            <main>
                                <section class="project-covers" data-context="page.gallery.covers">
                                    {Config.works.map((work, index) => {
                                        return (
                                            <>
                                                <Link class="project-cover js-project-cover-touch hold-space" to={work.link}>
                                                    <div class="cover-content-container">
                                                        <div class="cover-image-wrap">
                                                            <div class="cover-image">
                                                                <div class="cover cover-normal">

                                                                    <img class="cover__img js-lazy image-loaded"
                                                                        src={work.image}
                                                                        sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="details-wrap">
                                                            <div class="details">
                                                                <div class="details-inner">
                                                                    <div class="title preserve-whitespace">{work.title}</div>
                                                                    <div class="custom2 preserve-whitespace">{work.sub}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </>
                                        )
                                    })}

                                    {/* <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/thebodyshop"
                                        data-context="pages" data-identity="id:p639a01530b3e242682d6f50b5ca5361cef3ff61b67a156c0d0a86"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p639a01530b3e242682d6f50b5ca5361cef3ff61b67a156c0d0a86">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x640.jpg?h=0753eaa671f04ece5fa42c934a0119ab 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg?h=72d0e480437e3cfa7d8697d771167643 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg?h=72d0e480437e3cfa7d8697d771167643 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg?h=72d0e480437e3cfa7d8697d771167643 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg?h=72d0e480437e3cfa7d8697d771167643 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/5f2d9a03-c65c-4152-a868-670336cdee50_rwc_26x0x1151x900x1151.jpg?h=72d0e480437e3cfa7d8697d771167643 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">The Body Shop</div>
                                                        <div class="custom2 preserve-whitespace">Product shoot and social content</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/zenb"
                                        data-context="pages" data-identity="id:p639a00c542541f26843ffeecc1e0b61332a1a5d56689f7d75d845"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p639a00c542541f26843ffeecc1e0b61332a1a5d56689f7d75d845">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x640.jpg?h=dc0b2bc60a8f70736d4cdaf807f9782b 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg?h=a036a1eb31069774ddec6032f58a72c9 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg?h=a036a1eb31069774ddec6032f58a72c9 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg?h=a036a1eb31069774ddec6032f58a72c9 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg?h=a036a1eb31069774ddec6032f58a72c9 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/354953f8-65fc-42d4-ad20-78f721a5c730_rwc_26x0x1151x900x1151.jpg?h=a036a1eb31069774ddec6032f58a72c9 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">ZENB</div>
                                                        <div class="custom2 preserve-whitespace">Campaign and BAU design and art direction</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/girleffect"
                                        data-context="pages" data-identity="id:p5de92087b2f51b591cc47b5786254879171fa3c6237accda87fe8"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5de92087b2f51b591cc47b5786254879171fa3c6237accda87fe8">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x640.jpg?h=80a9b99cb1efd31624513c525f36f3fb 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg?h=d0ea726939c814e8ba74de6f40c9264a 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg?h=d0ea726939c814e8ba74de6f40c9264a 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg?h=d0ea726939c814e8ba74de6f40c9264a 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg?h=d0ea726939c814e8ba74de6f40c9264a 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/18042856-e2bb-4e56-8016-060023a6e17f_rwc_17x0x767x600x767.jpg?h=d0ea726939c814e8ba74de6f40c9264a 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Girl Effect</div>
                                                        <div class="custom2 preserve-whitespace">Digital rebrand and website redesign for Nike's charity
                                                            partner</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/theglenlivet"
                                        data-context="pages" data-identity="id:p5dd6af329e7b1ea74bda5366f96d20762a2d9f61819a4b23e422e"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dd6af329e7b1ea74bda5366f96d20762a2d9f61819a4b23e422e">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x640.jpg?h=24c07c5d3823ae724871131bb50a7d12 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg?h=acf46602b1c220595e523964a5ab86f6 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg?h=acf46602b1c220595e523964a5ab86f6 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg?h=acf46602b1c220595e523964a5ab86f6 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg?h=acf46602b1c220595e523964a5ab86f6 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/08e1f464-0605-4630-b3d2-c17868167c44_rwc_26x0x1151x900x1151.jpg?h=acf46602b1c220595e523964a5ab86f6 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">The Glenlivet</div>
                                                        <div class="custom2 preserve-whitespace">Bespoke social content</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/article19"
                                        data-context="pages" data-identity="id:p5dc55244a13be1a290260df040ef330c84277279e3867f8b7faa5"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dc55244a13be1a290260df040ef330c84277279e3867f8b7faa5">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x640.jpg?h=8cd3fc45a5ba898874094719a535443e 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg?h=7fbcd138ec43bd059182fb76803948bf 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg?h=7fbcd138ec43bd059182fb76803948bf 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg?h=7fbcd138ec43bd059182fb76803948bf 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg?h=7fbcd138ec43bd059182fb76803948bf 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e0727b10-6041-43d3-b185-155c728be9ab_rwc_21x0x959x750x959.jpg?h=7fbcd138ec43bd059182fb76803948bf 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Article 19</div>
                                                        <div class="custom2 preserve-whitespace">Brand refresh, microsite and launch video</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/macmillan"
                                        data-context="pages" data-identity="id:p5dcd5cd755e6f773648d626a65b8b205afe63320e8fd94a59ef46"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dcd5cd755e6f773648d626a65b8b205afe63320e8fd94a59ef46">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x640.jpg?h=5cd7a4f6aa35f68a40b80e930babae18 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg?h=6077753c75fa28148d9dc930765e5147 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg?h=6077753c75fa28148d9dc930765e5147 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg?h=6077753c75fa28148d9dc930765e5147 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg?h=6077753c75fa28148d9dc930765e5147 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d83c2f7a-e4ef-468b-b60a-172882f7a6c0_rwc_21x0x959x750x959.jpg?h=6077753c75fa28148d9dc930765e5147 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Macmillan Cancer Support</div>
                                                        <div class="custom2 preserve-whitespace">Online Rebrand</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/menunited"
                                        data-context="pages" data-identity="id:p5d41a3778e922fb5192872854b5e65bbf42b021574474ee51c593"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5d41a3778e922fb5192872854b5e65bbf42b021574474ee51c593">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x640.jpg?h=f58a310f0079b64b7643e7b8aced2a40 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg?h=0c798fccfafdcf070ae13ced3523b6a1 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg?h=0c798fccfafdcf070ae13ced3523b6a1 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg?h=0c798fccfafdcf070ae13ced3523b6a1 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg?h=0c798fccfafdcf070ae13ced3523b6a1 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e162073a-553b-4abd-b9f0-d1418c3080d3_rwc_21x0x959x750x959.jpg?h=0c798fccfafdcf070ae13ced3523b6a1 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Prostate Cancer UK</div>
                                                        <div class="custom2 preserve-whitespace">Men United Digital Activation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/voicesof2015"
                                        data-context="pages" data-identity="id:p5dcc306fd62c9cffb0f68151051ce968b7aa4cc9abdc195863ba5"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dcc306fd62c9cffb0f68151051ce968b7aa4cc9abdc195863ba5">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x640.jpg?h=32dd8f74a7a8f3b693abaf46d0b20099 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg?h=76812d68dff5b7b216e2b754f2e76574 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg?h=76812d68dff5b7b216e2b754f2e76574 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg?h=76812d68dff5b7b216e2b754f2e76574 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg?h=76812d68dff5b7b216e2b754f2e76574 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b9d057f3-cc5b-48cf-b6da-d6b8806b0dfa_rwc_17x0x767x600x767.jpg?h=76812d68dff5b7b216e2b754f2e76574 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Girl Effect Voices Of 2015</div>
                                                        <div class="custom2 preserve-whitespace">Experiential Campaign Microsite</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/colony"
                                        data-context="pages" data-identity="id:p5dcbe09fe38ba461dec5ba9ac4a19089cfd6a9359a4ea1f07cb67"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dcbe09fe38ba461dec5ba9ac4a19089cfd6a9359a4ea1f07cb67">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x640.jpg?h=267919edf19dc3c9333d8242bce32d31 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg?h=7da2a2e020e9108e01b28b2ca4ff5320 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg?h=7da2a2e020e9108e01b28b2ca4ff5320 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg?h=7da2a2e020e9108e01b28b2ca4ff5320 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg?h=7da2a2e020e9108e01b28b2ca4ff5320 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/7497bd58-cc6f-49a6-b3bd-7da50a62bf57_rwc_14x0x671x526x671.jpg?h=7da2a2e020e9108e01b28b2ca4ff5320 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Colony</div>
                                                        <div class="custom2 preserve-whitespace">Brand Creation and UI</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/happinesscabco"
                                        data-context="pages" data-identity="id:p5dcd62a42bdfd63575fbe2abc8d6b729f737678e33937585944f6"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dcd62a42bdfd63575fbe2abc8d6b729f737678e33937585944f6">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x640.jpg?h=e3af168da26e25e61630b23ac9c32b20 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg?h=5a704e50d20d148d6918356a99285a51 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg?h=5a704e50d20d148d6918356a99285a51 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg?h=5a704e50d20d148d6918356a99285a51 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg?h=5a704e50d20d148d6918356a99285a51 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/45d74542-6f38-4889-9864-d67d2430b113_rwc_26x0x1151x900x1151.jpg?h=5a704e50d20d148d6918356a99285a51 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Coca-Cola Happiness Cab Co.</div>
                                                        <div class="custom2 preserve-whitespace">Integrated Campaign Concept</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/treasuremapmaker"
                                        data-context="pages" data-identity="id:p5dfcbce4a80c7717e8f744ade5b532e9aec94f4dd5e4a8a725e74"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dfcbce4a80c7717e8f744ade5b532e9aec94f4dd5e4a8a725e74">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy image-loaded"
                                                            src="./Jack Cole_files/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg"
                                                            srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x640.jpg?h=dafa1bc8e6d3bbfed0a3d66a8c43fe3b 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg?h=306295a1318d0e686d018fcd15028f83 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg?h=306295a1318d0e686d018fcd15028f83 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg?h=306295a1318d0e686d018fcd15028f83 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg?h=306295a1318d0e686d018fcd15028f83 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/59045845-26eb-459f-b46c-8b2c0042837c_rwc_21x0x959x750x959.jpg?h=306295a1318d0e686d018fcd15028f83 5120w"
                                                            sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Puffin Books Treasure Map Maker</div>
                                                        <div class="custom2 preserve-whitespace">Interactive Story Creation Game</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/malibuvip"
                                        data-context="pages" data-identity="id:p5dd53e31dc3d055547b3013fd7bf3e2add24dfa57a7ff8da2d6ad"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dd53e31dc3d055547b3013fd7bf3e2add24dfa57a7ff8da2d6ad">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x640.jpg?h=310492c2bc95a9a5bb5e9ac6e862d792 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/a47cbc18-3769-4dfa-baa5-7101bdd4050a_rwc_16x0x766x600x766.jpg?h=2249d41dcea48e24a8b05bd46320d75c 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Malibu VIP</div>
                                                        <div class="custom2 preserve-whitespace">Rewards Campaign And Facebook App</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/bbcworldwide"
                                        data-context="pages" data-identity="id:p5e14b14c5c78cd465d50a59ed333f7d0a0dec98e6cc478d90702d"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5e14b14c5c78cd465d50a59ed333f7d0a0dec98e6cc478d90702d">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x640.jpg?h=fd26fc0d88c7f4563cb1a1087dba6282 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/39ec20c4-bee0-493d-9dd6-80a6c0ca3c3c_rwc_21x0x959x750x959.jpg?h=47b8772e95e087bb9670de7e17de61b1 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">BBC Worldwide</div>
                                                        <div class="custom2 preserve-whitespace">TV Sales Materials</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/cokevendingmachine"
                                        data-context="pages" data-identity="id:p5dcc2ca70a9c312d01e6d2f3523ccd91ea8c49dcf8796f7aca94f"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5dcc2ca70a9c312d01e6d2f3523ccd91ea8c49dcf8796f7aca94f">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x728.jpg?h=6567f551c0941964ca02917d6c45efa6"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x640.jpg?h=7ee058aef37757544cb98d7b3cddb051 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x1280.jpg?h=e9a4b45978627cb76f2f3537413ae152 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x1366.jpg?h=b452ba4ba1c01b450c6c3f5b9e649ee4 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x1920.jpg?h=36e5a65a0804101e59d3352dd75ad30f 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x728.jpg?h=6567f551c0941964ca02917d6c45efa6 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/f2b4ba58-c51f-4338-aa98-3c78634d7feb_rwc_939x62x728x569x728.jpg?h=6567f551c0941964ca02917d6c45efa6 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">Coca-Cola</div>
                                                        <div class="custom2 preserve-whitespace">Interactive Vending Machine</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/rspca"
                                        data-context="pages" data-identity="id:p6548f7f7dc51946ea06fc2417105c41e6c08005a2d3e6b15e5355"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p6548f7f7dc51946ea06fc2417105c41e6c08005a2d3e6b15e5355">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x640.jpg?h=028f3539aa9d2ca9f6a312ec79924ff0 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/0df5fd81-dc14-422c-86b5-d93ab82c38ff_rwc_21x0x959x750x959.jpg?h=442e714bc7a2c8c413e9834b1d019065 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">RSPCA</div>
                                                        <div class="custom2 preserve-whitespace">Farm Welfare Pitch</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/btvision"
                                        data-context="pages" data-identity="id:p5e14b37610b8a8074041181d823739188a8ea891e1c67c208a0ad"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5e14b37610b8a8074041181d823739188a8ea891e1c67c208a0ad">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x640.jpg?h=aea015e6062dfdd0fb6079c4b573f31a 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/b89f95a6-6eff-43a7-8e57-c3f0f5f41869_rwc_21x0x959x750x959.jpg?h=dc84e3712cf517546b574d2185b07cf6 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">BT Vision</div>
                                                        <div class="custom2 preserve-whitespace">OnVision Magazine</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="project-cover js-project-cover-touch hold-space" href="https://jackcole.co.uk/unleashsummer"
                                        data-context="pages" data-identity="id:p5de8e175be2018f426070fd8d3b71a5b512f5cd7d59a367b8e3a3"
                                        data-hover-hint="galleryPageCover"
                                        data-hover-hint-id="p5de8e175be2018f426070fd8d3b71a5b512f5cd7d59a367b8e3a3">
                                        <div class="cover-content-container">
                                            <div class="cover-image-wrap">
                                                <div class="cover-image">
                                                    <div class="cover cover-normal">

                                                        <img class="cover__img js-lazy"
                                                            src="./Jack Cole_files/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x32.jpg"
                                                            data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1140.jpg?h=b2899e7892d0884381237045a06ee363"
                                                            data-srcset="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x640.jpg?h=5725b4b5c4a63f03667c2aebcc23789b 640w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1280.jpg?h=807b7788c63dfe6160c4e6562995301b 1280w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1366.jpg?h=174e418fea0db509729e9bb27969803d 1366w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1920.jpg?h=a927b173235e277aa2f9a9f1ea88ea07 1920w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1140.jpg?h=b2899e7892d0884381237045a06ee363 2560w, https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e1b22a35-5de9-49ce-8511-a0c8643d33f1_rwc_487x20x1140x891x1140.jpg?h=b2899e7892d0884381237045a06ee363 5120w"
                                                            data-sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, calc(1600px / 3)" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="details-wrap">
                                                <div class="details">
                                                    <div class="details-inner">
                                                        <div class="title preserve-whitespace">lastminute.com</div>
                                                        <div class="custom2 preserve-whitespace">Unleash Summer Magazine</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}
                                </section>
                                <footer class="site-footer" data-hover-hint="footer">
                                    <div class="footer-text">

                                    </div>
                                </footer>
                            </main>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home