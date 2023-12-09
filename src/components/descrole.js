import React from "react";

function DescRole({desc,role}) {

    const htmlDesc = { __html: desc };


    return (
        <>

            <div className="project-module module tree project-module-tree js-js-project-module e2e-site-project-module-tree">
                <div className="tree-wrapper valign-top">
                    <div className="tree-child-wrapper" style={{ flex: 33 }}>
                        <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '0px', paddingBottom: '10px', width: '90%', maxWidth: '1000px', float: 'left', clear: 'both' }}>
                            <div className="rich-text js-text-editable module-text">
                                {/* <div>
                                    <span style={{ color: '#f7f8fc' }} className="texteditor-inline-color">Rolls-Royce briefed Zone
                                    to come up with an overarching campaign idea to promote their <span className="texteditor-inline-color">Boutique</span> range of luxury accessories, in a
                                    move away from being seen from a car manufacturer and instead as a luxury
                                    house.&nbsp;</span>
                                    </div> */}
                                <div dangerouslySetInnerHTML={htmlDesc}></div>
                            </div>
                        </div>
                    </div>
                    <div className="tree-child-wrapper" style={{ flex: 17 }}>
                        <div className="project-module module text project-module-text align- js-project-module e2e-site-project-module-text" style={{ paddingTop: '0px', paddingBottom: '0px', width: '90%', maxWidth: '800px', float: 'left', clear: 'both' }}>
                            <div className="rich-text js-text-editable module-text">
                                <div style={{ lineHeight: '24px' }} className="texteditor-inline-lineheight"><span style={{ fontFamily: 'Poppins', fontWeight: 500 }}><span style={{ color: '#ffffff' }} className="texteditor-inline-color"><span style={{ textTransform: 'uppercase' }}><span style={{ fontSize: '18px' }} className="texteditor-inline-fontsize"><span style={{ color: '#cfd0d4' }} className="texteditor-inline-color">Role:
                                </span></span></span></span></span><br /><span style={{ fontFamily: 'Poppins', fontWeight: 700 }}><span style={{ color: '#ffffff' }} className="texteditor-inline-color"><span style={{ textTransform: 'uppercase' }}><span style={{ fontSize: '18px' }} className="texteditor-inline-fontsize"><span className="texteditor-inline-color">{role}</span></span></span></span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescRole;