import footerstyle from "../../styles/leo-lov-styling.module.css";

/* Source of SoMe icons: Figma design */
export const GlobalFooterByMariePierreLessard = () => {
    return (
        <>
            <footer id="contact" className={footerstyle.globalFooterByMariePierreLessard}>
                <div className={footerstyle.footerGridByMariePierreLessard}>
                    <section className={footerstyle.gFooterInfoGridByMariePierreLessard}>
                        <h2>Adresse</h2>
                        <p>Find os her:</p>
                        <ul>
                            <li>Vestervænget 232, 30.sal</li>
                            <li>6574 Øster Nørup</li>
                            <li>Danmark</li>
                        </ul>
                    </section>
                    <section className={footerstyle.gFooterInfoGridByMariePierreLessard}>
                        <h2>Kontakt</h2>
                        <p>Kontakt os her:</p>
                        <address>
                            <ul>
                                <li><a href="mailto:email@mail.dk">email@mail.dk</a></li>
                                <li>Tlf.: <a href="tel:+4501923023">0192 3023</a></li>
                            </ul>
                        </address>
                    </section>
                    <section className={footerstyle.gFooterInfoGridByMariePierreLessard}>
                        <h2>Politik</h2>
                        <p>Vores politikker:</p>
                        <ul>
                            <li><a href="javascript:void(0)">Privatlivspolitik</a></li>
                            <li><a href="javascript:void(0)">Cookiepolitik</a></li>
                            <li><a href="javascript:void(0)">Generelle betingelser</a></li>
                        </ul>
                    </section>
                    <section className={footerstyle.soMeGridByMariePierreLessard}>
                        <h2>Sociale medier</h2>
                        <ul className={footerstyle.someNavByMariePierreLessard}>
                            <li>
                                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">
                                    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 40.6655C19.1766 40.6655 16.3808 40.1461 13.7723 39.1368C11.1638 38.1276 8.79366 36.6483 6.7972 34.7834C4.80074 32.9186 3.21707 30.7047 2.13659 28.2681C1.05611 25.8315 0.5 23.2201 0.5 20.5828C0.5 17.9455 1.05611 15.334 2.13659 12.8974C3.21707 10.4609 4.80074 8.24696 6.7972 6.3821C8.79366 4.51725 11.1638 3.03796 13.7723 2.02871C16.3808 1.01946 19.1766 0.5 22 0.5C27.7022 0.5 33.1708 2.61586 37.2028 6.3821C41.2348 10.1484 43.5 15.2565 43.5 20.5828C43.5 25.909 41.2348 31.0172 37.2028 34.7834C33.1708 38.5497 27.7022 40.6655 22 40.6655ZM22 40.6655V17.7138C22 16.192 22.6472 14.7325 23.7992 13.6565C24.9512 12.5804 26.5137 11.9759 28.1429 11.9759H29.6786M14.3214 23.4517H29.6786" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">
                                    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7857 16.2793V30.6241M31.2143 30.6241V23.4517C31.2143 21.9299 30.5671 20.4705 29.4151 19.3944C28.2631 18.3183 26.7006 17.7138 25.0714 17.7138C23.4422 17.7138 21.8798 18.3183 20.7278 19.3944C19.5758 20.4705 18.9286 21.9299 18.9286 23.4517V30.6241V16.2793M11.25 11.9759H14.3214M3.57143 0.5H40.4286C41.2432 0.5 42.0244 0.802265 42.6004 1.3403C43.1764 1.87834 43.5 2.60807 43.5 3.36897V37.7966C43.5 38.5575 43.1764 39.2872 42.6004 39.8252C42.0244 40.3633 41.2432 40.6655 40.4286 40.6655H3.57143C2.75684 40.6655 1.97561 40.3633 1.3996 39.8252C0.823596 39.2872 0.5 38.5575 0.5 37.7966V3.36897C0.5 2.60807 0.823596 1.87834 1.3996 1.3403C1.97561 0.802265 2.75684 0.5 3.57143 0.5Z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </footer>
            <div className={footerstyle.noticesByMariePierreLessard}>
                <div className={footerstyle.wrapperByMariePierreLessard}>
                    <div className={footerstyle.secondaryWrapperByMariePierreLessard}>
                        <p className={footerstyle.copyrightNoticeByMariePierreLessard}>
                            <small>© Copyright 2025. Kodning af Marie-Pierre Lessard <a href="./LICENSE.txt" target="_blank" rel="noopener noreferrer">(se vilkår)</a>. Materialer og forsidens design forsynet af TechCollege, Aalborg, Danmark.</small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};