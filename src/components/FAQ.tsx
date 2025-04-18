"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems: FAQItem[] = [
    {
      id: "what-is-rickrolling",
      question: "What is rickrolling?",
      answer: (
        <p>
          Rickrolling is an internet meme where someone tricks another person into clicking on a link that leads to
          the music video of Rick Astley's 1987 hit song "Never Gonna Give You Up". The prank is often played as a
          joke and has become a popular online phenomenon.
        </p>
      ),
    },
    {
      id: "how-to-create",
      question: "How do I create a custom link?",
      answer: (
        <p>
          To create a custom link, fill out the form above with a title, description (optional), and image URL (optional).
          Select your preferred content type and expiry setting, then click the "Generate Link" button.
          Your custom link will be created instantly.
        </p>
      ),
    },
    {
      id: "expiry-option",
      question: "What does the expiry option do?",
      answer: (
        <p>
          The expiry option allows you to set a time limit for your link. After the specified time period,
          the link will automatically stop working. This is useful for temporary pranks or time-sensitive jokes.
          If you want your link to work indefinitely, select "Never expires".
        </p>
      ),
    },
    {
      id: "content-types",
      question: "What are the different content types for?",
      answer: (
        <p>
          The content types (Article, News, Blog Post, etc.) help make your link more convincing.
          They change how the URL appears, making it look like a legitimate link to the specified type of content.
          Choose the content type that best fits your scenario to make the link more believable.
        </p>
      ),
    },
    {
      id: "images-not-working",
      question: "Why isn't my image showing up?",
      answer: (
        <p>
          For an image to display correctly, you must use a direct link to the image file (typically ending in .jpg, .png, .gif, etc.).
          Many websites don't allow direct linking to their images (known as hotlinking). Try using image hosting services like
          Imgur or Unsplash, which provide direct image links you can copy and paste into the Image URL field.
        </p>
      ),
    },
    {
      id: "mobile-compatibility",
      question: "Does this work on mobile devices?",
      answer: (
        <p>
          Yes! The links you generate work across all devices including smartphones, tablets, desktops, and laptops.
          When someone clicks your link on any device, they'll be redirected to the specified content.
        </p>
      ),
    },
    {
      id: "is-it-legal",
      question: "Is rickrolling legal?",
      answer: (
        <p>
          Rickrolling is generally considered harmless fun and not illegal. However, be mindful of how you use it.
          Don't use rickrolling in ways that could be considered harassment, deception for financial gain, or anything that
          violates terms of service of other platforms. Use responsibly and for humor purposes only.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border border-zinc-800 rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-zinc-800/50 text-zinc-100 flex justify-between items-center hover:bg-zinc-800/80 transition-colors"
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.question}</span>
              <span className="text-xl">{openItem === item.id ? '−' : '+'}</span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openItem === item.id ? '500px' : '0',
                opacity: openItem === item.id ? 1 : 0,
              }}
            >
              <div className="p-4 bg-zinc-900/60 text-zinc-300 text-sm">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
