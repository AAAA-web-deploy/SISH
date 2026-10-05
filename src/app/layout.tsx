import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "SI, Still Human",
  description:
    "SuperIntelligence assists. Human experience, intuition, and judgment lead.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Script id="contract-copy" strategy="beforeInteractive">
          {`document.addEventListener("click",function(event){
var button=event.target&&event.target.closest&&event.target.closest(".token-copy-btn");
if(!button)return;
var value=button.getAttribute("data-copy");
if(!value)return;
var label=button.querySelector("[data-copy-label]");
var done=function(){
button.setAttribute("data-copied","true");
button.setAttribute("aria-label","Contract address copied");
if(label)label.textContent="Copied";
window.setTimeout(function(){
button.setAttribute("data-copied","false");
button.setAttribute("aria-label","Copy contract address");
if(label)label.textContent="Copy";
},1600);
};
var fallback=function(){
var area=document.createElement("textarea");
area.value=value;
area.setAttribute("readonly","");
area.style.position="fixed";
area.style.left="-9999px";
document.body.appendChild(area);
area.select();
try{document.execCommand("copy");}catch(e){}
area.remove();
done();
};
var write=navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(value);
if(!write){fallback();return;}
var settled=false;
var timer=window.setTimeout(function(){if(!settled){settled=true;fallback();}},250);
write.then(function(){if(settled)return;settled=true;window.clearTimeout(timer);done();}).catch(function(){if(settled)return;settled=true;window.clearTimeout(timer);fallback();});
});`}
        </Script>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
