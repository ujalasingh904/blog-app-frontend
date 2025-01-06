import React, { useEffect } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SignedIn, SignedOut, useAuth, UserButton, useUser, SignInButton } from '@clerk/clerk-react';
import { toast } from 'react-toastify';



const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const { user, isSignedIn } = useUser();
    const { getToken } = useAuth();

    // useEffect(() => {
    //     getToken().then((token) => {
    //         console.log("token is ", token);
    //     })
    // })

    useEffect(() => {
        const createUser = async (user) => {
            try {
                if (!user) return;
                await axios.post(`${import.meta.env.VITE_API_URL}/authUsers`, user);

            } catch (error) {
                if (error.response?.status === 200) {
                    toast.error("User already exists.");
                } else {
                    toast.error("Error creating user:", error.message);
                }
            }
        };

        if (user) {
            createUser(user);
        }
    }, [user]);


    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
             
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image src="logo.png" alt="Lama Logo" w={32} h={32} />
                <span>Blog verse</span>
            </Link>
             
            <div className="md:hidden">
                 
                <div
                    className="cursor-pointer text-4xl"
                    onClick={() => setOpen((prev) => !prev)}
                >
                     
                    <div className="flex flex-col gap-[5.4px]">
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "rotate-45"
                                }`}
                        ></div>
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${open && "opacity-0"
                                }`}
                        ></div>
                        <div
                            className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${open && "-rotate-45"
                                }`}
                        ></div>
                    </div>
                </div>
                 
                <div
                    className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out z-10 ${open ? "-right-0" : "-right-[100%]"
                        }`}
                >
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>Trending</Link>
                    <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
                    <Link to="/posts?sort=saved" onClick={() => setOpen(false)}>Saved posts</Link>
                    <Link to="/write" onClick={() => setOpen(false)}>Write a blog</Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                Login 👋
                            </button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>

                </div>
            </div>
             
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/posts?sort=trending">Trending</Link>
                <Link to="/posts?sort=popular">Most Popular</Link>
                <Link to="/posts?sort=saved">Saved posts</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;
