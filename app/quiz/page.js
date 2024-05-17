"use client"
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <ChakraProvider>
      <Box className="container-md min-h-screen mx-auto p-6">
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
              <Text fontSize="lg" color="white">
                Uji pengetahuan Kamu dan tantang diri Kamu sendiri dengan kuis kami!
              </Text>
            </motion.div>
          </Flex>
        </motion.div>
        {/* Bagian Kuis */}
        <Flex direction="row" flexWrap="wrap" gap={6} justifyContent="center">
          <motion.div 
            className="shadow-xl rounded-lg p-4 transform transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            _hover={{ bg: "blue.50" }}
          >
            <Link href="/quiz/quizdet" passHref>
              <div className="flex-grow cursor-pointer">
                <h2 className="text-lg font-semibold text-blue-600">Quiz Determinan</h2>
                <p className=" text-sm">Uji pengetahuan Kamu tentang determinan!</p>
              </div>
            </Link>
            <Link href="/quiz/quizdet" passHref>
              <ArrowRightIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="shadow-lg rounded-lg p-4 transform transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            _hover={{ bg: "blue.50" }}
          >
            <Link href="/quiz/quizder" passHref>
              <div className="flex-grow cursor-pointer">
                <h2 className="text-lg font-semibold text-blue-600">Quiz Barisan & Deret</h2>
                <p className=" text-sm">Tantang diri Kamu dengan barisan dan deret!</p>
              </div>
            </Link>
            <Link href="/quiz/quizder" passHref>
              <ArrowRightIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
            </Link>
          </motion.div>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
