import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Blog = (props) => {
    const {Author,avatars,image,publishDate,hashTags,readTime,title} = props.blog;

    const addBookMark = props.addBookMark;
    const countReadingTime = props.countReadingTime;
    return (
        <div className='px-4 border-b-2 py-4'>    
            <div>
              <img className='w-full h-[400px] max-w-[800px] my-5 rounded-xl'  src={image} alt={title} />
            </div>
            <div className='flex justify-between'>
                <div className='flex justify-between'>
                   <img className='w-12 h-12 rounded-full mr-3' src={avatars} alt="avatars"/>
                   <div>
                       <h3 className='text-[18px] font-[700]'>{Author}</h3>
                       <p className='text-[12px] font-[600] text-slate-500'>{publishDate}</p>
                   </div>
                </div>

                <div className='flex justify-between'>
                    <p className='pr-2 text-slate-500 items-center'>{readTime}min reads</p>
                    <div>
                      <FontAwesomeIcon onClick={() => addBookMark(title)} icon={faBookmark}/>
                    </div>
                </div>
            </div>
     
            <p className='text-[35px] font-[600] text-[#111111]'>{title}</p>
            <p className='text-[20px] font-[500]'>{hashTags}</p>
            <button onClick={() => countReadingTime(props.blog)} className="underline text-[#6047EC] mt-[10px]">Mark as read</button>
        </div>
    );
};

export default Blog;