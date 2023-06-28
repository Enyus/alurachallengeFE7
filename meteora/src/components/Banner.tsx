import Image from "next/image";

export default function Banner() {

    return (
        <section className="bg-primary-purple">
            <Image 
                alt="Banner 1"
                src="/desktop/banner_carousel_1_1440.png"
                width={1440}
                height={415}
                className="object-fill"
            />
        </section>
    )
}