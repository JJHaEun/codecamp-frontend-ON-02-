import { withAuth } from "../../src/components/commons/hocs/withAuth";
import OpenApiList from "../../src/components/units/openapi/list/OpenApiList.container";

function OpenAPI() {
  return <OpenApiList />;
}
export default withAuth(OpenAPI);
