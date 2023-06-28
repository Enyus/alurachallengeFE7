import Image from "next/image";

export default function Banner() {

    return (
        <section className="bg-primary-purple">
            <picture>
                <source srcSet="/desktop/banner_carousel_1_1440.png" media="(min-width: 1024px)" />
                <source srcSet="/tablet/banner_carousel_1_768.png" media="(min-width: 768px)" />
                <Image 
                    alt="Banner 1"
                    src="/mobile/banner_carousel_1_ 375.png"
                    width={1440}
                    height={415}
                    className="object-fill"
                />
            </picture>
        </section>
    )
}