"use client";

import { useState, useRef, useEffect } from "react";
import AdSenseAd from "./AdSenseAd";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=8s";

export function RickRollForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgPreview, setImgPreview] = useState("https://ext.same-assets.com/642781558/3054223831.png");
  const [type, setType] = useState("article");
  const [expiry, setExpiry] = useState("7");
  const [generatedLink, setGeneratedLink] = useState("");
  const [imgPreviewError, setImgPreviewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ytCopied, setYtCopied] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const imgTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Improved image preview handling
  const handleImgPreview = (url: string) => {
    setImgUrl(url);

    // Clear any existing timeout
    if (imgTimeoutRef.current) {
      clearTimeout(imgTimeoutRef.current);
    }

    if (url) {
      // Set a short delay to prevent excessive image loading attempts
      imgTimeoutRef.current = setTimeout(() => {
        const img = new Image();

        img.onload = () => {
          setImgPreview(url);
          setImgPreviewError("");
        };

        img.onerror = () => {
          setImgPreview("https://ext.same-assets.com/642781558/3054223831.png");
          setImgPreviewError("Error loading image. Please use a valid direct image URL.");
        };

        img.src = url;
      }, 300);
    } else {
      // If URL is empty, reset to default image
      setImgPreview("https://ext.same-assets.com/642781558/3054223831.png");
      setImgPreviewError("");
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (imgTimeoutRef.current) {
        clearTimeout(imgTimeoutRef.current);
      }
    };
  }, []);

  const generateRickroll = () => {
    if (!title) {
      alert("Please provide a title for your Rick Roll link.");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(2, 10);
      const linkType = type || "article";
      const domain = window.location.hostname === "localhost" ? "rickroll-link.net" : window.location.hostname;
      const mockLink = `https://${domain}/${linkType}/${randomId}/${encodeURIComponent(
        title.replace(/\s+/g, "-").toLowerCase()
      )}?exp=${expiry}`;

      setGeneratedLink(mockLink);
      setIsLoading(false);
    }, 800);
  };

  const copyToClipboard = () => {
    if (linkRef.current) {
      navigator.clipboard.writeText(linkRef.current.textContent || "")
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };

  const handleCopyYouTube = () => {
    navigator.clipboard.writeText(YOUTUBE_URL).then(() => {
      setYtCopied(true);
      setTimeout(() => setYtCopied(false), 1500);
    });
  };

  return (
    <div className="bg-zinc-900/60 rounded-lg p-6 md:p-8 shadow-xl backdrop-blur-sm">
      <div className="w-full mb-6">
        <AdSenseAd style={{ height: "90px" }} />
      </div>

      <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-1">Link Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter a convincing title (required)"
            maxLength={130}
            className="w-full p-3 bg-zinc-800/80 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-1">Description</label>
            <textarea
              id="description"
              placeholder="Add a description to make your link more believable (optional)"
              maxLength={155}
              rows={4}
              className="w-full p-3 bg-zinc-800/80 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="preview" className="block text-sm font-medium text-zinc-300 mb-1">Image Preview</label>
            <div className="h-full flex items-center justify-center">
              <img
                src={imgPreview}
                id="img-preview"
                className="bg-zinc-800/80 rounded-md object-cover w-full max-h-32"
                alt="preview"
              />
            </div>
          </div>
        </div>

        {imgPreviewError && (
          <div className="text-red-400 text-sm">
            {imgPreviewError}
          </div>
        )}

        <div>
          <label htmlFor="ImgUrl" className="block text-sm font-medium text-zinc-300 mb-1">Image URL</label>
          <input
            id="ImgUrl"
            type="url"
            placeholder="https://example.com/image.jpg (optional)"
            maxLength={500}
            className="w-full p-3 bg-zinc-800/80 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            autoComplete="off"
            value={imgUrl}
            onChange={(e) => handleImgPreview(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-zinc-300 mb-1">Content Type</label>
            <select
              name="type"
              id="type"
              className="w-full p-3 bg-zinc-800/80 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="article">Article</option>
              <option value="news">News</option>
              <option value="blog">Blog Post</option>
              <option value="download">Download</option>
              <option value="video">Video</option>
            </select>
          </div>

          <div>
            <label htmlFor="expiry" className="block text-sm font-medium text-zinc-300 mb-1">Link Expiry</label>
            <select
              name="expiry"
              id="expiry"
              className="w-full p-3 bg-zinc-800/80 border border-zinc-700 rounded-md text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            >
              <option value="1">1 day</option>
              <option value="7">7 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="365">1 year</option>
              <option value="never">Never expires</option>
            </select>
          </div>
        </div>

        {generatedLink && (
          <div className="mt-6 p-4 bg-zinc-800/80 rounded-md border border-zinc-700">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-zinc-300">Your Rick Roll Link</label>
              <button
                type="button"
                onClick={copyToClipboard}
                className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
            <a
              ref={linkRef}
              href={generatedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 break-all text-sm"
            >
              {generatedLink}
            </a>
          </div>
        )}

        {generatedLink && (
          <div className="mt-4 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center">
            <button
              type="button"
              onClick={handleCopyYouTube}
              className="flex items-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
              style={{ minWidth: 130 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0020 7V6a1 1 0 00-1-1H5a1 1 0 00-1 1v1a1 1 0 00.447.724L9 10m6 4l-6-4m6 4l-6-4m6 4H9" />
              </svg>
              {ytCopied ? "YouTube Link Copied!" : "Copy YouTube Link"}
            </button>
            <div className="text-xs text-zinc-400 font-mono truncate max-w-xs select-all">
              {YOUTUBE_URL}
            </div>
          </div>
        )}

        <button
          type="button"
          className={`w-full py-3 px-4 rounded-md font-medium text-white transition-all duration-200 ${
            isLoading
              ? "bg-blue-700 cursor-wait"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
          }`}
          onClick={generateRickroll}
          disabled={isLoading}
        >
          {isLoading ? "Generating Link..." : "Generate Rick Roll Link"}
        </button>
      </form>

      <div className="w-full mt-6">
        <AdSenseAd style={{ height: "90px" }} />
      </div>
    </div>
  );
}
