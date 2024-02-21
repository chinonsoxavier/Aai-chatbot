"use client"
import Image from 'next/image'
import Link from 'next/link';
import React,{useState} from 'react'

const BlogsCard = (blog:any) => {
     const [hovered, setHovered] = useState<boolean>(false);
     const HandleHover = () => {
       setHovered((current) => !current);
     };
  return (
       <Link  href="/blog-details"> 
      <div
        className={`flex-1 relative transition-shadow duration-500 ${
          hovered ? "bg-white shadow-xl" : "bg-[#f7fafd]"
        }`}
        onMouseEnter={HandleHover}
        onMouseLeave={HandleHover}
      >
        <div className="w-full">
          <Image
            src={blog.blog.coverImage}
            alt={blog.blog.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative flex items-center justify-start">
          <div className="blog_date rounded-full absolute flex items-center justify-center text-white py-2 px-3 gap-1 left-5">
            <svg
            className='w-4 h-4 base:w-3 base:h-3'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <p className="text-xs mt-[2px] base:text-[10px]">{blog.blog.date}</p>
          </div>
        </div>
        <div className=" px-5 py-8">
          <h2 className="t text-xl text-darker_text base:text-lg mobile:text-base">{blog.blog.title}</h2>
          <p className="hc text-sm text-darker_text my-2">
            By{" "}
            <span className="font-light text-dark_text">
              {blog.blog.author}
            </span>
          </p>
          <p className="text-dark_text text-xs font-light leading-6 base:text-[10px]">
            {blog.blog.blogDetails}
          </p>
        </div>
      </div>
      </Link>
  );
}

export default BlogsCard