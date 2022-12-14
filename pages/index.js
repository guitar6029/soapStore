import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hand-Made Soap E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex_column">
        <Nav />
        <section className="flex_row_centered">
          <div className={style.image_container}>
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1605264964528-06403738d6dc.avif"
                width={500}
                height={500}
                alt="soap"
              />
            </div>

            <div className={style.main_title_container}>
              <h3 className={style.main_title}>beautifully handmade soaps</h3>
              <h5 className={style.main_title_sub}>
                Organic and made just for you.
              </h5>
              <Link href="/shop">
                <a className={`${style.link} ${style.link_hover_effect}`}>SHOP NOW</a>
              </Link>
            </div>
          </div>
        </section>
        <section className={style.favorites}>
          <h3 className={style.section_main_title}>MOST POPULAR</h3>
          <div className={style.favorite_item_container}>
            <div className={style.favorite_item_description}>
              <h3>Probiotic Soap Bars</h3>
              <p>Short description</p>
              <Link href="/shop/soap/bars">
                <a className={`${style.link} ${style.link_hover_effect}`}>SHOP SOAP BARS</a>
              </Link>
            </div>
            <div className={style.favorite_item_img}>
              <div className={style.image_wrapper}>
                <Image
                  src="/images/photo-1612800083273-24ea5c80313d.avif"
                  width={500}
                  height={500}
                  alt="soap"
                />
              </div>
            </div>
          </div>
          <div className={style.favorite_item_container}>
            <div className={style.favorite_item_img}>
              <div className={style.image_wrapper}>
                <Image
                  src="/images/photo-1532592068623-db1978e40df5.avif"
                  width={500}
                  height={500}
                  alt="soap"
                />
              </div>
            </div>
            <div className={style.favorite_item_description}>
              <h3>Probiotic Soap Bars</h3>
              <p>Short description</p>
              <Link href="/shop/soap/bar">
                <a className={`${style.link} ${style.link_hover_effect}`}>SHOP SOAP BARS</a>
              </Link>
            </div>
          </div>
        </section>
        <h3 className={style.section_main_title}>KEEP IT SIMPLE</h3>
        <section className={`${style.favorites} ${style.simple}`}>
          <div className={style.favorites_main_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet quam nec lorem consectetur maximus. Nunc varius posuere justo,
            et lobortis eros aliquam eu. Phasellus non mauris sed est posuere
            placerat non sed sem. Donec non congue mi, vitae aliquam elit. Sed
            placerat eros nibh, sit amet aliquet velit eleifend id. Vivamus est
            ante, aliquet ac efficitur ut, ullamcorper in eros. Quisque eleifend
            lorem sed felis porttitor, et euismod velit consectetur.
          </div>
          <div className={`${style.flex_row_centered} ${style.simple}`}>
            <div className={style.simple_item_description}>
              <p>
                Sed placerat eros nibh, sit amet aliquet velit eleifend id.
                Vivamus est ante, aliquet ac efficitur ut, ullamcorper in eros.
              </p>
            </div>
            <div className={style.simple_img_container}>
              <div className={style.image_wrapper}>
                <Image
                  src="/images/photo-1624459310487-47049146e35b.avif"
                  width={500}
                  height={500}
                  alt="soap"
                />
              </div>
            </div>
          </div>
          <Link href="/about">
          
            <a className={`${style.link} ${style.link_relative} ${style.link_hover_effect}`}>LEARN MORE</a>
          </Link>
        </section>
        <section className={style.grid_3_4}>
          <div className={`${style.grid_title} ${style.section_main_title}`}>
            #BRAND
          </div>
          <div
            className={`${style.area1} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1624459310487-47049146e35b.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area2} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1584305574647-0cc949a2bb9f.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area3} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1590439471364-192aa70c0b53.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area4} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1600857544200-b2f666a9a2ec.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area5} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1607006633821-b8b0f6988295.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area6} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1612800083273-24ea5c80313d.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area7} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1612800083994-d568da6256ba.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            className={`${style.area8} ${style.area_container} ${style.area_image}`}
          >
            <div className={style.image_wrapper}>
              <Image
                src="/images/photo-1618840313409-66c0d92d6f26.avif"
                alt="soap"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
