import React, { useEffect, useState } from 'react'
import { getBooks } from '../auth/auth';

export default function Card() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(data => {
            setBooks(data);
            console.log(data);
        });
    }, []);
    return (
        <div className='gap-3 flex justify-around'>
            {books.map((item) => (
                <div key={item.id} className='px-8 py-7  w-4/12 rounded-md bg-white'>
                    <b>{item.title}</b>
                    <ul className='mt-2 mb-3'>
                        <li>Cover: {item.cover} </li>
                        <li>Pages: {item.pages}</li>
                        <li>Published: {item.published}</li>
                        <li>Isbn: {item.isbn}</li>
                    </ul>
                    <div className='flex justify-between'>
                        <p>Eben Upton / 2012</p>
                        <div className='bg-red-600 rounded-md px-2 '>
                            <p className='text-xl text-white'>New</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className='px-8 py-7  w-4/12 rounded-md bg-white'>
                <b>Raspberry Pi User Guide</b>
                <ul className='mt-2 mb-3'>
                    <li>Cover: http://url.to.book.cover</li>
                    <li>Pages: 221</li>
                    <li>Published: 2012</li>
                    <li>Isbn: 9781118464465</li>
                </ul>
                <div className='flex justify-between'>
                    <p>Eben Upton / 2012</p>
                    <div className='bg-[#FFEC43] rounded-md px-2 '>
                        <p className='text-xl text-white'>Reading</p>
                    </div>
                </div>
            </div>
            <div className='px-8 py-7  w-4/12 rounded-md bg-white'>
                <b>Raspberry Pi User Guide</b>
                <ul className='mt-2 mb-3'>
                    <li>Cover: http://url.to.book.cover</li>
                    <li>Pages: 221</li>
                    <li>Published: 2012</li>
                    <li>Isbn: 9781118464465</li>
                </ul>
                <div className='flex justify-between'>
                    <p>Eben Upton / 2012</p>
                    <div className='bg-[#00FF29] rounded-md px-2 '>
                        <p className='text-xl text-white'>Finished</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
