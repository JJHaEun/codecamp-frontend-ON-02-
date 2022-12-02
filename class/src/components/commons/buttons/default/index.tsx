interface IButtonsProps {
  isActive: boolean;
  title: string;
}

export default function ButtonsDefault(props: IButtonsProps) {
  return (
    <button style={{ background: props.isActive ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
