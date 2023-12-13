import React from "react";
import { Link } from 'react-router-dom'

function NextProjectButton({nextLink}) {
    return (
        <>

            <div className="js-project-module project-module module button project-module-button" data-id="m6399fe6685839970b67c795bbc043e66edfc90db24a0d0283c08c" style={{ maxWidth: '400px', paddingTop: '20px', paddingBottom: '0px' }}>
                <div className="button-container" style={{ textAlign: 'center' }}>
                    <Link to="/" className="button-module preserve-whitespace--nowrap">Next project &gt;</Link>
                </div>
            </div>
        </>
    )
}

export default NextProjectButton;