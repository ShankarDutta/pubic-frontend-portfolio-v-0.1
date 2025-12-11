import { atomWithStorage } from "jotai/utils";

export const projectCategoryAtom = atomWithStorage(
	"project-category",
	"js-project",
);
