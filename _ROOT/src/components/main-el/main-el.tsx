/* Source of abbreviation of element (HTML element): 
"In the field of Computers and Technology, 'el' and 'nl' can have different meanings. 'El' can stand for 'element' or 'electronic', and 'nl' can represent 'newline' or 'network layer'."
https://brainly.com/question/39530098 
*/

import mainstyle from "../../styles/leo-lov-styling.module.css";
import { ImgComponentByMariePierreLessard } from "../atoms/img";
import Money from "../../assets/img/brock-wegner-o4jSaomEvJk-unsplash (1).jpg";
import Skyscrapers from "../../assets/img/armando-arauz-v_BWg0OnFmk-unsplash (1).jpg";

// #region Sources for concatenation/combination of CSS classes in React
/* The following combines a class from the CSS file with Tailwind styling (source: Kasper).
Interestingly, even though Tailwind is supposed to be inline styling with the highest specificity,
in this system, it is overriden by the styling in the CSS files.
<button className={style.buttonClass + " " + "shadow-2xl shadow-white"} onClick={handleClick}>Click me!</button>

It is also possible to concatenate CSS class names as follows:
"BlueKnight3108 (...)
<div className={`${styles.class1} ${styles.class2} ${styles.classN}`}>"
https://www.reddit.com/r/reactjs/comments/q1apj7/how_to_add_multiple_classes_to_classname_using/
I checked: it does work. However, since mixins are replacing the BEM conventions in my SCSS files,
I ended up not needing to combine classes.
*/
// #endregion

export const MainByMariePierreLessard = () => {
    return (
        <main className={mainstyle.wrapperByMariePierreLessard}>
            <div id="about">
                <section className={`${mainstyle.aboutGridByMariePierreLessard} ${mainstyle.secondaryWrapperByMariePierreLessard}`}>
                    <ImgComponentByMariePierreLessard src={Money} alt="Penge" />
                    <div>
                        <h2>Intet problem</h2>
                        <p>Leo-Lov har altid været det bedste advokatfirma i verden.
                            Der er simpelthen ingen der kan måle sig med os. Vi kan løse
                            alle problemer så længe du har penge. Hvis du mod alt
                            forventning skulle oplevel at støde på et retsligt problem
                            som Leo-Lov ikke kan løse får du halvdelen af beløbet igen.</p>
                        <p>Det er sådan vi har skabt en forretning der ikke kan andet
                            end at vokse!</p>
                    </div>
                </section>
                <section className={`${mainstyle.aboutGridByMariePierreLessard} ${mainstyle.secondaryWrapperByMariePierreLessard}`}>
                    <ImgComponentByMariePierreLessard src={Skyscrapers} alt="Skyskrabere" />
                    <div>
                        <h2>Her bor vi</h2>
                        <p>Leo-Lov har altid været det bedste advokatfirma i verden.
                            Der er simpelthen ingen der kan måle sig med os. Vi kan løse
                            alle problemer så længe du har penge. Hvis du mod alt
                            forventning skulle opleve at støde på et retsligt problem
                            som Leo-Lov ikke kan løse får du halvdelen af beløbet igen.</p>
                        <p>Det er sådan vi har skabt en forretning der ikke kan andet
                            end at vokse!</p>
                    </div>
                </section>
            </div>
        </main>
    );
};