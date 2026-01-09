import mainnavstyle from "../../styles/leo-lov-styling.module.css";

export const MainNavByMariePierreLessard = () => {
    /* Source for way to fold regions in .jsx files: https://stackoverflow.com/questions/58882591/region-for-jsx */
    // #region Source of HTML entities (non-breaking hyphen, non-breaking space...)
    // https://www.w3schools.com/html/html_entities.asp
    // #endregion

    return (
        <div className={mainnavstyle.flyoutContainerByMariePierreLessard}>
            <a href="./leo-lov-index.html#top" className={mainnavstyle.navLogoByMariePierreLessard}>
                <span className={mainnavstyle.leoBlueByMariePierreLessard}>Leo</span><span>&#8209;Lov</span>
            </a>
            <nav className={mainnavstyle.navContainerByMariePierreLessard}>
                <ul className={mainnavstyle.mainNavByMariePierreLessard}>
                    <li><a href="./leo-lov-index.html#top">Hjem</a></li>
                    <li><a href="./leo-lov-index.html#specialisations">Specialer</a></li>
                    <li><a href="./leo-lov-index.html#about">Om Leo-Lov</a></li>
                    <li><a href="./leo-lov-index.html#contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    );
};