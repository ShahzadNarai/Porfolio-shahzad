import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import Marquee from "@/components/Marquee";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} fix-bg`}>
      <div className="Ellipse1"></div>
      <div className="Ellipse2"></div>
      <div className="container">
        <button className="menu-toggle-button">Menu btn</button>
        <div className="side-menu">
          <div className="profile-img-main">
            <Image src={"/profile-img.png"} alt="profile-img" width={210} height={180}/>
            <h1 className="text-2xl pt-4 pb-1 mb-2">Shahzad Ali</h1>
            <h2 className="mb-2">MERN/Stack Developer</h2>
          </div>
          <div className="menu-list-main">
            <ul className="mb-4">
              <li className="border-t border-gray-500 py-2.5 px-5">
                <Link
                  href={"/"}
                  style={{
                    color: "var(--8, #909090)",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    lineHeight: "24px",
                  }}
                  className="flex items-center gap-3 list-none text-base font-medium text-[#909090]"
                >
                  Home
                </Link>
              </li>
              <li className="border-t border-gray-500 py-2.5 px-5">
                <Link
                  href={"/"}
                  style={{
                    color: "var(--8, #909090)",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    lineHeight: "24px",
                  }}
                  className="flex items-center gap-3 list-none text-base font-medium text-[#909090]"
                >
                  About
                </Link>
              </li>
              <li className="border-t border-gray-500 py-2.5 px-5">
                <Link
                  href={"/"}
                  style={{
                    color: "var(--8, #909090)",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    lineHeight: "24px",
                  }}
                  className="flex items-center gap-3 list-none text-base font-medium text-[#909090]"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div id="wrap">
            <Link className="btn-slide" href="/"> <span className="circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path class="download-svg" d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z" fill="white"></path></svg></span> <span className="title">Download Cv</span> </Link>
          </div>
        </div>
        <div className="main-containe">
          <section className="section-one overflow-hidden">
            <div className="row">
              <div className="flex flex-col w-1/2">
                <h2 className="text-[80px] leading-[90px]">Shahzad Ali</h2>
                <h3 className="text-[24px] font-medium leading-9 py-5 text-[#ff759c]">
                  MERN/Stack Developer
                </h3>
                <p className="best">
                  We appreciate your trust greatly our clients choose us & our
                  products because they know we are the best.
                </p>
                <div className="section-one-btns-main">
                  <div className="wrapper">
                    <Link href={"/#"} className="btn-hover">
                      View Work
                    </Link>
                  </div>
                  <div className="wrapper">
                    <Link href={"/#contact"} className="btn-hover btn-hover2">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-1/2 relative">
                <Image
                  className="flower"
                  alt="flower"
                  src={"/download.png"}
                  width={37}
                  height={37}
                />
                <Image
                  className="circular-img"
                  src={"/visual.png"}
                  alt="circular-img"
                  width={120}
                  height={120}
                />
                <Image
                  className="jessica-main-img "
                  src={"/jessica.png"}
                  width={434}
                  height={434}
                />
                <div className="worked-box">
                  <p class="worked-more mb-4">
                    Worked with more than 100 people
                  </p>
                  <div className="client-img-main relative">
                    <Image
                      src={"/client.jfif"}
                      width={40}
                      height={40}
                      className="client-img relative"
                    />
                    <Image
                      src={"/client.jfif"}
                      width={40}
                      height={40}
                      className="client-img client-img2"
                    />
                    <Image
                      src={"/client.jfif"}
                      width={40}
                      height={40}
                      className="client-img client-img3"
                    />
                    <Image
                      src={"/client.jfif"}
                      width={40}
                      height={40}
                      className="client-img client-img4"
                    />
                    <p className="worked-more worked-more2">100+ Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <Marquee />
          </section>
            <section class="About-section jos" id="about">
              <div class="heading-container">
                <h2 class="section-heading-text about-me">
                  About Me.
                </h2>
                <div class="line"></div>
              </div>
              <p class="section-sub-text about-sub-text mb-4">
                Hi, my name is <span>Shahzad Ali</span> and I began using
                React.Js when first began. I've spent most of my waking hours
                for the last ten years designing, programming and operating
                React.Js sites go beyond with exclusive designer. Apart from
                this I love to travel, mentor designers, review design
                portfolios &amp; read books on everything related to design. I
                have also given design talks in various educational
                institutions. So I love creating creative content, and you can
                find most of my works here.
              </p>
              <div class="about-detail-main">
                <p class="about-detail">Name</p>
                <p class="about-detail-info">Shahzad Ali</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Nationality</p>
                <p class="about-detail-info">Pakistan</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Phone</p>
                <p class="about-detail-info email">(+92) 0331 3666 399</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Email</p>
                <p class="about-detail-info email">shahzadnarainarai@gmail.com</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Experience</p>
                <p class="about-detail-info">1.5+ years</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Freelance</p>
                <p class="about-detail-info">Available</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Skype</p>
                <p class="about-detail-info">shahzadalinarai@hotmail.com</p>
              </div>
              <div class="about-detail-main">
                <p class="about-detail">Language</p>
                <p class="about-detail-info">English</p>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
}
