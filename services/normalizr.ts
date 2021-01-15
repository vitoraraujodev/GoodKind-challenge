import { normalize, schema } from "normalizr";

function normalizeData(data: [object]): object {
  // Defines plans schema
  const plan = new schema.Entity("plans");

  const company = new schema.Entity("companies", {
    plan: plan
  });

  const user = new schema.Entity("users", {
    company: company
  });

  // Defines storytellers schema
  const storytellers = new schema.Entity("storytellers", {
    user: user,
    company: company,
    plan: plan
  });

  const normalizedData = normalize(data, storytellers);

  return normalizedData;
}

export default normalizeData;
