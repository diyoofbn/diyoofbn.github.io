import { React,useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import DescRole from '../components/descrole'
import ImageGrid from '../components/imagegrid'
import ImageCaption from '../components/imagecaption'
import SingleImageWithCaption from '../components/singleImageWithCaption'
import LeftGifRightImage from '../components/leftGifRightImage'
import TwoImageGridFixed from '../components/twoImageGridFixed'
import NextProjectButton from '../components/nextProjectButton'
import SubHeading from '../components/subheading'
import { Config } from './config'

function Detail() {
    // const history = useHistory();
    const location = useLocation();

    // Accessing the slug from the URL
    const slug = location.pathname.split('/').pop();

    // Find the work with the title containing "Animated"
    const slugFinding = Config.works.find(work => work.link.includes(slug));
    const currentIndex = Config.works.findIndex(work => work.link.includes(slug));
    const nextWork = (Config.works[currentIndex + 1] === undefined) ? Config.works[currentIndex] : Config.works[currentIndex + 1]

    // console.log(slugFinding.title)
    var divStyle = {
        backgroundImage: 'url(' + slugFinding.image + ')'
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }, []);

    return (
        <>

            <div>
                <div className="header-placeholder" />
                <div className="masthead js-masthead-fixed" data-context="page.masthead" data-hover-hint="mastheadOptions" data-hover-hint-placement="top-start" style={divStyle}>
                    <div className="masthead-contents">
                        <div className="masthead-text js-masthead-text" style={{ opacity: 1 }}>
                            <div data-context="page.masthead" data-hover-hint="mastheadTitle">
                                <h1 decorator="inlineTextEditable" contentEditable="false" className="js-inline-text-editable preserve-whitespace main-text rich-text module-text" data-text-keypath="customizations.masthead.title.text" value="This Is Rolls-Royce">{slugFinding.title}</h1>
                            </div>
                            <div data-context="page.masthead" data-hover-hint="mastheadText">
                                <p decorator="inlineTextEditable" contentEditable="false" className="js-inline-text-editable preserve-whitespace main-text rich-text module-text" data-text-keypath="page.masthead.text.text" value="Campaign ideation and art direction">{slugFinding.sub}</p>
                            </div>
                            <div className="masthead-buttons">
                            </div>
                            <div className="masthead-arrow-container js-masthead-arrow" data-context="page.masthead" data-hover-hint="scrollDownArrow">
                                <div className="masthead-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="masthead-placeholder" />
                <div className="site-wrap cfix js-site-wrap">
                    <div className="site-container">
                        <div className="site-content e2e-site-content">
                            <main>
                                <div className="page-container" data-context="page.page.container" data-hover-hint="pageContainer">
                                    <section className="page standard-modules">
                                        <div className="page-content js-page-content" data-context="pages" data-identity="id:p6399fe65f3206603e44f8877f3f1f98832796100bbeaab62275dd">
                                            <div id="project-canvas" className="js-project-modules modules content">
                                                <div id="project-modules">
                                                    <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '0px', paddingBottom: '0px', width: '100%', float: 'center', clear: 'both' }}>
                                                        <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/ba941c57-ca89-4da5-bd84-85dcf5f070b4.png?h=610915b340c853d431f06cfc04d4d06d">
                                                            <img className="js-lazy e2e-site-project-module-image image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/ba941c57-ca89-4da5-bd84-85dcf5f070b4_rw_600.png" width={40} srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/ba941c57-ca89-4da5-bd84-85dcf5f070b4_rw_600.png?h=6819b11143c6db6c24d46b07b487061b 40w," sizes="(max-width: 40px) 100vw, 40px" />
                                                        </div>
                                                    </div>

                                                    {slugFinding.detail.map((detail,index) => {
                                                        switch (detail.type) {
                                                            case "desc":
                                                                return (
                                                                    <>
                                                                    <DescRole desc={detail.text} role={detail.role}/>
                                                                    </>
                                                                );
                                                            case "image":
                                                                return (
                                                                    <>
                                                                     <SingleImageWithCaption imgurl={detail.url} caption={detail.caption}/>
                                                                    </>
                                                                );
                                                            case "2ImageGrid":
                                                                return (
                                                                    <>
                                                                        <TwoImageGridFixed imgurl1={detail.url1} imgurl2={detail.url2} caption={detail.caption}/>
                                                                    </>
                                                                );
                                                            case "GRID":
                                                                return (
                                                                    <>
                                                                        <ImageGrid imgurls={detail.url} caption={detail.caption}/>
                                                                    </>
                                                                );
                                                            case "HEADING":
                                                                return (
                                                                    <>
                                                                        <SubHeading text={detail.text} sub={detail.sub}/>
                                                                    </>
                                                                );
                                                            case "LEFTGIFRIGHTIMAGE":
                                                                return (
                                                                    <>
                                                                        <LeftGifRightImage url1={detail.url1} url2={detail.url2} caption1={detail.caption1} caption2={detail.caption2}/>
                                                                    </>
                                                                );
                                                        }
                                                        
                                                    })}

                                                    

                                                    {/* <ImageGrid />

                                                    <ImageCaption />

                                                    <SingleImageWithCaption />

                                                    <LeftGifRightImage />

                                                    <TwoImageGridFixed />

                                                    <SubHeading /> */}

                                                    <NextProjectButton nextLink={nextWork.link}/>



                                                    {/* <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: 'px', paddingBottom: 'px' }}>
                                                        <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/cefffefd-b6f3-4701-a4dc-56427d5186cf.jpg?h=19748fb938c53a7b64fffc2ccc367bdf">
                                                            <img className="js-lazy e2e-site-project-module-image image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/cefffefd-b6f3-4701-a4dc-56427d5186cf_rw_1920.jpg" width={1920} srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/cefffefd-b6f3-4701-a4dc-56427d5186cf_rw_600.jpg?h=55c22d2ef1100505ccd1f48656f77493 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/cefffefd-b6f3-4701-a4dc-56427d5186cf_rw_1200.jpg?h=d56b77b58e0f4c6064f5b10f71d4a1c0 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/cefffefd-b6f3-4701-a4dc-56427d5186cf_rw_1920.jpg?h=8c06277f617b52eaa5a85a80073bad00 1920w," sizes="(max-width: 1920px) 100vw, 1920px" />
                                                        </div>
                                                        <div className="project-module module-caption-container js-caption-container align-left">
                                                            <div className="rich-text module-caption js-text-editable">
                                                                <div className="texteditor-inline-lineheight" style={{ lineHeight: '20px' }}><span className="texteditor-inline-color"><span style={{ color: '#1add91' }} className="texteditor-inline-color"><span style={{ fontFamily: 'ftnk', fontWeight: 800 }}>|
                                                                </span></span><span style={{ fontFamily: 'ftnk', fontWeight: 400 }}>Three initial concept
                                                                    routes: luxurious close ups focussing on detail; stylised and opulent still life;
                                                                    decadent, fashion-led lifestyle</span></span></div>
                                                            </div>
                                                        </div>
                                                    </div> */}




                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <footer className="site-footer" data-hover-hint="footer">
                                    <div className="footer-text">
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

export default Detail;