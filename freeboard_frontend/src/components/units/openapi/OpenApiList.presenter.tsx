import { IOpenApiListUIProps } from "./list/OpenApiList.types";

export default function OpenApiListUI(props: IOpenApiListUIProps) {
  return (
    <div>
      <div>
        {props.dogImg.map((el) => (
          <img key={el} src={el} />
        ))}
      </div>
    </div>
  );
}
