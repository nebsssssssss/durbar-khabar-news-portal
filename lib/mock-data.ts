export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  author: string
  authorSlug: string
  date: string // Nepali BS date string
  image: string
  imageAlt: string
}

export const POSTS: Post[] = [
  {
    id: "1",
    slug: "sarkar-naya-budget-2083",
    title: "सरकारले आगामी आर्थिक वर्षको बजेट प्रस्तुत गर्दै, स्वास्थ्य र शिक्षामा विशेष प्राथमिकता",
    excerpt: "अर्थमन्त्रीले संसद्मा बजेट प्रस्तुत गर्दै स्वास्थ्य क्षेत्रमा ३५ प्रतिशत र शिक्षामा २८ प्रतिशत वृद्धि गरिएको जानकारी दिए।",
    category: "राजनीति",
    categorySlug: "rajniti",
    author: "रामेश्वर पौडेल",
    authorSlug: "rameshwar-poudel",
    date: "२०८३ आषाढ २२",
    image: "/images/post-hero-1.png",
    imageAlt: "संसद् भवन काठमाडौँ",
  },
  {
    id: "2",
    slug: "cabinet-meeting-decisions",
    title: "मन्त्रिपरिषद् बैठकमा दर्जनौँ महत्त्वपूर्ण निर्णय, नयाँ पूर्वाधार परियोजनाहरूलाई अनुमोदन",
    excerpt: "बुधबार बसेको मन्त्रिपरिषद् बैठकमा राष्ट्रिय ढोसेट राजमार्ग निर्माणलगायत आठ ठूला परियोजनाहरू पारित भए।",
    category: "राजनीति",
    categorySlug: "rajniti",
    author: "सुनिता श्रेष्ठ",
    authorSlug: "sunita-shrestha",
    date: "२०८३ आषाढ २१",
    image: "/images/post-2.png",
    imageAlt: "मन्त्रिपरिषद् बैठक",
  },
  {
    id: "3",
    slug: "kathmandu-flood-monsoon",
    title: "काठमाडौँमा मनसुनी वर्षाले ठूलो क्षति, सडकहरूमा जलजमाव",
    excerpt: "निरन्तर वर्षाका कारण काठमाडौँ उपत्यकाका प्रमुख सडकहरूमा बाढी आएको छ, जसले हजारौँ नागरिकलाई असर गरेको छ।",
    category: "समाज",
    categorySlug: "samaj",
    author: "बिपिन कार्की",
    authorSlug: "bipin-karki",
    date: "२०८३ आषाढ २०",
    image: "/images/post-3.png",
    imageAlt: "काठमाडौँ बाढी",
  },
  {
    id: "4",
    slug: "nepal-india-trade-agreement",
    title: "नेपाल र भारतबीच नयाँ व्यापार तथा पारवहन सम्झौतामा हस्ताक्षर",
    excerpt: "काठमाडौँमा भएको उच्चस्तरीय बैठकमा दुई देशका प्रतिनिधिहरूले नयाँ व्यापार सन्धिमा हस्ताक्षर गरे, जसले आपसी व्यापार सहज बनाउने अपेक्षा छ।",
    category: "कुटनीति",
    categorySlug: "kutaniti",
    author: "मनिषा थापा",
    authorSlug: "manisha-thapa",
    date: "२०८३ आषाढ १९",
    image: "/images/post-4.png",
    imageAlt: "नेपाल-भारत कूटनीतिक बैठक",
  },
  {
    id: "5",
    slug: "rural-agriculture-subsidy",
    title: "कृषि अनुदानको नयाँ कार्यक्रम: ५० हजार किसानले लाभ पाउने",
    excerpt: "सरकारले घोषणा गरेको नयाँ कृषि अनुदान कार्यक्रमबाट देशभरका ५० हजारभन्दा बढी किसान परिवार लाभान्वित हुने अनुमान छ।",
    category: "समाज",
    categorySlug: "samaj",
    author: "दिलमाया गुरुङ",
    authorSlug: "dilmaya-gurung",
    date: "२०८३ आषाढ १८",
    image: "/images/post-5.png",
    imageAlt: "नेपाली किसान",
  },
  {
    id: "6",
    slug: "china-nepal-border-infrastructure",
    title: "नेपाल-चीन सीमा पूर्वाधारमा ठूलो लगानी, रसुवागढी नाका विस्तार हुँदै",
    excerpt: "चिनियाँ सरकारले रसुवागढी–केरुङ सीमा क्षेत्रमा ठूलो पूर्वाधार लगानी गर्ने घोषणा गरेको छ।",
    category: "छिमेक",
    categorySlug: "chhimek",
    author: "रामेश्वर पौडेल",
    authorSlug: "rameshwar-poudel",
    date: "२०८३ आषाढ १७",
    image: "/images/post-6.png",
    imageAlt: "नेपाल-चीन सीमा",
  },
  {
    id: "7",
    slug: "kathmandu-development-plan",
    title: "काठमाडौँ विकास प्राधिकरणको नयाँ मास्टरप्लान सार्वजनिक",
    excerpt: "काठमाडौँ महानगरपालिकाले २०२५ देखि २०४० सम्मको सहरी विकास मास्टरप्लान सार्वजनिक गरेको छ।",
    category: "समाज",
    categorySlug: "samaj",
    author: "सुनिता श्रेष्ठ",
    authorSlug: "sunita-shrestha",
    date: "२०८३ आषाढ १६",
    image: "/images/post-7.png",
    imageAlt: "काठमाडौँ सहर",
  },
  {
    id: "8",
    slug: "supreme-court-ruling",
    title: "सर्वोच्च अदालतले भ्रष्टाचार मुद्दामा ऐतिहासिक फैसला सुनायो",
    excerpt: "सर्वोच्च अदालतका न्यायाधीशहरूको पूर्ण इजलासले भ्रष्टाचारसँग सम्बन्धित एक महत्त्वपूर्ण मुद्दामा आफ्नो फैसला सुनायो।",
    category: "राजनीति",
    categorySlug: "rajniti",
    author: "बिपिन कार्की",
    authorSlug: "bipin-karki",
    date: "२०८३ आषाढ १५",
    image: "/images/post-8.png",
    imageAlt: "सर्वोच्च अदालत",
  },
  // Opinion posts
  {
    id: "9",
    slug: "democracy-challenges-opinion",
    title: "नेपाली लोकतन्त्रका सामु नयाँ चुनौती र अवसर",
    excerpt: "३५ वर्षपछि पनि नेपाली लोकतन्त्रले राजनीतिक स्थिरता हासिल गर्न सकेको छैन। यो अवस्था किन सिर्जना भयो?",
    category: "विचार",
    categorySlug: "bichar",
    author: "प्रा. डा. हरिप्रसाद उपाध्याय",
    authorSlug: "hari-upadhyay",
    date: "२०८३ आषाढ १४",
    image: "/images/post-hero-1.png",
    imageAlt: "लोकतन्त्र विचार",
  },
  {
    id: "10",
    slug: "economic-policy-critique",
    title: "आर्थिक नीतिको पुनरावलोकन: कहाँ चुक्यो सरकार?",
    excerpt: "विगत पाँच वर्षमा सरकारले लिएका आर्थिक नीतिहरूको विश्लेषण गर्दा धेरै कमजोरीहरू देखिन्छन्।",
    category: "विचार",
    categorySlug: "bichar",
    author: "अर्थविद् नारायण बस्नेत",
    authorSlug: "narayan-basnet",
    date: "२०८३ आषाढ १३",
    image: "/images/post-2.png",
    imageAlt: "आर्थिक नीति विश्लेषण",
  },
  // Interviews
  {
    id: "11",
    slug: "pm-interview-infrastructure",
    title: "प्रधानमन्त्रीसँग विशेष अन्तर्वार्ता: 'अर्को दुई वर्षमा ठूलो परिवर्तन देख्नुहुनेछ'",
    excerpt: "प्रधानमन्त्रीले राष्ट्रिय पूर्वाधार विकास र विदेश नीतिबारे हाम्रोसँग खुलेर कुरा गरे।",
    category: "अन्तर्वार्ता",
    categorySlug: "antarwarta",
    author: "मनिषा थापा",
    authorSlug: "manisha-thapa",
    date: "२०८३ आषाढ १२",
    image: "/images/post-4.png",
    imageAlt: "प्रधानमन्त्री अन्तर्वार्ता",
  },
  {
    id: "12",
    slug: "nrb-governor-interview",
    title: "राष्ट्र बैंक गभर्नरसँग: 'मुद्रास्फीति नियन्त्रणमा छ, तर सतर्कता जरुरी'",
    excerpt: "नेपाल राष्ट्र बैंकका गभर्नरले आर्थिक स्थिरता, मुद्रास्फीति र बैंकिङ सुधारबारे खुलासा गरे।",
    category: "अन्तर्वार्ता",
    categorySlug: "antarwarta",
    author: "रामेश्वर पौडेल",
    authorSlug: "rameshwar-poudel",
    date: "२०८३ आषाढ ११",
    image: "/images/post-8.png",
    imageAlt: "राष्ट्र बैंक गभर्नर अन्तर्वार्ता",
  },
  {
    id: "13",
    slug: "activist-interview",
    title: "सामाजिक अभियन्तासँग अन्तर्वार्ता: 'युवा पुस्ताले नेपाल बनाउनु छ'",
    excerpt: "प्रसिद्ध सामाजिक अभियन्ता र युवा नेताले नेपालको भविष्य र युवा सशक्तीकरणबारे कुरा गरे।",
    category: "अन्तर्वार्ता",
    categorySlug: "antarwarta",
    author: "दिलमाया गुरुङ",
    authorSlug: "dilmaya-gurung",
    date: "२०८३ आषाढ १०",
    image: "/images/post-5.png",
    imageAlt: "सामाजिक अभियन्ता अन्तर्वार्ता",
  },
]

export function getPostsByCategory(categorySlug: string, limit?: number): Post[] {
  const filtered = POSTS.filter((p) => p.categorySlug === categorySlug)
  return limit ? filtered.slice(0, limit) : filtered
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function getLatestPosts(limit = 10): Post[] {
  return POSTS.slice(0, limit)
}

export function searchPosts(query: string): Post[] {
  const q = query.toLowerCase()
  return POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  )
}
