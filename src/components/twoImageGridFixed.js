import React from "react";

function TwoImageGridFixed({imgurl1, imgurl2, caption}) {
    return (
        <>

            <div className="project-module module tree project-module-tree js-js-project-module e2e-site-project-module-tree">
                <div className="tree-wrapper valign-top">
                    <div className="tree-child-wrapper" style={{ flex: 1 }}>
                        <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '8px', paddingBottom: 'px' }}>
                            <div className="js-lightbox lightbox-link" >
                                <img className="js-lazy e2e-site-project-module-image image-loaded" src={imgurl1} width={1920}  sizes="(max-width: 1920px) 100vw, 1920px" />
                            </div>
                            <div className="project-module module-caption-container js-caption-container align-left">
                                {/* <div className="rich-text module-caption js-text-editable">
                                    <p><span style={{ fontFamily: 'ftnk' }}><span style={{ fontWeight: 800 }}><span className="texteditor-inline-color" style={{ color: '#1add91' }}>|</span> </span><span style={{ fontWeight: 400 }}>Behind the scenes at </span></span><span style={{ color: '#ffffff' }} className="texteditor-inline-color"><a href="https://junctioneleven.com/" target="_blank">Junction 11</a></span><span style={{ fontFamily: 'ftnk' }}><span style={{ fontWeight: 400 }} /></span><br /></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="tree-child-wrapper" style={{ flex: 1 }}>
                        <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '8px', paddingBottom: 'px' }}>
                            <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/1fe2a85d-bc14-43bf-914c-28039bda7adb.jpg?h=7c9304214c6a2d6baa51b694c289f662">
                                <img className="js-lazy e2e-site-project-module-image image-loaded" src={imgurl2} width={1920}  />
                            </div>
                            <div className="project-module module-caption-container js-caption-container align-left">
                                {/* <div className="rich-text module-caption js-text-editable">
                                    <p><span style={{ fontFamily: 'ftnk' }}><span style={{ fontWeight: 800 }}><span className="texteditor-inline-color" style={{ color: '#1add91' }}>|</span>
                                    </span></span><span style={{ fontFamily: 'ftnk' }}><span style={{ fontWeight: 400 }}>Rough
                                        layout scamps</span></span><br /></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TwoImageGridFixed;