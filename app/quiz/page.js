"use client";
import Link from 'next/link';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container-md mx-auto min-h-screen p-6">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 py-20 mb-8 rounded-xl shadow-xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image src="/assets/quiz/drawkit-grape-pack-illustration-2.svg" alt="Hero Image" width={300} height={300} className="mb-2" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h1 className="text-4xl text-white mb-4">Welcome To Our Calculus 2 Quiz</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-white px-4 text-lg md:text-xl lg:text-2xl">
              Uji pengetahuan Kamu dan tantang diri Kamu sendiri dengan kuis kami!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.div
              className="flex justify-center mt-6"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ArrowDownIcon className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Quiz Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center pt-10">
        {[
          { href: "/quiz/quiz-determinan", title: "Quiz Determinan", description: "Uji pengetahuan Kamu tentang determinan!" },
          { href: "/quiz/quiz-deret", title: "Quiz Barisan & Deret", description: "Tantang diri Kamu dengan barisan dan deret!" },
          { href: "/quiz/quiz-bilKompleks", title: "Quiz Bilangan Kompleks", description: "Tantang diri Kamu dengan bilangan kompleks!" },
          { href: "/quiz/quiz-diferensial", title: "Quiz Diferensial", description: "Tantang diri Kamu dengan diferensial!" },
          { href: "/quiz/quiz-integralLipat", title: "Quiz Integral Lipat 2", description: "Tantang diri Kamu dengan integral lipat 2!" },
          { href: "/quiz/quiz-vektor", title: "Quiz Vektor", description: "Tantang diri Kamu dengan vektor!" },
        ].map((quiz, index) => (
          <motion.div 
            key={index}
            className="shadow-xl rounded-xl p-4 transition duration-300 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={quiz.href} passHref>
              <div className="flex-grow cursor-pointer">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">{quiz.title}</h2>
                <p className="text-sm mb-4">{quiz.description}</p>
              </div>
            </Link>
            <Link href={quiz.href} passHref>
              <ArrowRightIcon className="h-6 w-6 text-blue-600 cursor-pointer self-end" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
