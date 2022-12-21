import React from 'react';

const Bottomcard = () => {
    return (
        <div>
            <section class="bg-white mt-10 w-[90%] m-auto mb-10 rounded-md dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:-mx-6 lg:flex lg:items-center">
                        <img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_IkNXGfV_hgEYik_y1V9RdpwG1OD3EusMzQ&usqp=CAU" alt="" />

                        <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p class="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-96">
                                Help us improve our productivity
                            </h1>

                            <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a. ”
                            </p>

                            <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>

                            <div class="flex items-center justify-between mt-12 lg:justify-start">
                                <button title="left arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button title="right arrow" class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bottomcard;