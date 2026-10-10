function App() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center bg-[#151515] px-6 text-center text-neutral-200"
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingLeft: 'env(safe-area-inset-left)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        Keyano
      </h1>
      <p className="mt-4 text-base text-neutral-400">
        Chơi piano bằng bàn phím máy tính — đang xây dựng (giai đoạn 0)
      </p>
    </div>
  )
}

export default App
