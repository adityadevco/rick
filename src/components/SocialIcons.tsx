"use client";
import { useEffect, useState } from "react";

export function SocialIcons() {
  const [shareUrl, setShareUrl] = useState<string | null>(null);

  useEffect(() => {
    setShareUrl(window.location.origin);
  }, []);

  const getSharingUrl = () => shareUrl || "https://rickroll-link.net";

  const socialLinks = [
    {
      id: "twitter",
      title: "Share on Twitter",
      className: "bg-[#1DA1F2] hover:bg-[#0c85d0]",
      href: `https://twitter.com/intent/tweet?text=Create%20custom%20Rick%20Roll%20links%20at%20${encodeURIComponent(getSharingUrl())}`,
      iconSrc: "https://ext.same-assets.com/642781558/2563901416.svg",
    },
    {
      id: "facebook",
      title: "Share on Facebook",
      className: "bg-[#1877F2] hover:bg-[#0c5ccc]",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getSharingUrl())}`,
      iconSrc: "https://ext.same-assets.com/642781558/548389142.svg",
    },
    {
      id: "email",
      title: "Share via Email",
      className: "bg-[#555] hover:bg-[#333]",
      href: `mailto:?subject=Rick%20Roll%20Link%20Generator&body=Check%20out%20this%20Rick%20Roll%20link%20generator:%20${encodeURIComponent(getSharingUrl())}`,
      iconSrc: "https://ext.same-assets.com/642781558/260646423.svg",
    },
    {
      id: "whatsapp",
      title: "Share via WhatsApp",
      className: "bg-[#25D366] hover:bg-[#1da84d]",
      href: `https://api.whatsapp.com/send?text=Check%20out%20this%20Rick%20Roll%20link%20generator:%20${encodeURIComponent(getSharingUrl())}`,
      iconSrc: "https://ext.same-assets.com/642781558/4061061103.svg",
    },
    {
      id: "reddit",
      title: "Share on Reddit",
      className: "bg-[#FF4500] hover:bg-[#cc3700]",
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(getSharingUrl())}&title=Rick%20Roll%20Link%20Generator`,
      iconSrc: "https://ext.same-assets.com/642781558/2320907649.svg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.className} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg transform hover:scale-110 opacity-${shareUrl ? 100 : 30}`}
          title={link.title}
          href={shareUrl ? link.href : undefined}
          aria-label={link.title}
          tabIndex={shareUrl ? 0 : -1}
          style={!shareUrl ? { pointerEvents: 'none' } : {}}
        >
          <span className="sr-only">{link.title}</span>
          <img
            src={link.iconSrc}
            alt=""
            width="20"
            height="20"
            className="w-5 h-5"
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}
