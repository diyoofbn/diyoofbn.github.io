import React from "react";

function LeftGifRightImage({ url1, url2, caption1, caption2 }) {
    return (
        <>

            <div className="project-module module tree project-module-tree js-js-project-module e2e-site-project-module-tree">
                <div className="tree-wrapper valign-top">
                    <div className="tree-child-wrapper" style={{ flex: 375000000 }}>
                        <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '8px', paddingBottom: 'px' }}>
                            <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/e9c6642b-d8c4-42a0-a9d4-58387aba193e.gif?h=f767d5f616700edfc03565e2cbbbe3dd">
                                <img className="js-lazy e2e-site-project-module-image image-loaded" src={url1} width={750} />
                            </div>
                            <div className="project-module module-caption-container js-caption-container align-left">
                            {(caption1 !== undefined) ? 
                                <div className="rich-text module-caption js-text-editable">
                                    <p><span className="texteditor-inline-color"><span style={{ color: '#1add91' }} className="texteditor-inline-color"><span style={{ fontFamily: 'ftnk', fontWeight: 800 }}>|
                                    </span></span><span style={{ fontFamily: 'ftnk', fontWeight: 400 }}>Instagram
                                        Stories</span></span></p>
                                </div>
                            : null}
                            </div>
                        </div>
                    </div>
                    <div className="tree-child-wrapper" style={{ flex: 666900421 }}>
                        <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: '8px', paddingBottom: 'px' }}>
                            <div className="js-lightbox lightbox-link" data-src="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/aae32778-f9b6-48ef-82fc-c67892d252a7.jpg?h=e3a2fb09adfe97d433cd1bf659b792f1">
                                <img className="js-lazy e2e-site-project-module-image image-loaded" src={url2} width={1902} sizes="(max-width: 1902px) 100vw, 1902px" />
                            </div>
                            <div className="project-module module-caption-container js-caption-container align-left">
                                {(caption2 !== undefined) ? 
                                    <div className="rich-text module-caption js-text-editable">
                                        <p>
                                            <span className="texteditor-inline-color">
                                                <span style={{ color: '#1add91' }} className="texteditor-inline-color">
                                                    <span style={{ fontFamily: 'ftnk', fontWeight: 800 }}>|
                                                    </span>
                                                </span>
                                                <span style={{ fontFamily: 'ftnk', fontWeight: 400 }}>Adshell
                                                    concept</span>
                                            </span>
                                            <br />
                                        </p>
                                    </div> 
                                : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftGifRightImage;