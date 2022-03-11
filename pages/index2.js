import { Box, 
    Button,
    Flex, 
    Image, 
    Link, 
    Text, } from "@chakra-ui/react";
import Nav from "./components/navbar/NavBar";
import { FcCheckmark } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

function Card({children}){
  return(
    <Box boxShadow='dark-lg' 
    ml={[0, 0, '10vw']} 
    mr={[0, 0, '10vw']} 
    mt={['4vw', '2vw', '1vw']} 
    mb={['4vw', '2vw', '1vw']}
    w={[490, 400, 'auto']}
    p='6' 
    rounded='md' 
    bg='gray.200'>
    {children}
    </Box>
  );
}

export default function Home({dados}){

  const array = [{
    position: "1º",
    nome: "Webpeak", 
    logo: "/images/webpeak.webp",
    info1: "Over 200 ready-made templates",
    info2: "Over 200 ready-made templates",
    info3: "Over 200 ready-made templates",
    info4: "Over 200 ready-made templates",
    info5: "Over 200 ready-made templates",
    score: "9.8",
    rating: "Sensacional",
    review: "",
    website: ""
  },
  {
    position: "2º",
    nome: "Semrush", 
    logo: "/images/semrush.webp",
    info1: "Over 200 ready-made templates",
    info2: "Over 200 ready-made templates",
    info3: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "9.4",
    rating: "Excelente",
    review: "",
    website: ""
  },
  {
    position: "3º",
    nome: "Ahrefs", 
    logo: "/images/ahrefs2.webp",
    info1: "Over 200 ready-made templates",
    info2: "Over 200 ready-made templates",
    info3: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "9.1",
    rating: "Excelente",
    review: "",
    website: ""
  },
  {
  position: "4º",
  nome: "Serpstat", 
  logo: "/images/serpstat.webp",
  info1: "Over 200 ready-made templates",
  info2: "Over 200 ready-made templates",
  info3: "Over 200 ready-made templates",
  info4r: "Over 200 ready-made templates",
  info5r: "Over 200 ready-made templates",
  score: "9",
  rating: "Excelente",
  review: "",
  website: ""
  },
  {
    position: "5º",
    nome: "RankingCoach", 
    logo: "/images/rankingcoach2.webp",
    info1: "Over 200 ready-made templates",
    info2: "Over 200 ready-made templates",
    info3r: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "8.9",
    rating: "Bom",
    review: "",
    website: ""
  },
  {
    position: "6º",
    nome: "SE ranking", 
    logo: "/images/se ranking2.webp",
    info1: "Over 200 ready-made templates",
    info2: "Over 200 ready-made templates",
    info3r: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "8.4",
    rating: "Bom",
    review: "",
    website: ""
  },
  {
    position: "7º",
    nome: "Moz", 
    logo: "/images/moz.webp",
    info1: "Over 200 ready-made templates",
    info2r: "Over 200 ready-made templates",
    info3r: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "8.2",
    rating: "Razoável",
    review: "",
    website: ""
  },
  {
    position: "8º",
    nome: "Ubersugest", 
    logo: "/images/ubersugest.webp",
    info1: "Over 200 ready-made templates",
    info2r: "Over 200 ready-made templates",
    info3r: "Over 200 ready-made templates",
    info4r: "Over 200 ready-made templates",
    info5r: "Over 200 ready-made templates",
    score: "8",
    rating: "Razoável",
    review: "",
    website: ""
  },
  {
    position: "9º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  },
  {
    position: "10º",
    nome: "", 
    logo: "/images/",
    info1: "",
    info2: "",
    info3: "",
    score: "",
    rating: "",
    review: "",
    website: ""
  }
  ]

  return(
    <>
    <Nav/>
    <Box>
      <Flex height='600px' 
       w={[500, 500, 'auto']}
      backgroundColor={'#05071c'} 
      justifyContent='space-around'>
        <Flex w={[500, 500, 600]} 
        ml='20vw' 
        mt='100px' 
        flexDirection={'column'} 
        color={'white'} >
          <Text fontSize={{ base: '40px', md: '60px', lg: '80px' }} 
          fontWeight='bolder' 
          textTransform='uppercase' 
          lineHeight='100%'>Os 10 melhores softwares de SEO</Text>
          <Text fontSize='20px' 
          mt='2vw'>Os 10 melhores softwares de SEO</Text>
        </Flex>
        {/* <Image w='30vw' mr='10vw' ml='10vw' src='https://top10seosoftware.com/wp-content/themes/top10seo/assets/img/winner-bg.svg'/> */}
      </Flex>
    </Box>

    {array.map(dados =>(
    <Card>
        <Flex justifyContent={'space-between'}>
        <Text fontSize='20px' fontWeight={'bold'}>{dados.position}</Text>
        <Flex flexDirection={'column'} top='0'>
          <Text mb='3px' fontSize='20px' fontWeight={'bold'}>{dados.nome}</Text>
          <Box bg='white' h={['20vw','20vw', '6vw']}>
          <Image h='auto' mw='150px' mt='1vw' w='150px' p='15px' src={dados.logo}/>
        </Box>
        </Flex>
      
        <Flex flexDirection={'column'}>
          <Link fontWeight='600'>Trusted by 110K+ users worldwide<br/>
          <Link fontWeight='600'>**14-day free trial**</Link></Link>
          <Text mt='0.5vw' display={'flex'}><FcCheckmark/>{dados.info1}</Text>
          <Text display={'flex'}><FcCheckmark/>{dados.info2}</Text>
          <Text display={'flex'}><FcCheckmark/>{dados.info3}</Text>
          <Text display={'flex'}><FcCheckmark/>{dados.info4}</Text>
          <Text display={'flex'}><FcCheckmark/>{dados.info5}</Text>
        </Flex>
        <Flex flexDirection={'column'} border='1px' pr='0.5vw' pl='0.5vw' textAlign={'center'}>
          <Text fontWeight={'bold'} fontSize={['30px','30px', '40px']}>{dados.score}</Text>
          <Text>{dados.rating}</Text>
          <Flex pt='5px'pb='5px' ml='10px'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </Flex>
          <Link target="_blank" href={dados.review} color='#05071c'><Text>Read Review »</Text></Link>
        </Flex>
        <Flex flexDirection={'column'} p={['5px','5px', '0.5vw']} m={['5px','5px', 0]}>
          <Link href={dados.website} target='_blank'><Button  mb='20px' color='white' bg="#05071c">Visit Site</Button></Link>
          {/* <Link textAlign='center' color='#05071c'>Start Now</Link> */}
        </Flex>
      </Flex>
    </Card>
    ))}
    </>
  )
}