import Image from "next/image";

export default function Logo () {
    return (
        <div className="relative h-4 md:h-6 w-28 md:w-36 ml-6 mr-10 md:mr-4">
            <picture>
                <source
                srcSet="/desktop/logo_desktop.png"
                media="(min-width: 1024px)"
                />
                <source
                srcSet="/tablet/logo_tablet.png"
                media="(min-width: 768px)"
                />
                <Image
                    alt="Logo da loja Meteora"
                    src="/mobile/logo_mobile.png"
                    fill
                    sizes="(min-width: 768px) 100px, (min-width: 1024px) 130px, 125px"
                />
            </picture>
        </div>
    );
}