import { Blogs } from '@/constants'
import AnimationWidget from '@/widgets/AnimationWidget'
import BigText from '@/widgets/BigText'
import Text from '@/widgets/Text'
import React from 'react'
import BlogsCard from './BlogsCard'

const NewsBlog = () => {
  return (
    <div className='w-full flex items-center justify-center mt-[10%] py-20 base:py-10' >
        <div className='max-width flex items-center justify-center flex-col' >
            <BigText text='The News From Our Blog' textStyles='base:text-2xl' />
            <AnimationWidget/> 
            <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' textStyles='text-center max-w-2xl base:text-xs' />
            <div className='flex items-center justify-center w-full gap-5 flex-wrap py-10' >
                {Blogs.map((blog,index)=>(
                    <BlogsCard blog={blog} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewsBlog