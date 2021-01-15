import { normalize, schema } from "normalizr";

function normalizeData(data: [object]): object {
  // Defines plans schema
  const planSchema = new schema.Entity("plans");

  // Defines storytellers schema
  const storytellers = new schema.Entity("storytellers", { plan: planSchema });

  const normalizedData = normalize(data, storytellers);

  return normalizedData;
}

export default normalizeData;
