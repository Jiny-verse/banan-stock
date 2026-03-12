import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🍌 Nano Banana Prompt Studio',
  description: 'AI 이미지 프롬프트 생성기 for Adobe Stock & Miricanvas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-bg text-text font-display min-h-screen container mx-auto p-4">{children}</body>
    </html>
  )
}
