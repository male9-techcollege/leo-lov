interface ImgInterfaceByMariePierreLessard {
    src: string;
    alt: string;
};

export const ImgComponentByMariePierreLessard = (props: ImgInterfaceByMariePierreLessard) => {
    return(
        <img src={props.src} alt={props.alt} />
    );
};
