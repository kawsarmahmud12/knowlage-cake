import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [bookMartItems,setBookMarkItem] = useState([])
    const [readingTime,setReadingTime] = useState(0)

    useEffect( () => {
        fetch('db.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const countReadingTime = (blog) =>{
        const time = readingTime + blog.readTime;
        setReadingTime(time)
     }

    const addBookMark = (title) =>{
        const previous = [...bookMartItems]
        if(previous.includes(title)){
            toast.error('already added!')
        }
        else{
            const newBookMark = [...bookMartItems,title]
            setBookMarkItem(newBookMark)
        }
        
    }

    

    return (
        <div className='px-[100px]'>
            <div className="blogs-container grid grid-cols-3  mx-auto w-full gap-10">
                <div className="blogs-info col-span-2">
                    {/* <h2>this is blogs-info:{blogs.length}</h2> */}
                    {
                        blogs.map(blog => <Blog
                        key={blog.id}
                        blog = {blog}
                        addBookMark = {addBookMark}
                        countReadingTime = {countReadingTime}
                        ></Blog>)
                    }
                </div>
                <div className="blogs-sidebar text-[20px] mt-8">
                   <div className='bg-[#6047ec1d] border border-[#6047EC] rounded-xl px-12 py-[21px]'>
                      <h2 className='text-[#000] text-[20px] font-bold'>Spent time on read :{readingTime} min</h2>
                   </div>
                   <div className='bg-[#1111110D] p-[30px] mt-[24px] rounded-xl'>
                      <h3>BookMarked Blogs:{bookMartItems.length}</h3>
                        {
                            bookMartItems.map(bookMarkTitle => {
                                return ( <p key={bookMarkTitle} className='bg-white p-5 rounded-xl my-4'>{bookMarkTitle}</p>)
                            })
                        }
                   </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default Blogs;