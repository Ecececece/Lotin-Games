import Image from 'next/image';

export default function Home() {
   return (
      <div className="w-screen flex justify-center">
         <div className="homeMainScreen">
            <div className="homeContent">
               <div className="homeIMGScroll">
                  <Image src="/leftArrow.svg" alt='leftArrow' className="homeArrow left-0" />
                  <Image src="/rightArrow.svg" alt='rightArrow' className="homeArrow right-0" />
                  <Image src="/home1.jpg" alt='home1' className="homeIMG" />
               </div>
               <div className="homeText">Dijital Dünyada Gerçek Masa Oyunu Keyfi,<u>LOTIN!!</u></div>
            </div>

            <div className="homeContent mt-10">
               <div className="homeText">Çok Yakında! <br />Klasik Okey - Okey I0I</div>
               <Image src="/home2.jpg" alt='home1' className="homeIMG" />
            </div>

            <div className="homeContent mt-10">
               <Image src="/home3.jpg" alt='home1' className="homeIMG" />
               <div className="homeText">Çok Yakında! <br />Dama ve Satranç!</div>
            </div>
         </div>
      </div>
   );
}
