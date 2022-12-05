import { useAuth } from "../../src/components/commons/hooks/useAuth";
import OpenApiList from "../../src/components/units/openapi/list/OpenApiList.container";

export default function OpenAPI() {
  useAuth();
  return <OpenApiList />;
}
