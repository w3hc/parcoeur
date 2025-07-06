import { NextSeo } from 'next-seo'
import PoemDisplay, { PoemDisplayRef } from '../../components/layout/PoemDisplay'
import { SITE_URL } from '../../utils/config'
import { useRef, useEffect } from 'react'
import { usePoemContext } from '../../components/layout/PoemContext'

export default function JingYeSi() {
  const poemTitle = '静夜思 (Quiet Night Thoughts)'
  const poemAuthor = '李白 (Li Bai)'
  const poemDate = '约725年'
  const isChinese = true
  const poemRef = useRef<PoemDisplayRef>(null)
  const { setToggleFunction, setAllStrophesVisible } = usePoemContext()

  const poemStrophes = [
    ['床前明月光', 'chuáng qián míng yuè guāng'],
    ['疑是地上霜', 'yí shì dì shàng shuāng'],
    ['举头望明月', 'jǔ tóu wàng míng yuè'],
    ['低头思故乡', 'dī tóu sī gù xiāng'],
  ]

  const handleToggleAllStrophes = () => {
    if (poemRef.current) {
      poemRef.current.toggleAllStrophes()
      // Update the context state to reflect the current visibility
      setAllStrophesVisible(poemRef.current.getAllStrophesVisible())
    }
  }

  // Set up the toggle function and initial state when component mounts
  useEffect(() => {
    setToggleFunction(handleToggleAllStrophes)
    if (poemRef.current) {
      setAllStrophesVisible(poemRef.current.getAllStrophesVisible())
    }

    // Clean up when component unmounts
    return () => {
      setToggleFunction(null)
    }
  }, [])

  const seoTitle = '静夜思 (Quiet Night Thoughts) - Li Bai'
  const seoDescription = '床前明月光，疑是地上霜 - Classical Chinese poem by Li Bai with pinyin'

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${SITE_URL}/libai/jing-ye-si`}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `${SITE_URL}/libai/jing-ye-si`,
          type: 'article',
          article: {
            authors: ['Li Bai'],
            publishedTime: '0725-01-01',
            tags: ['poetry', 'Chinese classical poetry', 'Li Bai', 'Tang Dynasty'],
          },
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Quiet Night Thoughts - Poem by Li Bai',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
      />
      <main>
        <PoemDisplay ref={poemRef} title={poemTitle} author={poemAuthor} date={poemDate} strophes={poemStrophes} isChinese={isChinese} />
      </main>
    </>
  )
}
