type PhotoProps = { params: { id: string } };

export default function Photo(props: PhotoProps) {
  return (
    <>
      <h2>Foto de: {props.params.id}</h2>
      <span className="block w-48 h-48 rounded-md bg-white/10" />
    </>
  )
}
