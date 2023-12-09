import React from "react";

function SingleImageWithCaption({imgurl, caption}) {
    return (
        <>

            <div className="project-module module image project-module-image js-js-project-module" style={{ paddingTop: 'px', paddingBottom: 'px' }}>
                <div className="js-lightbox lightbox-link">
                    <img className="js-lazy e2e-site-project-module-image image-loaded" src={imgurl} width={1800} sizes="(max-width: 1800px) 100vw, 1800px" />
                </div>
                <div className="project-module module-caption-container js-caption-container align-left">
                {(caption !== undefined) ? <div className="rich-text module-caption js-text-editable">
                        <p><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}><span style={{ color: '#1add91' }} className="texteditor-inline-color">| </span></span>{(caption !== undefined) ? caption : null}</p>
                    </div> : null}
                    
                </div>
            </div>
        </>
    )
}

export default SingleImageWithCaption;