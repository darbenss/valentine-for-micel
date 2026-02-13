import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const ValentineSurprise = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { width, height } = useWindowSize();

    const toggleOpen = () => setIsOpen(true);

    // External Assets
    const assets = {
        box: "https://static.vecteezy.com/system/resources/previews/021/305/045/non_2x/3d-blue-gift-box-with-shopping-bag-free-png.png",
        cinnamorollUmbrella: "https://mystickermania.com/cdn/stickers/noob-pack/sanrio-cinnamoroll-umbrella-512x512.png",
        cinnamorollFantasy: "https://www.pngall.com/wp-content/uploads/18/Whimsical-Sanrio-Cinnamoroll-Fantasy-Scene-PNG.png",
        cinnamorollTea: "https://www.nicepng.com/png/full/396-3969085_themes-cinnamon-cinnamon-roll-transparent-sanrio.png"
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-sky-50 to-blue-100 flex flex-col items-center justify-center font-sans">

            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        className="relative cursor-pointer z-50 flex flex-col items-center justify-center w-full"
                        onClick={toggleOpen}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } }}
                    >
                        {/* 3D Gift Box Image - 1:4 Ratio (w-1/4) */}
                        <motion.img
                            src={assets.box}
                            alt="Blue Gift Box"
                            className="w-1/3 md:w-1/4 drop-shadow-2xl"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            whileTap={{ scale: 0.9 }}
                        />

                        <motion.p
                            className="mt-6 text-lg md:text-xl text-slate-500 font-['Fredoka'] font-medium tracking-wide"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            A surprise for Micel... (Click me!)
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {isOpen && (
                <>
                    <Confetti width={width} height={height} numberOfPieces={600} recycle={false} gravity={0.15} colors={['#93C5FD', '#BFDBFE', '#E0F2FE', '#FFFFFF', '#60A5FA']} />

                    <div className="relative w-full h-full max-w-6xl mx-auto flex flex-col items-center justify-center p-4">

                        {/* BACKGROUND TINY & ABSTRACT FLOATING CINNAMOROLLS */}
                        {/* z-0 to be behind everything text/card related which will be z-20+ */}

                        {/* 1. Umbrella - Floating across */}
                        <motion.img
                            src={assets.cinnamorollUmbrella}
                            className="absolute w-10 md:w-14 z-0 pointer-events-none"
                            initial={{ x: -50, y: 100, opacity: 0 }}
                            animate={{
                                x: [0, 100, -50, 200, 0],
                                y: [0, -100, -50, 100, 0],
                                rotate: [0, 10, -10, 5, 0],
                                opacity: [0, 0.45, 0.2, 0.45, 0] // Max opacity 0.45
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                                times: [0, 0.25, 0.5, 0.75, 1]
                            }}
                            style={{ left: '10%', top: '40%' }}
                        />

                        {/* 2. Fantasy - Wandering diagonally */}
                        <motion.img
                            src={assets.cinnamorollFantasy}
                            className="absolute w-12 md:w-16 z-0 pointer-events-none"
                            initial={{ x: 50, y: -50, opacity: 0 }}
                            animate={{
                                x: [0, -80, 40, -100, 0],
                                y: [0, 150, 50, -50, 0],
                                rotate: [0, -5, 5, -5, 0],
                                opacity: [0, 0.45, 0.3, 0.45, 0] // Max opacity 0.45
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.6, 0.9, 1]
                            }}
                            style={{ right: '15%', top: '20%' }}
                        />

                        {/* 3. Tea - Looping near bottom */}
                        <motion.img
                            src={assets.cinnamorollTea}
                            className="absolute w-8 md:w-12 z-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                                x: [0, 150, 0, -150, 0],
                                y: [0, -40, -80, -20, 0],
                                rotate: [0, 15, 0, -15, 0],
                                opacity: [0, 0.4, 0.15, 0.4, 0] // Max opacity 0.45
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ left: '30%', bottom: '20%' }}
                        />

                        <motion.div
                            className="z-20 relative flex flex-col items-center justify-center w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Main Content */}
                            <motion.div
                                className="relative z-30 flex flex-col items-center"
                                initial={{ y: 200, scale: 0.8, opacity: 0 }}
                                animate={{ y: 0, scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                            >
                                {/* Polaroid Card */}
                                <motion.div
                                    className="bg-white p-3 md:p-4 shadow-2xl rotate-[-2deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:shadow-blue-200/50 max-w-[260px] md:max-w-sm"
                                    style={{ borderRadius: '4px' }}
                                >
                                    <div className="bg-slate-100 w-full h-56 md:h-80 mb-3 md:mb-4 overflow-hidden relative border border-slate-100">
                                        <img src="/us.jpg" alt="Micel & Darrell" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center font-['Fredoka'] text-xl md:text-2xl text-slate-600">
                                        Micel & Darrell ❤️
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Clean Message */}
                            <motion.div
                                className="mt-8 md:mt-10 text-center space-y-3 md:space-y-4 max-w-lg px-4 relative z-30"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <h1 className="text-3xl md:text-6xl font-['Great_Vibes'] text-blue-500 font-bold drop-shadow-sm">
                                    Happy Valentine's Day Cel!
                                </h1>
                                <div className="text-base md:text-2xl text-slate-600 font-['Fredoka'] font-light leading-relaxed">
                                    <p className="mb-1 md:mb-2">I don't need to ask you to be my Valentine...</p>
                                    <p className="mb-1 md:mb-2">Because you are my Valentine <span className="text-blue-400 font-medium">every single day. CHUAKSSSS</span></p>
                                    <p>Thank you for always being by my side. I am so grateful to have you cell lop lop.</p>
                                    <motion.p
                                        className="text-2xl md:text-3xl mt-4 md:mt-6 font-medium text-blue-500"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        I love you! 💙
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ValentineSurprise;
