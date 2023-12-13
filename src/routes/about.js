import React from "react";
import './about.css'
import AboutBg from '../aboutbg.png'
import MyGif from '../me.gif'
import Collage from '../collage.png'

function About() {
  // console.log(slugFinding.title)
  var divStyle = {
    backgroundImage: 'url('+AboutBg+')'
  }

  return (
    <div className="about">
      <div>
        <div className="header-placeholder" />
        <div className="masthead js-masthead-fixed" data-context="page.masthead" data-hover-hint="mastheadOptions" data-hover-hint-placement="top-start" style={divStyle}>
          <div className="masthead-contents">
            <div className="masthead-text js-masthead-text" style={{ opacity: 1 }}>
              <div data-context="page.masthead" data-hover-hint="mastheadTitle">
                <h1 decorator="inlineTextEditable" contentEditable="false" className="js-inline-text-editable preserve-whitespace main-text rich-text module-text" data-text-keypath="customizations.masthead.title.text" value="Master of some…">Master of some…</h1>
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
                    <header className="page-header content" data-context="pages" data-identity="id:p5e4ea0700c69b8cde12a645ee36e0ed373f39e5a7020b2c875d31" data-hover-hint="pageHeader" data-hover-hint-id="p5e4ea0700c69b8cde12a645ee36e0ed373f39e5a7020b2c875d31">
                    </header>
                    <div className="page-content js-page-content" data-context="pages" data-identity="id:p5e4ea0700c69b8cde12a645ee36e0ed373f39e5a7020b2c875d31">
                      <div id="project-canvas" className="js-project-modules modules content">
                        <div id="project-modules">
                          <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '60px', paddingBottom: '60px', width: '80%', maxWidth: '900px', float: 'center', clear: 'both' }}>
                            <div className="rich-text js-text-editable module-text">
                              <div style={{ lineHeight: '28px', textAlign: 'left' }} className="texteditor-inline-lineheight"><span style={{ color: '#60ffe9' }} className="texteditor-inline-color"><span style={{ fontSize: '21px' }} className="texteditor-inline-fontsize"><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}>I'm a
                                versatile Graphics - UI/UX Designer from Bangalore with 3+
                                year's&nbsp;experience.&nbsp;</span></span></span></div>
                              <div style={{ lineHeight: '28px', textAlign: 'left' }} className="texteditor-inline-lineheight">Hello, I'm Diyoof, your friendly neighborhood Graphics - UI/UX Designer on a creative mission. Mastering everything from print to digital, cooking up concepts, and perfecting finish art. Think of me as a "Therefore Diyoof" – it doesn't stop me from being a genius in some. &nbsp;</div>
                              <div style={{ lineHeight: '28px', textAlign: 'left' }} className="texteditor-inline-lineheight">
                                I'm particularly confident in my ability to illustrate, take a photo, or sprinkle some magic in retouching. I've even mastered the art of juggling video production, and a bit of animation – because who said design can't have a soundtrack and a little dance? I love getting my hands dirty in the design process. If I have the chance to do it myself and pick up a few tricks along the way, count me in – I'll relish the opportunity like a kid in a candy store! 🚀✨</div>
                            </div>
                          </div>
                          <div className="project-module module tree project-module-tree js-js-project-module e2e-site-project-module-tree">
                            <div className="tree-wrapper valign-top">
                              <div className="tree-child-wrapper" style={{ flex: 121 }}>
                                <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '0px', paddingBottom: '20px', width: '96%', float: 'left', clear: 'both' }}>
                                  <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/d6b9a1b8-3204-421a-bafc-fdd23ae2c833.jpg?h=7cf09619eea946f6062f71a1932ab2ac">
                                    <img className="js-lazy e2e-site-project-module-image image-loaded" src={Collage} width={1200} sizes="(max-width: 1200px) 100vw, 1200px" />
                                  </div>
                                  <div className="project-module module-caption-container js-caption-container align-left">
                                    <div className="rich-text module-caption js-text-editable">
                                      <p><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}><span className="texteditor-inline-color" style={{ color: '#60ffe9' }}>| </span></span>Where imagination meets pixels</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tree-child-wrapper" style={{ flex: 79 }}>
                                <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '0px', paddingBottom: '40px', width: '96%', maxWidth: '800px', float: 'left', clear: 'both' }}>
                                  <div className="rich-text js-text-editable module-text">
                                    <div style={{ lineHeight: '28px' }} className="texteditor-inline-lineheight">
                                      <div><span style={{ fontFamily: 'Poppins' }}><span style={{}} className="texteditor-inline-color"><span style={{ color: '#60ffe9', fontWeight: 700, fontSize: '26px' }} className="texteditor-inline-fontsize">SKILLS</span><br /></span></span>Design, Art
                                        Direction, Illustration, Photography, Retouching, Branding and
                                        Visualisation, UI/UX, Animation, Video.&nbsp;</div>
                                      <div>
                                        <div><span style={{ fontFamily: 'Poppins' }}><span style={{}} className="texteditor-inline-color"><span style={{ color: '#60ffe9', fontWeight: 700, fontSize: '26px' }} className="texteditor-inline-fontsize">SOFTWARE</span><br /></span></span>Photoshop,
                                          Illustrator, InDesign, After Effects, Figma, Sketch, Premiere, Keynote,
                                          Powerpoint.&nbsp;</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '40px', paddingBottom: '0px', width: '100%', maxWidth: '800px', float: 'center', clear: 'both' }}>
                            <div className="rich-text js-text-editable module-text">
                              <div style={{ textAlign: 'center' }}><span className="texteditor-inline-fontsize" style={{ fontSize: '26px' }}><span style={{ textTransform: 'uppercase' }}><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}><span style={{ color: '#60ffe9' }} className="texteditor-inline-color">Some brands I've extensively work
                                for…</span></span></span></span></div>
                            </div>
                          </div> */}
                          {/* <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '0px', paddingBottom: '20px', width: '100%', float: 'center', clear: 'both' }}>
                            <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/6220dec5-1c64-4992-a283-77d61ecaae25.png?h=34d4d0057e62bdd1dc10fd85755457a1">
                              <img className="js-lazy e2e-site-project-module-image image-loaded" src="./Jack Cole - About_files/6220dec5-1c64-4992-a283-77d61ecaae25_rw_1920.png" width={1920} srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/6220dec5-1c64-4992-a283-77d61ecaae25_rw_600.png?h=fd0e702cffcd31aa507f9593aee380aa 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/6220dec5-1c64-4992-a283-77d61ecaae25_rw_1200.png?h=c20b0d93a7bd4898ff1d9868e4ee2c2b 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/6220dec5-1c64-4992-a283-77d61ecaae25_rw_1920.png?h=bd9f3f37d4e9cb401fb8ddecb6d533ae 1920w," sizes="(max-width: 1920px) 100vw, 1920px" />
                            </div>
                          </div> */}
                          <div className="project-module module tree project-module-tree js-js-project-module e2e-site-project-module-tree">
                            <div className="tree-wrapper valign-top">
                              <div className="tree-child-wrapper" style={{ flex: 1 }}>
                                <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '0px', paddingBottom: '20px', width: '96%', maxWidth: '800px', float: 'left', clear: 'both' }}>
                                  <div className="rich-text js-text-editable module-text">
                                    <div style={{ lineHeight: '28px', textAlign: 'left' }} className="texteditor-inline-lineheight">
                                      <div><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}><span style={{ color: '#60ffe9' }} className="texteditor-inline-color"><span style={{ fontSize: '26px' }} className="texteditor-inline-fontsize">Meet the Wizard Behind the Pixels ✨</span><br /><span className="texteditor-inline-color"><span style={{ fontSize: '26px' }} className="texteditor-inline-fontsize">A</span> few of the things that make me
                                        tick</span></span></span></div>
                                      <div>
                                        <div>They say all work and no play makes me a dull boy, but in my world, it's where the magic happens. I'm not just about pixels and vectors; I'm about turning ideas into visual symphonies.&nbsp;</div>
                                        <div>I love the excitement of starting with a blank canvas, bringing ideas to life, and always chasing that perfect design moment. When I'm not busy designing, catch me outdoors, playing some tunes on my guitar, or trying out new recipes in the kitchen.

                                          Let's embark on a creative journey where anything is possible. Join me, and let's make some magic together! 🚀✨"</div>
                                        <div><span style={{ fontSize: '20px' }} className="texteditor-inline-fontsize">
                                          <span style={{ color: '#60ffe9' }} className="texteditor-inline-color">
                                            <span style={{ fontFamily: 'Poppins', fontWeight: 800 }}>
                                              <span style={{ color: '#f7f8fc' }} className="texteditor-inline-color">If you'd like to get in touch,<br /> you can find
                                                me here…&nbsp;</span>
                                              <span style={{ textTransform: 'uppercase' }}>&nbsp;</span>
                                            </span>
                                          </span>
                                          <span style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                                            <a href="mailto:diyoofbn@gmail.com" target="_blank">email</a>
                                            <span style={{ color: '#fff' }}> / </span>
                                            <a href="https://www.linkedin.com/in/thereforediyoof/" target="_blank">linkedin</a>
                                            <span style={{ color: '#fff' }}> / </span>
                                            <a href="https://www.instagram.com/therefore.diyoof/" target="_blank">instagram</a>
                                          </span>
                                          {/* <span style={{color: '#fff'}}> / </span>
                                                    <a href="https://www.behance.net/diyoof" target="_blank">Behance</a> */}
                                        </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="tree-child-wrapper" style={{ flex: 1 }}>
                                <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '0px', paddingBottom: '20px', width: '96%', float: 'left', clear: 'both' }}>
                                  <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/193a36ae-2de6-46db-b9b3-b5daae6f9276.gif?h=bf10bc1a3ab91670c8ed4293aea5b1ee">
                                    <img className="js-lazy e2e-site-project-module-image image-loaded" src={MyGif} width={1200} sizes="(max-width: 1200px) 100vw, 1200px" />
                                  </div>
                                  <div className="project-module module-caption-container js-caption-container align-left">
                                    <div className="rich-text module-caption js-text-editable">
                                      <p><span style={{ color: '#60ffe9' }} className="texteditor-inline-color"><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}>| </span></span>Here I am, laughing at
                                        things</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
    </div>
  )
}

export default About