type ProfilesProps = { params: { ids: string[] } };

export default function Profiles(props: ProfilesProps) {
  const idAmount = props.params.ids.length - 1
  return <h1>Profiles - {props.params.ids.map((id, i) => `${id} ${i !== idAmount ? "," : ""}`)}</h1>;
}
