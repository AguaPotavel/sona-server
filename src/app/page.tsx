"use client";


import AppInfo from "./(home-components)/appInfo";
import HomeDescription from './(home-components)/description';
import Header from './(home-components)/header';
import SonaInfo from "./(home-components)/sonaInfo";
import Video from "./(home-components)/video";

import Footer from "./_shared/components/footer";


export default function Home() {
  
  const handleDownloadLastVersion = () => {
    window.location.href = process.env.NEXT_PUBLIC_DOWNLOAD_URL!;
  };


  return (
    <main className="flex min-h-screen w-screen flex-1 flex-col items-center justify-between gap-8 bg-slate-950">
      
      <Header/>

      <HomeDescription/>

      <div className="w-5/6 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950"></div>

      <SonaInfo />

      <AppInfo/>

      <div className="w-5/6 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950"></div>

      <Video />

      <Footer />
    </main>
  );
}
