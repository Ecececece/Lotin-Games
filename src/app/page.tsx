export default function Home() {
   return (
      <div className="w-screen flex justify-center">
         <div className="mainScreen">
            <div className="homeContent">
               <div className="homeIMGScroll">
                  <img src="/leftArrow.svg" className="homeArrow left-0"/>
                  <img src="/rightArrow.svg" className="homeArrow right-0"/>
                  <img src="/home1.jpg" className="homeIMG"/>
               </div>
               <div className="homeText">Dijital Dünyada Gerçek Masa Oyunu Keyfi,<u>LOTIN!!</u></div>
            </div>

            <div className="homeContent mt-10">
            <div className="homeText">Çok Yakında! <br />Klasik Okey - Okey I0I</div>
               <div className="homeIMGScroll">
                  <img src="/leftArrow.svg" className="homeArrow left-0"/>
                  <img src="/rightArrow.svg" className="homeArrow right-0"/>
                  <img src="/home2.jpg" className="homeIMG"/>
               </div>
            </div>
         </div>
      </div>
   );
}
