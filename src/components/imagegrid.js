import React from "react";

function ImageGrid({ imgurls }) {
    return (
        <>

            <div className="project-module module media_collection project-module-media_collection" data-id="m63b4402589dfd13d7a4dc3a7fa39aea128fa61ecb2f2a3d019b2b" style={{ paddingTop: '30px', paddingBottom: '0px' }}>
                <div className="grid--main js-grid-main grid--ready" data-grid-max-images={3}>
                    {imgurls.map((url, index) => {
                        return (
                            <>
                                <div className="grid__item-container js-grid-item-container lightbox-link hoverable" data-flex-grow={390} style={{ width: '430px', flexGrow: 390 }} data-width={1920} data-height={1280}>
                                    <img className="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded" src={url}  />
                                    <span className="grid__item-filler" style={{ paddingBottom: '66.666666666667%' }} />
                                </div>
                            </>
                        )
                    })}

                    {/* <div className="grid__item-container js-grid-item-container lightbox-link hoverable" data-flex-grow={390} style={{ width: '430px', flexGrow: 390 }} data-width={1920} data-height={1280}>
                        <img className="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/293df4bc-cf77-44f3-a522-8b489a2b9002_rw_1920.jpg" srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/293df4bc-cf77-44f3-a522-8b489a2b9002_rw_600.jpg?h=f8b5f2947d71b5d43c1a0f2e2d6e382a 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/293df4bc-cf77-44f3-a522-8b489a2b9002_rw_1200.jpg?h=615f2debdaeb0c7bc5950ec44bc6ca1a 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/293df4bc-cf77-44f3-a522-8b489a2b9002_rw_1920.jpg?h=4522f887ec84d748685d4722314dd332 1920w," />
                        <span className="grid__item-filler" style={{ paddingBottom: '66.666666666667%' }} />
                    </div>
                    <div className="grid__item-container js-grid-item-container lightbox-link hoverable" data-flex-grow={390} style={{ width: '430px', flexGrow: 390 }} data-width={1920} data-height={1280}>
                        <img className="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/79a1b1f5-1584-4704-b22e-39fda1e545d4_rw_1920.jpg" srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/79a1b1f5-1584-4704-b22e-39fda1e545d4_rw_600.jpg?h=3d94245f78484cc5c877414bee149988 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/79a1b1f5-1584-4704-b22e-39fda1e545d4_rw_1200.jpg?h=bcf8eeb01af60d61b600a6429f4dcf29 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/79a1b1f5-1584-4704-b22e-39fda1e545d4_rw_1920.jpg?h=e35a0c8a15e078fb0b94bdce90dbefd9 1920w," />
                        <span className="grid__item-filler" style={{ paddingBottom: '66.666666666667%' }} />
                    </div>
                    <div className="grid__item-container js-grid-item-container lightbox-link hoverable" data-flex-grow={390} style={{ width: '647px', flexGrow: 390 }} data-width={1920} data-height={1280}>
                        <img className="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/2cc26c6f-b8bf-4ec2-86ff-186e6471ebe5_rw_1920.jpg" srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/2cc26c6f-b8bf-4ec2-86ff-186e6471ebe5_rw_600.jpg?h=a8a81d11adc4fc06a1176683bca50106 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/2cc26c6f-b8bf-4ec2-86ff-186e6471ebe5_rw_1200.jpg?h=62b0b16e551b6a853144451b9c2659da 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/2cc26c6f-b8bf-4ec2-86ff-186e6471ebe5_rw_1920.jpg?h=a26a276cecb7f97e5a9d84a042ac9e95 1920w," />
                        <span className="grid__item-filler" style={{ paddingBottom: '66.666666666667%' }} />
                    </div>
                    <div className="grid__item-container js-grid-item-container lightbox-link hoverable" data-flex-grow={390} style={{ width: '647px', flexGrow: 390 }} data-width={1920} data-height={1280}>
                        <img className="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy image-loaded" src="./Jack Cole - This Is Rolls-Royce_files/4caaf75d-df62-4a47-8ca7-347b8dc9771d_rw_1920.jpg" srcSet="https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/4caaf75d-df62-4a47-8ca7-347b8dc9771d_rw_600.jpg?h=ea3d71168d8e5611696e776a340f8747 600w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/4caaf75d-df62-4a47-8ca7-347b8dc9771d_rw_1200.jpg?h=29f512075f259b094d8cb2cc4d090508 1200w,https://cdn.myportfolio.com/73096b60-5650-4a8d-9d7c-f05a47b7ccfe/4caaf75d-df62-4a47-8ca7-347b8dc9771d_rw_1920.jpg?h=c26f2123eb0d68c068ab680610c078bb 1920w," />
                        <span className="grid__item-filler" style={{ paddingBottom: '66.666666666667%' }} />
                    </div> */}
                    <div className="js-grid-spacer" />
                </div>
            </div>
        </>
    )
}

export default ImageGrid;