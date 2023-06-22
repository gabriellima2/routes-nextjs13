import { ReactNode } from 'react';

type LayoutProps = {
  analytics: ReactNode;
  feed: ReactNode;
}

export default function Layout({
  analytics, feed
}: LayoutProps) {
  return (
    <main className='h-96 flex flex-col sm:flex-row gap-4'>
      <div className='h-full flex-1 bg-white/10 border-[1px] border-white/20 rounded-md p-4 overflow-auto'>{feed}</div>
      <div className='h-full flex-1 bg-white/10 border-[1px] border-white/20 rounded-md p-4 overflow-auto'>{analytics}</div>
    </main>
  )
}
