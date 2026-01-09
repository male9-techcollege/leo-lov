import headerstyle from "../../styles/leo-lov-styling.module.css";

export const GlobalHeaderByMariePierreLessard = () => {
    /* The div inside of the header serves the purpose of maintaining the same empty space between the secondary nav and the first content of main.
    I don't want the secondary nav to stick out of the header and get into main. 
    
    A secondary navigation overlaps the hero section. 
    I put both the main and secondary navigations in a nav element since: 
    - the main nav has anchor links that lead further down the page, 
    - while the secondary nav appears to lead to lawyer profiles in different pages 
    (lawyers within a firm typically cover different areas of the law, i.e. they have different specialisations).
    */

    return (
        <header className={headerstyle.globalHeaderByMariePierreLessard}>
            <div className={headerstyle.heroAreaByMariePierreLessard}>
                <hgroup>
                    <h1><span className={headerstyle.leoBlueByMariePierreLessard}>Leo</span>&#8209;Lov</h1>
                    <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
                </hgroup>
                <nav>
                    <ul id="specialisations" className={headerstyle.secondaryNavByMariePierreLessard}>
                        <li>
                            <a href="javascript:void(0)">
                                <h2>Familieret</h2>
                                <p>Familieret er en ret alle har.
                                    Har du en familie har du
                                    sikkert ret til familieret.
                                    Medmindre du altid er den
                                    der tror du har ret. Så kan
                                    vi desværre ikke hjælpe dig.</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <h2>Ejendomsret</h2>
                                <p>Har du købt et hus og
                                    fortrudt eller er du blevet
                                    svindlet? Fortvivl ej. Vi kan
                                    hjælpe dig med at komme
                                    af med huset, eller
                                    eventuelt sagsøge
                                    vedkommende der solgte dig det.</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <h2>Konkurs</h2>
                                <p>Er du gået konkurs ville vi
                                    rigtig gerne hjælpe, men
                                    det kan vi desværre ikke. Vi
                                    er alle advokater med fede
                                    biler her så har du ingen
                                    penge får du ingen hjælp.</p>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <h2>Selskabsret</h2>
                                <p>Selskabsret. Ved du heller
                                    aldrig hvilken ret du skal
                                    servere til et stort selskab?
                                    Heller ikke os. Heldigvis har
                                    vi en mand i udlandet der
                                    ved en masse om dette så
                                    henvend dig i dag.</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};