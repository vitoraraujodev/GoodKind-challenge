import { normalize, schema } from "normalizr";

function normalizeData(data: [object]): object {
  // Defines plans schema
  const plan = new schema.Entity("plans");

  const user = new schema.Entity("users", {
    plan: plan
  });

  // Defines storytellers schema
  const storytellers = new schema.Entity("storytellers", {
    user: user,
    plan: plan
  });

  const normalizedData = normalize(data, storytellers);

  return normalizedData;
}

export default normalizeData;
