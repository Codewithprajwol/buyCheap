import React from 'react';
import { Facebook, Twitter, Rss, Mail } from 'lucide-react'; // Using Mail as a substitute for Google Plus

// You can define your link data here or pass it as props


const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        // You would typically get form data using refs or state
    };

    const socialMediaIcons = [
        { IconComponent: Facebook, label: 'Facebook', href: '#' },
        { IconComponent: Mail, label: 'Contact / Share', href: '#' }, // Lucide doesn't have Google Plus; Mail or Share2 are alternatives
        { IconComponent: Twitter, label: 'Twitter', href: '#' },
        { IconComponent: Rss, label: 'RSS', href: '#' },
    ];

    return (
        <footer className="bg-gray-50 pt-12 md:pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-10 md:mb-12">
                    {/* About Column - Spanning more on larger screens for balance */}
                    <div className=""> {/* md:col-span-2 makes it full width on medium */}
                        {/* Replace with your actual logo */}
                        <img src="https://i.imgur.com/K185K6w.png" alt="SUBAS Logo" className="h-9 sm:h-10 mb-5 sm:mb-6" />
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the subas industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            When an unknown printer took a galley of type and If you are going to use a passage of
                            Lorem Ipsum scrambled it to make.
                        </p>
                        <div className="flex space-x-3">
                            {socialMediaIcons.map(({ IconComponent, label, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center text-gray-500 border border-gray-300 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors duration-300"
                                >
                                    <IconComponent size={18} strokeWidth={2} /> {/* Lucide icon usage */}
                                </a>
                            ))}
                        </div>
                    </div>


                    {/* Get in Touch Column */}
                    <div className=""> {/* md:col-span-2 makes it full width on medium */}
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-5 relative pl-3">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-orange-500"></span>
                            Get In Touch
                        </h4>
                        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name here..."
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email here..."
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white placeholder-gray-400"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white resize-none placeholder-gray-400"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white font-semibold py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors duration-300 uppercase text-xs sm:text-sm cursor-pointer"
                                >
                                    Submit Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center pt-6 sm:pt-8 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-500">
                        © {new Date().getFullYear()} Buy Cheap. All Rights Reserved. Designed by Buy Cheap!
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;