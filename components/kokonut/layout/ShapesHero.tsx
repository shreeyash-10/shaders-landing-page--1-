export function ShapesHero({ title }: any) {
  return (
    <section className="relative py-24 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-blue-300 blur-3xl" />
      <h1 className="relative text-6xl font-bold">{title}</h1>
    </section>
  )
}
