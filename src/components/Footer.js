import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return ( 
        <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <div>
            <h4 class="text-2xl pb-4 text-gray-500 font-bold">BadBanana🍌</h4>
            <p class="text-gray-500">
                1234 BadBanana Street<br/>
                Banana, NW10 7TK <br/>
                United Kingdom <br/><br/>
                <strong>Phone:</strong> 020 8430 6784<br/>
                <strong>Email:</strong> BadBananaInquiries@gmail.com<br/>
            </p>
            </div>
            <div>
            <h4 class="pb-4 text-gray-500 font-bold">Useful Links</h4>
            <ul class="items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 pb-4">
                <li class="pb-4">
                <i class="fa fa-chevron-right text-amber-200"></i>
                    <a href="/about" class="mr-4 hover:underline md:mr-6 "> About</a>
                </li>
                <li class="pb-4">
                <i class="fa fa-chevron-right text-amber-200"></i>
                    <a href="/about" class="mr-4 hover:underline md:mr-6"> Privacy Policy</a>
                </li>
                <li class="pb-4">
                <i class="fa fa-chevron-right text-amber-200"></i>
                    <a href="/about" class="mr-4 hover:underline md:mr-6"> Licensing</a>
                </li>
                <li class="pb-4">
                <i class="fa fa-chevron-right text-amber-200"></i>
                    <a href="/about" class="hover:underline"> Contact</a>
                </li>
            </ul>
            </div>
            <div class= "mb-5">
                <h4 class="pb-4 text-gray-500 font-bold">Join And Subscribe</h4>
                <p class="text-gray-500 pb-2">Join 30,000+ others and never miss out on new movies</p>
            <form class="flex flex-row flex-wrap">
                <input type="text" class="text-gray-500 w-2/3 p-2 bg-gray-200 focus:border-yellow-500" placeholder="email@example.com"/>
                <button class="p-2 w-1/3 bg-amber-200 text-white hover:bg-yellow-600">Subscribe</button>
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 my-6">© 2023 <a href="https://www.rottentomatoes.com/" class="hover:underline">BadBanana™</a>. All Rights Reserved.
            </span>
            </form>
            </div>
        </footer>
);
};

export default Footer;