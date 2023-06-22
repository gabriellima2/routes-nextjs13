'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong in User group routes</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
