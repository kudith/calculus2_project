"use client"
import Link from 'next/link';
import { ArrowRightIcon, ArrowDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <ChakraProvider>
      <Box className="container-md min-h-screen mx-auto md:p-6 p-8">
        {/* Bagian Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgGradient="linear(to-r, #8BBAF8, #70a5ff)" 
            py={20}
            mb={8}
            rounded="xl"
            boxShadow="xl"
            textAlign="center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image src="/assets/quiz/drawkit-grape-pack-illustration-2.svg" alt="Gambar Hero Quiz" width={300} height={300} style={{ marginBottom: '0.5rem' }} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Heading as="h1" size="2xl" color="white" mb={4}>
                Welcome To Our Calculus 2 Quiz
              </Heading>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Text color="white" p={4} fontSize={{ base: '14px', md: '18px', lg: '24px' }}>
                Uji pengetahuan Kamu dan tantang diri Kamu sendiri dengan kuis kami!
              </Text>
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
          </Flex>
        </motion.div>
        {/* Bagian Kuis */}
        <Flex direction="row" flexWrap="wrap" gap={6} justifyContent="center" pt={'10'}>
          {[
            { href: "/quiz/quiz-determinan", title: "Quiz Determinan", description: "Uji pengetahuan Kamu tentang determinan!" },
            { href: "/quiz/quiz-deret", title: "Quiz Barisan & Deret", description: "Tantang diri Kamu dengan barisan dan deret!" },
            { href: "/quiz/quiz-bilKompleks", title: "Quiz Bilangan Kompleks", description: "Tantang diri Kamu dengan bilangan kompleks!" },
            { href: "/quiz/quiz-diferensial", title: "Quiz Diferensial", description: "Tantang diri Kamu dengan diferensial!" },
            { href: "/quiz/quiz-integralLipat", title: "Quiz Integral Lipat 2", description: "Tantang diri Kamu dengan integral lipat 2!" },
            { href: "/quiz/quiz-vektor", title: "Quiz vektor", description: "Tantang diri Kamu dengan vektor!" },
          ].map((quiz, index) => (
            <motion.div 
              key={index}
              className="shadow-lg rounded-lg p-4 transform transition duration-300 flex items-center justify-between w-64"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              _hover={{ bg: "blue.50" }}
            >
              <Link href={quiz.href} passHref>
                <div className="flex-grow cursor-pointer">
                  <h2 className="text-lg font-semibold text-blue-600">{quiz.title}</h2>
                  <p className="text-sm">{quiz.description}</p>
                </div>
              </Link>
              <Link href={quiz.href} passHref>
                <ArrowRightIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
              </Link>
            </motion.div>
          ))}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
